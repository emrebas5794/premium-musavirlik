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
      { label: "Şirket Kuruluş İşlemleri", href: "/hizmetler" },
      { label: "Teknopark Danışmanlığı", href: "/hizmetler" },
      { label: "Kosgeb ve Tübitak Proje Süreçleri", href: "/hizmetler" },
      { label: "Mali Müşavirlik Hizmeti", href: "/hizmetler" },
      { label: "Ar-Ge ve Tasarım Merkezi Başvuru Süreçleri", href: "/hizmetler" },
      { label: "Eğitim Hizmetleri", href: "/hizmetler" },
      { label: "Patent Süreçleri", href: "/hizmetler" },
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
          {/* Top Bar - desktop only */}
          <div className="header-top-area bg-gradient-color d-none d-lg-block">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex justify-between items-center py-2.5">
                <div className="flex gap-6">
                  <span className="text-white text-sm flex items-center gap-2">
                    📞 0 555 296 87 87
                  </span>
                  <span className="text-white text-sm flex items-center gap-2">
                    ✉️ info@premiumdanismanlik.com
                  </span>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="text-white/80 hover:text-white text-sm" aria-label="Instagram">📷</a>
                  <a href="#" className="text-white/80 hover:text-white text-sm" aria-label="Twitter">𝕏</a>
                  <a href="#" className="text-white/80 hover:text-white text-sm" aria-label="WhatsApp">💬</a>
                  <a href="#" className="text-white/80 hover:text-white text-sm" aria-label="LinkedIn">🔗</a>
                  <a href="#" className="text-white/80 hover:text-white text-sm" aria-label="Konum">📍</a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          <div className={`header-navigation-area${isSticky ? " sticky top-0 left-0 right-0 z-50 shadow-lg" : ""}`}>
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex items-center justify-between py-2">
                {/* Logo */}
                <Link href="/" className="navbar-brand logo flex-shrink-0">
                  <div className="h-[50px] w-[150px] bg-gradient-to-r from-[#0e4354] to-[#55bab3] rounded-lg flex items-center justify-center text-white font-bold text-xs">
                    PREMIUM LOGO
                  </div>
                </Link>

                {/* Desktop Menu */}
                <div className="main-menu hidden lg:block">
                  <nav>
                    <ul className="flex">
                      {navItems.map((item, idx) => (
                        <li key={idx} className={item.children ? "has-sub-child" : ""}>
                          <Link
                            href={item.href}
                            className={`${isActive(item.href) ? "text-primary-color" : ""}`}
                          >
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

                {/* Hamburger - all screens */}
                <div className="side-panel-trigger flex lg:hidden" onClick={() => setPanelOpen(true)}>
                  <div>
                    <span className="block w-[25px] h-[2px] bg-primary-color mb-[5px]" />
                    <span className="block w-[25px] h-[2px] bg-primary-color mb-[5px]" />
                    <span className="block w-[25px] h-[2px] bg-primary-color" />
                  </div>
                </div>
                {/* Desktop hamburger (opens side panel with contact info) */}
                <div className="side-panel-trigger hidden lg:flex" onClick={() => setPanelOpen(true)}>
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

      {/* Side Panel Overlay */}
      <div
        className={`side-panel-overlay ${panelOpen ? "active" : ""}`}
        onClick={() => setPanelOpen(false)}
      />

      {/* Side Panel */}
      <div className={`side-panel-content ${panelOpen ? "open" : ""}`}>
        <div className="close-icon text-right cursor-pointer mb-5" onClick={() => setPanelOpen(false)}>
          <span className="text-2xl text-gray-600 hover:text-primary">&times;</span>
        </div>
        <div className="side-panel-logo mrb-30">
          <div className="h-10 w-32 bg-gradient-to-r from-[#0e4354] to-[#55bab3] rounded flex items-center justify-center text-white font-bold text-xs">
            PREMIUM LOGO
          </div>
        </div>

        {/* Mobile Nav Links */}
        <div className="lg:hidden mrb-30">
          <nav className="space-y-0">
            {navItems.map((item, idx) => (
              <div key={idx} className="border-b border-gray-100">
                {item.children ? (
                  <>
                    <button
                      onClick={() => setMobileSubOpen(mobileSubOpen === idx ? null : idx)}
                      className="w-full flex justify-between items-center py-3 px-2 text-left text-gray-700 hover:text-primary font-medium"
                    >
                      {item.label}
                      <span className={`text-xs transition-transform ${mobileSubOpen === idx ? "rotate-180" : ""}`}>▼</span>
                    </button>
                    {mobileSubOpen === idx && (
                      <div className="bg-silver-light rounded px-3 py-2 mb-2">
                        {item.children.map((child, cIdx) => (
                          <Link
                            key={cIdx}
                            href={child.href}
                            onClick={() => setPanelOpen(false)}
                            className="block py-2 px-3 text-sm text-gray-600 hover:text-primary"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setPanelOpen(false)}
                    className={`block py-3 px-2 font-medium ${
                      isActive(item.href) ? "text-primary-color" : "text-gray-700 hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Contact Info */}
        <div className="side-info mrb-30">
          <div className="side-panel-element mrb-25">
            <h4 className="mrb-10 font-semibold text-[#151a33]">İletişim Bilgileri</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-0.5">🏢</span>
                <span>Merkez Ofis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-0.5">🔬</span>
                <span>Ar-Ge Ofisi<br />Cumhuriyet Mh. Mithatpaşa Cd. No:26/16 K:2 Çankaya / ANKARA</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-0.5">📞</span>
                <span>0 555 296 87 87</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-0.5">✉️</span>
                <span>info@premiumdanismanlik.com</span>
              </li>
            </ul>
          </div>
        </div>
        <h4 className="mrb-15 font-semibold text-[#151a33]">Sosyal Medyada Biz</h4>
        <div className="flex gap-3">
          {["📷", "𝕏", "💬", "🔗"].map((icon, i) => (
            <a key={i} href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white text-sm hover:bg-primary-light transition" aria-label="Sosyal Medya">
              {icon}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
