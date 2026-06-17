"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { useCart } from "../context/CartContext";
import { ui } from "../data/translations";
import { t } from "../lib/language";
import LoginModal from "./LoginModal";

export default function TopBar() {
  const { lang } = useLanguage();
  const { totalCount } = useCart();
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <div className="border-b border-rose-100 dark:border-rose-900/60">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 sm:gap-8 sm:px-6">
        <Link href="/" className="flex shrink-0 items-baseline gap-2">
          <span aria-hidden className="text-xl">🌸</span>
          <span className="font-serif text-2xl font-bold tracking-wide text-rose-700 sm:text-3xl dark:text-rose-300">
            Төгс сонголт
          </span>
          <span className="hidden text-xs leading-tight text-neutral-500 sm:block dark:text-rose-200/60">
            {t(ui.topBar.tagline, lang)}
          </span>
        </Link>

        <button
          type="button"
          aria-label={t(ui.topBar.searchPlaceholder, lang)}
          className="flex items-center justify-center rounded-full border border-rose-200 p-2 sm:hidden dark:border-rose-800 dark:text-rose-200"
        >
          <SearchIcon />
        </button>

        <div className="hidden flex-1 items-center gap-2 rounded-full border border-rose-200 px-4 py-2.5 focus-within:border-rose-400 sm:flex dark:border-rose-800 dark:text-rose-200 dark:focus-within:border-rose-500">
          <SearchIcon />
          <input
            type="text"
            placeholder={t(ui.topBar.searchPlaceholder, lang)}
            className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-400 dark:placeholder:text-rose-200/40"
          />
        </div>

        <div className="ml-auto flex items-center gap-4 text-neutral-700 sm:gap-6 dark:text-rose-200">
          <Link href="/wishlist" className="hidden flex-col items-center gap-1 hover:text-rose-600 sm:flex dark:hover:text-rose-400">
            <HeartIcon />
            <span className="text-[11px] text-neutral-600 dark:text-rose-200/70">{t(ui.topBar.saved, lang)}</span>
          </Link>
          <Link href="/viewed" className="hidden flex-col items-center gap-1 hover:text-rose-600 md:flex dark:hover:text-rose-400">
            <EyeIcon />
            <span className="text-[11px] text-neutral-600 dark:text-rose-200/70">{t(ui.topBar.viewed, lang)}</span>
          </Link>
          <Link href="/cart" className="flex flex-col items-center gap-1 hover:text-rose-600 dark:hover:text-rose-400">
            <span className="relative">
              <CartIcon />
              {totalCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-semibold text-white">
                  {totalCount}
                </span>
              )}
            </span>
            <span className="text-[11px] text-neutral-600 dark:text-rose-200/70">{t(ui.topBar.basket, lang)}</span>
          </Link>
          <button
            type="button"
            onClick={() => setLoginOpen(true)}
            className="flex flex-col items-center gap-1"
          >
            <UserIcon />
            <span className="hidden text-[11px] text-neutral-600 sm:block dark:text-rose-200/70">
              {t(ui.topBar.registration, lang)}
            </span>
          </button>
        </div>
      </div>

      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </div>
  );
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 21s-7-4.5-9.5-9C.7 8.5 2.5 5 6 5c2 0 3.5 1 4 2.5C10.5 6 12 5 14 5c3.5 0 5.3 3.5 3.5 7-2.5 4.5-9.5 9-9.5 9z" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
    </svg>
  );
}
