export type Lang = "mn" | "en";

export type Localized = Record<Lang, string>;

export function t(value: Localized, lang: Lang): string {
  return value[lang];
}
