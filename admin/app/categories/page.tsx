"use client";

import { useState } from "react";
import Topbar from "../components/Topbar";
import { useLocalState } from "../lib/useLocalState";
import { seedCategories } from "../lib/seed";

export default function CategoriesPage() {
  const [categories, setCategories] = useLocalState("admin-categories", seedCategories);
  const [newName, setNewName] = useState("");

  const addCategory = () => {
    if (!newName.trim()) return;
    const id = newName.trim().toLowerCase().replace(/\s+/g, "-");
    setCategories((current) => [...current, { id, name: newName.trim(), productCount: 0 }]);
    setNewName("");
  };

  const removeCategory = (id: string) => {
    setCategories((current) => current.filter((category) => category.id !== id));
  };

  return (
    <>
      <Topbar title="Ангилал" />
      <main className="flex-1 p-6">
        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-rose-100">
          <h2 className="text-sm font-semibold text-neutral-800">Шинэ ангилал нэмэх</h2>
          <div className="mt-3 flex gap-2">
            <input
              type="text"
              placeholder="Ангиллын нэр"
              value={newName}
              onChange={(event) => setNewName(event.target.value)}
              className="w-full max-w-xs rounded border border-rose-200 px-3 py-2 text-sm outline-none focus:border-rose-400"
            />
            <button
              type="button"
              onClick={addCategory}
              className="rounded bg-rose-600 px-4 py-2 text-sm font-medium text-white hover:bg-rose-700"
            >
              Нэмэх
            </button>
          </div>
        </div>

        <div className="mt-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-rose-100">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-rose-100 text-xs text-neutral-400">
                <th className="py-2">Нэр</th>
                <th className="py-2">Барааны тоо</th>
                <th className="py-2"></th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category.id} className="border-b border-rose-50 last:border-b-0">
                  <td className="py-2.5 text-neutral-700">{category.name}</td>
                  <td className="py-2.5 text-neutral-700">{category.productCount}</td>
                  <td className="py-2.5 text-right">
                    <button
                      type="button"
                      onClick={() => removeCategory(category.id)}
                      className="text-xs font-medium text-neutral-400 hover:text-rose-600"
                    >
                      Устгах
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
