"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";

const STORAGE_KEY = "pmdtr-newsletter-emails";

function saveEmail(email: string) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const list: string[] = raw ? JSON.parse(raw) : [];
    const normalized = email.trim().toLowerCase();
    if (!list.includes(normalized)) {
      list.push(normalized);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    }
  } catch {
    /* ignore storage errors */
  }
}

type Props = {
  variant?: "inline" | "popup";
  onSuccess?: () => void;
};

export default function NewsletterForm({ variant = "inline", onSuccess }: Props) {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    saveEmail(email);
    setSent(true);
    onSuccess?.();
  };

  if (sent) {
    return (
      <div className={`newsletter-success${variant === "popup" ? " newsletter-success-popup" : ""}`}>
        <span className="newsletter-success-icon" aria-hidden>✓</span>
        <p>{t.newsletter.success}</p>
      </div>
    );
  }

  return (
    <form className={`newsletter-form newsletter-form-${variant}`} onSubmit={handleSubmit}>
      <div className="newsletter-form-row">
        <input
          type="email"
          className="form-control"
          placeholder={t.newsletter.placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
        />
        <button type="submit" className="btn btn-gradient">
          {t.newsletter.cta}
        </button>
      </div>
      <p className="newsletter-privacy">{t.newsletter.privacy}</p>
    </form>
  );
}
