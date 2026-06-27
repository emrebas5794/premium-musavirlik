"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaLinkedinIn, FaWhatsapp, FaTimes, FaMapMarkerAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const navItems = [
  { label: "Anasayfa", href: "/" },
  { label: "Kurumsal", href: "#kurumsal", children: [{ label: "Hakkımızda", href: "#hakkimizda" }] },
  {
    label: "Hizmetlerimiz",
    href: "#hizmetler",
    children: [
      { label: "Şirket Kuruluş İşlemleri", href: "#" },
      { label: "Teknopark Danışmanlığı", href: "#" },
      { label: "Kosgeb ve Tübitak Projeleri", href: "#" },
      { label: "Mali Müşavirlik Hizmeti", href: "#" },
      { label: "Ar-Ge Merkezi Başvuruları", href: "#" },
      { label: "Eğitim Hizmetleri", href: "#" },
      { label: "Patent Süreçleri", href: "#" },
    ],
  },
  { label: "Referanslar", href: "#referanslar" },
  { label: "Duyurular", href: "#duyurular" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="relative z-50">
        {/* Top Bar */}
        <div className="hidden lg:block bg-gradient-to-r from-primary to-primary-light text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center py-2 text-sm">
              <div className="flex gap-6">
                <span className="flex items-center gap-2">
                  <FaPhoneAlt size={12} /> 0 555 296 87 87
                </span>
                <span className="flex items-center gap-2">
                  <FaEnvelope size={12} /> info@premiumdanismanlik.com
                </span>
              </div>
              <div className="flex gap-3">
                <a href="#" className="hover:opacity-80 transition"><FaInstagram /></a>
                <a href="#" className="hover:opacity-80 transition"><FaXTwitter /></a>
                <a href="#" className="hover:opacity-80 transition"><FaWhatsapp /></a>
                <a href="#" className="hover:opacity-80 transition"><FaLinkedinIn /></a>
                <a href="#" className="hover:opacity-80 transition"><FaMapMarkerAlt /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <div className={`${isScrolled ? "fixed top-0 left-0 right-0 shadow-lg bg-white" : "bg-white"} transition-all duration-300`}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center py-3">
              {/* Logo - Placeholder */}
              <Link href="/" className="flex items-center">
                <div className="h-12 w-40 bg-gradient-to-r from-primary to-primary-light rounded flex items-center justify-center text-white font-bold text-sm">
                  PREMIUM LOGO
                </div>
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden lg:flex items-center gap-1">
                {navItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative"
                    onMouseEnter={() => item.children && setOpenDropdown(idx)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className="px-4 py-2 text-[15px] font-medium text-gray-700 hover:text-primary transition flex items-center gap-1"
                    >
                      {item.label}
                      {item.children && (
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </Link>
                    {item.children && openDropdown === idx && (
                      <div className="absolute top-full left-0 bg-white shadow-xl rounded-md py-2 min-w-[220px] border">
                        {item.children.map((child, cIdx) => (
                          <Link
                            key={cIdx}
                            href={child.href}
                            className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-primary hover:text-white transition"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Hamburger */}
              <button
                className="lg:hidden flex flex-col justify-center items-center w-10 h-10"
                onClick={() => setIsMobileOpen(true)}
              >
                <span className="hamburger-line" />
                <span className="hamburger-line" />
                <span className="hamburger-line" />
              </button>
            </div>
          </div>
        </div>

        {isScrolled && <div className="h-[72px]" />}
      </header>

      {/* Mobile Overlay */}
      <div className={`mobile-overlay ${isMobileOpen ? "active" : ""}`} onClick={() => setIsMobileOpen(false)} />

      {/* Mobile Nav */}
      <div className={`mobile-nav ${isMobileOpen ? "open" : ""}`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <div className="h-10 w-32 bg-gradient-to-r from-primary to-primary-light rounded flex items-center justify-center text-white font-bold text-xs">
              PREMIUM LOGO
            </div>
            <button onClick={() => setIsMobileOpen(false)} className="text-gray-500 hover:text-primary">
              <FaTimes size={24} />
            </button>
          </div>
          <div className="mb-8">
            <h4 className="font-semibold mb-3 text-primary">İletişim Bilgileri</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-primary" /> Merkez Ofis</li>
              <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-primary" /> Ar-Ge Ofisi<br />Cumhuriyet Mh. Mithatpaşa Cd. No:26/16 K:2 Çankaya / ANKARA</li>
              <li className="flex items-center gap-2"><FaPhoneAlt className="text-primary" /> 0 555 296 87 87</li>
              <li className="flex items-center gap-2"><FaEnvelope className="text-primary" /> info@premiumdanismanlik.com</li>
            </ul>
          </div>
          <nav className="space-y-1">
            {navItems.map((item, idx) => (
              <div key={idx}>
                <Link
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="block py-3 px-4 text-gray-700 hover:bg-silver-light hover:text-primary rounded transition font-medium"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>
          <div className="mt-8 flex gap-3">
            <a href="#" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center"><FaInstagram size={14} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center"><FaXTwitter size={14} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center"><FaWhatsapp size={14} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center"><FaLinkedinIn size={14} /></a>
          </div>
        </div>
      </div>
    </>
  );
}
