"use client";

import AccountLayout from "../components/AccountLayout";
import ComingSoonCard from "../components/ComingSoonCard";
import { ui } from "../data/translations";

export default function WishlistPage() {
  return (
    <AccountLayout>
      <ComingSoonCard title={ui.account.saved} />
    </AccountLayout>
  );
}
