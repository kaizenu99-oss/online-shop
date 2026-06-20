"use client";

import Topbar from "../components/Topbar";
import { useLocalState } from "../lib/useLocalState";
import { seedCustomers } from "../lib/seed";

export default function CustomersPage() {
  const [customers] = useLocalState("admin-customers", seedCustomers);

  return (
    <>
      <Topbar title="Хэрэглэгчид" />
      <main className="flex-1 p-6">
        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-rose-100">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-rose-100 text-xs text-neutral-400">
                <th className="py-2">Нэр</th>
                <th className="py-2">И-мэйл</th>
                <th className="py-2">Элссэн огноо</th>
                <th className="py-2">Захиалгын тоо</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="border-b border-rose-50 last:border-b-0">
                  <td className="py-2.5 text-neutral-700">{customer.name}</td>
                  <td className="py-2.5 text-neutral-500">{customer.email}</td>
                  <td className="py-2.5 text-neutral-500">
                    {new Date(customer.joined).toLocaleDateString("mn-MN")}
                  </td>
                  <td className="py-2.5 font-medium text-neutral-900">{customer.ordersCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
