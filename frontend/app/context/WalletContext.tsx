"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type WalletTransaction = {
  id: string;
  amount: number;
  date: string;
};

type WalletContextValue = {
  balance: number;
  transactions: WalletTransaction[];
  topUp: (amount: number) => void;
};

const WalletContext = createContext<WalletContextValue | null>(null);

const BALANCE_KEY = "pesio-wallet-balance";
const TRANSACTIONS_KEY = "pesio-wallet-transactions";

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState<WalletTransaction[]>([]);

  useEffect(() => {
    const storedBalance = window.localStorage.getItem(BALANCE_KEY);
    if (storedBalance) {
      const parsed = Number(storedBalance);
      if (!Number.isNaN(parsed)) setBalance(parsed);
    }

    const storedTransactions = window.localStorage.getItem(TRANSACTIONS_KEY);
    if (storedTransactions) {
      try {
        setTransactions(JSON.parse(storedTransactions) as WalletTransaction[]);
      } catch {
        // ignore malformed storage
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(BALANCE_KEY, String(balance));
  }, [balance]);

  useEffect(() => {
    window.localStorage.setItem(TRANSACTIONS_KEY, JSON.stringify(transactions));
  }, [transactions]);

  const topUp = (amount: number) => {
    setBalance((current) => current + amount);
    setTransactions((current) => [
      { id: `${Date.now()}`, amount, date: new Date().toISOString() },
      ...current,
    ]);
  };

  return (
    <WalletContext.Provider value={{ balance, transactions, topUp }}>
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
}
