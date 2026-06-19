"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrdersContext";
import { useLanguage } from "../context/LanguageContext";
import { ui } from "../data/translations";
import { t } from "../lib/language";
import { formatMnt } from "../lib/currency";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();
  const { addOrder } = useOrders();
  const { lang } = useLanguage();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleCheckout = () => {
    addOrder(items, totalPrice);
    clearCart();
    setOrderPlaced(true);
    window.setTimeout(() => setOrderPlaced(false), 3000);
  };

  return (
    <>
      <Header />
      <div className="flex flex-1 flex-col bg-background">
        <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
          <h1 className="font-serif text-2xl text-rose-700 dark:text-rose-300">
            {t(ui.cartPage.heading, lang)}
          </h1>

          {orderPlaced && (
            <p className="mt-4 rounded bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
              {t(ui.cartPage.orderPlaced, lang)}
            </p>
          )}

          {items.length === 0 ? (
            <div className="mt-6 flex flex-col items-center gap-4 rounded-2xl bg-white p-12 text-center shadow-sm ring-1 ring-rose-100 dark:bg-[#2a2122] dark:ring-rose-900/40">
              <p className="text-sm text-neutral-500 dark:text-rose-200/60">{t(ui.cartPage.empty, lang)}</p>
              <Link
                href="/"
                className="rounded border border-rose-300 px-5 py-2.5 text-sm font-medium text-rose-600 hover:border-rose-500 dark:border-rose-700 dark:text-rose-200"
              >
                {t(ui.cartPage.browse, lang)}
              </Link>
            </div>
          ) : (
            <div className="mt-6 flex flex-col gap-6 sm:flex-row">
              <div className="min-w-0 flex-1 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-rose-100 dark:bg-[#2a2122] dark:ring-rose-900/40">
                <ul className="flex flex-col divide-y divide-rose-100 dark:divide-rose-900/40">
                  {items.map((item) => (
                    <li key={item.id} className="flex items-center gap-4 py-4">
                      <span
                        className="relative block h-16 w-16 shrink-0 overflow-hidden rounded-md"
                        style={{ backgroundColor: item.product.color }}
                      >
                        <Image
                          src={item.product.image}
                          alt={t(item.product.name, lang)}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </span>

                      <div className="min-w-0 flex-1">
                        <Link
                          href={`/product/${item.product.id}`}
                          className="text-sm font-medium text-neutral-800 hover:text-rose-600 dark:text-rose-100 dark:hover:text-rose-300"
                        >
                          {t(item.product.name, lang)}
                        </Link>
                        <p className="mt-1 text-sm font-semibold text-neutral-900 dark:text-rose-50">
                          {formatMnt(item.product.price)}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="flex h-7 w-7 items-center justify-center rounded border border-rose-200 text-neutral-600 hover:border-rose-400 dark:border-rose-800 dark:text-rose-100"
                        >
                          −
                        </button>
                        <span className="w-6 text-center text-sm text-neutral-800 dark:text-rose-100">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="flex h-7 w-7 items-center justify-center rounded border border-rose-200 text-neutral-600 hover:border-rose-400 dark:border-rose-800 dark:text-rose-100"
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs font-medium text-neutral-400 hover:text-rose-600 dark:text-rose-200/50 dark:hover:text-rose-300"
                      >
                        {t(ui.cartPage.remove, lang)}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full shrink-0 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-rose-100 dark:bg-[#2a2122] dark:ring-rose-900/40 sm:w-72">
                <h2 className="text-sm font-semibold text-neutral-800 dark:text-rose-100">
                  {t(ui.cartPage.summaryHeading, lang)}
                </h2>

                <div className="mt-4 flex items-center justify-between text-sm text-neutral-600 dark:text-rose-200/70">
                  <span>{t(ui.cartPage.subtotal, lang)}</span>
                  <span>{formatMnt(totalPrice)}</span>
                </div>
                <div className="mt-2 flex items-center justify-between border-t border-rose-100 pt-2 text-sm font-semibold text-neutral-900 dark:border-rose-900/40 dark:text-rose-50">
                  <span>{t(ui.cartPage.total, lang)}</span>
                  <span>{formatMnt(totalPrice)}</span>
                </div>

                <button
                  type="button"
                  onClick={handleCheckout}
                  className="mt-5 w-full rounded bg-rose-600 px-6 py-3 text-sm font-medium text-white hover:bg-rose-700"
                >
                  {t(ui.cartPage.checkout, lang)}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
