"use client";

import Link from "next/link";
import AccountLayout from "../components/AccountLayout";
import ProductCard from "../components/ProductCard";
import { useRecentlyViewed } from "../context/RecentlyViewedContext";
import { useLanguage } from "../context/LanguageContext";
import { ui } from "../data/translations";
import { t } from "../lib/language";

export default function ViewedPage() {
  const { viewed, clearViewed } = useRecentlyViewed();
  const { lang } = useLanguage();

  return (
    <AccountLayout>
      <div className="flex items-center justify-between">
        <h1 className="font-serif text-2xl text-rose-700 dark:text-rose-300">
          {t(ui.viewedPage.heading, lang)}
        </h1>
        {viewed.length > 0 && (
          <button
            type="button"
            onClick={clearViewed}
            className="text-xs font-medium text-neutral-400 hover:text-rose-600 dark:text-rose-200/50 dark:hover:text-rose-300"
          >
            {t(ui.viewedPage.clear, lang)}
          </button>
        )}
      </div>

      {viewed.length === 0 ? (
        <div className="mt-6 rounded-2xl bg-white p-10 text-center shadow-sm ring-1 ring-rose-100 dark:bg-[#2a2122] dark:ring-rose-900/40">
          <p className="text-sm text-neutral-500 dark:text-rose-200/60">{t(ui.viewedPage.empty, lang)}</p>
          <Link
            href="/"
            className="mt-4 inline-block rounded border border-rose-300 px-5 py-2.5 text-sm font-medium text-rose-600 hover:border-rose-500 dark:border-rose-700 dark:text-rose-200"
          >
            {t(ui.emptyState.browse, lang)}
          </Link>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
          {viewed.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </AccountLayout>
  );
}
