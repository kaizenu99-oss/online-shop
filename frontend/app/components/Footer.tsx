"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { ui } from "../data/translations";
import { t } from "../lib/language";

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="border-t border-neutral-200 bg-[#f6f1ea] px-4 py-10 sm:px-6 sm:py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
        <div>
          <p className="font-serif text-2xl text-neutral-900">pesio</p>
          <p className="mt-3 max-w-xs text-sm text-neutral-500">
            {t(ui.footer.tagline, lang)}
          </p>
        </div>

        {ui.footer.columns.map((column) => (
          <div key={t(column.title, lang)}>
            <p className="text-sm font-semibold text-neutral-900">
              {t(column.title, lang)}
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {column.links.map((link) => (
                <li key={t(link, lang)}>
                  <Link
                    href="#"
                    className="text-sm text-neutral-500 hover:text-neutral-900"
                  >
                    {t(link, lang)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-neutral-200 pt-6 text-xs text-neutral-400">
        © {new Date().getFullYear()} pesio. {t(ui.footer.rights, lang)}
      </div>
    </footer>
  );
}
