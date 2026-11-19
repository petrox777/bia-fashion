export type CollectionItem = {
  id: string;
  code: string;
  name: string;
  category: string;
  subcategory: string;
  collection: string;
  description: string;
  image: string;
  featured: boolean;
  isNew: boolean;
  isDemo: boolean;
};

export const collections: CollectionItem[] = [
  { id: "demo-look-01", code: "BF-001", name: "Macacão floral", category: "feminino", subcategory: "Macacões", collection: "Novidades", description: "Consulte a loja para confirmar o valor e a disponibilidade deste modelo.", image: "/images/bia-fashion-macacao-floral.png", featured: true, isNew: true, isDemo: false },
  { id: "demo-look-02", code: "BF-002", name: "Vestido verde floral", category: "feminino", subcategory: "Vestidos", collection: "Novidades", description: "Consulte a loja para confirmar o valor e a disponibilidade deste modelo.", image: "/images/bia-fashion-vestido-verde.png", featured: true, isNew: false, isDemo: false },
  { id: "demo-set-01", code: "BF-003", name: "Vestido midi terracota", category: "feminino", subcategory: "Vestidos", collection: "Novidades", description: "Consulte a loja para confirmar o valor e a disponibilidade deste modelo.", image: "/images/bia-fashion-vestido-terracota.png", featured: true, isNew: true, isDemo: false },
  { id: "demo-m-01", code: "DEMO-007", name: "Visual urbano", category: "masculino", subcategory: "Casual", collection: "Seleção demonstrativa", description: "Imagem e descrição demonstrativas. Consulte a loja para confirmar o modelo.", image: "photo-1516257984-b1b4d707412e", featured: true, isNew: true, isDemo: true },
  { id: "demo-m-02", code: "DEMO-008", name: "Estilo para o dia a dia", category: "masculino", subcategory: "Looks", collection: "Seleção demonstrativa", description: "Imagem enviada pela loja. Consulte para confirmar detalhes, valor e disponibilidade.", image: "/images/bia-fashion-masculino-urbano.png", featured: false, isNew: false, isDemo: false },
  { id: "demo-k-01", code: "DEMO-009", name: "Look infantil casual", category: "infantil", subcategory: "Casual", collection: "Seleção demonstrativa", description: "Imagem e descrição demonstrativas. Consulte a loja para confirmar o modelo.", image: "photo-1503919005314-30d93d07d823", featured: true, isNew: true, isDemo: true },
  { id: "demo-k-02", code: "DEMO-010", name: "Conforto para brincar", category: "infantil", subcategory: "Looks", collection: "Seleção demonstrativa", description: "Imagem e descrição demonstrativas. Consulte a loja para confirmar o modelo.", image: "photo-1519238263530-99bdd11df2ea", featured: false, isNew: false, isDemo: true },
  { id: "demo-set-02", code: "DEMO-004", name: "Look de fim de semana", category: "conjuntos", subcategory: "Conjuntos", collection: "Seleção demonstrativa", description: "Imagem e descrição demonstrativas. Consulte a loja para confirmar o modelo.", image: "photo-1539109136881-3be0616acf4b", featured: false, isNew: false, isDemo: true },
  { id: "demo-jeans-01", code: "DEMO-005", name: "Jeans versátil", category: "jeans", subcategory: "Jeans", collection: "Seleção demonstrativa", description: "Imagem e descrição demonstrativas. Consulte a loja para confirmar o modelo.", image: "photo-1525507119028-ed4c629a60a3", featured: false, isNew: false, isDemo: true },
  { id: "demo-accessory-01", code: "DEMO-006", name: "Acessório em destaque", category: "acessorios", subcategory: "Acessórios", collection: "Seleção demonstrativa", description: "Imagem e descrição demonstrativas. Consulte a loja para confirmar o modelo.", image: "photo-1611652022419-a9419f74343d", featured: false, isNew: true, isDemo: true },
];
