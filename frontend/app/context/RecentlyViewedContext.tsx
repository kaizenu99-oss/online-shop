"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Product } from "../data/products";

type RecentlyViewedContextValue = {
  viewed: Product[];
  addViewed: (product: Product) => void;
  clearViewed: () => void;
};

const RecentlyViewedContext = createContext<RecentlyViewedContextValue | null>(null);

const STORAGE_KEY = "pesio-recently-viewed";
const MAX_ITEMS = 24;

export function RecentlyViewedProvider({ children }: { children: React.ReactNode }) {
  const [viewed, setViewed] = useState<Product[]>([]);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return;
    try {
      const parsed = JSON.parse(stored) as Product[];
      setViewed(parsed);
    } catch {
      // ignore malformed storage
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(viewed));
  }, [viewed]);

  const addViewed = (product: Product) => {
    setViewed((current) => {
      const withoutProduct = current.filter((item) => item.id !== product.id);
      return [product, ...withoutProduct].slice(0, MAX_ITEMS);
    });
  };

  const clearViewed = () => setViewed([]);

  return (
    <RecentlyViewedContext.Provider value={{ viewed, addViewed, clearViewed }}>
      {children}
    </RecentlyViewedContext.Provider>
  );
}

export function useRecentlyViewed() {
  const context = useContext(RecentlyViewedContext);
  if (!context) {
    throw new Error("useRecentlyViewed must be used within a RecentlyViewedProvider");
  }
  return context;
}
