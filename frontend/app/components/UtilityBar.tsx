"use client";

import { useLanguage } from "../context/LanguageContext";
import { ui } from "../data/translations";
import { t } from "../lib/language";
import LanguageToggle from "./LanguageToggle";

export default function UtilityBar() {
  const { lang } = useLanguage();

  return (
    <div className="bg-neutral-900 text-neutral-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs sm:px-6">
        <p className="truncate">{t(ui.utilityBar.welcome, lang)}</p>

        <div className="hidden items-center gap-4 md:flex">
          <a href="/orders" className="flex items-center gap-1.5 hover:text-white">
            <OrdersIcon />
            {t(ui.utilityBar.myOrders, lang)}
          </a>
          <span className="h-3 w-px bg-neutral-700" />
          <a href="/branches" className="flex items-center gap-1.5 hover:text-white">
            <PinIcon />
            {t(ui.utilityBar.branchAddress, lang)}
            <Caret />
          </a>
          <a href="/help" className="flex items-center gap-1.5 hover:text-white">
            <HelpIcon />
            {t(ui.utilityBar.help, lang)}
          </a>
          <span className="h-3 w-px bg-neutral-700" />
          <a href="#" aria-label="Facebook" className="hover:text-white">
            <FacebookIcon />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-white">
            <InstagramIcon />
          </a>
        </div>

        <LanguageToggle variant="dark" />
      </div>
    </div>
  );
}

function OrdersIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="7" width="18" height="14" rx="1" />
      <path d="M8 7V5a4 4 0 0 1 8 0v2" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function HelpIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .8-1 1.7" />
      <line x1="12" y1="17" x2="12" y2="17.01" />
    </svg>
  );
}

function Caret() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.83c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
