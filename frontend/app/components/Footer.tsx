"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { ui } from "../data/translations";
import { t } from "../lib/language";

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="border-t border-rose-100 bg-[#f1e6e6] px-4 py-10 sm:px-6 sm:py-12 dark:border-rose-900/60 dark:bg-[#2a2122]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
        <div>
          <p className="font-serif text-2xl text-rose-700 dark:text-rose-300">🌸 Төгс сонголт</p>
          <p className="mt-3 max-w-xs text-sm text-neutral-500 dark:text-rose-200/60">
            {t(ui.footer.tagline, lang)}
          </p>
        </div>

        {ui.footer.columns.map((column) => (
          <div key={t(column.title, lang)}>
            <p className="text-sm font-semibold text-neutral-900 dark:text-rose-100">
              {t(column.title, lang)}
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {column.links.map((link) => (
                <li key={t(link, lang)}>
                  <Link
                    href="#"
                    className="text-sm text-neutral-500 hover:text-rose-600 dark:text-rose-200/60 dark:hover:text-rose-300"
                  >
                    {t(link, lang)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-rose-100 pt-6 text-xs text-neutral-400 dark:border-rose-900/60 dark:text-rose-200/40">
        © {new Date().getFullYear()} Төгс сонголт. {t(ui.footer.rights, lang)}
      </div>
    </footer>
  );
}
