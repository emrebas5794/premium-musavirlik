import Link from "next/link";

const services = [
  { title: "Muhasebe ve Mali Müşavirlik", desc: "Defter tutma, finansal raporlama ve mali müşavirlik", icon: "📊", href: "/hizmetler" },
  { title: "KDV ve ÖTV İade Hizmetleri", desc: "Vergi iadelerinizi hızlı ve eksiksiz alın", icon: "↩️", href: "/hizmetler" },
  { title: "Bordrolama ve SGK Hizmetleri", desc: "Personel bordro, SGK bildirge ve teşvik", icon: "💳", href: "/hizmetler" },
  { title: "Şirket Kurma Hizmetleri", desc: "Türkiye'de şirket kurulumu ve yabancı ortaklı yapılar", icon: "🏢", href: "/hizmetler" },
  { title: "Vergi Danışmanlığı", desc: "Vergi planlaması, ihtilaf ve uyuşmazlık çözümü", icon: "💰", href: "/hizmetler" },
  { title: "Uluslararası Vergi", desc: "Transfer fiyatlandırması ve çifte vergilendirme", icon: "🌍", href: "/hizmetler" },
  { title: "İş Hukuku Danışmanlığı", desc: "İş sözleşmeleri, uyuşmazlık ve dava takibi", icon: "⚖️", href: "/hizmetler" },
  { title: "SGK Teşvik Danışmanlığı", desc: "Devlet teşviklerinden maksimum faydalanın", icon: "🎯", href: "/hizmetler" },
  { title: "E-Mükellef Çözümleri", desc: "Dijital platformdan anlık vergi ve SGK takibi", icon: "📱", href: "/hizmetler" },
];

export default function ServiceFeatureCards() {
  return (
    <>
      {/* Section Header - Dark */}
      <section className="section-white-typo relative" data-overlay-dark="8">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #0e4354, #134354, #55bab3)" }}
        />
        <div className="relative z-10 py-16 md:py-32">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h5 className="text-primary-light font-semibold mb-3 text-sm md:text-base tracking-wider uppercase">
              PMDTR
            </h5>
            <h2 className="text-white text-3xl md:text-5xl font-extrabold mb-4">
              Premium Danışmanlık<br />
              <span className="text-primary-light">Hizmetlerimiz</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-sm md:text-base">
              2018&apos;den beri 40 kişilik uzman ekibimizle muhasebe, vergi, SGK ve danışmanlık alanlarında 
              işletmenizin tüm finansal süreçlerinde yanınızdayız.
            </p>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="-mt-10 md:-mt-20 lg:-mt-32 pb-16 md:pb-24 bg-silver-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="feature-box group">
                <div className="feature-thumb">
                  <div className="h-36 sm:h-44 md:h-[200px] bg-gradient-to-br from-[#0e4354] to-[#55bab3] flex items-center justify-center text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                </div>
                <div className="feature-content">
                  <div className="title">
                    <h3>{service.title}</h3>
                  </div>
                  <p className="text-gray-500 text-xs md:text-sm mb-3 px-2">{service.desc}</p>
                  <div className="link">
                    <Link href={service.href} title={service.title}>
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
