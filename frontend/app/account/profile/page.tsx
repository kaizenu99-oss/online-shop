"use client";

import { useRouter } from "next/navigation";
import AccountLayout from "../../components/AccountLayout";
import { useAuth } from "../../context/AuthContext";
import { useLanguage } from "../../context/LanguageContext";
import { ui } from "../../data/translations";
import { t } from "../../lib/language";

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const { lang } = useLanguage();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  if (!user) {
    return (
      <AccountLayout>
        <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-rose-100 dark:bg-[#2a2122] dark:ring-rose-900/40">
          <p className="text-sm text-neutral-500 dark:text-rose-200/60">
            {t(ui.auth.noAccount, lang)}
          </p>
        </div>
      </AccountLayout>
    );
  }

  return (
    <AccountLayout>
      <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-rose-100 dark:bg-[#2a2122] dark:ring-rose-900/40">
        <h1 className="font-serif text-2xl text-rose-700 dark:text-rose-300">
          {t(ui.accountMenu.greeting, lang)}, {user.name}
        </h1>

        <div className="mt-6 flex flex-col gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400 dark:text-rose-200/40">
              {t(ui.auth.name, lang)}
            </p>
            <p className="mt-1 text-sm text-neutral-800 dark:text-rose-100">{user.name}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400 dark:text-rose-200/40">
              {t(ui.auth.email, lang)}
            </p>
            <p className="mt-1 text-sm text-neutral-800 dark:text-rose-100">{user.email}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleLogout}
          className="mt-8 rounded border border-rose-300 px-5 py-2.5 text-sm font-medium text-rose-600 hover:border-rose-500 dark:border-rose-700 dark:text-rose-200"
        >
          {t(ui.accountMenu.logout, lang)}
        </button>
      </div>
    </AccountLayout>
  );
}
