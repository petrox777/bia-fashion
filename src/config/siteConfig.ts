export const siteConfig = {
  name: "Bia Fashion",
  instagram: "https://www.instagram.com/biafashion04/",
  whatsappNumber: "", // Configurar somente após confirmação do número oficial.
  whatsappMessage: "Olá, Bia Fashion! Gostaria de conversar sobre as coleções.",
};

export const categories = [
  { id: "feminino", label: "Feminino", image: "/images/bia-fashion-macacao-floral.png", description: "Inspirações casuais para vestir do seu jeito." },
  { id: "masculino", label: "Masculino", image: "photo-1516257984-b1b4d707412e", description: "Estilo casual e peças versáteis para o dia a dia." },
  { id: "infantil", label: "Infantil", image: "photo-1503919005314-30d93d07d823", description: "Looks confortáveis e cheios de personalidade para os pequenos." },
  { id: "conjuntos", label: "Conjuntos", image: "/images/bia-fashion-vestido-verde.png", description: "Combinações práticas com atitude." },
  { id: "jeans", label: "Jeans", image: "photo-1525507119028-ed4c629a60a3", description: "Clássicos versáteis para criar seu look." },
  { id: "acessorios", label: "Acessórios", image: "photo-1611652022419-a9419f74343d", description: "Detalhes que completam a produção." },
];

export const imageUrl = (id: string, width = 800) => id.startsWith("/")
  ? id
  : `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;

export const categoryCopy: Record<string, string> = {
  feminino: "Looks, vestidos e referências de moda casual para inspirar sua próxima escolha.",
  masculino: "Uma seleção demonstrativa de moda masculina casual para diferentes momentos.",
  infantil: "Inspirações demonstrativas de moda infantil para acompanhar os pequenos com conforto.",
  conjuntos: "Combinações demonstrativas para montar um visual com praticidade.",
  jeans: "Peças curingas e combinações para diferentes momentos.",
  acessorios: "Detalhes demonstrativos para dar personalidade à sua produção.",
};
