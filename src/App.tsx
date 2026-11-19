import { useState, type ReactNode } from "react";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Heart, Instagram, Menu, Minus, Plus, ShoppingBag, X } from "lucide-react";
import { CartProvider, useCart } from "./context/CartContext";
import { collections } from "./data/collections";
import { instagramLooks } from "./data/instagramLooks";
import { categories, categoryCopy, imageUrl, siteConfig } from "./config/siteConfig";
import "./Fashion.css";

const waNumber = siteConfig.whatsappNumber.replace(/\D/g, "");
const whatsappReady = waNumber.length >= 10 && waNumber.length <= 15;
function whatsappLink(message: string) {
  return whatsappReady ? `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}` : undefined;
}

function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const links = [{ to: "/", label: "Início" }, ...categories.map((item) => ({ to: `/${item.id}`, label: item.label })), { to: "/sobre", label: "A marca" }];
  return <header className="site-header">
    <div className="nav-inner">
      <button className="mobile-toggle icon-button" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <Link to="/" className="brand" onClick={() => setOpen(false)}><span className="brand-mark">BF</span><span><strong>BIA FASHION</strong><small>MODA PARA SER VOCÊ</small></span></Link>
      <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Navegação principal">{links.map((item) => <NavLink key={item.to} to={item.to} end={item.to === "/"} onClick={() => setOpen(false)}>{item.label}</NavLink>)}</nav>
      <Link className="cart-link" to="/carrinho" aria-label={`Minha seleção, ${count} itens`}><ShoppingBag size={19} /><span className="cart-label">Minha seleção</span><span className="cart-count">{count}</span></Link>
    </div>
  </header>;
}

function Footer() {
  return <footer className="footer">
    <div className="footer-top section-wrap">
      <Link to="/" className="brand footer-brand"><span className="brand-mark">BF</span><span><strong>BIA FASHION</strong><small>ESTILO • ATITUDE • VOCÊ</small></span></Link>
      <p>Seu espaço para descobrir looks e encontrar sua próxima inspiração.</p>
      <a className="instagram-link" href={siteConfig.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={18} /> @biafashion04 <ArrowRight size={15} /></a>
    </div>
    <div className="footer-bottom section-wrap"><span>© {new Date().getFullYear()} Bia Fashion</span><span>Confirme valores e disponibilidade diretamente com a loja.</span><Link to="/sobre">Sobre a loja</Link></div>
  </footer>;
}

function Layout({ children }: { children: ReactNode }) {
  return <><Header /><main>{children}</main><Footer /></>;
}

function ItemCard({ item }: { item: typeof collections[number] }) {
  const { add, items } = useCart();
  const selected = items.some((entry) => entry.id === item.id);
  return <article className="product-card">
    <Link className="product-image" to={`/${item.category}`}>
      <img src={imageUrl(item.image, 720)} alt={item.isDemo ? `${item.name} — imagem demonstrativa` : item.name} loading="lazy" />
      <span className="demo-tag">{item.isDemo ? "IMAGEM DEMONSTRATIVA" : "FOTO DA VITRINE"}</span>
      {item.isNew && <span className="new-tag">Novidade</span>}
    </Link>
    <div className="product-info"><div><span className="product-sub">{item.subcategory} · {item.code}</span><h3>{item.name}</h3><span className="product-price">Consulte o valor</span></div>
      <button className={`add-button ${selected ? "selected" : ""}`} onClick={() => add(item.id)} aria-label={`${selected ? "Adicionar outra unidade de" : "Adicionar"} ${item.name}`}>{selected ? <Check size={18} /> : <Plus size={18} />}</button>
    </div>
    <p className="product-note">{item.description}</p>
  </article>;
}

function SectionTitle({ eyebrow, title, text, link }: { eyebrow: string; title: string; text?: string; link?: { label: string; to: string; external?: boolean } }) {
  return <div className="section-title"><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>{link && (link.external
    ? <a className="text-link" href={link.to} target="_blank" rel="noopener noreferrer">{link.label}<ArrowRight size={16} /></a>
    : <Link className="text-link" to={link.to}>{link.label}<ArrowRight size={16} /></Link>)}</div>;
}

function CategoryTiles() {
  return <div className="category-grid">{categories.map((cat, i) => <Link to={`/${cat.id}`} className={`category-tile tile-${i}`} key={cat.id}>
    <img src={imageUrl(cat.image, 750)} alt={`Imagem demonstrativa: ${cat.label}`} loading="lazy" /><span className="tile-shade" />
    <span className="tile-text"><small>DESCUBRA A SELEÇÃO</small><strong>{cat.label}</strong><span>Explorar <ArrowRight size={16} /></span></span>
  </Link>)}</div>;
}

function InstagramShowcase() {
  return <section className="instagram-section">
    <div className="section-wrap">
      <SectionTitle eyebrow="DO FEED PARA A VITRINE" title="Looks do Instagram" text="Inspirações para salvar, compartilhar e levar para o seu dia a dia." link={{ label: "Ver perfil completo", to: siteConfig.instagram, external: true }} />
      <div className="instagram-grid">{instagramLooks.map((look) => <article className="instagram-card" key={look.id}>
        <a className="instagram-image" href={look.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver no Instagram: ${look.title}`}>
          <img src={look.image} alt={look.isDemo ? `${look.title} — foto demonstrativa` : look.title} loading="lazy" />
          <span className="instagram-hover"><Instagram size={24} /><span>Ver no Instagram</span></span>
          {look.isDemo && <span className="demo-tag">FOTO DEMONSTRATIVA</span>}
        </a>
        <div className="instagram-caption"><div><h3>{look.title}</h3><p>{look.caption}</p></div><a href={look.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label={`Abrir Instagram para ${look.title}`}><ArrowRight size={19} /></a></div>
      </article>)}</div>
      <p className="instagram-note">Fotos adicionadas à vitrine a partir dos arquivos compartilhados. Consulte a loja para confirmar valores e disponibilidade.</p>
    </div>
  </section>;
}

function Home() {
  const featured = collections.filter((item) => item.featured).slice(0, 4);
  return <>
    <section className="hero">
      <img className="hero-image" src={imageUrl("photo-1529139574466-a303027c1d8b", 1800)} alt="Imagem editorial demonstrativa de moda feminina" />
      <div className="hero-overlay" />
      <div className="hero-content"><span className="eyebrow light">BIA FASHION · MODA FEMININA</span><h1>Vista sua<br /><em>atitude.</em></h1>
        <p>Looks casuais, tendências e inspirações para você criar seu próprio estilo.</p>
        <Link to="/feminino" className="button button-light">Descubra a vitrine <ArrowRight size={17} /></Link>
        <span className="hero-disclaimer">Imagens ilustrativas · consulte modelos e disponibilidade</span>
      </div>
      <div className="hero-side-note">SEU ESTILO, SUAS REGRAS <span>— BIA FASHION</span></div>
    </section>
    <section className="intro section-wrap"><div className="intro-index">01 <span>—</span> SEU JEITO</div>
      <div className="intro-copy"><h2>Moda para<br /><em>ser você.</em></h2><p>Encontre referências, combine peças e descubra looks que acompanham a sua rotina. Gostou de algum modelo? Guarde na sua seleção e fale com a loja para saber mais.</p></div>
      <div className="intro-seal"><span>BF</span><small>STYLE<br />YOUR WAY</small></div>
    </section>
    <section className="section-wrap categories-section"><SectionTitle eyebrow="EXPLORE POR ESTILO" title="Sua próxima inspiração" text="Peças e combinações para diferentes momentos." /><CategoryTiles /></section>
    <section className="featured-section"><div className="section-wrap"><SectionTitle eyebrow="ESCOLHAS DA BIA" title="Em destaque" text="Looks para inspirar sua próxima produção." link={{ label: "Ver todas as categorias", to: "/feminino" }} /><div className="product-grid">{featured.map((item) => <ItemCard item={item} key={item.id} />)}</div></div></section>
    <InstagramShowcase />
    <section className="how-section"><div className="section-wrap"><SectionTitle eyebrow="SIMPLES ASSIM" title="Da inspiração à conversa." text="Escolha seus favoritos e consulte diretamente com a loja." />
      <div className="steps">{["Explore os looks", "Adicione seus favoritos à seleção", "Envie sua lista para a loja", "Confirme valores e disponibilidade"].map((step, i) => <div className="step" key={step}><span>0{i + 1}</span><p>{step}</p>{i < 3 && <ArrowRight className="step-arrow" size={18} />}</div>)}</div>
      <p className="notice"><Heart size={16} /> A seleção serve para consulta e não representa uma compra ou reserva.</p>
    </div></section>
    <ContactBand />
  </>;
}

function ContactBand() {
  const link = whatsappLink(siteConfig.whatsappMessage);
  return <section className="contact-band section-wrap"><div><span className="eyebrow">VAMOS CONVERSAR?</span><h2>Seu próximo look<br /><em>começa aqui.</em></h2></div>
    <div className="contact-actions"><a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="button button-dark"><Instagram size={17} /> Siga no Instagram</a>
      {link ? <a href={link} target="_blank" rel="noopener noreferrer" className="button button-outline">Fale pelo WhatsApp <ArrowRight size={16} /></a> : <p className="config-note">WhatsApp disponível após a configuração do número oficial da loja.</p>}
    </div>
  </section>;
}

function CategoryPage({ categoryId }: { categoryId: string }) {
  const category = categories.find((item) => item.id === categoryId)!;
  const [filter, setFilter] = useState("Todos");
  const products = collections.filter((item) => item.category === categoryId);
  const filters = ["Todos", ...Array.from(new Set(products.map((item) => item.subcategory)))];
  const shown = filter === "Todos" ? products : products.filter((item) => item.subcategory === filter);
  return <>
    <section className="category-hero"><img src={imageUrl(category.image, 1600)} alt={`Imagem demonstrativa da categoria ${category.label}`} /><div className="category-hero-shade" />
      <div className="category-hero-content"><span className="eyebrow light">BIA FASHION · CATEGORIAS</span><h1>{category.label}</h1><p>{categoryCopy[categoryId]}</p><span className="hero-disclaimer">Consulte modelos e disponibilidade diretamente com a loja</span></div>
    </section>
    <section className="section-wrap catalog-section"><div className="catalog-heading"><div><span className="eyebrow">EXPLORE A VITRINE</span><h2>Modelos <em>em destaque</em></h2><p>{category.description}</p></div><span className="catalog-count">{shown.length} {shown.length === 1 ? "MODELO" : "MODELOS"}<br />DEMONSTRATIVOS</span></div>
      <div className="filter-row" aria-label="Filtrar modelos">{filters.map((item) => <button key={item} className={filter === item ? "filter active" : "filter"} onClick={() => setFilter(item)}>{item}</button>)}</div>
      {shown.length ? <div className="product-grid">{shown.map((item) => <ItemCard item={item} key={item.id} />)}</div> : <div className="empty-state"><ShoppingBag size={34} /><h3>Nenhum modelo nesta seleção</h3><p>Experimente outra categoria de filtro.</p></div>}
      <p className="catalog-footnote">Os modelos identificados como demonstrativos são apenas ilustrativos. Consulte a loja para confirmar valores e disponibilidade.</p>
    </section>
  </>;
}

function About() {
  return <section className="about-page section-wrap"><div className="about-photo"><img src={imageUrl("photo-1483985988355-763728e1935b", 1200)} alt="Imagem demonstrativa de moda feminina" /><span className="image-caption">IMAGEM DEMONSTRATIVA</span></div>
    <div className="about-copy"><span className="eyebrow">UM POUCO SOBRE</span><h1>Bia<br /><em>Fashion.</em></h1><p>Uma vitrine digital para apresentar referências de moda feminina casual e streetwear, com espaço para você encontrar seu próximo look.</p><p>Algumas imagens e modelos são ilustrativos. Para confirmar peças, valores, tamanhos, cores e disponibilidade, fale diretamente com a loja.</p><a className="text-link" href={siteConfig.instagram} target="_blank" rel="noopener noreferrer">Acompanhe no Instagram <ArrowRight size={16} /></a><span className="about-handle">@biafashion04</span></div>
  </section>;
}

function CartPage() {
  const { items, remove, setQuantity, clear } = useCart();
  const selected = items.map((entry) => ({ ...entry, product: collections.find((item) => item.id === entry.id) })).filter((entry) => entry.product);
  const message = `Olá, Bia Fashion!\n\nGostei destes modelos no site:\n\n${selected.map((entry, i) => `${i + 1}. ${entry.product!.name} — ${entry.product!.code} — Quantidade: ${entry.quantity}`).join("\n")}\n\nGostaria de consultar disponibilidade, valores, tamanhos e cores.`;
  const link = selected.length ? whatsappLink(message) : undefined;
  return <section className="cart-page section-wrap"><Link to="/feminino" className="back-link"><ArrowLeft size={16} /> Voltar à vitrine</Link>
    <div className="cart-heading"><div><span className="eyebrow">SUA SELEÇÃO</span><h1>Carrinho de <em>interesse.</em></h1><p>Uma lista de modelos para consultar com a loja. Não é uma compra ou reserva.</p></div>{selected.length > 0 && <button className="clear-button" onClick={clear}>Esvaziar seleção</button>}</div>
    {!selected.length ? <div className="cart-empty"><div className="empty-art"><ShoppingBag size={42} /><span>BF</span></div><span className="eyebrow">AINDA SEM MODELOS</span><h2>Sua seleção está vazia.</h2><p>Explore a vitrine e adicione os modelos que gostaria de consultar.</p><Link to="/feminino" className="button button-dark">Explorar looks <ArrowRight size={16} /></Link></div>
      : <div className="cart-layout"><div className="cart-items">{selected.map(({ product, quantity }) => <article className="cart-item" key={product!.id}><img src={imageUrl(product!.image, 350)} alt={product!.isDemo ? `Imagem demonstrativa: ${product!.name}` : product!.name} /><div className="cart-item-info"><span className="product-sub">{product!.code}{product!.isDemo ? " · DEMONSTRAÇÃO" : " · VITRINE"}</span><h2>{product!.name}</h2><p>{product!.subcategory}</p><div className="quantity-control"><button aria-label="Diminuir quantidade" onClick={() => setQuantity(product!.id, quantity - 1)}><Minus size={14} /></button><span>{quantity}</span><button aria-label="Aumentar quantidade" onClick={() => setQuantity(product!.id, quantity + 1)}><Plus size={14} /></button></div></div><button className="remove-button" onClick={() => remove(product!.id)} aria-label={`Remover ${product!.name}`}><X size={18} /></button></article>)}</div>
        <aside className="cart-summary"><span className="eyebrow">PRÓXIMO PASSO</span><h2>Consulte a loja</h2><p>Envie sua seleção para perguntar sobre disponibilidade, valores, tamanhos e cores.</p>{link ? <a className="button button-dark full-button" href={link} target="_blank" rel="noopener noreferrer">Consultar pelo WhatsApp <ArrowRight size={16} /></a> : <div className="config-note">O WhatsApp estará disponível após a configuração do número oficial da loja.</div>}<span className="summary-disclaimer">Abrir o WhatsApp não confirma envio ou recebimento da mensagem.</span></aside>
      </div>}
  </section>;
}

function AppRoutes() {
  return <><Routes><Route path="/" element={<Layout><Home /></Layout>} />
    {categories.map((category) => <Route key={category.id} path={`/${category.id}`} element={<Layout><CategoryPage categoryId={category.id} /></Layout>} />)}
    <Route path="/sobre" element={<Layout><About /></Layout>} /><Route path="/carrinho" element={<Layout><CartPage /></Layout>} />
    <Route path="*" element={<Layout><section className="not-found section-wrap"><span className="eyebrow">404 · PÁGINA NÃO ENCONTRADA</span><h1>Esse caminho<br /><em>não está na vitrine.</em></h1><Link to="/" className="button button-dark">Voltar ao início <ArrowRight size={16} /></Link></section></Layout>} />
  </Routes></>;
}

export default function App() {
  return <CartProvider><BrowserRouter><AppRoutes /></BrowserRouter></CartProvider>;
}
