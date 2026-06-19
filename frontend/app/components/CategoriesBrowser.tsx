"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { categories } from "../data/categories";
import { getCategoryProducts } from "../lib/categoryProducts";
import { getSpecialDiscountBrands } from "../data/specialDiscountProducts";
import { useLanguage } from "../context/LanguageContext";
import { ui } from "../data/translations";
import { t } from "../lib/language";
import { formatMnt } from "../lib/currency";
import type { Product } from "../data/products";

export default function CategoriesBrowser() {
  const { lang } = useLanguage();
  const brands = getSpecialDiscountBrands();
  const allProducts = useMemo(() => categories.flatMap((category) => getCategoryProducts(category)), []);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400 dark:text-rose-200/40">
        {t(ui.categoriesBrowse.brandsHeading, lang)}
      </p>
      <div className="mt-3 flex gap-3 overflow-x-auto pb-2">
        {brands.map(({ brand, count }) => (
          <div
            key={brand}
            className="flex shrink-0 items-center gap-2 rounded-xl border border-rose-100 bg-white px-4 py-3 text-sm shadow-sm dark:border-rose-900/40 dark:bg-[#2a2122]"
          >
            <span className="font-semibold text-neutral-800 dark:text-rose-100">{brand}</span>
            <span className="rounded-full bg-rose-50 px-2 py-0.5 text-xs text-rose-500 dark:bg-rose-900/40 dark:text-rose-200/70">
              {count}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-6 sm:flex-row">
        <aside className="w-full shrink-0 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-rose-100 dark:bg-[#2a2122] dark:ring-rose-900/40 sm:w-64">
          <NavControls />

          <p className="px-2 text-xs font-semibold uppercase tracking-wide text-neutral-400 dark:text-rose-200/40">
            {t(ui.categoriesBrowse.categoriesHeading, lang)}
          </p>
          <nav className="mt-2 flex flex-col">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.id}`}
                className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-neutral-700 hover:bg-rose-50 dark:text-rose-100 dark:hover:bg-rose-900/30"
              >
                <span className="flex items-center gap-2">
                  <ChevronIcon />
                  {t(category.name, lang)}
                </span>
                <span className="text-xs text-neutral-400 dark:text-rose-200/40">{category.productCount}</span>
              </Link>
            ))}
          </nav>
        </aside>

        <div className="min-w-0 flex-1">
          <h1 className="font-serif text-2xl text-rose-700 dark:text-rose-300">
            {t(ui.categoriesBrowse.heading, lang)}{" "}
            <span className="text-base font-normal text-neutral-400 dark:text-rose-200/50">
              | {allProducts.length.toLocaleString("en-US")} {t(ui.categories.products, lang)}
            </span>
          </h1>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
            {allProducts.map((product) => (
              <BrowseProductCard key={product.id} product={product} lang={lang} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function BrowseProductCard({ product, lang }: { product: Product; lang: "mn" | "en" }) {
  const discountPercent = product.oldPrice
    ? Math.round(100 - (product.price / product.oldPrice) * 100)
    : null;

  return (
    <Link
      href={`/product/${product.id}`}
      className="group flex flex-col overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-rose-100 transition-shadow hover:shadow-md dark:bg-[#2a2122] dark:ring-rose-900/40"
    >
      <div className="relative aspect-square w-full overflow-hidden" style={{ backgroundColor: product.color }}>
        <Image
          src={product.image}
          alt={t(product.name, lang)}
          fill
          sizes="(min-width: 1024px) 22vw, 50vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {discountPercent !== null && discountPercent > 0 && (
          <span className="absolute right-2 top-2 z-10 rounded bg-rose-600 px-2 py-1 text-[10px] font-semibold text-white">
            -{discountPercent}%
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1 p-3">
        <p className="text-sm font-medium text-neutral-800 dark:text-rose-100">{t(product.name, lang)}</p>
        <p className="text-sm font-semibold text-neutral-900 dark:text-rose-50">
          {formatMnt(product.price)}
          {product.oldPrice && (
            <span className="ml-2 text-xs font-normal text-neutral-400 line-through dark:text-rose-200/40">
              {formatMnt(product.oldPrice)}
            </span>
          )}
        </p>
      </div>
    </Link>
  );
}

function ChevronIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}
