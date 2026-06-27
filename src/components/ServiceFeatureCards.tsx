import Link from "next/link";

const services = [
  { title: "Şirket Kuruluş İşlemleri", icon: "🏢", href: "/hizmetler" },
  { title: "Teknopark Danışmanlığı", icon: "🏗️", href: "/hizmetler" },
  { title: "Kosgeb ve Tübitak Proje Süreçleri", icon: "🔬", href: "/hizmetler" },
  { title: "Mali Müşavirlik Hizmeti", icon: "💰", href: "/hizmetler" },
  { title: "Ar-Ge ve Tasarım Merkezi Başvuru Süreçleri", icon: "⚙️", href: "/hizmetler" },
  { title: "Belgelendirme Hizmetleri", icon: "📜", href: "/hizmetler" },
  { title: "Eğitim Hizmetleri", icon: "🎓", href: "/hizmetler" },
  { title: "Patent Süreçleri", icon: "📝", href: "/hizmetler" },
  { title: "Duyurular", icon: "📢", href: "/duyurular" },
];

export default function ServiceFeatureCards() {
  return (
    <>
      {/* Section Header - Dark */}
      <section className="py-16 md:py-28 section-white-typo relative" data-overlay-dark="8">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ background: "linear-gradient(135deg, #0e4354, #131c34, #55bab3)" }}
        />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <h5 className="text-primary-light font-semibold mb-4 inline-block relative text-sm md:text-base">
            <span className="hidden md:inline absolute left-[-50px] top-1/2 w-[35px] h-[2px] bg-primary-light" />
            Premium Danışmanlık
            <span className="hidden md:inline absolute right-[-50px] top-1/2 w-[35px] h-[2px] bg-primary-light" />
          </h5>
          <h2 className="text-white text-3xl md:text-5xl font-extrabold">Hizmetlerimiz</h2>
        </div>
      </section>

      {/* Service Cards - Negative Margin Overlap */}
      <section className="-mt-10 md:-mt-20 lg:-mt-32 pb-16 md:pb-24 bg-silver-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="feature-box group">
                <div className="feature-thumb">
                  <div className="h-36 sm:h-44 md:h-[200px] bg-gradient-to-br from-[#0e4354] to-[#55bab3] flex items-center justify-center text-4xl md:text-5xl">
                    {service.icon}
                  </div>
                </div>
                <div className="feature-content px-5 py-4 md:px-6 md:py-5">
                  <div className="title flex-1">
                    <h3 className="text-sm md:text-lg">{service.title}</h3>
                  </div>
                  <div className="link flex-shrink-0">
                    <Link href={service.href} title={service.title} className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-[#0e4354] to-[#55bab3] flex items-center justify-center text-white text-sm md:text-base hover:scale-110 transition-transform">
                      →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
