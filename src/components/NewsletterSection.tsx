"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import NewsletterForm from "@/components/NewsletterForm";

export default function NewsletterSection() {
  const { t } = useLanguage();

  return (
    <section className="newsletter-section">
      <div className="newsletter-banner">
        <div className="newsletter-orb newsletter-orb-1" aria-hidden />
        <div className="newsletter-orb newsletter-orb-2" aria-hidden />

        <div className="newsletter-inner">
          <div className="newsletter-banner-copy">
            <div className="newsletter-icon" aria-hidden>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M4 6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5v-11Z" stroke="currentColor" strokeWidth="1.6" />
                <path d="m5 7 7 5.5L19 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="newsletter-copy-text">
              <div className="newsletter-label">{t.newsletter.label}</div>
              <h2>{t.newsletter.title}</h2>
              <p>{t.newsletter.subtitle}</p>
            </div>
          </div>

          <div className="newsletter-banner-form">
            <NewsletterForm variant="inline" />
          </div>
        </div>
      </div>
    </section>
  );
}
