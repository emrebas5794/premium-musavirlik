"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import NewsletterForm from "@/components/NewsletterForm";

const SUBSCRIBED_KEY = "pmdtr-newsletter-subscribed";

export default function NewsletterPopup() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(SUBSCRIBED_KEY) === "1") return;

    const timer = setTimeout(() => setOpen(true), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="newsletter-popup-overlay" onClick={() => setOpen(false)} role="presentation">
      <div
        className="newsletter-popup"
        role="dialog"
        aria-modal="true"
        aria-labelledby="newsletter-popup-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="newsletter-popup-close"
          onClick={() => setOpen(false)}
          aria-label={t.newsletter.close}
        >
          ✕
        </button>
        <div className="section-label">{t.newsletter.label}</div>
        <h2 id="newsletter-popup-title">{t.newsletter.title}</h2>
        <p>{t.newsletter.subtitle}</p>
        <NewsletterForm
          variant="popup"
          onSuccess={() => {
            localStorage.setItem(SUBSCRIBED_KEY, "1");
            setTimeout(() => setOpen(false), 1400);
          }}
        />
      </div>
    </div>
  );
}
