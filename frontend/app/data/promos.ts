import type { Localized } from "../lib/language";

export type Promo = {
  id: string;
  eyebrow: Localized;
  title: Localized;
  color: string;
  image: string;
};

export const promos: Promo[] = [
  {
    id: "men-tshirt",
    eyebrow: { mn: "ДЕСА ГОЁЛ", en: "DESA FASHION" },
    title: { mn: "Локомотив эрэгтэй хөх цамц", en: "Locomotive Men Blue Tshirt" },
    color: "#f8d6e0",
    image: "https://picsum.photos/seed/pesio-men-tshirt/300/300",
  },
  {
    id: "women-sneakers",
    eyebrow: { mn: "ШИК ГУТАЛ", en: "STYLISH SHOES" },
    title: { mn: "Эмэгтэй кросс гутал", en: "Solethreads Women Sneakers Shoes" },
    color: "#fbe7ec",
    image: "https://picsum.photos/seed/pesio-women-sneakers/300/300",
  },
  {
    id: "beige-bag",
    eyebrow: { mn: "ХАРАГДАХ ГОЁЛ", en: "LOOKBOT FASHION" },
    title: { mn: "Бэйж өнгийн жижиг цүнх", en: "Sisterhood Beige Small Bag" },
    color: "#f3c9d6",
    image: "https://picsum.photos/seed/pesio-beige-bag/300/300",
  },
];
