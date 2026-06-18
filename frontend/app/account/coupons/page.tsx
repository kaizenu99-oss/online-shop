"use client";

import AccountLayout from "../../components/AccountLayout";
import ComingSoonCard from "../../components/ComingSoonCard";
import { ui } from "../../data/translations";

export default function CouponsPage() {
  return (
    <AccountLayout>
      <ComingSoonCard title={ui.account.coupon} />
    </AccountLayout>
  );
}
