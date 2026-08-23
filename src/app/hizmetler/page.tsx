"use client";

import Link from "next/link";
import { services } from "@/data/services";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Hizmetler() {
  const { t } = useLanguage();
  const p = t.pages.services;

  return (
    <>
      <section className="page-banner">
        <div className="max-w-7xl mx-auto px-4">
          <div className="banner-content">
            <h1>{p.title}</h1>
            <div className="breadcrumb">
              <a href="/">{t.common.home}</a>
              <span>/</span>
              <span>{p.title}</span>
            </div>
          </div>
        </div>
      </section>
      <section style={{ padding: "80px 0", background: "var(--surface-alt)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-header" style={{ textAlign: "left", marginBottom: 36 }}>
            <div className="section-label">{p.label}</div>
            <h2 className="section-title" style={{ marginBottom: 10 }}>{p.heading}</h2>
            <p className="section-subtitle" style={{ margin: 0, maxWidth: 720 }}>{p.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((item) => {
              const tr = t.services.items[item.slug];
              return (
                <Link
                  key={item.slug}
                  href={`/hizmetler/${item.slug}`}
                  className="card"
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                    padding: 24,
                    height: "100%",
                  }}
                >
                  <div style={{ fontSize: "1.75rem" }}>{item.icon}</div>
                  <h3 style={{ fontSize: "1.05rem", margin: 0, color: "var(--heading)" }}>{tr?.title ?? item.title}</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--muted)", margin: 0, lineHeight: 1.6, flex: 1 }}>
                    {tr?.summary ?? item.summary}
                  </p>
                  <span style={{ color: "var(--primary)", fontWeight: 600, fontSize: "0.9rem" }}>{t.common.learnMore} →</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
