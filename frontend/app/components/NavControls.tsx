"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { ui } from "../data/translations";
import { t } from "../lib/language";

export default function NavControls() {
  const router = useRouter();
  const { lang } = useLanguage();

  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={() => router.back()}
        className="flex items-center justify-center gap-1.5 rounded border border-rose-200 px-3 py-1.5 text-xs font-medium text-neutral-700 hover:border-rose-400 dark:border-rose-800 dark:text-rose-100"
      >
        <BackIcon />
        {t(ui.navControls.back, lang)}
      </button>
      <Link
        href="/"
        className="flex items-center justify-center gap-1.5 rounded border border-rose-200 px-3 py-1.5 text-xs font-medium text-neutral-700 hover:border-rose-400 dark:border-rose-800 dark:text-rose-100"
      >
        <HomeIcon />
        {t(ui.navControls.home, lang)}
      </Link>
    </div>
  );
}

function BackIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5 10v9h14v-9" />
    </svg>
  );
}
