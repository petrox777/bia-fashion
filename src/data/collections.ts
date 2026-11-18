export type CollectionItem = {
  id: string; code: string; name: string; category: string; subcategory: string;
  collection: string; description: string; image: string; featured: boolean; isNew: boolean; isDemo: true;
};

export const collections: CollectionItem[] = [
  { id: "demo-f-01", code: "DEMO-001", name: "Vestido leve", category: "feminino", subcategory: "Vestidos", collection: "Seleção demonstrativa", description: "Imagem e descrição demonstrativas. Consulte a loja para informações do modelo.", image: "photo-1539109136881-3be0616acf4b", featured: true, isNew: true, isDemo: true },
  { id: "demo-f-02", code: "DEMO-002", name: "Conjunto contemporâneo", category: "feminino", subcategory: "Conjuntos", collection: "Seleção demonstrativa", description: "Imagem e descrição demonstrativas. Consulte a loja para informações do modelo.", image: "photo-1483985988355-763728e1935b", featured: true, isNew: false, isDemo: true },
  { id: "demo-m-01", code: "DEMO-003", name: "Visual casual", category: "masculino", subcategory: "Camisetas", collection: "Seleção demonstrativa", description: "Imagem e descrição demonstrativas. Consulte a loja para informações do modelo.", image: "photo-1516257984-b1b4d707412e", featured: true, isNew: true, isDemo: true },
  { id: "demo-m-02", code: "DEMO-004", name: "Clássico urbano", category: "masculino", subcategory: "Calças", collection: "Seleção demonstrativa", description: "Imagem e descrição demonstrativas. Consulte a loja para informações do modelo.", image: "photo-1515886657613-9f3515b0c78f", featured: false, isNew: false, isDemo: true },
  { id: "demo-i-01", code: "DEMO-005", name: "Look infantil", category: "infantil", subcategory: "Looks", collection: "Seleção demonstrativa", description: "Imagem e descrição demonstrativas. Consulte a loja para informações do modelo.", image: "photo-1503919005314-30d93d07d823", featured: true, isNew: false, isDemo: true },
  { id: "demo-p-01", code: "DEMO-006", name: "Inspiração de verão", category: "moda-praia", subcategory: "Moda praia", collection: "Seleção demonstrativa", description: "Imagem e descrição demonstrativas. Consulte a loja para informações do modelo.", image: "photo-1507525428034-b723cf961d3e", featured: true, isNew: true, isDemo: true },
  { id: "demo-a-01", code: "DEMO-007", name: "Detalhe especial", category: "acessorios", subcategory: "Acessórios", collection: "Seleção demonstrativa", description: "Imagem e descrição demonstrativas. Consulte a loja para informações do modelo.", image: "photo-1611652022419-a9419f74343d", featured: false, isNew: false, isDemo: true },
];
