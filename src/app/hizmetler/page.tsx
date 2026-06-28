import Link from "next/link";

const groups = [
  {
    category: "Vergi Hizmetleri",
    items: ["Muhasebe ve Mali Müşavirlik", "KDV ve ÖTV İade Hizmetleri", "Şirket Tür Değişikliği", "Şirket Birleşme ve Satın Alma", "Transfer Fiyatlandırması", "Uluslararası Vergi Hizmetleri"],
  },
  {
    category: "SGK Hizmetleri",
    items: ["Bordrolama", "İş ve SGK Check-Up", "İkamet & Çalışma İzni", "Asgari İşçilik Danışmanlığı", "Alt İşveren Denetimi", "Emeklilik ve Tahsis İşlemleri"],
  },
  {
    category: "Danışmanlık Hizmetleri",
    items: ["Şirket Kurma", "Vergi Danışmanlığı", "Yönetim Destek", "Genel Kurul Danışmanlığı", "İş Hukuku Danışmanlığı", "Vergi İhtilafları", "SGK Teşvik Danışmanlığı"],
  },
];

export const metadata = { title: "Hizmetlerimiz - PMDTR" };

export default function Hizmetler() {
  return (
    <>
      <section className="page-banner">
        <div className="max-w-7xl mx-auto px-4">
          <div className="banner-content"><h1>Hizmetlerimiz</h1><div className="breadcrumb"><a href="/">Anasayfa</a><span>/</span><span>Hizmetlerimiz</span></div></div>
        </div>
      </section>
      <section style={{ padding: "80px 0", background: "var(--surface-alt)" }}>
        <div className="max-w-7xl mx-auto px-4">
          {groups.map((g, gi) => (
            <div key={gi} style={{ marginBottom: gi < groups.length - 1 ? 64 : 0 }}>
              <h3 style={{ fontSize: "1.35rem", marginBottom: 24, paddingLeft: 16, borderLeft: "3px solid var(--primary)" }}>{g.category}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {g.items.map((item, i) => (
                  <Link key={i} href="/iletisim" className="card" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12, padding: "16px 20px" }}>
                    <span style={{ color: "var(--primary)", fontWeight: 700 }}>→</span>
                    <span style={{ color: "var(--heading)", fontWeight: 500, fontSize: "0.95rem" }}>{item}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
