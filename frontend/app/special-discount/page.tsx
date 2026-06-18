"use client";

import { useMemo, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SpecialDiscountCard from "../components/SpecialDiscountCard";
import {
  getSpecialDiscountBrands,
  specialDiscountProducts,
  type AgeCategory,
} from "../data/specialDiscountProducts";
import { useLanguage } from "../context/LanguageContext";
import { ui } from "../data/translations";
import { t } from "../lib/language";

const brands = getSpecialDiscountBrands();
const ageOptions: AgeCategory[] = ["adult", "child"];

export default function SpecialDiscountPage() {
  const { lang } = useLanguage();
  const [search, setSearch] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<Set<string>>(new Set());
  const [selectedAges, setSelectedAges] = useState<Set<AgeCategory>>(new Set());

  const toggleBrand = (brand: string) => {
    setSelectedBrands((current) => {
      const next = new Set(current);
      if (next.has(brand)) next.delete(brand);
      else next.add(brand);
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

  const clearFilters = () => {
    setSearch("");
    setSelectedBrands(new Set());
    setSelectedAges(new Set());
  };

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();
    return specialDiscountProducts.filter((product) => {
      if (selectedBrands.size > 0 && !selectedBrands.has(product.brand)) return false;
      if (selectedAges.size > 0 && !selectedAges.has(product.ageCategory)) return false;
      if (query) {
        const name = `${product.name.mn} ${product.name.en}`.toLowerCase();
        if (!name.includes(query)) return false;
      }
      return true;
    });
  }, [search, selectedBrands, selectedAges]);

  const hasFilters = search !== "" || selectedBrands.size > 0 || selectedAges.size > 0;

  return (
    <>
      <Header />
      <div className="flex flex-1 flex-col bg-background">
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 px-4 py-8 sm:flex-row sm:px-6">
          <aside className="w-full shrink-0 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-rose-100 dark:bg-[#2a2122] dark:ring-rose-900/40 sm:w-64">
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder={t(ui.specialDiscount.searchPlaceholder, lang)}
              className="w-full rounded border border-rose-200 px-3 py-2 text-sm outline-none focus:border-rose-400 dark:border-rose-800 dark:bg-[#1a1516] dark:text-rose-50"
            />

            <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-neutral-400 dark:text-rose-200/40">
              {t(ui.specialDiscount.brandHeading, lang)}
            </p>
            <div className="mt-2 flex flex-col gap-2">
              {brands.map(({ brand, count }) => (
                <label
                  key={brand}
                  className="flex items-center justify-between gap-2 text-sm text-neutral-700 dark:text-rose-100"
                >
                  <span className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedBrands.has(brand)}
                      onChange={() => toggleBrand(brand)}
                      className="rounded border-rose-300 text-rose-600 focus:ring-rose-400"
                    />
                    {brand}
                  </span>
                  <span className="text-xs text-neutral-400 dark:text-rose-200/40">{count}</span>
                </label>
              ))}
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-neutral-400 dark:text-rose-200/40">
              {t(ui.specialDiscount.ageHeading, lang)}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {ageOptions.map((age) => (
                <button
                  key={age}
                  type="button"
                  onClick={() => toggleAge(age)}
                  className={`rounded border px-3 py-2 text-xs font-medium transition-colors ${
                    selectedAges.has(age)
                      ? "border-rose-600 bg-rose-600 text-white"
                      : "border-rose-200 text-neutral-700 hover:border-rose-400 dark:border-rose-800 dark:text-rose-100"
                  }`}
                >
                  {age === "adult" ? t(ui.specialDiscount.adult, lang) : t(ui.specialDiscount.child, lang)}
                </button>
              ))}
            </div>

            {hasFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="mt-5 text-xs font-medium text-neutral-400 hover:text-rose-600 dark:text-rose-200/50 dark:hover:text-rose-300"
              >
                {t(ui.specialDiscount.clearFilters, lang)}
              </button>
            )}
          </aside>

          <main className="min-w-0 flex-1">
            <h1 className="font-serif text-2xl text-rose-700 dark:text-rose-300">
              {t(ui.specialDiscount.heading, lang)}
            </h1>

            {filteredProducts.length === 0 ? (
              <div className="mt-6 rounded-2xl bg-white p-10 text-center shadow-sm ring-1 ring-rose-100 dark:bg-[#2a2122] dark:ring-rose-900/40">
                <p className="text-sm text-neutral-500 dark:text-rose-200/60">
                  {t(ui.specialDiscount.noResults, lang)}
                </p>
              </div>
            ) : (
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
                {filteredProducts.map((product) => (
                  <SpecialDiscountCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
