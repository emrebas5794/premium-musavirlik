import Link from "next/link";
import PageBanner from "@/components/PageBanner";

const services = [
  {
    category: "Vergi Hizmetleri",
    items: [
      { title: "Muhasebe ve Mali Müşavirlik Hizmetleri", icon: "📊" },
      { title: "KDV ve ÖTV İade Hizmetleri", icon: "↩️" },
      { title: "Şirket Tür Değişikliği", icon: "🔄" },
      { title: "Şirket Birleşme ve Satın Alma Hizmetleri", icon: "🤝" },
      { title: "Transfer Fiyatlandırması", icon: "💱" },
      { title: "Uluslararası Vergi Hizmetleri", icon: "🌍" },
    ],
  },
  {
    category: "SGK Hizmetleri",
    items: [
      { title: "Bordrolama", icon: "💳" },
      { title: "İş ve Sosyal Güvenlik Check-Up Hizmetleri", icon: "🔍" },
      { title: "İkamet İzni & Çalışma İzni", icon: "🪪" },
      { title: "Asgari İşçilik Danışmanlığı", icon: "👷" },
      { title: "Alt İşveren (Taşeron) Denetimi", icon: "📋" },
      { title: "Emeklilik ve Tahsis İşlemleri Danışmanlığı", icon: "👴" },
    ],
  },
  {
    category: "Danışmanlık Hizmetleri",
    items: [
      { title: "Şirket Kurma Hizmetleri", icon: "🏢" },
      { title: "Vergi Danışmanlığı", icon: "💰" },
      { title: "Yönetim Destek Hizmetleri", icon: "📈" },
      { title: "Genel Kurul Danışmanlığı", icon: "👥" },
      { title: "İş Hukuku Danışmanlığı", icon: "⚖️" },
      { title: "Vergi İhtilafları Danışmanlığı", icon: "🏛️" },
      { title: "Sosyal Güvenlik Teşvikleri Danışmanlığı", icon: "🎯" },
    ],
  },
];

export const metadata = {
  title: "Hizmetlerimiz - PMDTR Premium Danışmanlık",
  description: "PMDTR - Vergi, SGK ve danışmanlık hizmetleri. Muhasebe, bordrolama, şirket kurma, KDV iadesi ve daha fazlası.",
};

export default function Hizmetler() {
  return (
    <>
      <PageBanner
        title="Hizmetlerimiz"
        breadcrumbs={[{ label: "Anasayfa", href: "/" }, { label: "Hizmetlerimiz" }]}
      />

      <section className="py-16 md:py-24 bg-silver-light">
        <div className="max-w-7xl mx-auto px-4">
          {services.map((group, gIdx) => (
            <div key={gIdx} className="mb-16 last:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold text-[#151a33] mb-8 pl-4 border-l-4 border-primary">
                {group.category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.items.map((item, idx) => (
                  <div key={idx} className="feature-box">
                    <div className="feature-thumb">
                      <div className="h-36 sm:h-44 md:h-[200px] bg-gradient-to-br from-[#0e4354] to-[#55bab3] flex items-center justify-center text-4xl md:text-5xl">
                        {item.icon}
                      </div>
                    </div>
                    <div className="feature-content">
                      <div className="title">
                        <h3>{item.title}</h3>
                      </div>
                      <div className="link">
                        <Link href="/iletisim" title={item.title}>
                          →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
