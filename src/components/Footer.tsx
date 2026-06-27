import Link from "next/link";

const quickLinks = [
  { label: "Anasayfa", href: "/" },
  { label: "Hizmetlerimiz", href: "/hizmetler" },
  { label: "İş Ortaklarımız", href: "/is-ortaklari" },
  { label: "Kariyer", href: "/kariyer" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
];

const services = [
  "Muhasebe ve Mali Müşavirlik",
  "KDV ve ÖTV İade Hizmetleri",
  "Bordrolama",
  "Şirket Kurma Hizmetleri",
  "Vergi Danışmanlığı",
  "İş Hukuku Danışmanlığı",
  "Uluslararası Vergi Hizmetleri",
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main-area">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {/* Logo + Description */}
            <div className="footer-widget">
              <img src="/logo.png" alt="PMDTR - Premium Danışmanlık" className="h-10 w-auto mb-5" />
              <p className="text-light-gray text-xs md:text-sm leading-relaxed">
                PMDTR - Premium Danışmanlık; muhasebe, mali müşavirlik, vergi, SGK ve danışmanlık alanlarında uzman kadrosuyla hizmet vermektedir.
              </p>
            </div>

            {/* Quick Menu */}
            <div className="footer-widget">
              <h5 className="widget-title text-base md:text-lg">Hızlı Menü</h5>
              <ul className="footer-widget-list space-y-1.5">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="text-xs md:text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-widget">
              <h5 className="widget-title text-base md:text-lg">Hizmetlerimiz</h5>
              <ul className="footer-widget-list space-y-1.5">
                {services.map((s, idx) => (
                  <li key={idx}>
                    <Link href="/hizmetler" className="text-xs md:text-sm">{s}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-widget">
              <h5 className="widget-title text-base md:text-lg">İletişim</h5>
              <address className="not-italic mb-4 md:mb-6">
                <p className="text-light-gray text-xs md:text-sm mb-2">
                  <strong className="text-gray-300">Adres:</strong><br />
                  Kartaltepe Mah. İncirli Cad. No.46 D.11<br />Bakırköy / İSTANBUL
                </p>
                <a href="tel:+902124380464" className="text-light-gray text-xs md:text-sm flex items-center gap-2 mb-2 hover:text-[#55bab3] transition">
                  📞 +90 212 438 0464
                </a>
                <a href="tel:+905453660996" className="text-light-gray text-xs md:text-sm flex items-center gap-2 mb-2 hover:text-[#55bab3] transition">
                  📱 +90 545 366 09 96
                </a>
                <a href="mailto:info@pmdtr.com" className="text-light-gray text-xs md:text-sm flex items-center gap-2 hover:text-[#55bab3] transition">
                  ✉️ info@pmdtr.com
                </a>
              </address>
              <div className="flex gap-2 md:gap-3">
                {["📷", "🔗", "💬"].map((icon, i) => (
                  <a key={i} href="#" className="text-white/60 hover:text-white text-sm md:text-base transition" aria-label="Sosyal Medya">
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-area border-t border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-light-gray text-xs md:text-sm">
            © {new Date().getFullYear()} Tüm hakları saklıdır.{" "}
            <Link href="/" className="text-white hover:text-[#55bab3] transition">PMDTR - Premium Danışmanlık</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
