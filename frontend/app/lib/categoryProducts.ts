import type { Category } from "../data/categories";
import type { Product } from "../data/products";

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
      price: 10 + ((n * 7) % 40),
      oldPrice: n % 3 === 0 ? 10 + ((n * 7) % 40) + 12 : undefined,
      rating: (n % 5) + 1,
      color: category.color,
      image: `https://picsum.photos/seed/${category.id}-${n}/400/400`,
      badge: n % 4 === 0 ? "New" : n % 5 === 0 ? "Sale" : undefined,
    } satisfies Product;
  });
}
