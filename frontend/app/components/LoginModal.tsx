"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useAuth } from "../context/AuthContext";
import { ui } from "../data/translations";
import { t } from "../lib/language";

type Mode = "login" | "signup";

export default function LoginModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { lang } = useLanguage();
  const { login, signup, loginWithGoogle } = useAuth();
  const [mode, setMode] = useState<Mode>("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError(null);
  };

  const switchMode = (next: Mode) => {
    setMode(next);
    setError(null);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    if (mode === "login") {
      const result = login(email, password);
      if (!result.success) {
        setError(t(ui.auth.errorInvalidCredentials, lang));
        return;
      }
    } else {
      if (password !== confirmPassword) {
        setError(t(ui.auth.errorPasswordMismatch, lang));
        return;
      }
      const result = signup(name, email, password);
      if (!result.success) {
        setError(t(ui.auth.errorEmailTaken, lang));
        return;
      }
    }

    resetForm();
    onClose();
  };

  const handleGoogleLogin = () => {
    loginWithGoogle();
    resetForm();
    onClose();
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-sm rounded-lg bg-white p-6 shadow-xl sm:p-8 dark:bg-[#2a2122]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={t(ui.auth.close, lang)}
          className="absolute right-4 top-4 text-neutral-400 hover:text-neutral-700 dark:text-rose-200/50 dark:hover:text-rose-200"
        >
          <CloseIcon />
        </button>

        <p className="font-serif text-2xl text-rose-700 dark:text-rose-300">🌸 Төгс сонголт</p>

        <div className="mt-6 flex gap-6 border-b border-rose-100 text-sm font-medium dark:border-rose-900/60">
          <button
            type="button"
            onClick={() => switchMode("login")}
            className={
              mode === "login"
                ? "border-b-2 border-rose-500 pb-3 text-rose-600 dark:text-rose-300"
                : "pb-3 text-neutral-400 hover:text-rose-500"
            }
          >
            {t(ui.auth.loginTab, lang)}
          </button>
          <button
            type="button"
            onClick={() => switchMode("signup")}
            className={
              mode === "signup"
                ? "border-b-2 border-rose-500 pb-3 text-rose-600 dark:text-rose-300"
                : "pb-3 text-neutral-400 hover:text-rose-500"
            }
          >
            {t(ui.auth.signupTab, lang)}
          </button>
        </div>

        <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
          {mode === "signup" && (
            <Field
              label={t(ui.auth.name, lang)}
              type="text"
              autoComplete="name"
              value={name}
              onChange={setName}
            />
          )}
          <Field
            label={t(ui.auth.email, lang)}
            type="email"
            autoComplete="email"
            value={email}
            onChange={setEmail}
          />
          <Field
            label={t(ui.auth.password, lang)}
            type="password"
            autoComplete={mode === "login" ? "current-password" : "new-password"}
            value={password}
            onChange={setPassword}
          />
          {mode === "signup" && (
            <Field
              label={t(ui.auth.confirmPassword, lang)}
              type="password"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={setConfirmPassword}
            />
          )}

          {mode === "login" && (
            <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-rose-200/50">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-neutral-300" />
                {t(ui.auth.rememberMe, lang)}
              </label>
              <a href="#" className="hover:text-rose-600 dark:hover:text-rose-300">
                {t(ui.auth.forgotPassword, lang)}
              </a>
            </div>
          )}

          {error && (
            <p className="rounded bg-rose-50 px-3 py-2 text-xs font-medium text-rose-600 dark:bg-rose-900/30 dark:text-rose-300">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="mt-2 w-full rounded bg-rose-600 px-6 py-3 text-sm font-medium text-white hover:bg-rose-700"
          >
            {mode === "login" ? t(ui.auth.loginButton, lang) : t(ui.auth.signupButton, lang)}
          </button>
        </form>

        <div className="mt-6 flex items-center gap-3 text-xs text-neutral-400 dark:text-rose-200/40">
          <span className="h-px flex-1 bg-rose-100 dark:bg-rose-900/60" />
          {t(ui.auth.orContinueWith, lang)}
          <span className="h-px flex-1 bg-rose-100 dark:bg-rose-900/60" />
        </div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded border border-rose-200 px-6 py-3 text-sm font-medium text-neutral-700 hover:border-rose-400 dark:border-rose-800 dark:text-rose-100"
        >
          <GoogleIcon />
          {t(ui.auth.google, lang)}
        </button>

        <p className="mt-6 text-center text-xs text-neutral-500 dark:text-rose-200/50">
          {mode === "login" ? (
            <>
              {t(ui.auth.noAccount, lang)}{" "}
              <button type="button" onClick={() => switchMode("signup")} className="font-medium text-rose-600 hover:underline dark:text-rose-300">
                {t(ui.auth.signupTab, lang)}
              </button>
            </>
          ) : (
            <>
              {t(ui.auth.haveAccount, lang)}{" "}
              <button type="button" onClick={() => switchMode("login")} className="font-medium text-rose-600 hover:underline dark:text-rose-300">
                {t(ui.auth.loginTab, lang)}
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

function Field({
  label,
  type,
  autoComplete,
  value,
  onChange,
}: {
  label: string;
  type: string;
  autoComplete: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="flex flex-col gap-1 text-left text-xs font-medium text-neutral-600 dark:text-rose-200/70">
      {label}
      <input
        type={type}
        autoComplete={autoComplete}
        required
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="rounded border border-rose-200 px-3 py-2 text-sm text-neutral-900 outline-none focus:border-rose-400 dark:border-rose-800 dark:bg-[#211b1c] dark:text-rose-50 dark:focus:border-rose-500"
      />
    </label>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.3h6.47c-.28 1.5-1.13 2.77-2.4 3.62v3.01h3.86c2.26-2.09 3.56-5.17 3.56-8.66z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.07 7.93-2.91l-3.86-3.01c-1.07.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.27v3.1C3.25 21.3 7.31 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.27c-.24-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27v-3.1H1.27A11.93 11.93 0 0 0 0 12c0 1.93.46 3.76 1.27 5.37l4-3.1z"
      />
      <path
        fill="#EA4335"
        d="M12 4.77c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.94 1.19 15.24 0 12 0 7.31 0 3.25 2.7 1.27 6.63l4 3.1c.95-2.85 3.6-4.96 6.73-4.96z"
      />
    </svg>
  );
}
