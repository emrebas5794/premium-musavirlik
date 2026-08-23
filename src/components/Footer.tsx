"use client";

import Link from "next/link";
import { useState } from "react";
import { services } from "@/data/services";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();
  const [logoOk, setLogoOk] = useState(true);

  return (
    <footer className="site-footer">
      <div className="max-w-7xl mx-auto px-4">
        <div className="footer-grid">
          <div>
            {logoOk ? (
              <img src="/logo.png" alt="PMDTR" style={{ height: 48, marginBottom: 16 }} onError={() => setLogoOk(false)} />
            ) : (
              <div style={{ fontWeight: 800, letterSpacing: "0.04em", color: "#fff", marginBottom: 16 }}>PMDTR</div>
            )}
            <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "rgba(255,255,255,0.7)", marginBottom: 0 }}>
              {t.footer.about}
            </p>
          </div>
          <div>
            <h5>{t.common.quickMenu}</h5>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Link href="/">{t.nav.home}</Link>
              <Link href="/kurumsal">{t.nav.corporate}</Link>
              <Link href="/hizmetler">{t.nav.services}</Link>
              <Link href="/referanslar">{t.nav.references}</Link>
              <Link href="/duyurular">{t.nav.announcements}</Link>
              <Link href="/bordro">{t.nav.payroll}</Link>
              <Link href="/iletisim">{t.nav.contact}</Link>
            </div>
          </div>
          <div>
            <h5>{t.nav.services}</h5>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {services.slice(0, 6).map((s) => (
                <Link key={s.slug} href={`/hizmetler/${s.slug}`}>
                  {t.services.items[s.slug]?.title ?? s.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h5>{t.common.contactUs}</h5>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.9, color: "rgba(255,255,255,0.7)", margin: 0 }}>
              Kartaltepe, İncirli Cd. 46 D:11, 34200 Bakırköy/İstanbul
            </p>
            <p style={{ fontSize: "0.9rem", margin: "12px 0 4px" }}>
              📱 <a href="tel:+905453660996">+90 545 366 09 96</a>
            </p>
            <p style={{ fontSize: "0.9rem", margin: "0 0 4px" }}>
              📞 <a href="tel:+902124380464">+90 212 438 04 64</a>
            </p>
            <p style={{ fontSize: "0.9rem", margin: 0 }}>
              ✉️ <a href="mailto:murat@pmdtr.com">murat@pmdtr.com</a>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} PMDTR - Premium Danışmanlık. {t.common.rights}
        </div>
      </div>
    </footer>
  );
}
