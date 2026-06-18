"use client";

import Header from "./Header";
import Footer from "./Footer";
import AccountSidebar from "./AccountSidebar";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="flex flex-1 flex-col bg-background">
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 px-4 py-8 sm:flex-row sm:px-6">
          <AccountSidebar />
          <main className="min-w-0 flex-1">{children}</main>
        </div>
      </div>
      <Footer />
    </>
  );
}
