export const locales = ["tr", "en", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "tr";
export const LOCALE_STORAGE_KEY = "pmdtr-locale";

export const localeLabels: Record<Locale, string> = {
  tr: "TR",
  en: "EN",
  de: "DE",
};

export const localeNames: Record<Locale, string> = {
  tr: "Türkçe",
  en: "English",
  de: "Deutsch",
};
