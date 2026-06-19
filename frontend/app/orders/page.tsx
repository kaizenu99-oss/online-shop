"use client";

import Image from "next/image";
import AccountLayout from "../components/AccountLayout";
import { useOrders } from "../context/OrdersContext";
import { useLanguage } from "../context/LanguageContext";
import { ui } from "../data/translations";
import { t } from "../lib/language";
import { formatMnt } from "../lib/currency";

export default function OrdersPage() {
  const { orders } = useOrders();
  const { lang } = useLanguage();

  return (
    <AccountLayout>
      <div className="flex flex-col gap-4">
        <h1 className="font-serif text-2xl text-rose-700 dark:text-rose-300">
          {t(ui.ordersPage.heading, lang)}
        </h1>

        {orders.length === 0 ? (
          <div className="rounded-2xl bg-white p-10 text-center shadow-sm ring-1 ring-rose-100 dark:bg-[#2a2122] dark:ring-rose-900/40">
            <p className="text-sm text-neutral-500 dark:text-rose-200/60">{t(ui.ordersPage.empty, lang)}</p>
          </div>
        ) : (
          orders.map((order) => {
            const itemCount = order.items.reduce((sum, item) => sum + item.quantity, 0);
            return (
              <div
                key={order.id}
                className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-rose-100 dark:bg-[#2a2122] dark:ring-rose-900/40"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-rose-100 pb-3 text-sm dark:border-rose-900/40">
                  <span className="font-medium text-neutral-800 dark:text-rose-100">
                    {t(ui.ordersPage.orderLabel, lang)} #{order.id.slice(-6)}
                  </span>
                  <span className="text-neutral-400 dark:text-rose-200/40">
                    {new Date(order.date).toLocaleString(lang === "mn" ? "mn-MN" : "en-US")}
                  </span>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                    {t(ui.ordersPage.status, lang)}
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap gap-3">
                  {order.items.map((item) => (
                    <span
                      key={item.id}
                      className="relative block h-12 w-12 overflow-hidden rounded-md"
                      style={{ backgroundColor: item.product.color }}
                    >
                      <Image
                        src={item.product.image}
                        alt={t(item.product.name, lang)}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </span>
                  ))}
                </div>

                <div className="mt-3 flex items-center justify-between text-sm">
                  <span className="text-neutral-500 dark:text-rose-200/60">
                    {itemCount} {t(ui.ordersPage.itemsCount, lang)}
                  </span>
                  <span className="font-semibold text-neutral-900 dark:text-rose-50">
                    {formatMnt(order.total)}
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </AccountLayout>
  );
}
