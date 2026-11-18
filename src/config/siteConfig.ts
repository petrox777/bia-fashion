export const siteConfig = {
  name: "Bia Fashion",
  instagram: "https://www.instagram.com/biafashion04/",
  whatsappNumber: "", // Configurar somente após confirmação do número oficial.
  whatsappMessage: "Olá, Bia Fashion! Gostaria de conversar sobre as coleções.",
};

export const categories = [
  { id: "feminino", label: "Feminino", image: "photo-1539109136881-3be0616acf4b", description: "Looks e inspirações para diferentes momentos." },
  { id: "masculino", label: "Masculino", image: "photo-1516257984-b1b4d707412e", description: "Uma seleção de estilo para o dia a dia." },
  { id: "infantil", label: "Infantil", image: "photo-1503919005314-30d93d07d823", description: "Moda infantil com leveza e personalidade." },
  { id: "moda-praia", label: "Moda praia", image: "photo-1507525428034-b723cf961d3e", description: "Inspirações para dias de sol." },
  { id: "acessorios", label: "Acessórios", image: "photo-アクセサリー", description: "Detalhes que completam o visual." },
];

export const imageUrl = (id: string, width = 800) => id === "photo-アクセサリー"
  ? `https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=${width}&q=80`
  : `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;

export const categoryCopy: Record<string, string> = {
  feminino: "Uma vitrine de referências e modelos demonstrativos para inspirar sua próxima escolha.",
  masculino: "Explore uma seleção demonstrativa de peças e combinações para diferentes ocasiões.",
  infantil: "Uma vitrine demonstrativa de estilos para os pequenos, com espaço para descobrir cada coleção.",
  "moda-praia": "Inspirações demonstrativas para aproveitar os dias de sol com estilo.",
  acessorios: "Peças demonstrativas para dar um toque especial a diferentes composições.",
};
