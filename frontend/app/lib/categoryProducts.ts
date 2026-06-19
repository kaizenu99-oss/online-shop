import type { Category } from "../data/categories";
import type { Product, Size } from "../data/products";
import { clothingCategories } from "../data/clothingCategories";

const ALL_SIZES: Size[] = ["XS", "S", "M", "L", "XL", "XXL"];

function sizesFor(n: number): Size[] {
  const start = n % ALL_SIZES.length;
  const count = 3 + (n % 3);
  return Array.from({ length: count }, (_, i) => ALL_SIZES[(start + i) % ALL_SIZES.length]);
}

export function getCategoryProducts(category: Category): Product[] {
  return Array.from({ length: category.productCount }, (_, index) => {
    const n = index + 1;
    return {
      id: `${category.id}-${n}`,
      name: {
        mn: `${category.name.mn} ${n}`,
        en: `${category.name.en} ${n}`,
      },
      category: "Fashion",
      price: (10 + ((n * 7) % 40)) * 1000,
      oldPrice: n % 3 === 0 ? (10 + ((n * 7) % 40) + 12) * 1000 : undefined,
      rating: (n % 5) + 1,
      color: category.color,
      image: `https://picsum.photos/seed/${category.id}-${n}/400/400`,
      badge: n % 4 === 0 ? "New" : n % 5 === 0 ? "Sale" : undefined,
      sizes: sizesFor(n),
      ageCategory: n % 3 === 0 ? "child" : "adult",
      clothingCategory: clothingCategories[n % clothingCategories.length].id,
    } satisfies Product;
  });
}
