"use client";

import Link from "next/link";
import { services } from "@/data/services";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function ServiceCards() {
  const { t } = useLanguage();
  const homeServices = services.slice(0, 6);

  return (
    <section className="section section-alt services-section">
      <div className="max-w-7xl mx-auto px-4">
        <div className="section-header">
          <div className="section-label">{t.services.label}</div>
          <h2 className="section-title">{t.services.title}</h2>
          <p className="section-subtitle">{t.services.subtitle}</p>
        </div>

        <div className="services-grid">
          {homeServices.map((s) => {
            const item = t.services.items[s.slug];
            return (
              <article key={s.slug} className="feature-card">
                <div className="card-image">
                  <div className="bg" aria-hidden>{s.icon}</div>
                </div>
                <div className="card-body">
                  <h3>{item?.title ?? s.title}</h3>
                  <p>{item?.summary ?? s.summary}</p>
                  <Link href={`/hizmetler/${s.slug}`} className="card-cta">
                    {t.common.learnMore}
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="services-footer">
          <Link href="/hizmetler" className="btn btn-gradient btn-lg">
            {t.common.allServices}
          </Link>
          <Link href="/iletisim" className="btn btn-outline btn-lg">
            {t.common.freeConsult}
          </Link>
        </div>
      </div>
    </section>
  );
}
