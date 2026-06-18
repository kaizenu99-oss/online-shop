"use client";

import AccountLayout from "../../components/AccountLayout";
import ComingSoonCard from "../../components/ComingSoonCard";
import { ui } from "../../data/translations";

export default function WalletPage() {
  return (
    <AccountLayout>
      <ComingSoonCard title={ui.account.wallet} />
    </AccountLayout>
  );
}
