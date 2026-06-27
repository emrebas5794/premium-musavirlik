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
    <footer className="footer">
      <div className="footer-main-area">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo + Description */}
            <div className="footer-widget">
              <div className="h-12 w-40 bg-gradient-to-r from-[#0e4354] to-[#55bab3] rounded flex items-center justify-center text-white font-bold text-xs mrb-20">
                PREMIUM LOGO
              </div>
              <p className="text-light-gray">
                Premium Danışmanlık firmasının ortaya çıkış amacı Teknoloji Geliştirme Bölgelerinde faaliyet gösteren girişimci firmalarının 4691 sayılı Teknoloji Geliştirme Bölgeleri Kanunu ve 5746 sayılı Araştırma ve Geliştirme Faaliyetlerinin de en doğru bir şekilde süreçlerinin yönetilmesini sağlamak olmuştur.
              </p>
            </div>

            {/* Quick Menu */}
            <div className="footer-widget">
              <h5 className="widget-title">Hızlı Menü</h5>
              <ul className="footer-widget-list">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-widget">
              <h5 className="widget-title">Hizmetlerimiz</h5>
              <ul className="footer-widget-list">
                {services.map((s, idx) => (
                  <li key={idx}>
                    <Link href="/hizmetler">{s}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-widget">
              <h5 className="widget-title">İletişim</h5>
              <address className="mrb-25">
                <p className="text-light-gray">
                  Merkez Ofis:<br />
                  İstanbul / Türkiye
                </p>
                <p className="text-light-gray">
                  Ar-Ge Ofisi:<br />
                  Cumhuriyet Mh. Mithatpaşa Cd. No:26/16 K:2 Çankaya / ANKARA
                </p>
                <div className="mrb-10">
                  <a href="tel:+905552968787" className="text-light-gray">
                    <span className="mrr-10">📞</span>0 555 296 87 87
                  </a>
                </div>
                <div className="mrb-10">
                  <a href="mailto:info@premiumdanismanlik.com" className="text-light-gray">
                    <span className="mrr-10">✉️</span>info@premiumdanismanlik.com
                  </a>
                </div>
              </address>
              <div className="flex gap-3">
                <a href="#"><span className="text-white/70 hover:text-white text-sm">📷</span></a>
                <a href="#"><span className="text-white/70 hover:text-white text-sm">𝕏</span></a>
                <a href="#"><span className="text-white/70 hover:text-white text-sm">💬</span></a>
                <a href="#"><span className="text-white/70 hover:text-white text-sm">🔗</span></a>
                <a href="#"><span className="text-white/70 hover:text-white text-sm">📍</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-area">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-light-gray">
            © {new Date().getFullYear()} Tüm hakları saklıdır.{" "}
            <a href="#" className="text-white">Premium Danışmanlık</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
