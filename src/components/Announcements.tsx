import Link from "next/link";

const items = [
  { title: "En Yeni Finansman Yöntemi: Kitlesel Fonlama", date: "2025", href: "/duyurular" },
  { title: "İhracat Bedellerinin Yurda Getirilmemesi Durumunda İdari Para Cezaları", date: "2025", href: "/duyurular" },
  { title: "Startup Fonlama Nedir ve Nasıl Yapılır?", date: "2024", href: "/duyurular" },
];

export default function Announcements() {
  return (
    <section className="section">
      <div className="max-w-7xl mx-auto px-4">
        <div className="section-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", textAlign: "left", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div className="section-label">Güncel</div>
            <h2 className="section-title" style={{ marginBottom: 0 }}>Duyurular ve Blog</h2>
          </div>
          <Link href="/duyurular" className="btn btn-outline">Tümünü Gör</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="news-card">
              <div className="news-image">📋</div>
              <div className="news-body">
                <h4><Link href={item.href}>{item.title}</Link></h4>
                <div className="news-date">📅 {item.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
