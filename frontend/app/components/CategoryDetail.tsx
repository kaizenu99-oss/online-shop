"use client";

import Image from "next/image";
import Link from "next/link";
import type { Category } from "../data/categories";
import { getCategoryProducts } from "../lib/categoryProducts";
import ProductCard from "./ProductCard";
import { useLanguage } from "../context/LanguageContext";
import { ui } from "../data/translations";
import { t } from "../lib/language";

export default function CategoryDetail({ category }: { category: Category }) {
  const { lang } = useLanguage();
  const products = getCategoryProducts(category);

  return (
    <div className="flex flex-1 flex-col bg-[#fff5f7] dark:bg-[#1a0e13]">
      <div className="mx-auto w-full max-w-7xl px-4 py-4 text-xs text-neutral-500 sm:px-6 dark:text-rose-200/60">
        <Link href="/" className="hover:text-rose-600 dark:hover:text-rose-300">
          {t(ui.categoryPage.home, lang)}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-neutral-800 dark:text-rose-100">{t(category.name, lang)}</span>
      </div>

      <div className="mx-auto flex w-full max-w-7xl items-center gap-5 px-4 pb-8 sm:px-6">
        <span
          className="relative block h-20 w-20 shrink-0 overflow-hidden rounded-full ring-2 ring-rose-200 ring-offset-2 ring-offset-[#fff5f7] dark:ring-rose-800 dark:ring-offset-[#1a0e13]"
          style={{ backgroundColor: category.color }}
        >
          <Image
            src={category.image}
            alt={t(category.name, lang)}
            fill
            sizes="80px"
            className="object-cover"
          />
        </span>
        <div>
          <h1 className="font-serif text-2xl text-rose-700 dark:text-rose-300">
            {t(category.name, lang)}
          </h1>
          <p className="mt-1 text-sm text-neutral-500 dark:text-rose-200/60">
            {category.productCount} {t(ui.categories.products, lang)}
          </p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
