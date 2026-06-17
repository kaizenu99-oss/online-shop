"use client";

import { useState } from "react";
import { products, productTabs } from "../data/products";
import ProductCard from "./ProductCard";
import { useLanguage } from "../context/LanguageContext";
import { ui } from "../data/translations";
import { t } from "../lib/language";

export default function PopularProducts() {
  const [activeTab, setActiveTab] = useState<(typeof productTabs)[number]>(
    productTabs[0]
  );
  const { lang } = useLanguage();

  const visibleProducts = products.filter(
    (product) => product.category === activeTab
  );

  return (
    <section className="px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-neutral-900">
            {t(ui.popularProducts.heading, lang)}
          </h2>

          <div className="mt-6 flex justify-center gap-4 text-sm font-medium text-neutral-400 sm:gap-8">
            {productTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={
                  activeTab === tab
                    ? "border-b-2 border-neutral-900 pb-2 text-neutral-900"
                    : "pb-2 hover:text-neutral-700"
                }
              >
                {t(ui.popularProducts.tabs[tab], lang)}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-5">
          {(visibleProducts.length > 0 ? visibleProducts : products).map(
            (product) => (
              <ProductCard key={product.id} product={product} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
