"use client";

import { useState } from "react";
import { services } from "@/data/services";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Iletisim() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);
  const p = t.pages.contact;

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
      <section style={{ padding: "80px 0" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="section-label">{p.label}</div>
              <h2 className="section-heading">{p.heading}</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 32 }}>
                <div style={{ display: "flex", gap: 14 }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--surface-alt)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>📍</div>
                  <div>
                    <strong style={{ color: "var(--heading)" }}>{t.common.address}</strong>
                    <br />
                    <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Kartaltepe, İncirli Cd. 46 D:11, 34200 Bakırköy/İstanbul</span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 14 }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--surface-alt)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>📱</div>
                  <div>
                    <strong style={{ color: "var(--heading)" }}>{t.common.phone}</strong>
                    <br />
                    <a href="tel:+905453660996" style={{ fontSize: "0.9rem", display: "block" }}>+90 545 366 09 96</a>
                    <a href="tel:+902124380464" style={{ fontSize: "0.9rem", display: "block" }}>+90 212 438 04 64</a>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 14 }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--surface-alt)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>✉️</div>
                  <div>
                    <strong style={{ color: "var(--heading)" }}>{t.common.email}</strong>
                    <br />
                    <a href="mailto:murat@pmdtr.com" style={{ fontSize: "0.9rem" }}>murat@pmdtr.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form-card">
              <h3 style={{ marginBottom: 8 }}>{p.formTitle}</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: 20 }}>{p.formDesc}</p>
              {sent ? (
                <div style={{ textAlign: "center", padding: 24, color: "var(--success)" }}>✓ {t.common.messageSent}</div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <input className="form-control" type="text" placeholder={t.contact.namePh} required />
                  <input className="form-control" type="tel" placeholder={t.contact.phonePh} required />
                  <input className="form-control" type="email" placeholder={t.contact.emailPh} required />
                  <select className="form-control" defaultValue="">
                    <option disabled value="">{t.common.selectService}</option>
                    {services.map((s) => (
                      <option key={s.slug}>{t.services.items[s.slug]?.title ?? s.title}</option>
                    ))}
                    <option>{t.common.other}</option>
                  </select>
                  <textarea className="form-control" rows={4} placeholder={t.contact.messagePh} />
                  <button type="submit" className="btn btn-gradient btn-lg" style={{ width: "100%" }}>{t.common.send}</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
