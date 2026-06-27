"use client";

import { FaArrowRight } from "react-icons/fa";

const services = [
  { id: 1, title: "Şirket Kuruluş İşlemleri", icon: "🏢", href: "#" },
  { id: 2, title: "Teknopark Danışmanlığı", icon: "🏗️", href: "#" },
  { id: 3, title: "Kosgeb ve Tübitak Proje Süreçleri", icon: "🔬", href: "#" },
  { id: 4, title: "Mali Müşavirlik Hizmeti", icon: "💰", href: "#" },
  { id: 5, title: "Ar-Ge ve Tasarım Merkezi Başvuru Süreçleri", icon: "⚙️", href: "#" },
  { id: 6, title: "Belgelendirme Hizmetleri", icon: "📜", href: "#" },
  { id: 7, title: "Eğitim Hizmetleri", icon: "🎓", href: "#" },
  { id: 8, title: "Patent Süreçleri", icon: "📝", href: "#" },
  { id: 9, title: "Duyurular", icon: "📢", href: "#" },
];

export default function ServiceCards() {
  return (
    <section id="hizmetler">
      {/* Section Header - Dark */}
      <div className="bg-dark relative py-28" data-overlay-dark="8">
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <h5 className="text-primary-light font-semibold mb-4 relative inline-block">
            <span className="inline-block w-12 h-0.5 bg-primary-light align-middle mr-4" />
            Premium Danışmanlık
            <span className="inline-block w-12 h-0.5 bg-primary-light align-middle ml-4" />
          </h5>
          <h2 className="text-white text-4xl md:text-5xl font-extrabold">Hizmetlerimiz</h2>
        </div>
      </div>

      {/* Service Cards - Overlapping */}
      <div className="bg-silver-light -mt-20 pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.id} className="feature-card bg-white p-8 group cursor-pointer">
                <div className="flex items-start gap-5">
                  <div className="text-4xl flex-shrink-0 w-16 h-16 bg-silver-light rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition">{service.title}</h3>
                    <a
                      href={service.href}
                      className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all"
                    >
                      Detaylı Bilgi <FaArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
