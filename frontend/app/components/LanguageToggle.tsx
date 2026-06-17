"use client";

import { useLanguage } from "../context/LanguageContext";

export default function LanguageToggle({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const { lang, toggleLang } = useLanguage();
  const isDark = variant === "dark";

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label="Switch language"
      className={`flex items-center gap-1 rounded-full border px-2.5 py-1.5 text-xs font-semibold ${
        isDark
          ? "border-rose-700 hover:border-rose-400"
          : "border-rose-200 text-neutral-700 hover:border-rose-400"
      }`}
    >
      <span
        className={
          lang === "mn"
            ? isDark
              ? "text-white"
              : "text-rose-700"
            : isDark
              ? "text-rose-400"
              : "text-neutral-400"
        }
      >
        MN
      </span>
      <span className={isDark ? "text-rose-700" : "text-rose-200"}>/</span>
      <span
        className={
          lang === "en"
            ? isDark
              ? "text-white"
              : "text-rose-700"
            : isDark
              ? "text-rose-400"
              : "text-neutral-400"
        }
      >
        EN
      </span>
    </button>
  );
}
