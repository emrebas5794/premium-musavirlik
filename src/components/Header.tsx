"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Anasayfa", href: "/" },
  { label: "Kurumsal", href: "/hakkimizda" },
  {
    label: "Hizmetlerimiz",
    href: "/hizmetler",
    sub: [
      "Muhasebe ve Mali Müşavirlik",
      "KDV ve ÖTV İade",
      "Bordrolama ve SGK",
      "Şirket Kurma",
      "Vergi Danışmanlığı",
      "Uluslararası Vergi",
      "İş Hukuku",
    ],
  },
  { label: "Referanslar", href: "/referanslar" },
  { label: "Duyurular", href: "/duyurular" },
  { label: "İletişim", href: "/iletisim" },
];

export default function Header() {
  const pathname = usePathname();
  const [sticky, setSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const cb = () => setSticky(window.scrollY > 10);
    window.addEventListener("scroll", cb);
    return () => window.removeEventListener("scroll", cb);
  }, []);

  useEffect(() => { document.body.style.overflow = mobileOpen ? "hidden" : ""; }, [mobileOpen]);

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6 text-white/80">
            <span>📞 +90 212 438 0464</span>
            <span>✉️ info@pmdtr.com</span>
          </div>
          <div className="flex gap-4">
            <a href="https://wa.me/905453660996" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href="mailto:info@pmdtr.com">E-Posta</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`site-header${sticky ? " sticky" : ""}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="header-inner">
            <Link href="/" className="logo">
              <img src="/logo.png" alt="PMDTR" />
            </Link>

            {/* Desktop Nav */}
            <nav className="nav-links">
              {navItems.map((item, idx) => (
                <div key={idx} className="dropdown">
                  <Link
                    href={item.href}
                    className={pathname === item.href ? "active" : ""}
                  >
                    {item.label}
                    {item.sub && <span style={{ fontSize: 10, marginLeft: 4 }}>▾</span>}
                  </Link>
                  {item.sub && (
                    <div className="dropdown-menu">
                      {item.sub.map((s, i) => (
                        <Link key={i} href="/hizmetler">{s}</Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Toggle */}
            <button className="mobile-toggle" onClick={() => setMobileOpen(true)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* Spacer when sticky */}
      {sticky && <div style={{ height: 64 }} />}

      {/* Mobile Menu */}
      <div className={`mobile-menu${mobileOpen ? " open" : ""}`} onClick={() => setMobileOpen(false)}>
        <div className="panel" onClick={e => e.stopPropagation()}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
            <img src="/logo.png" alt="PMDTR" style={{ height: 32 }} />
            <button onClick={() => setMobileOpen(false)} style={{ background: "none", border: "none", fontSize: 24, cursor: "pointer", color: "var(--text-muted)" }}>✕</button>
          </div>
          {navItems.map((item, idx) => (
            <div key={idx}>
              <Link href={item.href} onClick={() => setMobileOpen(false)}>{item.label}</Link>
              {item.sub && item.sub.map((s, i) => (
                <Link key={i} href="/hizmetler" onClick={() => setMobileOpen(false)} style={{ paddingLeft: 24, fontSize: 13, color: "var(--text-muted)" }}>{s}</Link>
              ))}
            </div>
          ))}
          <div style={{ marginTop: 24, paddingTop: 16, borderTop: "1px solid var(--border-light)" }}>
            <p style={{ fontSize: 13, color: "var(--text-muted)", margin: 0 }}>📞 +90 212 438 0464</p>
            <p style={{ fontSize: 13, color: "var(--text-muted)", margin: "4px 0 0" }}>📍 Bakırköy / İstanbul</p>
          </div>
        </div>
      </div>
    </>
  );
}
