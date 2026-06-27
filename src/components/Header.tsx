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
      { label: "Şirket Kuruluş İşlemleri", href: "/hizmetler/sirket-kurulus" },
      { label: "Teknopark Danışmanlığı", href: "/hizmetler/teknopark-danismanligi" },
      { label: "Kosgeb ve Tübitak Proje Süreçleri", href: "/hizmetler/kosgeb-tubitak" },
      { label: "Mali Müşavirlik Hizmeti", href: "/hizmetler/mali-musavirlik" },
      { label: "Ar-Ge ve Tasarım Merkezi Başvuru Süreçleri", href: "/hizmetler/arge-tasarim" },
      { label: "Eğitim Hizmetleri", href: "/hizmetler/egitim" },
      { label: "Patent Süreçleri", href: "/hizmetler/patent" },
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

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (panelOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [panelOpen]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header className="header-style-two">
        <div className="header-wrapper">
          {/* Top Bar */}
          <div className="header-top-area bg-gradient-color d-none d-lg-block">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex justify-between items-center py-2">
                <div className="flex gap-6">
                  <span className="text-white text-sm flex items-center gap-2">
                    <i className="text-xs">📞</i> 0 555 296 87 87
                  </span>
                  <span className="text-white text-sm flex items-center gap-2">
                    <i className="text-xs">✉️</i> info@premiumdanismanlik.com
                  </span>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="opacity-80 hover:opacity-100"><span className="text-white text-xs">📷</span></a>
                  <a href="#" className="opacity-80 hover:opacity-100"><span className="text-white text-xs">𝕏</span></a>
                  <a href="#" className="opacity-80 hover:opacity-100"><span className="text-white text-xs">💬</span></a>
                  <a href="#" className="opacity-80 hover:opacity-100"><span className="text-white text-xs">🔗</span></a>
                  <a href="#" className="opacity-80 hover:opacity-100"><span className="text-white text-xs">📍</span></a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          <div className={`header-navigation-area two-layers-header${isSticky ? " bt_stick bt_sticky" : ""}`}>
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="navbar-brand logo flex-shrink-0">
                  <div className="h-[55px] w-[160px] bg-gradient-to-r from-[#0e4354] to-[#55bab3] rounded flex items-center justify-center text-white font-bold text-xs">
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
                            className={isActive(item.href) ? "text-primary-color" : ""}
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

                {/* Hamburger Trigger (desktop side panel) */}
                <div className="hidden lg:block">
                  <div className="side-panel-trigger cursor-pointer" onClick={() => setPanelOpen(true)}>
                    <span className="block w-[25px] h-[2px] bg-primary-color mb-[5px]" />
                    <span className="block w-[25px] h-[2px] bg-primary-color mb-[5px]" />
                    <span className="block w-[25px] h-[2px] bg-primary-color" />
                  </div>
                </div>

                {/* Mobile Hamburger */}
                <button
                  className="lg:hidden flex flex-col gap-1 p-2"
                  onClick={() => setPanelOpen(true)}
                >
                  <span className="block w-[25px] h-[2px] bg-primary-color" />
                  <span className="block w-[25px] h-[2px] bg-primary-color" />
                  <span className="block w-[25px] h-[2px] bg-primary-color" />
                </button>
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
        <div className="close-icon" onClick={() => setPanelOpen(false)}>
          ✕
        </div>
        <div className="side-panel-logo mrb-30">
          <div className="h-10 w-32 bg-gradient-to-r from-primary to-primary-light rounded flex items-center justify-center text-white font-bold text-xs">
            PREMIUM LOGO
          </div>
        </div>
        <div className="side-info mrb-30">
          <div className="side-panel-element mrb-25">
            <h4 className="mrb-10 font-semibold text-dark">İletişim Bilgileri</h4>
            <ul className="list-items space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-3"><span>🏢</span> Merkez Ofis</li>
              <li className="flex items-start gap-3"><span>🔬</span> Ar-Ge Ofisi<br />Cumhuriyet Mh. Mithatpaşa Cd. No:26/16 K:2 Çankaya / ANKARA</li>
              <li className="flex items-start gap-3"><span>📞</span> 0 555 296 87 87</li>
              <li className="flex items-start gap-3"><span>✉️</span> info@premiumdanismanlik.com</li>
            </ul>
          </div>
        </div>
        <h4 className="mrb-15 font-semibold">Sosyal Medyada Biz</h4>
        <div className="flex gap-3">
          <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white text-sm">📷</a>
          <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white text-sm">𝕏</a>
          <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white text-sm">💬</a>
          <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white text-sm">🔗</a>
        </div>
      </div>
    </>
  );
}
