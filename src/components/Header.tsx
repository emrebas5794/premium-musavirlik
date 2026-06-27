"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Anasayfa", href: "/" },
  {
    label: "Kurumsal",
    href: "/kurumsal",
    children: [{ label: "Hakkımızda", href: "/hakkimizda" }],
  },
  {
    label: "Hizmetlerimiz",
    href: "/hizmetler",
    children: [
      { label: "Muhasebe ve Mali Müşavirlik", href: "/hizmetler" },
      { label: "KDV ve ÖTV İade Hizmetleri", href: "/hizmetler" },
      { label: "Bordrolama", href: "/hizmetler" },
      { label: "Şirket Kurma Hizmetleri", href: "/hizmetler" },
      { label: "Vergi Danışmanlığı", href: "/hizmetler" },
      { label: "Uluslararası Vergi Hizmetleri", href: "/hizmetler" },
      { label: "İş Hukuku Danışmanlığı", href: "/hizmetler" },
    ],
  },
  { label: "Referanslar", href: "/referanslar" },
  { label: "Duyurular", href: "/duyurular" },
  { label: "İletişim", href: "/iletisim" },
];

export default function Header() {
  const pathname = usePathname();
  const [panelOpen, setPanelOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = panelOpen ? "hidden" : "";
  }, [panelOpen]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header className="header-style-two">
        <div className="header-wrapper">
          {/* Top Bar */}
          <div className="header-top-area bg-gradient-color d-none d-lg-block">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex justify-between items-center py-2.5">
                <div className="flex gap-6">
                  <span className="text-white text-sm flex items-center gap-2">
                    📞 +90 212 438 0464
                  </span>
                  <span className="text-white text-sm flex items-center gap-2">
                    ✉️ info@pmdtr.com
                  </span>
                </div>
                <div className="flex gap-3">
                  <a href="https://www.instagram.com/pmdtr/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white text-sm">📷</a>
                  <a href="https://www.linkedin.com/company/pmdtr/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white text-sm">🔗</a>
                  <a href="https://wa.me/905453660996" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white text-sm">💬</a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          <div className={`header-navigation-area${isSticky ? " sticky top-0 left-0 right-0 z-50 shadow-lg" : ""}`}>
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex items-center justify-between py-1">
                <Link href="/" className="navbar-brand logo flex-shrink-0">
                  <img src="/logo.png" alt="PMDTR" className="h-[50px] w-auto" />
                </Link>

                {/* Desktop Menu */}
                <div className="main-menu hidden lg:block">
                  <nav>
                    <ul className="flex">
                      {navItems.map((item, idx) => (
                        <li key={idx} className={item.children ? "has-sub-child" : ""}>
                          <Link href={item.href} className={isActive(item.href) ? "text-primary-color" : ""}>
                            {item.label}
                          </Link>
                          {item.children && (
                            <ul className="sub-menu">
                              {item.children.map((child, cIdx) => (
                                <li key={cIdx}>
                                  <Link href={child.href}>{child.label}</Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>

                {/* Hamburger */}
                <div className="side-panel-trigger flex" onClick={() => setPanelOpen(true)}>
                  <div>
                    <span className="block w-[25px] h-[2px] bg-primary-color mb-[5px]" />
                    <span className="block w-[25px] h-[2px] bg-primary-color mb-[5px]" />
                    <span className="block w-[25px] h-[2px] bg-primary-color" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Side Panel */}
      <div className={`side-panel-overlay ${panelOpen ? "active" : ""}`} onClick={() => setPanelOpen(false)} />
      <div className={`side-panel-content ${panelOpen ? "open" : ""}`}>
        <div className="close-icon text-right cursor-pointer mb-5" onClick={() => setPanelOpen(false)}>
          <span className="text-2xl text-gray-600 hover:text-primary">&times;</span>
        </div>
        <div className="side-panel-logo mrb-30">
          <img src="/logo.png" alt="PMDTR" className="h-10 w-auto" />
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden mrb-30">
          <nav className="space-y-0">
            {navItems.map((item, idx) => (
              <div key={idx} className="border-b border-gray-100">
                {item.children ? (
                  <>
                    <button
                      onClick={() => setMobileSubOpen(mobileSubOpen === idx ? null : idx)}
                      className="w-full flex justify-between items-center py-3 px-2 text-left text-gray-700 hover:text-primary font-medium text-sm"
                    >
                      {item.label}
                      <span className={`text-xs transition-transform ${mobileSubOpen === idx ? "rotate-180" : ""}`}>▼</span>
                    </button>
                    {mobileSubOpen === idx && (
                      <div className="bg-silver-light rounded px-3 py-2 mb-2">
                        {item.children.map((child, cIdx) => (
                          <Link key={cIdx} href={child.href} onClick={() => setPanelOpen(false)}
                            className="block py-2 px-3 text-sm text-gray-600 hover:text-primary">
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={item.href} onClick={() => setPanelOpen(false)}
                    className={`block py-3 px-2 font-medium text-sm ${isActive(item.href) ? "text-primary-color" : "text-gray-700 hover:text-primary"}`}>
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="side-info mrb-30">
          <div className="side-panel-element mrb-25">
            <h4 className="mrb-10 font-semibold text-[#151a33]">İletişim Bilgileri</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-3"><span className="text-primary mt-0.5">📍</span> Kartaltepe Mah. İncirli Cad. No.46 D.11 Bakırköy / İSTANBUL</li>
              <li className="flex items-start gap-3"><span className="text-primary mt-0.5">📞</span> +90 212 438 0464</li>
              <li className="flex items-start gap-3"><span className="text-primary mt-0.5">📱</span> +90 545 366 09 96</li>
              <li className="flex items-start gap-3"><span className="text-primary mt-0.5">✉️</span> info@pmdtr.com</li>
            </ul>
          </div>
        </div>
        <h4 className="mrb-15 font-semibold text-[#151a33]">Sosyal Medyada Biz</h4>
        <div className="flex gap-3">
          {["📷", "🔗", "💬"].map((icon, i) => (
            <a key={i} href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white text-sm hover:bg-primary-light transition">{icon}</a>
          ))}
        </div>
      </div>
    </>
  );
}
