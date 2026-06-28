import Link from "next/link";

const posts = [
  { title: "En Yeni Finansman Yöntemi: Kitlesel Fonlama", date: "2025", desc: "Kitlesel fonlama nedir, nasıl çalışır ve işletmeniz için neden önemlidir?" },
  { title: "İhracat Bedellerinin Yurda Getirilmemesi Durumunda İdari Para Cezaları", date: "2025", desc: "İhracat bedellerinin süresinde yurda getirilmemesi halinde karşılaşılacak cezai yaptırımlar." },
  { title: "Startup Fonlama Nedir ve Nasıl Yapılır?", date: "2024", desc: "Girişimler için fonlama seçenekleri, yatırımcı bulma ve finansal planlama rehberi." },
  { title: "Limited Şirket Nedir? Nasıl Kurulur?", date: "2024", desc: "Limited şirket kurulumu için gerekli belgeler, sermaye yapısı ve yasal süreçler." },
  { title: "Yabancı Ortaklı Şirket Nasıl Kurulur?", date: "2024", desc: "Türkiye'de yabancı ortaklı şirket kurulumu, izinler ve teşvikler hakkında kapsamlı rehber." },
  { title: "Konsinye İhracat ve KDV İadesi", date: "2023", desc: "Konsinye ihracat yönetmeliğine göre KDV iade süreci ve dikkat edilmesi gerekenler." },
];

export default function Duyurular() {
  return (
    <>
      <section className="page-banner"><div className="max-w-7xl mx-auto px-4"><div className="banner-content"><h1>Duyurular</h1><div className="breadcrumb"><a href="/">Anasayfa</a><span>/</span><span>Duyurular</span></div></div></div></section>
      <section style={{ padding: "80px 0", background: "var(--surface-alt)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p, i) => (
              <div key={i} className="news-card">
                <div className="news-image" style={{ background: "linear-gradient(135deg, #0e4354, #134354, #55bab3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3rem", color: "rgba(255,255,255,0.3)" }}>📋</div>
                <div className="news-body">
                  <h4><Link href="#">{p.title}</Link></h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: "8px 0 16px" }}>{p.desc}</p>
                  <div className="news-date">📅 {p.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
