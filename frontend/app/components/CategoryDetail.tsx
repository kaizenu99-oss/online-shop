"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Category } from "../data/categories";
import type { AgeCategory, ClothingCategoryId, Size } from "../data/products";
import { clothingCategories } from "../data/clothingCategories";
import { getCategoryProducts } from "../lib/categoryProducts";
import ProductCard from "./ProductCard";
import { useLanguage } from "../context/LanguageContext";
import { ui } from "../data/translations";
import { t } from "../lib/language";

const ALL_SIZES: Size[] = ["XS", "S", "M", "L", "XL", "XXL"];
const ALL_AGES: AgeCategory[] = ["adult", "child"];

export default function CategoryDetail({ category }: { category: Category }) {
  const { lang } = useLanguage();
  const allProducts = getCategoryProducts(category);
  const [search, setSearch] = useState("");
  const [selectedSizes, setSelectedSizes] = useState<Set<Size>>(new Set());
  const [selectedAges, setSelectedAges] = useState<Set<AgeCategory>>(new Set());
  const [selectedClothing, setSelectedClothing] = useState<Set<ClothingCategoryId>>(new Set());

  const toggleSize = (size: Size) => {
    setSelectedSizes((current) => {
      const next = new Set(current);
      if (next.has(size)) next.delete(size);
      else next.add(size);
      return next;
    });
  };

  const toggleAge = (age: AgeCategory) => {
    setSelectedAges((current) => {
      const next = new Set(current);
      if (next.has(age)) next.delete(age);
      else next.add(age);
      return next;
    });
  };

  const toggleClothing = (id: ClothingCategoryId) => {
    setSelectedClothing((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const products = useMemo(() => {
    const query = search.trim().toLowerCase();
    return allProducts.filter((product) => {
      if (selectedSizes.size > 0 && !product.sizes?.some((size) => selectedSizes.has(size))) return false;
      if (selectedAges.size > 0 && (!product.ageCategory || !selectedAges.has(product.ageCategory))) return false;
      if (
        selectedClothing.size > 0 &&
        (!product.clothingCategory || !selectedClothing.has(product.clothingCategory))
      )
        return false;
      if (query) {
        const name = `${product.name.mn} ${product.name.en}`.toLowerCase();
        if (!name.includes(query)) return false;
      }
      return true;
    });
  }, [allProducts, search, selectedSizes, selectedAges, selectedClothing]);

  const hasFilters =
    search !== "" || selectedSizes.size > 0 || selectedAges.size > 0 || selectedClothing.size > 0;

  return (
    <div className="flex flex-1 flex-col bg-[#f8f3f3] dark:bg-[#211b1c]">
      <div className="mx-auto w-full max-w-7xl px-4 py-4 text-xs text-neutral-500 sm:px-6 dark:text-rose-200/60">
        <Link href="/" className="hover:text-rose-600 dark:hover:text-rose-300">
          {t(ui.categoryPage.home, lang)}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-neutral-800 dark:text-rose-100">{t(category.name, lang)}</span>
      </div>

      <div className="mx-auto flex w-full max-w-7xl items-center gap-5 px-4 pb-8 sm:px-6">
        <span
          className="relative block h-20 w-20 shrink-0 overflow-hidden rounded-full ring-2 ring-rose-200 ring-offset-2 ring-offset-[#f8f3f3] dark:ring-rose-800 dark:ring-offset-[#211b1c]"
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

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 pb-16 sm:flex-row sm:px-6">
        <aside className="w-full shrink-0 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-rose-100 dark:bg-[#2a2122] dark:ring-rose-900/40 sm:w-56">
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder={t(ui.specialDiscount.searchPlaceholder, lang)}
            className="w-full rounded border border-rose-200 px-3 py-2 text-sm outline-none focus:border-rose-400 dark:border-rose-800 dark:bg-[#1a1516] dark:text-rose-50"
          />

          <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-neutral-400 dark:text-rose-200/40">
            {t(ui.categoryPage.ageHeading, lang)}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {ALL_AGES.map((age) => (
              <button
                key={age}
                type="button"
                onClick={() => toggleAge(age)}
                className={`rounded border px-3 py-1.5 text-xs font-medium transition-colors ${
                  selectedAges.has(age)
                    ? "border-rose-600 bg-rose-600 text-white"
                    : "border-rose-200 text-neutral-700 hover:border-rose-400 dark:border-rose-800 dark:text-rose-100"
                }`}
              >
                {age === "adult" ? t(ui.specialDiscount.adult, lang) : t(ui.specialDiscount.child, lang)}
              </button>
            ))}
          </div>

          <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-neutral-400 dark:text-rose-200/40">
            {t(ui.categoryPage.clothingHeading, lang)}
          </p>
          <div className="mt-2 flex flex-col gap-2">
            {clothingCategories.map(({ id, label }) => (
              <label
                key={id}
                className="flex items-center gap-2 text-sm text-neutral-700 dark:text-rose-100"
              >
                <input
                  type="checkbox"
                  checked={selectedClothing.has(id)}
                  onChange={() => toggleClothing(id)}
                  className="rounded border-rose-300 text-rose-600 focus:ring-rose-400"
                />
                {t(label, lang)}
              </label>
            ))}
          </div>

          <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-neutral-400 dark:text-rose-200/40">
            {t(ui.categoryPage.sizeHeading, lang)}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {ALL_SIZES.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => toggleSize(size)}
                className={`rounded border px-3 py-1.5 text-xs font-medium transition-colors ${
                  selectedSizes.has(size)
                    ? "border-rose-600 bg-rose-600 text-white"
                    : "border-rose-200 text-neutral-700 hover:border-rose-400 dark:border-rose-800 dark:text-rose-100"
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          {hasFilters && (
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSelectedSizes(new Set());
                setSelectedAges(new Set());
                setSelectedClothing(new Set());
              }}
              className="mt-4 text-xs font-medium text-neutral-400 hover:text-rose-600 dark:text-rose-200/50 dark:hover:text-rose-300"
            >
              {t(ui.categoryPage.clearFilters, lang)}
            </button>
          )}
        </aside>

        <div className="min-w-0 flex-1">
          {products.length === 0 ? (
            <div className="rounded-2xl bg-white p-10 text-center shadow-sm ring-1 ring-rose-100 dark:bg-[#2a2122] dark:ring-rose-900/40">
              <p className="text-sm text-neutral-500 dark:text-rose-200/60">
                {t(ui.categoryPage.noResults, lang)}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
