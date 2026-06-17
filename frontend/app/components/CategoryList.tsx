"use client";

import Image from "next/image";
import { categories } from "../data/categories";
import { useLanguage } from "../context/LanguageContext";
import { ui } from "../data/translations";
import { t } from "../lib/language";

export default function CategoryList() {
  const { lang } = useLanguage();

  return (
    <section className="bg-[#f6f1ea] px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="font-serif text-2xl text-neutral-900">
          {t(ui.categories.heading, lang)}
        </h2>
        <p className="mt-2 text-sm text-neutral-500">
          {t(ui.categories.subheading, lang)}
        </p>

        <div className="mt-10 flex flex-wrap items-start justify-center gap-6 sm:gap-8">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`/categories/${category.id}`}
              className="flex w-24 flex-col items-center gap-3 text-center"
            >
              <span
                className="relative block h-20 w-20 overflow-hidden rounded-full"
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
              <span className="text-sm font-medium text-neutral-800">
                {t(category.name, lang)}
              </span>
              <span className="text-xs text-neutral-400">
                {category.productCount} {t(ui.categories.products, lang)}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
