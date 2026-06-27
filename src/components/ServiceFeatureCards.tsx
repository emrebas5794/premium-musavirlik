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
      <section className="pdt-110 pdb-150 section-white-typo relative" data-overlay-dark="8">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ background: "linear-gradient(135deg, #0e4354, #131c34, #55bab3)" }}
        />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <h5 className="text-primary-light font-semibold mrb-15 line-both-side inline-block relative">
            <span className="hidden md:inline absolute left-[-50px] top-1/2 w-[35px] h-[2px] bg-primary-light" />
            Premium Danışmanlık
            <span className="hidden md:inline absolute right-[-50px] top-1/2 w-[35px] h-[2px] bg-primary-light" />
          </h5>
          <h2 className="text-white">Hizmetlerimiz</h2>
        </div>
      </section>

      {/* Service Cards - Negative Margin Overlap */}
      <section className="minus-mrt-130 pdt-0 pdb-130 bg-silver-light bg-no-repeat">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="feature-box">
                <div className="feature-thumb">
                  <div className="h-[200px] bg-gradient-to-br from-[#0e4354] to-[#55bab3] flex items-center justify-center text-5xl">
                    {service.icon}
                  </div>
                </div>
                <div className="feature-content">
                  <div className="title">
                    <h3>{service.title}</h3>
                  </div>
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
