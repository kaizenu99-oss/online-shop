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
          ? "border-neutral-600 hover:border-neutral-400"
          : "border-neutral-300 text-neutral-700 hover:border-neutral-500"
      }`}
    >
      <span
        className={
          lang === "mn"
            ? isDark
              ? "text-white"
              : "text-neutral-900"
            : isDark
              ? "text-neutral-500"
              : "text-neutral-400"
        }
      >
        MN
      </span>
      <span className={isDark ? "text-neutral-600" : "text-neutral-300"}>/</span>
      <span
        className={
          lang === "en"
            ? isDark
              ? "text-white"
              : "text-neutral-900"
            : isDark
              ? "text-neutral-500"
              : "text-neutral-400"
        }
      >
        EN
      </span>
    </button>
  );
}
