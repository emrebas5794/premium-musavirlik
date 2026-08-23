"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

export default function Hakkimizda() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <>
      <section className="page-banner">
        <div className="max-w-7xl mx-auto px-4">
          <div className="banner-content">
            <h1>{a.banner}</h1>
            <div className="breadcrumb">
              <a href="/">{t.common.home}</a>
              <span>/</span>
              <span>{a.banner}</span>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="about-logo-panel">
              <div className="about-logo-glow" aria-hidden />
              <img src="/logo.png" alt="PMDTR" className="about-logo-img" />
              <p className="about-logo-caption">{a.caption}</p>
            </div>
            <div>
              <div className="section-label">{a.label}</div>
              <h2 style={{ fontSize: "2rem", fontWeight: 600, color: "var(--heading)", marginBottom: 24 }}>{a.title}</h2>
              <p style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--primary)", marginBottom: 20 }}>{a.lead}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, color: "var(--text-muted)", lineHeight: 1.7 }}>
                {a.points.map((point, i) => (
                  <p key={i}>✓ {point}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10" style={{ marginTop: 56 }}>
            <div className="card" style={{ padding: 32 }}>
              <div className="section-label">{a.visionLabel}</div>
              <h3 style={{ fontSize: "1.35rem", marginBottom: 14 }}>{a.visionTitle}</h3>
              <p style={{ marginBottom: 0, color: "var(--muted)", lineHeight: 1.8 }}>{a.visionText}</p>
            </div>
            <div className="card" style={{ padding: 32 }}>
              <div className="section-label">{a.missionLabel}</div>
              <h3 style={{ fontSize: "1.35rem", marginBottom: 14 }}>{a.missionTitle}</h3>
              <p style={{ marginBottom: 0, color: "var(--muted)", lineHeight: 1.8 }}>{a.missionText}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
