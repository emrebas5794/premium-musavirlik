import Link from "next/link";
import PageBanner from "@/components/PageBanner";

const duyurular = [
  {
    title: "TEKNOPARK FİRMALARI YMM TASDİK RAPOR ZORUNLULUĞU",
    date: "04.03.2026",
    slug: "teknopark-firmalari-ymm-tasdik-rapor",
    summary: "4691 sayılı kanun kapsamında teknopark firmalarının YMM tasdik raporu zorunluluğu hakkında detaylı bilgilendirme.",
  },
  {
    title: "📢 Teknopark/Teknokent Firmalarına Kritik Hatırlatma",
    date: "21.04.2025",
    slug: "teknopark-kritik-hatirlatma",
    summary: "2025 yılı faaliyet raporları ve muafiyet başvuruları için son tarihler yaklaşıyor.",
  },
  {
    title: "Teknopark / Teknokent Danışmanlığı, 4691 Mevzuat Yönetimi",
    date: "10.01.2025",
    slug: "teknopark-4691-mevzuat-yonetimi",
    summary: "4691 sayılı Teknoloji Geliştirme Bölgeleri Kanunu kapsamında güncel mevzuat değişiklikleri ve firma yükümlülükleri.",
  },
  {
    title: "KOSGEB 2025 Destek Programları Başvuruları Başladı",
    date: "05.12.2024",
    slug: "kosgeb-2025-destek",
    summary: "KOSGEB'in 2025 yılı için açıkladığı yeni destek programları ve başvuru koşulları hakkında bilmeniz gerekenler.",
  },
  {
    title: "TÜBİTAK 1501 ve 1507 Program Güncellemeleri",
    date: "15.11.2024",
    slug: "tubitak-1501-1507",
    summary: "TÜBİTAK TEYDEB programlarındaki son değişiklikler ve yeni başvuru takvimi.",
  },
  {
    title: "Ar-Ge Merkezi Denetim Süreçlerinde Dikkat Edilmesi Gerekenler",
    date: "01.10.2024",
    slug: "arge-merkezi-denetim",
    summary: "5746 sayılı kanun kapsamında Ar-Ge merkezi denetimlerine hazırlık rehberi.",
  },
];

export const metadata = {
  title: "Duyurular - Premium Danışmanlık",
};

export default function Duyurular() {
  return (
    <>
      <PageBanner
        title="Duyurular"
        breadcrumbs={[{ label: "Anasayfa", href: "/" }, { label: "Duyurular" }]}
      />

      <section className="pdt-105 pdb-80 bg-silver-light bg-no-repeat">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {duyurular.map((item, idx) => (
              <div key={idx} className="news-wrapper">
                <div className="news-thumb">
                  <div className="h-[220px] bg-gradient-to-br from-[#0e4354] to-[#55bab3] flex items-center justify-center">
                    <span className="text-white/40 text-6xl">📋</span>
                  </div>
                </div>
                <div className="news-details">
                  <div className="news-description mb-20">
                    <h4 className="the-title mrb-30">
                      <Link href={`/duyurular/${item.slug}`}>{item.title}</Link>
                    </h4>
                    <p className="text-gray-500 text-sm mrb-20">{item.summary}</p>
                    <div className="news-bottom-meta">
                      <span className="mrr-20 text-primary-color">📅</span>
                      {item.date}
                    </div>
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
