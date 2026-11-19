import { siteConfig } from "../config/siteConfig";

export type InstagramLook = {
  id: string;
  title: string;
  caption: string;
  image: string;
  instagramUrl: string;
  isDemo: boolean;
};

export const instagramLooks: InstagramLook[] = [
  { id: "look-01", title: "Macacão floral", caption: "Estampa floral em tons suaves", image: "/images/bia-fashion-macacao-floral.png", instagramUrl: siteConfig.instagram, isDemo: false },
  { id: "look-02", title: "Vestido verde floral", caption: "Leveza e cor para o seu look", image: "/images/bia-fashion-vestido-verde.png", instagramUrl: siteConfig.instagram, isDemo: false },
  { id: "look-03", title: "Vestido midi terracota", caption: "Um toque de cor e elegância", image: "/images/bia-fashion-vestido-terracota.png", instagramUrl: siteConfig.instagram, isDemo: false },
];
