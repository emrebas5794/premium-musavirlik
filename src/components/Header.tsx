"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { services } from "@/data/services";
import { useLanguage } from "@/i18n/LanguageProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Header() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [sticky, setSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoOk, setLogoOk] = useState(true);

  const navItems = useMemo(() => {
    const serviceSub = services.map((s) => ({
      label: t.services.items[s.slug]?.title ?? s.title,
      href: `/hizmetler/${s.slug}`,
    }));
    return [
      { label: t.nav.home, href: "/" },
      { label: t.nav.corporate, href: "/kurumsal", sub: [{ label: t.nav.about, href: "/hakkimizda" }] },
      { label: t.nav.services, href: "/hizmetler", sub: serviceSub },
      { label: t.nav.references, href: "/referanslar" },
      { label: t.nav.announcements, href: "/duyurular" },
      { label: t.nav.payroll, href: "/bordro" },
      { label: t.nav.contact, href: "/iletisim" },
    ];
  }, [t]);

  useEffect(() => {
    const cb = () => setSticky(window.scrollY > 10);
    window.addEventListener("scroll", cb);
    return () => window.removeEventListener("scroll", cb);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <>
      <div className="top-bar hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6 text-white/80">
            <a href="tel:+905453660996">📞 +90 545 366 09 96</a>
            <a href="tel:+902124380464">📞 +90 212 438 04 64</a>
            <a href="mailto:murat@pmdtr.com">✉️ murat@pmdtr.com</a>
          </div>
          <div className="flex gap-4 items-center">
            <a
              href="https://premiummusavirlik.emukellef.org/emukellef/mukellef/anasayfa"
              target="_blank"
              rel="noopener noreferrer"
              className="emukellef-btn emukellef-btn-top"
            >
              E - Mükellef
            </a>
            <a href="https://wa.me/905453660996" target="_blank" rel="noopener noreferrer">{t.common.whatsapp}</a>
            <a href="mailto:murat@pmdtr.com">{t.common.email}</a>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      <header className={`site-header${sticky ? " sticky" : ""}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="header-inner">
            <Link href="/" className="logo">
              {logoOk ? (
                <img src="/logo.png" alt="PMDTR" onError={() => setLogoOk(false)} />
              ) : (
                <span style={{ fontWeight: 800, letterSpacing: "0.04em", color: "var(--heading)" }}>PMDTR</span>
              )}
            </Link>

            <nav className="nav-links">
              {navItems.map((item, idx) => (
                <div key={idx} className="dropdown">
                  <Link
                    href={item.href}
                    className={pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href)) ? "active" : ""}
                  >
                    {item.label}
                    {item.sub && <span style={{ fontSize: 10, marginLeft: 4 }}>▾</span>}
                  </Link>
                  {item.sub && (
                    <div className="dropdown-menu">
                      {item.sub.map((s) => (
                        <Link key={s.href} href={s.href}>{s.label}</Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="header-actions">
              <a
                href="https://premiummusavirlik.emukellef.org/emukellef/mukellef/anasayfa"
                target="_blank"
                rel="noopener noreferrer"
                className="emukellef-btn emukellef-btn-header"
              >
                E - Mükellef
              </a>
              <LanguageSwitcher className="lang-switcher-header" />
              <button className="mobile-toggle" onClick={() => setMobileOpen(true)} aria-label="Menu">
                <span /><span /><span />
              </button>
            </div>
          </div>
        </div>
      </header>

      {sticky && <div className="header-spacer" />}

      <div className={`mobile-menu${mobileOpen ? " open" : ""}`} onClick={() => setMobileOpen(false)}>
        <div className="panel" onClick={(e) => e.stopPropagation()}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
            {logoOk ? (
              <img src="/logo.png" alt="PMDTR" style={{ height: 44 }} onError={() => setLogoOk(false)} />
            ) : (
              <span style={{ fontWeight: 800, letterSpacing: "0.04em", color: "var(--heading)" }}>PMDTR</span>
            )}
            <button onClick={() => setMobileOpen(false)} style={{ background: "none", border: "none", fontSize: 24, cursor: "pointer", color: "var(--text-muted)" }}>✕</button>
          </div>
          {navItems.map((item, idx) => (
            <div key={idx}>
              <Link href={item.href} onClick={() => setMobileOpen(false)}>{item.label}</Link>
              {item.sub && item.sub.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setMobileOpen(false)}
                  style={{ paddingLeft: 24, fontSize: 13, color: "var(--text-muted)" }}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          ))}
          <a
            href="https://premiummusavirlik.emukellef.org/emukellef/mukellef/anasayfa"
            target="_blank"
            rel="noopener noreferrer"
            className="emukellef-btn emukellef-btn-mobile"
            onClick={() => setMobileOpen(false)}
          >
            E - Mükellef
          </a>
          <div onClick={(e) => e.stopPropagation()}>
            <LanguageSwitcher className="lang-switcher-mobile" />
          </div>
          <div style={{ marginTop: 24, paddingTop: 16, borderTop: "1px solid var(--border-light)" }}>
            <p style={{ fontSize: 13, color: "var(--text-muted)", margin: 0 }}>
              📞 <a href="tel:+905453660996">+90 545 366 09 96</a>
            </p>
            <p style={{ fontSize: 13, color: "var(--text-muted)", margin: "4px 0 0" }}>
              📞 <a href="tel:+902124380464">+90 212 438 04 64</a>
            </p>
            <p style={{ fontSize: 13, color: "var(--text-muted)", margin: "4px 0 0" }}>
              ✉️ <a href="mailto:murat@pmdtr.com">murat@pmdtr.com</a>
            </p>
            <p style={{ fontSize: 13, color: "var(--text-muted)", margin: "4px 0 0" }}>📍 Kartaltepe, İncirli Cd. 46 D:11, Bakırköy / İstanbul</p>
          </div>
        </div>
      </div>
    </>
  );
}
