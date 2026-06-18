"use client";

import Link from "next/link";
import AccountLayout from "../components/AccountLayout";
import { useLanguage } from "../context/LanguageContext";
import { ui } from "../data/translations";
import { t } from "../lib/language";

export default function DashboardPage() {
  const { lang } = useLanguage();

  return (
    <AccountLayout>
      <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-rose-100 dark:bg-[#2a2122] dark:ring-rose-900/40">
        <h1 className="font-serif text-2xl text-rose-700 dark:text-rose-300">
          {t(ui.dashboardPage.welcome, lang)}
        </h1>
        <p className="mt-2 text-sm text-neutral-500 dark:text-rose-200/60">
          {t(ui.dashboardPage.body, lang)}
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded border border-rose-300 px-5 py-2.5 text-sm font-medium text-rose-600 hover:border-rose-500 dark:border-rose-700 dark:text-rose-200"
        >
          {t(ui.dashboardPage.browse, lang)}
        </Link>
      </div>
    </AccountLayout>
  );
}
