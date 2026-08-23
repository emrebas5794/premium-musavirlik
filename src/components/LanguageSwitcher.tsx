"use client";

import { locales, localeLabels, localeNames } from "@/i18n/config";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div className={`lang-switcher ${className}`.trim()} role="group" aria-label="Language">
      {locales.map((code) => (
        <button
          key={code}
          type="button"
          className={locale === code ? "active" : ""}
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
          title={localeNames[code]}
        >
          {localeLabels[code]}
        </button>
      ))}
    </div>
  );
}
