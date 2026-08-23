"use client";

import { useState } from "react";
import { services } from "@/data/services";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function ContactSection() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);

  return (
    <section className="section">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" style={{ alignItems: "center" }}>
          <div>
            <div className="section-label">{t.contact.label}</div>
            <h2 className="section-title">{t.contact.title}</h2>
            <p className="section-subtitle" style={{ margin: "0 0 32px" }}>
              {t.contact.subtitle}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--surface-alt)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", fontSize: 18, flexShrink: 0 }}>📍</div>
                <div>
                  <strong style={{ color: "var(--heading)", fontSize: "var(--text-sm)" }}>{t.common.address}</strong>
                  <p style={{ fontSize: "var(--text-sm)", margin: "4px 0 0" }}>Kartaltepe, İncirli Cd. 46 D:11, 34200 Bakırköy/İstanbul</p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--surface-alt)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", fontSize: 18, flexShrink: 0 }}>📞</div>
                <div>
                  <strong style={{ color: "var(--heading)", fontSize: "var(--text-sm)" }}>{t.common.phone}</strong>
                  <p style={{ fontSize: "var(--text-sm)", margin: "4px 0 0" }}>
                    <a href="tel:+905453660996">+90 545 366 09 96</a>
                  </p>
                  <p style={{ fontSize: "var(--text-sm)", margin: "2px 0 0" }}>
                    <a href="tel:+902124380464">+90 212 438 04 64</a>
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--surface-alt)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", fontSize: 18, flexShrink: 0 }}>✉️</div>
                <div>
                  <strong style={{ color: "var(--heading)", fontSize: "var(--text-sm)" }}>{t.common.email}</strong>
                  <p style={{ fontSize: "var(--text-sm)", margin: "4px 0 0" }}>
                    <a href="mailto:murat@pmdtr.com">murat@pmdtr.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            {sent ? (
              <div style={{ textAlign: "center", padding: 32, color: "var(--success)" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
                <h3 style={{ color: "var(--heading)", marginBottom: 8 }}>{t.common.thanks}</h3>
                <p style={{ margin: 0 }}>{t.common.messageSent}</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <input className="form-control" type="text" placeholder={t.contact.namePh} required />
                <input className="form-control" type="tel" placeholder={t.contact.phonePh} required />
                <input className="form-control" type="email" placeholder={t.contact.emailPh} required />
                <select className="form-control" defaultValue="">
                  <option value="" disabled>{t.common.selectService}</option>
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
  );
}
