import type { Localized } from "../lib/language";

export type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL";

export type Product = {
  id: string;
  name: Localized;
  category: "Fashion" | "Accessories" | "Apparel";
  price: number;
  oldPrice?: number;
  rating: number;
  color: string;
  image: string;
  badge?: "Sale" | "New";
  sizes?: Size[];
};

export const products: Product[] = [
  {
    id: "longines-watch",
    name: {
      mn: "Longines Watchdog 35.6 мм цаг",
      en: "Longines Watchdog Fashion 35.6 mm Watch",
    },
    category: "Accessories",
    price: 32,
    rating: 4,
    color: "#efe3d3",
    image: "https://picsum.photos/seed/pesio-longines-watch/400/400",
  },
  {
    id: "merry-loop-scarf",
    name: {
      mn: "Кэшмир ороолт - бэлгийн хайрцагтай",
      en: "Cindy & Merry Loop Gift Cashmere Silky Scarf",
    },
    category: "Fashion",
    price: 10,
    rating: 5,
    color: "#cdd9e6",
    image: "https://picsum.photos/seed/pesio-merry-loop-scarf/400/400",
  },
  {
    id: "laptop-backpack",
    name: {
      mn: "Лаптопын премиум цүнх",
      en: "Mott Latest Premium Laptop Backpack",
    },
    category: "Accessories",
    price: 36,
    rating: 4,
    color: "#2b3140",
    image: "https://picsum.photos/seed/pesio-laptop-backpack/400/400",
    badge: "New",
  },
  {
    id: "denim-crop-top",
    name: {
      mn: "Жинсэн богино куртка",
      en: "Denim Jean Top Jacket Crop Top",
    },
    category: "Apparel",
    price: 16,
    oldPrice: 28,
    rating: 4,
    color: "#7e93ab",
    image: "https://picsum.photos/seed/pesio-denim-crop-top/400/400",
    badge: "Sale",
  },
  {
    id: "leather-belt",
    name: {
      mn: "Эрэгтэй хар арьсан бүс",
      en: "Just Style Men Black Artificial Leather Belt",
    },
    category: "Accessories",
    price: 21,
    oldPrice: 28,
    rating: 5,
    color: "#1c1c1c",
    image: "https://picsum.photos/seed/pesio-leather-belt/400/400",
    badge: "Sale",
  },
];

export const productTabs = ["Fashion", "Accessories", "Apparel"] as const;
