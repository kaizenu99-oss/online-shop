"use client";

import { useState } from "react";
import Topbar from "./components/Topbar";
import StatusBadge from "./components/StatusBadge";
import StatCard from "./components/StatCard";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import { useLocalState } from "./lib/useLocalState";
import { seedCategories, seedOrders, seedProducts } from "./lib/seed";
import { getMonthlyBuckets } from "./lib/salesTrend";

function formatMnt(value: number) {
  return `${value.toLocaleString("en-US")} ₮`;
}

function formatSignedMnt(value: number) {
  return `${value < 0 ? "-" : ""}${Math.abs(value).toLocaleString("en-US")} ₮`;
}

const MONTHLY_OVERHEAD = 40000;

export default function DashboardPage() {
  const [categories] = useLocalState("admin-categories", seedCategories);
  const [orders] = useLocalState("admin-orders", seedOrders);
  const [products] = useLocalState("admin-products", seedProducts);

  const months = getMonthlyBuckets(orders);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const bucket = months[selectedMonth];

  const monthOrders = bucket.orders;
  const monthRevenue = bucket.total;
  const monthExpense = MONTHLY_OVERHEAD + Math.round(monthRevenue * 0.3);
  const netProfit = monthRevenue - monthExpense;

  const year = new Date().getFullYear();
  const daysInMonth = new Date(year, selectedMonth + 1, 0).getDate();
  const firstWeekday = (new Date(year, selectedMonth, 1).getDay() + 6) % 7;
  const ordersByDay = new Map<number, typeof monthOrders>();
  for (const order of monthOrders) {
    const day = new Date(order.date).getDate();
    ordersByDay.set(day, [...(ordersByDay.get(day) ?? []), order]);
  }
  const calendarCells = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  const WEEKDAY_LABELS = ["Да", "Мя", "Лх", "Пү", "Ба", "Бя", "Ня"];

  const stockByCategory = new Map<string, number>();
  for (const product of products) {
    stockByCategory.set(product.category, (stockByCategory.get(product.category) ?? 0) + product.stock);
  }
  const categoryBars = categories.map((category) => ({
    label: category.name,
    value: stockByCategory.get(category.name) ?? 0,
  }));

  return (
    <>
      <Topbar title="Хянах самбар" />
      <main className="flex-1 p-6">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatCard
            label="Захиалга"
            value={monthOrders.length}
            sublabel={bucket.label}
            icon={<BagIcon />}
          />
          <StatCard
            label="Орлого"
            value={formatMnt(monthRevenue)}
            sublabel={bucket.label}
            icon={<WalletIcon />}
          />
          <StatCard
            label="Зарлага"
            value={formatMnt(monthExpense)}
            sublabel={bucket.label}
            icon={<ExpenseIcon />}
            valueClassName={netProfit < 0 ? "text-rose-600" : undefined}
          />
          <StatCard
            label="Цэвэр ашиг"
            value={formatSignedMnt(netProfit)}
            sublabel={netProfit < 0 ? `${bucket.label} • Алдагдал` : bucket.label}
            icon={<ProfitIcon />}
            valueClassName={netProfit < 0 ? "text-rose-600" : "text-emerald-600"}
          />
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-rose-100">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-neutral-800">Борлуулалтын чиглэл</h2>
              <div className="text-right">
                <p className="text-xs text-neutral-400">{bucket.label}</p>
                <p className="text-sm font-semibold text-teal-600">{formatMnt(monthRevenue)}</p>
                <p className="text-xs text-neutral-400">{monthOrders.length} захиалга</p>
              </div>
            </div>
            <div className="mt-4">
              <LineChart
                data={months.map((m) => m.total)}
                labels={months.map((_, i) => String(i + 1))}
                axisLabel="Сарууд"
                selectedIndex={selectedMonth}
                onSelect={setSelectedMonth}
              />
            </div>

            <div className="mt-4 border-t border-rose-100 pt-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                  {bucket.label} — хуанли
                </h3>
                <div className="flex items-center gap-3 text-[10px] text-neutral-500">
                  <span className="flex items-center gap-1">
                    <BoxIcon /> Захиалга
                  </span>
                  <span className="flex items-center gap-1">
                    <TruckIcon /> Хүргэлт
                  </span>
                </div>
              </div>

              <div className="mt-2 grid grid-cols-7 gap-1 text-center text-[10px] text-neutral-400">
                {WEEKDAY_LABELS.map((w) => (
                  <span key={w}>{w}</span>
                ))}
              </div>
              <div className="mt-1 grid grid-cols-7 gap-1">
                {calendarCells.map((day, i) => {
                  if (day === null) return <div key={`empty-${i}`} />;
                  const dayOrders = ordersByDay.get(day) ?? [];
                  const hasOrder = dayOrders.length > 0;
                  const hasDelivery = dayOrders.some(
                    (order) => order.status === "shipped" || order.status === "completed"
                  );
                  return (
                    <div
                      key={day}
                      className={`flex flex-col items-center gap-0.5 rounded-lg border p-1.5 ${
                        hasOrder ? "border-rose-200 bg-rose-50" : "border-transparent"
                      }`}
                    >
                      <span className={`text-xs ${hasOrder ? "font-semibold text-neutral-800" : "text-neutral-400"}`}>
                        {day}
                      </span>
                      <div className="flex h-3.5 gap-0.5">
                        {hasOrder && <BoxIcon />}
                        {hasDelivery && <TruckIcon />}
                      </div>
                    </div>
                  );
                })}
              </div>

              {monthOrders.length > 0 && (
                <ul className="mt-3 flex flex-col gap-1.5 border-t border-rose-50 pt-3">
                  {[...monthOrders]
                    .sort((a, b) => new Date(a.date).getDate() - new Date(b.date).getDate())
                    .map((order) => (
                      <li key={order.id} className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-1.5 text-neutral-600">
                          <BoxIcon />
                          {order.status === "shipped" || order.status === "completed" ? <TruckIcon /> : null}
                          <span className="font-medium text-neutral-900">
                            {new Date(order.date).getDate()}-ны өдөр
                          </span>{" "}
                          — {order.customer}
                        </span>
                        <span className="font-medium text-neutral-900">{formatMnt(order.total)}</span>
                      </li>
                    ))}
                </ul>
              )}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-rose-100">
            <h2 className="text-sm font-semibold text-neutral-800">Ангилал тус бүрийн барааны тоо ширхэг</h2>
            <div className="mt-4">
              <BarChart data={categoryBars} />
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-rose-100">
          <h2 className="text-sm font-semibold text-neutral-800">Сүүлийн захиалгууд</h2>
          <table className="mt-3 w-full text-left text-sm">
            <thead>
              <tr className="border-b border-rose-100 text-xs text-neutral-400">
                <th className="py-2">Захиалгын №</th>
                <th className="py-2">Харилцагч</th>
                <th className="py-2">Дүн</th>
                <th className="py-2">Төлөв</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-rose-50 last:border-b-0">
                  <td className="py-2.5 text-neutral-700">#{order.id}</td>
                  <td className="py-2.5 text-neutral-700">{order.customer}</td>
                  <td className="py-2.5 font-medium text-neutral-900">{formatMnt(order.total)}</td>
                  <td className="py-2.5">
                    <StatusBadge status={order.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}

function BoxIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#e11d48" strokeWidth="2.5">
      <path d="M21 8l-9-5-9 5 9 5 9-5z" />
      <path d="M3 8v8l9 5 9-5V8" />
      <path d="M12 13v8" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2.5">
      <rect x="1" y="7" width="13" height="10" rx="1" />
      <path d="M14 10h4l3 3v4h-7" />
      <circle cx="5.5" cy="19" r="1.5" fill="#0d9488" stroke="none" />
      <circle cx="16.5" cy="19" r="1.5" fill="#0d9488" stroke="none" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 7h12l1 14H5L6 7z" />
      <path d="M9 7a3 3 0 0 1 6 0" />
    </svg>
  );
}

function WalletIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="6" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
      <circle cx="16" cy="14.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ExpenseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2v20" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function ProfitIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 17l6-6 4 4 7-7" />
      <path d="M15 8h6v6" />
    </svg>
  );
}

