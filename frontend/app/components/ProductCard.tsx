"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "../data/products";
import { useLanguage } from "../context/LanguageContext";
import { useCart } from "../context/CartContext";
import { ui } from "../data/translations";
import { t } from "../lib/language";

export default function ProductCard({ product }: { product: Product }) {
  const { lang } = useLanguage();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const name = t(product.name, lang);
  const badgeLabel = product.badge === "Sale" ? ui.popularProducts.sale : ui.popularProducts.new;

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group flex flex-col">
      <Link
        href={`/product/${product.id}`}
        className="relative flex aspect-square items-center justify-center overflow-hidden rounded-md"
        style={{ backgroundColor: product.color }}
      >
        <Image
          src={product.image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 20vw, 50vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.badge && (
          <span
            className={`absolute left-3 top-3 rounded px-2 py-1 text-[10px] font-semibold text-white ${
              product.badge === "Sale" ? "bg-rose-500" : "bg-emerald-600"
            }`}
          >
            {t(badgeLabel, lang)}
          </span>
        )}
      </Link>

      <div className="mt-4 flex flex-col gap-1">
        <p className="text-xs text-yellow-500">{"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}</p>
        <Link
          href={`/product/${product.id}`}
          className="text-sm font-medium text-neutral-800 group-hover:text-rose-600 group-hover:underline dark:text-rose-100"
        >
          {name}
        </Link>
        <p className="text-sm font-semibold text-neutral-900 dark:text-rose-50">
          ${product.price}
          {product.oldPrice && (
            <span className="ml-2 text-xs font-normal text-neutral-400 line-through dark:text-rose-200/40">
              ${product.oldPrice}
            </span>
          )}
        </p>

        <button
          type="button"
          onClick={handleAddToCart}
          className={`mt-2 flex items-center justify-center gap-2 rounded border px-3 py-2 text-xs font-medium transition-colors ${
            added
              ? "border-emerald-600 bg-emerald-600 text-white"
              : "border-rose-200 text-neutral-800 hover:border-rose-600 hover:bg-rose-600 hover:text-white dark:border-rose-800 dark:text-rose-100"
          }`}
        >
          {added ? <CheckIcon /> : <CartPlusIcon />}
          {added ? t(ui.popularProducts.added, lang) : t(ui.popularProducts.addToCart, lang)}
        </button>
      </div>
    </div>
  );
}

function CartPlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
      <line x1="16" y1="9" x2="16" y2="13" />
      <line x1="14" y1="11" x2="18" y2="11" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
