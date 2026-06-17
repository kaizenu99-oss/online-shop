import type { Localized } from "../lib/language";

export type FeaturedBanner = {
  id: string;
  brand: string;
  tagline: Localized;
  image: string;
};

export const featuredBanners: FeaturedBanner[] = [
  {
    id: "women",
    brand: "STYLE LAB",
    tagline: { mn: "Эмэгтэй цуглуулга", en: "Women's Collection" },
    image: "https://picsum.photos/seed/pesio-banner-women/700/900",
  },
  {
    id: "men",
    brand: "STYLE LAB",
    tagline: { mn: "Эрэгтэй цуглуулга", en: "Men's Collection" },
    image: "https://picsum.photos/seed/pesio-banner-men/700/900",
  },
  {
    id: "house",
    brand: "HOUSE & MOHA",
    tagline: { mn: "Европ чанар", en: "European Quality" },
    image: "https://picsum.photos/seed/pesio-banner-house/700/440",
  },
  {
    id: "kids",
    brand: "MINI STYLE",
    tagline: { mn: "Хүүхдийн цуглуулга", en: "Kids Collection" },
    image: "https://picsum.photos/seed/pesio-banner-kids/700/440",
  },
];
