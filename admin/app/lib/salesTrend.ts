import type { Order } from "./types";

const MONTH_LABELS = [
  "1-р сар",
  "2-р сар",
  "3-р сар",
  "4-р сар",
  "5-р сар",
  "6-р сар",
  "7-р сар",
  "8-р сар",
  "9-р сар",
  "10-р сар",
  "11-р сар",
  "12-р сар",
];

export type MonthBucket = {
  label: string;
  total: number;
  count: number;
  orders: Order[];
};

export function getMonthlyBuckets(orders: Order[], year = new Date().getFullYear()): MonthBucket[] {
  const buckets = Array.from({ length: 12 }, (_, month) => ({
    month,
    total: 0,
    count: 0,
    orders: [] as Order[],
  }));

  for (const order of orders) {
    const date = new Date(order.date);
    if (date.getFullYear() !== year) continue;
    const bucket = buckets[date.getMonth()];
    bucket.total += order.total;
    bucket.count += 1;
    bucket.orders.push(order);
  }

  return buckets.map((b) => ({ label: MONTH_LABELS[b.month], total: b.total, count: b.count, orders: b.orders }));
}
