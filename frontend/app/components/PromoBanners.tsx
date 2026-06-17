"use client";

import Image from "next/image";
import { promos } from "../data/promos";
import { useLanguage } from "../context/LanguageContext";
import { ui } from "../data/translations";
import { t } from "../lib/language";

export default function PromoBanners() {
  const { lang } = useLanguage();

  return (
    <section className="px-4 py-10 sm:px-6 sm:py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">
        {promos.map((promo) => (
          <div
            key={promo.id}
            className="flex items-center justify-between gap-4 rounded-md p-6 sm:p-8"
            style={{ backgroundColor: promo.color }}
          >
            <div>
              <p className="text-xs font-semibold tracking-widest text-neutral-600">
                {t(promo.eyebrow, lang)}
              </p>
              <h3 className="mt-2 max-w-[12rem] font-serif text-lg text-neutral-900">
                {t(promo.title, lang)}
              </h3>
              <button className="mt-4 text-sm font-semibold text-neutral-900 underline-offset-2 hover:underline">
                {t(ui.promos.shopNow, lang)}
              </button>
            </div>
            <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full bg-white/40">
              <Image
                src={promo.image}
                alt={t(promo.title, lang)}
                fill
                sizes="80px"
                className="object-cover"
              />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
