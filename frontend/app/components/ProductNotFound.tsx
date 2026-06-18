"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { ui } from "../data/translations";
import { t } from "../lib/language";

export default function ProductNotFound() {
  const { lang } = useLanguage();

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-3 bg-background px-4 py-24 text-center">
      <h1 className="font-serif text-2xl text-rose-700 dark:text-rose-300">
        {t(ui.productPage.notFoundTitle, lang)}
      </h1>
      <p className="text-sm text-neutral-500 dark:text-rose-200/60">
        {t(ui.productPage.notFoundBody, lang)}
      </p>
      <Link
        href="/"
        className="mt-2 rounded border border-rose-200 px-4 py-2 text-sm font-medium text-rose-600 hover:border-rose-400 dark:border-rose-800 dark:text-rose-200"
      >
        {t(ui.emptyState.browse, lang)}
      </Link>
    </div>
  );
}
