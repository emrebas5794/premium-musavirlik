import Link from "next/link";

const quickLinks = [
  { label: "Anasayfa", href: "/" },
  { label: "Hizmetlerimiz", href: "/hizmetler" },
  { label: "Referanslar", href: "/referanslar" },
  { label: "Duyurular", href: "/duyurular" },
  { label: "İletişim", href: "/iletisim" },
];

const services = [
  "Şirket Kuruluş İşlemleri",
  "Teknopark Danışmanlığı",
  "Kosgeb ve Tübitak Proje Süreçleri",
  "Mali Müşavirlik Hizmeti",
  "Ar-Ge ve Tasarım Merkezi Başvuru Süreçleri",
  "Eğitim Hizmetleri",
  "Patent Süreçleri",
];

export default function Footer() {
  return (
    <footer className="footer bg-[#131c34]">
      <div className="footer-main-area py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {/* Logo + Description */}
            <div className="footer-widget">
              <div className="h-10 w-36 bg-gradient-to-r from-[#0e4354] to-[#55bab3] rounded flex items-center justify-center text-white font-bold text-xs mb-5">
                PREMIUM LOGO
              </div>
              <p className="text-light-gray text-xs md:text-sm leading-relaxed">
                Premium Danışmanlık firmasının ortaya çıkış amacı Teknoloji Geliştirme Bölgelerinde faaliyet gösteren girişimci firmalarının süreçlerinin en doğru bir şekilde yönetilmesini sağlamak olmuştur.
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
                  <strong className="text-gray-300">Merkez Ofis:</strong><br />
                  İstanbul / Türkiye
                </p>
                <p className="text-light-gray text-xs md:text-sm mb-3">
                  <strong className="text-gray-300">Ar-Ge Ofisi:</strong><br />
                  Cumhuriyet Mh. Mithatpaşa Cd. No:26/16 K:2 Çankaya / ANKARA
                </p>
                <a href="tel:+905552968787" className="text-light-gray text-xs md:text-sm flex items-center gap-2 mb-2 hover:text-[#55bab3] transition">
                  📞 0 555 296 87 87
                </a>
                <a href="mailto:info@premiumdanismanlik.com" className="text-light-gray text-xs md:text-sm flex items-center gap-2 hover:text-[#55bab3] transition">
                  ✉️ info@premiumdanismanlik.com
                </a>
              </address>
              <div className="flex gap-2 md:gap-3">
                {["📷", "𝕏", "💬", "🔗", "📍"].map((icon, i) => (
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
            <Link href="/" className="text-white hover:text-[#55bab3] transition">Premium Danışmanlık</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
