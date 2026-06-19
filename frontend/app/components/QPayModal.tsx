"use client";

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { ui } from "../data/translations";
import { t } from "../lib/language";
import { formatMnt } from "../lib/currency";

const BANK_APPS = ["Khan Bank", "TDB", "Golomt", "State Bank", "Xac Bank"];

export default function QPayModal({
  amount,
  onConfirm,
  onClose,
}: {
  amount: number;
  onConfirm: () => void;
  onClose: () => void;
}) {
  const { lang } = useLanguage();
  const [confirming, setConfirming] = useState(false);

  const handleConfirm = () => {
    setConfirming(true);
    window.setTimeout(() => {
      onConfirm();
    }, 900);
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-sm rounded-lg bg-white p-6 shadow-xl sm:p-8 dark:bg-[#2a2122]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0070f3] text-xs font-bold text-white">
            Q
          </span>
          <p className="font-serif text-xl text-rose-700 dark:text-rose-300">
            {t(ui.walletPage.qpayTitle, lang)}
          </p>
        </div>

        <p className="mt-4 text-center text-xs text-neutral-500 dark:text-rose-200/60">
          {t(ui.walletPage.qpayInstruction, lang)}
        </p>

        <div className="mx-auto mt-5 h-44 w-44">
          <QrCodePlaceholder />
        </div>

        <div className="mt-5 flex items-center justify-between rounded border border-rose-100 px-3 py-2 text-sm dark:border-rose-900/40">
          <span className="text-neutral-500 dark:text-rose-200/60">
            {t(ui.walletPage.qpayInvoiceAmount, lang)}
          </span>
          <span className="font-semibold text-neutral-900 dark:text-rose-50">{formatMnt(amount)}</span>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {BANK_APPS.map((bank) => (
            <span
              key={bank}
              className="rounded border border-rose-200 px-2 py-1 text-[10px] font-medium text-neutral-600 dark:border-rose-800 dark:text-rose-200/70"
            >
              {bank}
            </span>
          ))}
        </div>

        {confirming ? (
          <p className="mt-6 text-center text-xs font-medium text-neutral-500 dark:text-rose-200/60">
            {t(ui.walletPage.qpayWaiting, lang)}
          </p>
        ) : (
          <div className="mt-6 flex flex-col gap-2">
            <button
              type="button"
              onClick={handleConfirm}
              className="w-full rounded bg-rose-600 px-6 py-3 text-sm font-medium text-white hover:bg-rose-700"
            >
              {t(ui.walletPage.qpayConfirm, lang)}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-full rounded border border-rose-200 px-6 py-2.5 text-sm font-medium text-neutral-700 hover:border-rose-400 dark:border-rose-800 dark:text-rose-100"
            >
              {t(ui.walletPage.qpayCancel, lang)}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function QrCodePlaceholder() {
  const cells = Array.from({ length: 49 }, (_, i) => {
    const seed = (i * 17 + 5) % 13;
    return seed < 6;
  });

  return (
    <div className="grid h-full w-full grid-cols-7 grid-rows-7 gap-0.5 rounded bg-white p-2 ring-1 ring-rose-100 dark:ring-rose-900/40">
      {cells.map((filled, i) => (
        <span key={i} className={filled ? "bg-neutral-900" : "bg-transparent"} />
      ))}
    </div>
  );
}
