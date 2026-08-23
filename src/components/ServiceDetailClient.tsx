"use client";

import Link from "next/link";
import type { Service } from "@/data/services";
import { services } from "@/data/services";
import { useLanguage } from "@/i18n/LanguageProvider";
import { getServiceSections } from "@/i18n/serviceDetails";

export default function ServiceDetailClient({ service }: { service: Service }) {
  const { locale, t } = useLanguage();
  const tr = t.services.items[service.slug];
  const title = tr?.title ?? service.title;
  const summary = tr?.summary ?? service.summary;
  const sections = getServiceSections(service.slug, locale);

  return (
    <>
      <section className="page-banner">
        <div className="max-w-7xl mx-auto px-4">
          <div className="banner-content">
            <h1>{title}</h1>
            <div className="breadcrumb">
              <Link href="/">{t.common.home}</Link>
              <span>/</span>
              <Link href="/hizmetler">{t.nav.services}</Link>
              <span>/</span>
              <span>{title}</span>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "64px 0 80px" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2" style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              <p style={{ fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.75, margin: 0 }}>
                {summary}
              </p>

              {sections.map((section) => (
                <article key={section.title} className="card" style={{ padding: 28 }}>
                  <h2 style={{ fontSize: "1.25rem", marginBottom: 14 }}>{section.title}</h2>
                  {section.paragraphs?.map((p, i) => (
                    <p
                      key={i}
                      style={{
                        color: "var(--muted)",
                        lineHeight: 1.8,
                        marginBottom: section.bullets || i < (section.paragraphs?.length ?? 0) - 1 ? 12 : 0,
                      }}
                    >
                      {p}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul style={{ margin: section.paragraphs?.length ? "8px 0 0" : 0, paddingLeft: 18, color: "var(--muted)", lineHeight: 1.8 }}>
                      {section.bullets.map((b) => (
                        <li key={b} style={{ marginBottom: 6 }}>{b}</li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/iletisim" className="btn btn-gradient">{t.hero.ctaContact}</Link>
                <Link href="/hizmetler" className="btn btn-outline">{t.common.allServices}</Link>
              </div>
            </div>

            <aside>
              <div className="card" style={{ padding: 24, position: "sticky", top: 88 }}>
                <h3 style={{ fontSize: "1rem", marginBottom: 16 }}>{t.nav.services}</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/hizmetler/${s.slug}`}
                      style={{
                        fontSize: "0.9rem",
                        padding: "10px 12px",
                        borderRadius: 8,
                        background: s.slug === service.slug ? "var(--surface-alt)" : "transparent",
                        color: s.slug === service.slug ? "var(--primary)" : "var(--heading)",
                        fontWeight: s.slug === service.slug ? 600 : 500,
                      }}
                    >
                      {t.services.items[s.slug]?.title ?? s.title}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
