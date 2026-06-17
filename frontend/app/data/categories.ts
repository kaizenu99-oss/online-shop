import type { Localized } from "../lib/language";

export type Category = {
  id: string;
  name: Localized;
  productCount: number;
  color: string;
  image: string;
};

export const categories: Category[] = [
  {
    id: "watch",
    name: { mn: "Цаг", en: "Watch" },
    productCount: 9,
    color: "#f9dde3",
    image: "https://picsum.photos/seed/pesio-watch/200/200",
  },
  {
    id: "fashionize",
    name: { mn: "Гоёл чимэглэл", en: "Fashionize" },
    productCount: 6,
    color: "#fbe7ec",
    image: "https://picsum.photos/seed/pesio-fashionize/200/200",
  },
  {
    id: "ethnic-wear",
    name: { mn: "Үндэсний хувцас", en: "Ethnic Wear" },
    productCount: 4,
    color: "#f6d9e2",
    image: "https://picsum.photos/seed/pesio-ethnic-wear/200/200",
  },
  {
    id: "goggles",
    name: { mn: "Нүдний шил", en: "Goggles" },
    productCount: 10,
    color: "#f3c9d6",
    image: "https://picsum.photos/seed/pesio-goggles/200/200",
  },
  {
    id: "tote-bag",
    name: { mn: "Цүнх", en: "Tote Bag" },
    productCount: 4,
    color: "#fce3ea",
    image: "https://picsum.photos/seed/pesio-tote-bag/200/200",
  },
  {
    id: "shoes",
    name: { mn: "Гутал", en: "Shoes" },
    productCount: 8,
    color: "#f8d6e0",
    image: "https://picsum.photos/seed/pesio-shoes/200/200",
  },
];
