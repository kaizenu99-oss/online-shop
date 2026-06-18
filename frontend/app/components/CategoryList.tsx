"use client";

import Image from "next/image";
import { categories } from "../data/categories";
import { useLanguage } from "../context/LanguageContext";
import { ui } from "../data/translations";
import { t } from "../lib/language";

export default function CategoryList() {
  const { lang } = useLanguage();

  return (
    <section className="bg-[#f1e6e6] px-4 py-10 sm:px-6 sm:py-16 dark:bg-[#2a2122]">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="font-serif text-2xl text-rose-700 dark:text-rose-300">
          {t(ui.categories.heading, lang)}
        </h2>
        <p className="mt-2 text-sm text-neutral-500 dark:text-rose-200/60">
          {t(ui.categories.subheading, lang)}
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`/categories/${category.id}`}
              className="group flex flex-col items-center gap-3 rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-rose-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-rose-300 dark:bg-[#2a2122] dark:ring-rose-900/50 dark:hover:ring-rose-600"
            >
              <span
                className="relative block h-20 w-20 overflow-hidden rounded-full ring-2 ring-rose-200 ring-offset-2 ring-offset-white transition-transform duration-300 group-hover:scale-105 group-hover:ring-rose-400 dark:ring-rose-800 dark:ring-offset-[#2a2122] dark:group-hover:ring-rose-500"
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
              <span className="text-sm font-medium text-neutral-800 group-hover:text-rose-600 dark:text-rose-100 dark:group-hover:text-rose-300">
                {t(category.name, lang)}
              </span>
              <span className="rounded-full bg-rose-50 px-2.5 py-0.5 text-xs text-rose-500 dark:bg-rose-900/40 dark:text-rose-200/70">
                {category.productCount} {t(ui.categories.products, lang)}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
