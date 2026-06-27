import Link from "next/link";

const announcements = [
  {
    title: "TEKNOPARK FİRMALARI YMM TASDİK RAPOR ZORUNLULUĞU",
    date: "04.03.2026",
    href: "#",
  },
  {
    title: "📢 Teknopark/Teknokent Firmalarına Kritik Hatırlatma",
    date: "21.04.2025",
    href: "#",
  },
  {
    title: "Teknopark / Teknokent Danışmanlığı, 4691 Mevzuat Yönetimi",
    date: "10.01.2025",
    href: "#",
  },
];

export default function Announcements() {
  return (
    <section className="bg-silver-light pdt-105 pdb-80">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mrb-60">
          <div>
            <h5 className="text-primary-color sub-title-side-line mrb-15">
              Premium Danışmanlık
            </h5>
            <h2 className="mrb-30">Duyurular</h2>
          </div>
          <Link href="/duyurular" className="cs-btn-one btn-gradient-color btn-md">
            Tümünü Gör
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {announcements.map((item, idx) => (
            <div key={idx} className="news-wrapper">
              <div className="news-thumb">
                <div className="h-[220px] bg-gradient-to-br from-[#0e4354] to-[#55bab3] flex items-center justify-center">
                  <span className="text-white/40 text-6xl">📋</span>
                </div>
              </div>
              <div className="news-details">
                <div className="news-description mb-20">
                  <h4 className="the-title mrb-30">
                    <Link href={item.href}>{item.title}</Link>
                  </h4>
                  <div className="news-bottom-meta">
                    <span className="entry-date mrr-20">
                      <span className="mrr-10 text-primary-color">📅</span>
                      {item.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
