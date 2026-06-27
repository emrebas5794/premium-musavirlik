import Link from "next/link";
import PageBanner from "@/components/PageBanner";

const services = [
  { title: "Şirket Kuruluş İşlemleri", icon: "🏢", desc: "Şirket kuruluş süreçlerinizi profesyonel ekibimizle hızlı ve eksiksiz tamamlıyoruz." },
  { title: "Teknopark Danışmanlığı", icon: "🏗️", desc: "4691 sayılı Teknoloji Geliştirme Bölgeleri Kanunu kapsamında tüm süreçleriniz." },
  { title: "Kosgeb ve Tübitak Proje Süreçleri", icon: "🔬", desc: "KOSGEB ve TÜBİTAK destek programlarına başvuru ve proje yönetimi." },
  { title: "Mali Müşavirlik Hizmeti", icon: "💰", desc: "Teknopark firmalarına özel mali müşavirlik ve Ar-Ge muhasebe hizmetleri." },
  { title: "Ar-Ge ve Tasarım Merkezi Başvuru Süreçleri", icon: "⚙️", desc: "5746 sayılı kanun kapsamında Ar-Ge ve Tasarım Merkezi kurulum danışmanlığı." },
  { title: "Belgelendirme Hizmetleri", icon: "📜", desc: "ISO, CE ve diğer kalite belgelendirme süreçlerinizde danışmanlık." },
  { title: "Eğitim Hizmetleri", icon: "🎓", desc: "Teknopark mevzuatı, Ar-Ge teşvikleri ve proje yazımı eğitimleri." },
  { title: "Patent Süreçleri", icon: "📝", desc: "Patent, faydalı model ve marka tescil başvurularınızda profesyonel destek." },
];

export const metadata = {
  title: "Hizmetlerimiz - Premium Danışmanlık",
};

export default function Hizmetler() {
  return (
    <>
      <PageBanner
        title="Hizmetlerimiz"
        breadcrumbs={[{ label: "Anasayfa", href: "/" }, { label: "Hizmetlerimiz" }]}
      />

      <section className="pdt-105 pdb-80 bg-silver-light bg-no-repeat">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="feature-box group">
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
                    <Link href="/iletisim">→</Link>
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
