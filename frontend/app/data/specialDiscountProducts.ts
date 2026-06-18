import type { Localized } from "../lib/language";

export type AgeCategory = "adult" | "child";

export type SpecialDiscountProduct = {
  id: string;
  name: Localized;
  brand: string;
  ageCategory: AgeCategory;
  price: number;
  oldPrice: number;
  daysLeft: number;
  image: string;
  swatches: string[];
};

export const specialDiscountProducts: SpecialDiscountProduct[] = [
  {
    id: "sd-boots-suede",
    name: { mn: "Эмэгтэй түрийтэй гутал", en: "Women's Heeled Boots" },
    brand: "Vela",
    ageCategory: "adult",
    price: 9900,
    oldPrice: 299900,
    daysLeft: 196,
    image: "https://picsum.photos/seed/sd-boots-suede/500/650",
    swatches: ["#c7a98c", "#7a5b4a"],
  },
  {
    id: "sd-headband",
    name: { mn: "Эмэгтэй майк", en: "Women's Headband" },
    brand: "Norin",
    ageCategory: "adult",
    price: 9900,
    oldPrice: 179900,
    daysLeft: 12,
    image: "https://picsum.photos/seed/sd-headband/500/650",
    swatches: ["#e3b6c4"],
  },
  {
    id: "sd-wide-pants",
    name: { mn: "Эмэгтэй чөлөөт өмд", en: "Women's Relaxed Pants" },
    brand: "Brightly",
    ageCategory: "adult",
    price: 9900,
    oldPrice: 179900,
    daysLeft: 12,
    image: "https://picsum.photos/seed/sd-wide-pants/500/650",
    swatches: ["#3a2c2e", "#d8c3a5"],
  },
  {
    id: "sd-kids-fleece",
    name: { mn: "Хүүхдийн флис куртка", en: "Kids Fleece Jacket" },
    brand: "Kidso",
    ageCategory: "child",
    price: 19900,
    oldPrice: 69900,
    daysLeft: 30,
    image: "https://picsum.photos/seed/sd-kids-fleece/500/650",
    swatches: ["#e7e0d4", "#2f2f2f"],
  },
  {
    id: "sd-ankle-boots",
    name: { mn: "Өсгийтэй ботинк", en: "Ankle Boots" },
    brand: "Lumio",
    ageCategory: "adult",
    price: 24900,
    oldPrice: 89900,
    daysLeft: 8,
    image: "https://picsum.photos/seed/sd-ankle-boots/500/650",
    swatches: ["#6b4530"],
  },
  {
    id: "sd-kids-boots",
    name: { mn: "Хүүхдийн гутал", en: "Kids Boots" },
    brand: "Kidso",
    ageCategory: "child",
    price: 14900,
    oldPrice: 49900,
    daysLeft: 45,
    image: "https://picsum.photos/seed/sd-kids-boots/500/650",
    swatches: ["#1c1c1c"],
  },
  {
    id: "sd-trench-coat",
    name: { mn: "Эмэгтэй пальто", en: "Women's Trench Coat" },
    brand: "Brightly",
    ageCategory: "adult",
    price: 59900,
    oldPrice: 159900,
    daysLeft: 5,
    image: "https://picsum.photos/seed/sd-trench-coat/500/650",
    swatches: ["#b9a98f", "#857058"],
  },
  {
    id: "sd-kids-toy-set",
    name: { mn: "Хүүхдийн тоглоомын иж бүрдэл", en: "Kids Toy Set" },
    brand: "Hola",
    ageCategory: "child",
    price: 12900,
    oldPrice: 29900,
    daysLeft: 60,
    image: "https://picsum.photos/seed/sd-kids-toy-set/500/650",
    swatches: ["#e3b6c4", "#9bd1d8"],
  },
];

export function getSpecialDiscountBrands() {
  const counts = new Map<string, number>();
  for (const product of specialDiscountProducts) {
    counts.set(product.brand, (counts.get(product.brand) ?? 0) + 1);
  }
  return Array.from(counts.entries())
    .map(([brand, count]) => ({ brand, count }))
    .sort((a, b) => b.count - a.count);
}
