import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { collections } from "../data/collections";

export type CartEntry = { id: string; quantity: number };
type CartContextValue = { items: CartEntry[]; count: number; add: (id: string) => void; remove: (id: string) => void; setQuantity: (id: string, quantity: number) => void; clear: () => void };
const STORAGE_KEY = "bia-fashion-interest-v1";
const validIds = new Set(collections.map((item) => item.id));
const CartContext = createContext<CartContextValue | null>(null);

function restoreCart(): CartEntry[] {
  try {
    const value: unknown = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    if (!Array.isArray(value)) return [];
    return value.filter((entry): entry is CartEntry => !!entry && typeof entry.id === "string" && validIds.has(entry.id) && Number.isInteger(entry.quantity) && entry.quantity > 0)
      .map((entry) => ({ id: entry.id, quantity: Math.min(entry.quantity, 20) }));
  } catch (error) {
    console.warn("Não foi possível restaurar a seleção salva.", error);
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartEntry[]>(restoreCart);
  useEffect(() => { localStorage.setItem(STORAGE_KEY, JSON.stringify(items)); }, [items]);
  const value = useMemo<CartContextValue>(() => ({
    items,
    count: items.reduce((sum, item) => sum + item.quantity, 0),
    add: (id) => setItems((current) => current.some((item) => item.id === id)
      ? current.map((item) => item.id === id ? { ...item, quantity: Math.min(item.quantity + 1, 20) } : item)
      : validIds.has(id) ? [...current, { id, quantity: 1 }] : current),
    remove: (id) => setItems((current) => current.filter((item) => item.id !== id)),
    setQuantity: (id, quantity) => setItems((current) => quantity < 1 ? current.filter((item) => item.id !== id) : current.map((item) => item.id === id ? { ...item, quantity: Math.min(Math.floor(quantity), 20) } : item)),
    clear: () => setItems([]),
  }), [items]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
export function useCart() { const value = useContext(CartContext); if (!value) throw new Error("useCart precisa estar dentro de CartProvider"); return value; }
