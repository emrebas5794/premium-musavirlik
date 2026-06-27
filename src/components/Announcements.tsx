import Link from "next/link";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const announcements = [
  {
    id: 1,
    title: "TEKNOPARK FİRMALARI YMM TASDİK RAPOR ZORUNLULUĞU",
    date: "04.03.2026",
    image: null,
    href: "#",
  },
  {
    id: 2,
    title: "📢 Teknopark/Teknokent Firmalarına Kritik Hatırlatma",
    date: "21.04.2025",
    image: null,
    href: "#",
  },
  {
    id: 3,
    title: "Teknopark / Teknokent Danışmanlığı, 4691 Mevzuat Yönetimi",
    date: "10.01.2025",
    image: null,
    href: "#",
  },
];

export default function Announcements() {
  return (
    <section id="duyurular" className="py-20 bg-silver-light">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h5 className="section-subtitle mb-4">Premium Danışmanlık</h5>
            <h2 className="section-title">Duyurular</h2>
          </div>
          <Link href="#" className="btn-gradient mt-4 md:mt-0">
            Tümünü Gör
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {announcements.map((item) => (
            <article key={item.id} className="news-card group">
              <div className="news-image bg-gradient-to-br from-primary to-primary-light h-48 flex items-center justify-center">
                <span className="text-white/60 text-5xl font-bold">📋</span>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-lg mb-4 group-hover:text-primary transition line-clamp-2">
                  <Link href={item.href}>{item.title}</Link>
                </h4>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-sm text-gray-500 bg-gray-100 px-3 py-2 border-l-2 border-primary">
                    <FaCalendarAlt className="text-primary" size={12} />
                    {item.date}
                  </span>
                  <Link
                    href={item.href}
                    className="text-primary opacity-0 group-hover:opacity-100 transition flex items-center gap-1 text-sm"
                  >
                    Detay <FaArrowRight size={10} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
