import type { Localized } from "../lib/language";
import type { ClothingCategoryId } from "./products";

export const clothingCategories: { id: ClothingCategoryId; label: Localized }[] = [
  { id: "shirt", label: { mn: "Цамц", en: "Shirt" } },
  { id: "pants", label: { mn: "Өмд", en: "Pants" } },
  { id: "jacket", label: { mn: "Хүрэм", en: "Jacket" } },
  { id: "dress", label: { mn: "Даашинз", en: "Dress" } },
  { id: "other", label: { mn: "Бусад", en: "Other" } },
];
