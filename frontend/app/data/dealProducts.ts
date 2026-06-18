import type { Localized } from "../lib/language";

export type DealProduct = {
  id: string;
  name: Localized;
  price: number;
  oldPrice: number;
  label: "discount" | "special";
  image: string;
  swatch: string;
};

export const dealProducts: DealProduct[] = [
  {
    id: "hoodie-grey",
    name: { mn: "Цамц", en: "Hoodie" },
    price: 35900,
    oldPrice: 39900,
    label: "discount",
    image: "https://picsum.photos/seed/deal-hoodie-grey/500/650",
    swatch: "https://picsum.photos/seed/deal-hoodie-grey-swatch/80/80",
  },
  {
    id: "hoodie-zip",
    name: { mn: "Цамц", en: "Zip Hoodie" },
    price: 35900,
    oldPrice: 59900,
    label: "discount",
    image: "https://picsum.photos/seed/deal-hoodie-zip/500/650",
    swatch: "https://picsum.photos/seed/deal-hoodie-zip-swatch/80/80",
  },
  {
    id: "denim-jeans",
    name: { mn: "Цамц", en: "Denim Jeans" },
    price: 39900,
    oldPrice: 89900,
    label: "special",
    image: "https://picsum.photos/seed/deal-denim-jeans/500/650",
    swatch: "https://picsum.photos/seed/deal-denim-jeans-swatch/80/80",
  },
  {
    id: "blazer-pink",
    name: { mn: "Пиджак", en: "Blazer" },
    price: 49900,
    oldPrice: 119900,
    label: "special",
    image: "https://picsum.photos/seed/deal-blazer-pink/500/650",
    swatch: "https://picsum.photos/seed/deal-blazer-pink-swatch/80/80",
  },
];
