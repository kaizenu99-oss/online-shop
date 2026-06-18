"use client";

import Image from "next/image";
import Link from "next/link";
import { dealProducts } from "../data/dealProducts";
import { useLanguage } from "../context/LanguageContext";
import { ui } from "../data/translations";
import { t } from "../lib/language";

function formatMnt(value: number) {
  return `${value.toLocaleString("en-US")} ₮`;
}

export default function DealsGrid() {
  const { lang } = useLanguage();

  return (
    <section className="px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center font-serif text-2xl text-rose-700 dark:text-rose-300">
          {t(ui.deals.heading, lang)}
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {dealProducts.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <Link
                href={`/product/${product.id}`}
                className="relative aspect-[3/4] w-full overflow-hidden rounded-md bg-rose-50 dark:bg-rose-950/40"
              >
                <Image
                  src={product.image}
                  alt={t(product.name, lang)}
                  fill
                  sizes="(min-width: 640px) 25vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>

              <div className="mt-3 flex flex-col gap-1">
                <span className="relative block h-9 w-9 overflow-hidden rounded ring-1 ring-rose-200 dark:ring-rose-800">
                  <Image src={product.swatch} alt="" fill sizes="36px" className="object-cover" />
                </span>

                <Link
                  href={`/product/${product.id}`}
                  className="mt-1 text-sm font-medium text-neutral-800 hover:text-rose-600 dark:text-rose-100 dark:hover:text-rose-300"
                >
                  {t(product.name, lang)}
                </Link>

                <p className="text-sm font-semibold text-rose-600 dark:text-rose-300">
                  {formatMnt(product.price)}{" "}
                  <span className="ml-1 text-xs font-normal text-neutral-400 line-through dark:text-rose-200/40">
                    {formatMnt(product.oldPrice)}
                  </span>
                </p>

                <p
                  className={`text-xs font-medium ${
                    product.label === "discount"
                      ? "text-orange-600 dark:text-orange-400"
                      : "text-rose-600 dark:text-rose-300"
                  }`}
                >
                  {t(product.label === "discount" ? ui.deals.discount : ui.deals.special, lang)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
