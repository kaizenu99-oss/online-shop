"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type User = {
  name: string;
  email: string;
};

type StoredAccount = User & { password: string };

type AuthResult = { success: true } | { success: false; error: "invalid-credentials" | "email-taken" };

type AuthContextValue = {
  user: User | null;
  login: (email: string, password: string) => AuthResult;
  signup: (name: string, email: string, password: string) => AuthResult;
  loginWithGoogle: () => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

const SESSION_KEY = "pesio-auth-session";
const ACCOUNTS_KEY = "pesio-auth-accounts";

function readAccounts(): StoredAccount[] {
  const stored = window.localStorage.getItem(ACCOUNTS_KEY);
  if (!stored) return [];
  try {
    return JSON.parse(stored) as StoredAccount[];
  } catch {
    return [];
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(SESSION_KEY);
    if (!stored) return;
    try {
      setUser(JSON.parse(stored) as User);
    } catch {
      // ignore malformed storage
    }
  }, []);

  const persistSession = (value: User | null) => {
    setUser(value);
    if (value) {
      window.localStorage.setItem(SESSION_KEY, JSON.stringify(value));
    } else {
      window.localStorage.removeItem(SESSION_KEY);
    }
  };

  const login = (email: string, password: string): AuthResult => {
    const accounts = readAccounts();
    const match = accounts.find(
      (account) => account.email.toLowerCase() === email.toLowerCase() && account.password === password
    );
    if (!match) return { success: false, error: "invalid-credentials" };
    persistSession({ name: match.name, email: match.email });
    return { success: true };
  };

  const signup = (name: string, email: string, password: string): AuthResult => {
    const accounts = readAccounts();
    const exists = accounts.some((account) => account.email.toLowerCase() === email.toLowerCase());
    if (exists) return { success: false, error: "email-taken" };

    const next = [...accounts, { name, email, password }];
    window.localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(next));
    persistSession({ name, email });
    return { success: true };
  };

  const loginWithGoogle = () => {
    persistSession({ name: "Google хэрэглэгч", email: "google-user@gmail.com" });
  };

  const logout = () => persistSession(null);

  return (
    <AuthContext.Provider value={{ user, login, signup, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
