"use client";

import { useLanguage } from "../context/LanguageContext";
import { ui } from "../data/translations";
import { t } from "../lib/language";
import type { Localized } from "../lib/language";

export default function ComingSoonCard({ title }: { title: Localized }) {
  const { lang } = useLanguage();

  return (
    <div className="rounded-2xl bg-white p-10 text-center shadow-sm ring-1 ring-rose-100 dark:bg-[#2a2122] dark:ring-rose-900/40">
      <h1 className="font-serif text-2xl text-rose-700 dark:text-rose-300">{t(title, lang)}</h1>
      <p className="mt-3 text-sm text-neutral-500 dark:text-rose-200/60">{t(ui.comingSoon, lang)}</p>
    </div>
  );
}
