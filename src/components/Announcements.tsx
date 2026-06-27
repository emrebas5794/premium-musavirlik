import Link from "next/link";

const announcements = [
  {
    title: "En Yeni Finansman Yöntemi: Kitlesel Fonlama",
    date: "2025",
    href: "/duyurular",
  },
  {
    title: "İhracat Bedellerinin Yurda Getirilmemesi Durumunda Kesilen İdari Para Cezaları",
    date: "2025",
    href: "/duyurular",
  },
  {
    title: "Startup Fonlama Nedir ve Nasıl Yapılır?",
    date: "2024",
    href: "/duyurular",
  },
];

export default function Announcements() {
  return (
    <section className="bg-silver-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16">
          <div>
            <h5 className="text-primary-color sub-title-side-line mb-3 text-sm md:text-base">
              PMDTR - Premium Danışmanlık
            </h5>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#151a33] mb-0">Duyurular</h2>
          </div>
          <Link href="/duyurular" className="cs-btn-one btn-gradient-color btn-md mt-4 md:mt-0">
            Tümünü Gör
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {announcements.map((item, idx) => (
            <div key={idx} className="news-wrapper group">
              <div className="news-thumb">
                <div className="h-44 md:h-[220px] bg-gradient-to-br from-[#0e4354] to-[#55bab3] flex items-center justify-center">
                  <span className="text-white/30 text-5xl md:text-6xl">📋</span>
                </div>
              </div>
              <div className="news-details p-5 md:p-7">
                <div className="news-description">
                  <h4 className="the-title mb-6 md:mb-8 text-base md:text-lg">
                    <Link href={item.href} className="text-[#151a33] hover:text-primary transition line-clamp-2">
                      {item.title}
                    </Link>
                  </h4>
                  <div className="news-bottom-meta inline-flex items-center gap-2 text-xs md:text-sm">
                    <span className="text-primary-color">📅</span>
                    {item.date}
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
