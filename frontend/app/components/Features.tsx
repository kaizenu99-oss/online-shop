"use client";

import { useLanguage } from "../context/LanguageContext";
import { ui } from "../data/translations";
import { t } from "../lib/language";

const icons = [<ShippingIcon key="shipping" />, <ReturnIcon key="return" />, <TagIcon key="tag" />, <SupportIcon key="support" />];

export default function Features() {
  const { lang } = useLanguage();

  return (
    <section className="border-t border-neutral-200 px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
        {ui.features.map((feature, index) => (
          <div key={t(feature.title, lang)} className="flex items-center gap-4">
            <span className="text-neutral-700">{icons[index]}</span>
            <div>
              <p className="text-sm font-semibold text-neutral-900">
                {t(feature.title, lang)}
              </p>
              <p className="text-xs text-neutral-500">{t(feature.description, lang)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ShippingIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="1" y="6" width="14" height="10" rx="1" />
      <path d="M15 9h4l3 3v4h-7z" />
      <circle cx="6" cy="18" r="1.5" />
      <circle cx="17" cy="18" r="1.5" />
    </svg>
  );
}

function ReturnIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20.59 13.41 12 22l-9-9 8.59-8.59A2 2 0 0 1 13 4h6a1 1 0 0 1 1 1v6a2 2 0 0 1-.41 1.41z" />
      <circle cx="16" cy="8" r="1" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4l3 2" />
    </svg>
  );
}
