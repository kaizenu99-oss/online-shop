"use client";

import { useMemo, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SpecialDiscountCard from "../components/SpecialDiscountCard";
import {
  specialDiscountProducts,
  type AgeCategory,
} from "../data/specialDiscountProducts";
import { useLanguage } from "../context/LanguageContext";
import { ui } from "../data/translations";
import { t } from "../lib/language";

const ageOptions: AgeCategory[] = ["adult", "child"];

export default function SpecialDiscountPage() {
  const { lang } = useLanguage();
  const [selectedAges, setSelectedAges] = useState<Set<AgeCategory>>(new Set());

  const toggleAge = (age: AgeCategory) => {
    setSelectedAges((current) => {
      const next = new Set(current);
      if (next.has(age)) next.delete(age);
      else next.add(age);
      return next;
    });
  };

  const clearFilters = () => {
    setSelectedAges(new Set());
  };

  const filteredProducts = useMemo(() => {
    return specialDiscountProducts.filter((product) => {
      if (selectedAges.size > 0 && !selectedAges.has(product.ageCategory)) return false;
      return true;
    });
  }, [selectedAges]);

  const hasFilters = selectedAges.size > 0;

  return (
    <>
      <Header />
      <div className="flex flex-1 flex-col bg-background">
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 px-4 py-8 sm:flex-row sm:px-6">
          <aside className="w-full shrink-0 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-rose-100 dark:bg-[#2a2122] dark:ring-rose-900/40 sm:w-64">
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400 dark:text-rose-200/40">
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
