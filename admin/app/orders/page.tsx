"use client";

import Topbar from "../components/Topbar";
import StatusBadge from "../components/StatusBadge";
import { useLocalState } from "../lib/useLocalState";
import { seedOrders } from "../lib/seed";
import type { Order } from "../lib/types";

function formatMnt(value: number) {
  return `${value.toLocaleString("en-US")} ₮`;
}

const STATUSES: Order["status"][] = ["pending", "shipped", "completed"];

export default function OrdersPage() {
  const [orders, setOrders] = useLocalState("admin-orders", seedOrders);

  const advanceStatus = (id: string) => {
    setOrders((current) =>
      current.map((order) => {
        if (order.id !== id) return order;
        const index = STATUSES.indexOf(order.status);
        const next = STATUSES[Math.min(index + 1, STATUSES.length - 1)];
        return { ...order, status: next };
      })
    );
  };

  return (
    <>
      <Topbar title="Захиалга" />
      <main className="flex-1 p-6">
        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-rose-100">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-rose-100 text-xs text-neutral-400">
                <th className="py-2">Захиалгын №</th>
                <th className="py-2">Харилцагч</th>
                <th className="py-2">Бараа</th>
                <th className="py-2">Дүн</th>
                <th className="py-2">Огноо</th>
                <th className="py-2">Төлөв</th>
                <th className="py-2"></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-rose-50 last:border-b-0">
                  <td className="py-2.5 text-neutral-700">#{order.id}</td>
                  <td className="py-2.5 text-neutral-700">{order.customer}</td>
                  <td className="py-2.5 text-neutral-500">
                    {order.items.map((item) => `${item.name} x${item.quantity}`).join(", ")}
                  </td>
                  <td className="py-2.5 font-medium text-neutral-900">{formatMnt(order.total)}</td>
                  <td className="py-2.5 text-neutral-500">{new Date(order.date).toLocaleDateString("mn-MN")}</td>
                  <td className="py-2.5">
                    <StatusBadge status={order.status} />
                  </td>
                  <td className="py-2.5 text-right">
                    {order.status !== "completed" && (
                      <button
                        type="button"
                        onClick={() => advanceStatus(order.id)}
                        className="text-xs font-medium text-rose-600 hover:underline"
                      >
                        Дараагийн шат
                      </button>
                    )}
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
