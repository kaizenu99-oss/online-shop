"use client";

import { useState } from "react";
import AccountLayout from "../../components/AccountLayout";
import QPayModal from "../../components/QPayModal";
import { useWallet } from "../../context/WalletContext";
import { useLanguage } from "../../context/LanguageContext";
import { ui } from "../../data/translations";
import { t } from "../../lib/language";

const QUICK_AMOUNTS = [5000, 10000, 20000, 50000];

function formatMnt(value: number) {
  return `${value.toLocaleString("en-US")} ₮`;
}

export default function WalletPage() {
  const { balance, transactions, topUp } = useWallet();
  const { lang } = useLanguage();
  const [amount, setAmount] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [qpayAmount, setQpayAmount] = useState<number | null>(null);

  const handleTopUp = (value: number) => {
    if (!value || value <= 0) {
      setError(t(ui.walletPage.invalidAmount, lang));
      setSuccess(false);
      return;
    }
    setError(null);
    setQpayAmount(value);
  };

  const handleQpayConfirm = () => {
    if (qpayAmount === null) return;
    topUp(qpayAmount);
    setQpayAmount(null);
    setAmount("");
    setSuccess(true);
    window.setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <AccountLayout>
      <div className="flex flex-col gap-6">
        <div className="rounded-2xl bg-rose-600 p-8 text-white shadow-sm">
          <p className="text-sm text-rose-100">{t(ui.walletPage.balance, lang)}</p>
          <p className="mt-2 font-serif text-4xl">{formatMnt(balance)}</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-rose-100 dark:bg-[#2a2122] dark:ring-rose-900/40">
          <h2 className="text-sm font-semibold text-neutral-800 dark:text-rose-100">
            {t(ui.walletPage.topUpHeading, lang)}
          </h2>

          <div className="mt-3 flex flex-wrap gap-2">
            {QUICK_AMOUNTS.map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setAmount(String(value))}
                className={`rounded border px-3 py-1.5 text-xs font-medium transition-colors ${
                  amount === String(value)
                    ? "border-rose-600 bg-rose-600 text-white"
                    : "border-rose-200 text-neutral-700 hover:border-rose-400 dark:border-rose-800 dark:text-rose-100"
                }`}
              >
                {formatMnt(value)}
              </button>
            ))}
          </div>

          <div className="mt-4 flex gap-2">
            <input
              type="number"
              min="1"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              placeholder={t(ui.walletPage.amountPlaceholder, lang)}
              className="w-full rounded border border-rose-200 px-3 py-2 text-sm outline-none focus:border-rose-400 dark:border-rose-800 dark:bg-[#1a1516] dark:text-rose-50"
            />
            <button
              type="button"
              onClick={() => handleTopUp(Number(amount))}
              className="shrink-0 rounded bg-rose-600 px-5 py-2 text-sm font-medium text-white hover:bg-rose-700"
            >
              {t(ui.walletPage.topUpButton, lang)}
            </button>
          </div>

          {error && <p className="mt-2 text-xs font-medium text-rose-600 dark:text-rose-300">{error}</p>}
          {success && (
            <p className="mt-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              {t(ui.walletPage.topUpSuccess, lang)}
            </p>
          )}
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-rose-100 dark:bg-[#2a2122] dark:ring-rose-900/40">
          <h2 className="text-sm font-semibold text-neutral-800 dark:text-rose-100">
            {t(ui.walletPage.historyHeading, lang)}
          </h2>

          {transactions.length === 0 ? (
            <p className="mt-3 text-sm text-neutral-500 dark:text-rose-200/60">
              {t(ui.walletPage.noHistory, lang)}
            </p>
          ) : (
            <ul className="mt-3 flex flex-col gap-2">
              {transactions.map((transaction) => (
                <li
                  key={transaction.id}
                  className="flex items-center justify-between rounded border border-rose-100 px-3 py-2 text-sm dark:border-rose-900/40"
                >
                  <span className="text-neutral-500 dark:text-rose-200/60">
                    {new Date(transaction.date).toLocaleString(lang === "mn" ? "mn-MN" : "en-US")}
                  </span>
                  <span className="font-medium text-emerald-600 dark:text-emerald-400">
                    +{formatMnt(transaction.amount)}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {qpayAmount !== null && (
        <QPayModal
          amount={qpayAmount}
          onConfirm={handleQpayConfirm}
          onClose={() => setQpayAmount(null)}
        />
      )}
    </AccountLayout>
  );
}
