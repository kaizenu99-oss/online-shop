"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { SpecialDiscountProduct } from "../data/specialDiscountProducts";
import { useLanguage } from "../context/LanguageContext";
import { ui } from "../data/translations";
import { t } from "../lib/language";
import { formatMnt } from "../lib/currency";

export default function SpecialDiscountCard({ product }: { product: SpecialDiscountProduct }) {
  const { lang } = useLanguage();
  const [saved, setSaved] = useState(false);
  const name = t(product.name, lang);
  const progress = Math.max(10, Math.min(95, 100 - product.daysLeft / 2));

  return (
    <Link
      href={`/product/${product.id}`}
      className="group flex flex-col overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-rose-100 transition-shadow hover:shadow-md dark:bg-[#2a2122] dark:ring-rose-900/40"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-rose-50 dark:bg-rose-950/30">
        <div className="absolute inset-x-0 top-0 z-10 bg-rose-600 px-2 py-1 text-center text-[11px] font-semibold text-white">
          {t(ui.specialDiscount.discountEndsIn, lang)} {product.daysLeft} {t(ui.specialDiscount.days, lang)}
        </div>
        <div className="absolute inset-x-0 top-[26px] z-10 h-1 bg-rose-200/60 dark:bg-rose-900/50">
          <div className="h-full bg-neutral-900 dark:bg-rose-50" style={{ width: `${progress}%` }} />
        </div>

        <Image
          src={product.image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 22vw, 50vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <span className="absolute left-2 top-9 z-10 rounded bg-white px-2 py-1 text-[10px] font-semibold uppercase text-neutral-700 shadow dark:bg-[#2a2122] dark:text-rose-100">
          {product.brand}
        </span>

        <button
          type="button"
          onClick={(event) => {
            event.preventDefault();
            setSaved((value) => !value);
          }}
          aria-label="wishlist"
          className="absolute right-2 top-9 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-neutral-500 shadow dark:bg-[#2a2122] dark:text-rose-200"
        >
          <HeartIcon filled={saved} />
        </button>
      </div>

      <div className="flex flex-col gap-1 p-3">
        <div className="flex gap-1">
          {product.swatches.map((color, index) => (
            <span
              key={index}
              className="h-4 w-4 rounded-full ring-1 ring-rose-200 dark:ring-rose-800"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <p className="text-sm font-medium text-neutral-800 dark:text-rose-100">{name}</p>
        <p className="text-sm font-semibold text-rose-600 dark:text-rose-300">
          {formatMnt(product.price)}{" "}
          <span className="ml-1 text-xs font-normal text-neutral-400 line-through dark:text-rose-200/40">
            {formatMnt(product.oldPrice)}
          </span>
        </p>
        <p className="text-xs font-medium text-rose-600 dark:text-rose-300">{t(ui.deals.special, lang)}</p>
      </div>
    </Link>
  );
}

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 21s-7-4.5-9.5-9C.7 8.5 2.5 5 6 5c2 0 3.5 1 4 2.5C10.5 6 12 5 14 5c3.5 0 5.3 3.5 3.5 7-2.5 4.5-9.5 9-9.5 9z" />
    </svg>
  );
}
