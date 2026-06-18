import type { Product } from "../data/products";
import { products } from "../data/products";
import { dealProducts } from "../data/dealProducts";
import { specialDiscountProducts } from "../data/specialDiscountProducts";
import { categories } from "../data/categories";
import { getCategoryProducts } from "./categoryProducts";

function dealToProduct(deal: (typeof dealProducts)[number]): Product {
  return {
    id: deal.id,
    name: deal.name,
    category: "Fashion",
    price: deal.price,
    oldPrice: deal.oldPrice,
    rating: 4,
    color: "#f5f0f0",
    image: deal.image,
    badge: deal.label === "discount" ? "Sale" : "New",
  };
}

function specialToProduct(special: (typeof specialDiscountProducts)[number]): Product {
  return {
    id: special.id,
    name: special.name,
    category: "Fashion",
    price: special.price,
    oldPrice: special.oldPrice,
    rating: 4,
    color: special.swatches[0] ?? "#f5f0f0",
    image: special.image,
    badge: "Sale",
  };
}

export function getAllProducts(): Product[] {
  const categoryProducts = categories.flatMap((category) => getCategoryProducts(category));
  return [
    ...products,
    ...dealProducts.map(dealToProduct),
    ...specialDiscountProducts.map(specialToProduct),
    ...categoryProducts,
  ];
}

export function findProductById(id: string): Product | undefined {
  const direct = products.find((product) => product.id === id);
  if (direct) return direct;

  const deal = dealProducts.find((product) => product.id === id);
  if (deal) return dealToProduct(deal);

  const special = specialDiscountProducts.find((product) => product.id === id);
  if (special) return specialToProduct(special);

  for (const category of categories) {
    const match = getCategoryProducts(category).find((product) => product.id === id);
    if (match) return match;
  }

  return undefined;
}
