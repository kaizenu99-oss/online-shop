"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "../data/products";
import { useLanguage } from "../context/LanguageContext";
import { useCart } from "../context/CartContext";
import { useRecentlyViewed } from "../context/RecentlyViewedContext";
import { ui } from "../data/translations";
import { t } from "../lib/language";

export default function ProductDetail({ product }: { product: Product }) {
  const { lang } = useLanguage();
  const { addToCart } = useCart();
  const { addViewed } = useRecentlyViewed();
  const [added, setAdded] = useState(false);

  useEffect(() => {
    addViewed(product);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product.id]);

  const name = t(product.name, lang);
  const badgeLabel = product.badge === "Sale" ? ui.popularProducts.sale : ui.popularProducts.new;

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6">
      <Link
        href="/"
        className="text-xs text-neutral-500 hover:text-rose-600 dark:text-rose-200/60 dark:hover:text-rose-300"
      >
        ← {t(ui.productPage.back, lang)}
      </Link>

      <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div
          className="relative aspect-square overflow-hidden rounded-2xl"
          style={{ backgroundColor: product.color }}
        >
          <Image
            src={product.image}
            alt={name}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
          {product.badge && (
            <span
              className={`absolute left-4 top-4 rounded px-2 py-1 text-xs font-semibold text-white ${
                product.badge === "Sale" ? "bg-rose-500" : "bg-emerald-600"
              }`}
            >
              {t(badgeLabel, lang)}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-sm text-yellow-500">
            {"★".repeat(product.rating)}
            {"☆".repeat(5 - product.rating)}
          </p>
          <h1 className="font-serif text-2xl text-neutral-900 dark:text-rose-50">{name}</h1>
          <p className="text-2xl font-semibold text-rose-600 dark:text-rose-300">
            ${product.price}
            {product.oldPrice && (
              <span className="ml-3 text-base font-normal text-neutral-400 line-through dark:text-rose-200/40">
                ${product.oldPrice}
              </span>
            )}
          </p>
          <p className="text-sm leading-relaxed text-neutral-500 dark:text-rose-200/60">
            {t(ui.productPage.description, lang)}
          </p>

          <button
            type="button"
            onClick={handleAddToCart}
            className={`mt-4 flex w-full items-center justify-center gap-2 rounded border px-6 py-3 text-sm font-medium transition-colors sm:w-auto ${
              added
                ? "border-emerald-600 bg-emerald-600 text-white"
                : "border-rose-300 text-neutral-800 hover:border-rose-600 hover:bg-rose-600 hover:text-white dark:border-rose-700 dark:text-rose-100"
            }`}
          >
            {added ? t(ui.popularProducts.added, lang) : t(ui.popularProducts.addToCart, lang)}
          </button>
        </div>
      </div>
    </div>
  );
}
