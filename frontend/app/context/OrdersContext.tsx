"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { CartItem } from "./CartContext";

export type Order = {
  id: string;
  items: CartItem[];
  total: number;
  date: string;
};

type OrdersContextValue = {
  orders: Order[];
  addOrder: (items: CartItem[], total: number) => void;
};

const OrdersContext = createContext<OrdersContextValue | null>(null);

const STORAGE_KEY = "pesio-orders";

export function OrdersProvider({ children }: { children: React.ReactNode }) {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return;
    try {
      setOrders(JSON.parse(stored) as Order[]);
    } catch {
      // ignore malformed storage
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
  }, [orders]);

  const addOrder = (items: CartItem[], total: number) => {
    const order: Order = {
      id: `${Date.now()}`,
      items,
      total,
      date: new Date().toISOString(),
    };
    setOrders((current) => [order, ...current]);
  };

  return (
    <OrdersContext.Provider value={{ orders, addOrder }}>{children}</OrdersContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrdersContext);
  if (!context) {
    throw new Error("useOrders must be used within an OrdersProvider");
  }
  return context;
}
