import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaLinkedinIn, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const services = [
  "Şirket Kuruluş İşlemleri",
  "Teknopark Danışmanlığı",
  "Kosgeb ve Tübitak Proje Süreçleri",
  "Mali Müşavirlik Hizmeti",
  "Ar-Ge ve Tasarım Merkezi Başvuru Süreçleri",
  "Eğitim Hizmetleri",
  "Patent Süreçleri",
];

const quickLinks = [
  { label: "Anasayfa", href: "/" },
  { label: "Hizmetlerimiz", href: "#hizmetler" },
  { label: "Referanslar", href: "#referanslar" },
  { label: "Duyurular", href: "#duyurular" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo + Description */}
          <div>
            <div className="h-12 w-40 bg-gradient-to-r from-primary-light to-primary rounded flex items-center justify-center text-white font-bold text-sm mb-5">
              PREMIUM LOGO
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium Danışmanlık firmasının ortaya çıkış amacı Teknoloji Geliştirme Bölgelerinde faaliyet gösteren girişimci firmalarının süreçlerinin en doğru bir şekilde yönetilmesini sağlamak olmuştur.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-white font-semibold text-lg mb-6">Hızlı Menü</h5>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary-light transition text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-white font-semibold text-lg mb-6">Hizmetlerimiz</h5>
            <ul className="space-y-3">
              {services.map((service, idx) => (
                <li key={idx}>
                  <Link href="#" className="text-gray-400 hover:text-primary-light transition text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-white font-semibold text-lg mb-6">İletişim</h5>
            <div className="space-y-4 text-sm text-gray-400">
              <p>
                <strong className="text-gray-300">Merkez Ofis:</strong><br />
                İstanbul / Türkiye
              </p>
              <p>
                <strong className="text-gray-300">Ar-Ge Ofisi:</strong><br />
                Cumhuriyet Mh. Mithatpaşa Cd. No:26/16 K:2 Çankaya / ANKARA
              </p>
              <a href="tel:+905552968787" className="flex items-center gap-2 hover:text-primary-light transition">
                <FaPhoneAlt className="text-primary-light" size={12} /> 0 555 296 87 87
              </a>
              <a href="mailto:info@premiumdanismanlik.com" className="flex items-center gap-2 hover:text-primary-light transition">
                <FaEnvelope className="text-primary-light" size={12} /> info@premiumdanismanlik.com
              </a>
            </div>
            <div className="flex gap-3 mt-6">
              <a href="#" className="hover:text-primary-light transition"><FaInstagram /></a>
              <a href="#" className="hover:text-primary-light transition"><FaXTwitter /></a>
              <a href="#" className="hover:text-primary-light transition"><FaWhatsapp /></a>
              <a href="#" className="hover:text-primary-light transition"><FaLinkedinIn /></a>
              <a href="#" className="hover:text-primary-light transition"><FaMapMarkerAlt /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-5 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Tüm hakları saklıdır. Premium Danışmanlık
        </div>
      </div>
    </footer>
  );
}
