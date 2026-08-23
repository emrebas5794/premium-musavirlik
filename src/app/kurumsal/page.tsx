"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Kurumsal() {
  const { t } = useLanguage();
  const p = t.pages.corporate;

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/hakkimizda" className="card" style={{ textDecoration: "none", padding: 40, textAlign: "center" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>🏢</div>
              <h3>{p.aboutCard}</h3>
            </Link>
            <Link href="/referanslar" className="card" style={{ textDecoration: "none", padding: 40, textAlign: "center" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>🤝</div>
              <h3>{p.refsCard}</h3>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
