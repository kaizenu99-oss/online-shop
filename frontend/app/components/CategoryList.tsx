"use client";

import Image from "next/image";
import { categories } from "../data/categories";
import { useLanguage } from "../context/LanguageContext";
import { ui } from "../data/translations";
import { t } from "../lib/language";

export default function CategoryList() {
  const { lang } = useLanguage();

  return (
    <section className="bg-[#fdeef1] px-4 py-10 sm:px-6 sm:py-16 dark:bg-[#241016]">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="font-serif text-2xl text-rose-700 dark:text-rose-300">
          {t(ui.categories.heading, lang)}
        </h2>
        <p className="mt-2 text-sm text-neutral-500 dark:text-rose-200/60">
          {t(ui.categories.subheading, lang)}
        </p>

        <div className="mt-10 flex flex-wrap items-start justify-center gap-6 sm:gap-8">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`/categories/${category.id}`}
              className="group flex w-24 flex-col items-center gap-3 text-center"
            >
              <span
                className="relative block h-20 w-20 overflow-hidden rounded-full ring-2 ring-rose-200 ring-offset-2 ring-offset-[#fdeef1] transition-shadow group-hover:ring-rose-400 dark:ring-rose-800 dark:ring-offset-[#241016] dark:group-hover:ring-rose-500"
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
              <span className="text-sm font-medium text-neutral-800 dark:text-rose-100">
                {t(category.name, lang)}
              </span>
              <span className="text-xs text-neutral-400 dark:text-rose-200/40">
                {category.productCount} {t(ui.categories.products, lang)}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
