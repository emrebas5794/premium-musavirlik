import Link from "next/link";

const services = [
  { title: "Muhasebe ve Mali Müşavirlik", desc: "Defter tutma, finansal raporlama, beyanname ve mali müşavirlik hizmetleri", icon: "📊" },
  { title: "KDV ve ÖTV İade Hizmetleri", desc: "Vergi iadelerinizi hızlı, eksiksiz ve mevzuata uygun şekilde alın", icon: "↩️" },
  { title: "Bordrolama ve SGK", desc: "Personel bordro, SGK bildirge, teşvik ve emeklilik işlemleri", icon: "💳" },
  { title: "Şirket Kurma Hizmetleri", desc: "Türkiye'de limited, A.Ş. ve yabancı ortaklı şirket kurulumu", icon: "🏢" },
  { title: "Vergi Danışmanlığı", desc: "Vergi planlaması, ihtilaf çözümü ve uyuşmazlık danışmanlığı", icon: "💰" },
  { title: "Uluslararası Vergi", desc: "Transfer fiyatlandırması, çifte vergilendirme ve global vergi uyumu", icon: "🌍" },
];

export default function ServiceCards() {
  return (
    <section className="section section-alt">
      <div className="max-w-7xl mx-auto px-4">
        <div className="section-header">
          <div className="section-label">Hizmetlerimiz</div>
          <h2 className="section-title">Premium Danışmanlık Çözümleri</h2>
          <p className="section-subtitle">
            2018&apos;den beri 40 kişilik uzman ekibimizle işletmenizin tüm finansal süreçlerinde yanınızdayız.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="feature-card">
              <div className="card-image">
                <div className="bg">{s.icon}</div>
              </div>
              <div className="card-body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link href="/hizmetler" className="card-link">→</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
