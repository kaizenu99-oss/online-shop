"use client";

import Image from "next/image";
import { featuredBanners, type FeaturedBanner } from "../data/featuredBanners";
import { useLanguage } from "../context/LanguageContext";
import { t } from "../lib/language";

export default function FeaturedBanners() {
  const { lang } = useLanguage();
  const [women, men, house, kids] = featuredBanners;

  return (
    <section className="px-4 py-6 sm:px-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 sm:grid-cols-3 sm:grid-rows-2 sm:gap-4 sm:h-[480px] lg:h-[560px]">
        <BannerCard banner={women} lang={lang} className="aspect-[4/5] sm:row-span-2 sm:aspect-auto" priority />
        <BannerCard banner={men} lang={lang} className="aspect-[4/5] sm:row-span-2 sm:aspect-auto" priority />
        <BannerCard banner={house} lang={lang} className="aspect-[16/9] sm:aspect-auto" priority />
        <BannerCard banner={kids} lang={lang} className="aspect-[16/9] sm:aspect-auto" priority />
      </div>
    </section>
  );
}

function BannerCard({
  banner,
  lang,
  className,
  priority,
}: {
  banner: FeaturedBanner;
  lang: "mn" | "en";
  className: string;
  priority?: boolean;
}) {
  return (
    <a
      href="#"
      className={`group relative block overflow-hidden rounded-md ${className}`}
    >
      <Image
        src={banner.image}
        alt={`${banner.brand} - ${t(banner.tagline, lang)}`}
        fill
        sizes="(min-width: 640px) 33vw, 100vw"
        priority={priority}
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 p-4 text-white sm:p-6">
        <p className="font-serif text-xl font-bold tracking-wide sm:text-2xl">
          {banner.brand}
        </p>
        <p className="text-xs text-white/80 sm:text-sm">{t(banner.tagline, lang)}</p>
      </div>
    </a>
  );
}
