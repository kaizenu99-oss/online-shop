"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";
import { ui } from "../data/translations";
import { t } from "../lib/language";

type Tab = "new-arrival";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("new-arrival");
  const { lang } = useLanguage();
  const pathname = usePathname();
  const onSpecialDiscount = pathname === "/special-discount";
  const onCategories = pathname === "/categories" || pathname?.startsWith("/categories/");

  const tabs: { id: Tab; label: string }[] = [
    { id: "new-arrival", label: t(ui.nav.newArrival, lang) },
  ];

  const links = [
    { label: t(ui.nav.brands, lang), href: "/brands" },
    { label: t(ui.nav.giftCard, lang), href: "/gift-card" },
    { label: t(ui.nav.aboutUs, lang), href: "/about" },
  ];

  return (
    <nav className="border-b border-rose-100 bg-white dark:border-rose-900/60 dark:bg-[#2a2122]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 text-sm sm:px-6">
        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          className="flex items-center gap-2 text-xs font-medium tracking-wide text-neutral-700 md:hidden dark:text-rose-200"
        >
          <MenuIcon open={menuOpen} />
          {t(ui.nav.menu, lang)}
        </button>

        <ul className="hidden items-center gap-7 md:flex">
          <li>
            <Link
              href="/categories"
              className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium text-white transition-colors ${
                onCategories ? "bg-rose-700" : "bg-rose-600 hover:bg-rose-700"
              }`}
            >
              <CategoriesIcon />
              {t(ui.nav.categories, lang)}
            </Link>
          </li>
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={
                  activeTab === tab.id
                    ? "font-medium text-rose-600 dark:text-rose-300"
                    : "text-neutral-700 hover:text-rose-600 dark:text-rose-200/70 dark:hover:text-rose-300"
                }
              >
                {tab.label}
              </button>
            </li>
          ))}
          <li>
            <Link
              href="/special-discount"
              className={
                onSpecialDiscount
                  ? "font-medium text-rose-600 dark:text-rose-300"
                  : "text-neutral-700 hover:text-rose-600 dark:text-rose-200/70 dark:hover:text-rose-300"
              }
            >
              {t(ui.nav.specialDiscount, lang)}
            </Link>
          </li>
        </ul>

        <ul className="hidden items-center gap-7 text-neutral-700 md:flex dark:text-rose-200/70">
          {links.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className="hover:text-rose-600 dark:hover:text-rose-300">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {menuOpen && (
        <ul className="flex flex-col border-t border-rose-100 px-4 py-2 text-sm md:hidden dark:border-rose-900/60">
          {[
            { label: t(ui.nav.categories, lang), href: "/categories" },
            ...tabs.map((tab) => ({ label: tab.label, isTab: true, id: tab.id })),
            { label: t(ui.nav.specialDiscount, lang), href: "/special-discount" },
            ...links.map((link) => ({ label: link.label, href: link.href })),
          ].map(
            (item) => (
              <li key={item.label} className="border-b border-rose-50 last:border-b-0 dark:border-rose-900/40">
                {"isTab" in item ? (
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab(item.id as Tab);
                      setMenuOpen(false);
                    }}
                    className={`flex w-full items-center justify-between py-3 text-left ${
                      activeTab === item.id ? "font-medium text-rose-600 dark:text-rose-300" : "text-neutral-700 dark:text-rose-200/70"
                    }`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={item.href ?? "#"}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between py-3 text-neutral-700 hover:text-neutral-900 dark:text-rose-200/70 dark:hover:text-rose-300"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            )
          )}
        </ul>
      )}
    </nav>
  );
}

function CategoriesIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    );
  }

  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}
