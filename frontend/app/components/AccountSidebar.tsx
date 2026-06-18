"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";
import { ui } from "../data/translations";
import { t } from "../lib/language";
import type { Localized } from "../lib/language";

type NavItem = {
  href: string;
  label: Localized;
  icon: React.ReactNode;
};

export default function AccountSidebar() {
  const pathname = usePathname();
  const { lang } = useLanguage();

  const personalItems: NavItem[] = [
    { href: "/account/profile", label: ui.account.profile, icon: <UserIcon /> },
    { href: "/wishlist", label: ui.account.saved, icon: <HeartIcon /> },
    { href: "/account/wallet", label: ui.account.wallet, icon: <WalletIcon /> },
    { href: "/viewed", label: ui.account.viewed, icon: <EyeIcon /> },
  ];

  const orderItems: NavItem[] = [
    { href: "/orders", label: ui.account.myOrders, icon: <BoxIcon /> },
    { href: "/account/coupons", label: ui.account.coupon, icon: <CouponIcon /> },
  ];

  return (
    <aside className="w-full shrink-0 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-rose-100 dark:bg-[#2a2122] dark:ring-rose-900/40 sm:w-64">
      <nav className="flex flex-col gap-1">
        <NavLink href="/account" label={ui.account.dashboard} icon={<GridIcon />} pathname={pathname} lang={lang} />

        <p className="mt-4 px-4 text-xs font-semibold uppercase tracking-wide text-neutral-400 dark:text-rose-200/40">
          {t(ui.account.personalInfo, lang)}
        </p>
        {personalItems.map((item) => (
          <NavLink key={item.href} {...item} pathname={pathname} lang={lang} />
        ))}

        <p className="mt-4 px-4 text-xs font-semibold uppercase tracking-wide text-neutral-400 dark:text-rose-200/40">
          {t(ui.account.ordersSection, lang)}
        </p>
        {orderItems.map((item) => (
          <NavLink key={item.href} {...item} pathname={pathname} lang={lang} />
        ))}
      </nav>
    </aside>
  );
}

function NavLink({ href, label, icon, pathname, lang }: NavItem & { pathname: string; lang: "mn" | "en" }) {
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
        active
          ? "bg-rose-600 text-white"
          : "text-neutral-700 hover:bg-rose-50 dark:text-rose-100 dark:hover:bg-rose-900/30"
      }`}
    >
      {icon}
      {t(label, lang)}
    </Link>
  );
}

function GridIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="8" height="8" rx="1.5" />
      <rect x="13" y="3" width="8" height="8" rx="1.5" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" />
      <rect x="13" y="13" width="8" height="8" rx="1.5" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 21s-7-4.5-9.5-9C.7 8.5 2.5 5 6 5c2 0 3.5 1 4 2.5C10.5 6 12 5 14 5c3.5 0 5.3 3.5 3.5 7-2.5 4.5-9.5 9-9.5 9z" />
    </svg>
  );
}

function WalletIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="6" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
      <circle cx="16" cy="14.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function BoxIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 8l-9-5-9 5 9 5 9-5z" />
      <path d="M3 8v8l9 5 9-5V8" />
      <path d="M12 13v8" />
    </svg>
  );
}

function CouponIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1.5a1.5 1.5 0 0 0 0 3V15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1.5a1.5 1.5 0 0 0 0-3V9z" />
      <line x1="9" y1="7" x2="9" y2="17" strokeDasharray="2 2" />
    </svg>
  );
}
