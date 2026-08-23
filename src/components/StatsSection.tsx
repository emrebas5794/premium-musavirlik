"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

export default function StatsSection() {
  const { t } = useLanguage();

  return (
    <section className="section section-dark">
      <div className="max-w-7xl mx-auto px-4">
        <div className="section-header">
          <div className="section-label">{t.stats.label}</div>
          <h2 className="section-title">{t.stats.title}</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {t.stats.items.map((s, i) => (
            <div key={i} className="stat-card">
              <div className="stat-number">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
