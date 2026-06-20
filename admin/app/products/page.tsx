"use client";

import { useState } from "react";
import Topbar from "../components/Topbar";
import { useLocalState } from "../lib/useLocalState";
import { seedCategories, seedProducts } from "../lib/seed";
import type { Product } from "../lib/types";

function formatMnt(value: number) {
  return `${value.toLocaleString("en-US")} ₮`;
}

const emptyForm = { name: "", category: "", price: "", stock: "", image: "", description: "" };

export default function ProductsPage() {
  const [products, setProducts] = useLocalState("admin-products", seedProducts);
  const [categories] = useLocalState("admin-categories", seedCategories);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);

  const startAdd = () => {
    setEditingId("new");
    setForm(emptyForm);
  };

  const startEdit = (product: Product) => {
    setEditingId(product.id);
    setForm({
      name: product.name,
      category: product.category,
      price: String(product.price),
      stock: String(product.stock),
      image: product.image ?? "",
      description: product.description ?? "",
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setForm(emptyForm);
  };

  const saveForm = () => {
    if (!form.name.trim() || !form.category.trim()) return;

    const price = Number(form.price) || 0;
    const stock = Number(form.stock) || 0;
    const image = form.image.trim() || undefined;
    const description = form.description.trim() || undefined;

    if (editingId === "new") {
      const id = `p${Date.now()}`;
      setProducts((current) => [
        ...current,
        { id, name: form.name, category: form.category, price, stock, status: "active", image, description },
      ]);
    } else {
      setProducts((current) =>
        current.map((product) =>
          product.id === editingId
            ? { ...product, name: form.name, category: form.category, price, stock, image, description }
            : product
        )
      );
    }
    cancelEdit();
  };

  const removeProduct = (id: string) => {
    setProducts((current) => current.filter((product) => product.id !== id));
  };

  const removeImage = () => {
    setForm({ ...form, image: "" });
  };

  const toggleStatus = (id: string) => {
    setProducts((current) =>
      current.map((product) =>
        product.id === id ? { ...product, status: product.status === "active" ? "hidden" : "active" } : product
      )
    );
  };

  return (
    <>
      <Topbar title="Бараа" />
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between">
          <p className="text-sm text-neutral-500">{products.length} бараа</p>
          <button
            type="button"
            onClick={startAdd}
            className="rounded bg-rose-600 px-4 py-2 text-sm font-medium text-white hover:bg-rose-700"
          >
            + Бараа нэмэх
          </button>
        </div>

        {editingId && (
          <div className="mt-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-rose-100">
            <h2 className="text-sm font-semibold text-neutral-800">
              {editingId === "new" ? "Шинэ бараа" : "Бараа засах"}
            </h2>

            <div className="mt-3 flex flex-col gap-4 sm:flex-row">
              <div className="flex shrink-0 flex-col items-center gap-2">
                <span className="relative block h-24 w-24 overflow-hidden rounded-lg bg-rose-50 ring-1 ring-rose-100">
                  {form.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={form.image} alt="" className="h-full w-full object-cover" />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center text-neutral-300">
                      <ImagePlaceholderIcon />
                    </span>
                  )}
                </span>
                {form.image && (
                  <button
                    type="button"
                    onClick={removeImage}
                    className="text-xs font-medium text-neutral-400 hover:text-rose-600"
                  >
                    Зураг хасах
                  </button>
                )}
              </div>

              <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Нэр"
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                  className="rounded border border-rose-200 px-3 py-2 text-sm outline-none focus:border-rose-400"
                />
                <select
                  value={form.category}
                  onChange={(event) => setForm({ ...form, category: event.target.value })}
                  className="rounded border border-rose-200 px-3 py-2 text-sm outline-none focus:border-rose-400"
                >
                  <option value="">Ангилал сонгох</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  placeholder="Үнэ"
                  value={form.price}
                  onChange={(event) => setForm({ ...form, price: event.target.value })}
                  className="rounded border border-rose-200 px-3 py-2 text-sm outline-none focus:border-rose-400"
                />
                <input
                  type="number"
                  placeholder="Үлдэгдэл"
                  value={form.stock}
                  onChange={(event) => setForm({ ...form, stock: event.target.value })}
                  className="rounded border border-rose-200 px-3 py-2 text-sm outline-none focus:border-rose-400"
                />
                <input
                  type="text"
                  placeholder="Зургийн URL"
                  value={form.image}
                  onChange={(event) => setForm({ ...form, image: event.target.value })}
                  className="col-span-2 rounded border border-rose-200 px-3 py-2 text-sm outline-none focus:border-rose-400"
                />
                <textarea
                  placeholder="Тайлбар"
                  value={form.description}
                  onChange={(event) => setForm({ ...form, description: event.target.value })}
                  rows={2}
                  className="col-span-2 rounded border border-rose-200 px-3 py-2 text-sm outline-none focus:border-rose-400"
                />
              </div>
            </div>

            <div className="mt-3 flex gap-2">
              <button
                type="button"
                onClick={saveForm}
                className="rounded bg-rose-600 px-4 py-2 text-sm font-medium text-white hover:bg-rose-700"
              >
                Хадгалах
              </button>
              <button
                type="button"
                onClick={cancelEdit}
                className="rounded border border-rose-200 px-4 py-2 text-sm font-medium text-neutral-700 hover:border-rose-400"
              >
                Цуцлах
              </button>
            </div>
          </div>
        )}

        <div className="mt-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-rose-100">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-rose-100 text-xs text-neutral-400">
                <th className="py-2"></th>
                <th className="py-2">Нэр</th>
                <th className="py-2">Ангилал</th>
                <th className="py-2">Үнэ</th>
                <th className="py-2">Үлдэгдэл</th>
                <th className="py-2">Төлөв</th>
                <th className="py-2"></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-rose-50 last:border-b-0">
                  <td className="py-2.5">
                    <span className="relative block h-10 w-10 overflow-hidden rounded-md bg-rose-50 ring-1 ring-rose-100">
                      {product.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={product.image} alt="" className="h-full w-full object-cover" />
                      ) : (
                        <span className="flex h-full w-full items-center justify-center text-neutral-300">
                          <ImagePlaceholderIcon />
                        </span>
                      )}
                    </span>
                  </td>
                  <td className="py-2.5 text-neutral-700">{product.name}</td>
                  <td className="py-2.5 text-neutral-700">{product.category}</td>
                  <td className="py-2.5 font-medium text-neutral-900">{formatMnt(product.price)}</td>
                  <td className="py-2.5 text-neutral-700">{product.stock}</td>
                  <td className="py-2.5">
                    <button
                      type="button"
                      onClick={() => toggleStatus(product.id)}
                      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        product.status === "active" ? "bg-emerald-50 text-emerald-700" : "bg-neutral-100 text-neutral-500"
                      }`}
                    >
                      {product.status === "active" ? "Идэвхтэй" : "Нуугдсан"}
                    </button>
                  </td>
                  <td className="py-2.5 text-right">
                    <button
                      type="button"
                      onClick={() => startEdit(product)}
                      className="mr-3 text-xs font-medium text-rose-600 hover:underline"
                    >
                      Засах
                    </button>
                    <button
                      type="button"
                      onClick={() => removeProduct(product.id)}
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

function ImagePlaceholderIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  );
}
