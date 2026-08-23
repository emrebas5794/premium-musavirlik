"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

export default function ProcessSection() {
  const { t } = useLanguage();

  return (
    <section className="section">
      <div className="max-w-7xl mx-auto px-4">
        <div className="section-header">
          <div className="section-label">{t.process.label}</div>
          <h2 className="section-title">{t.process.title}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.process.steps.map((s, i) => (
            <div key={i} className="process-card">
              <div className="step-number">{i + 1}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
