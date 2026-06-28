import Link from "next/link";

export default function Kurumsal() {
  return (
    <>
      <section className="page-banner"><div className="max-w-7xl mx-auto px-4"><div className="banner-content"><h1>Kurumsal</h1><div className="breadcrumb"><a href="/">Anasayfa</a><span>/</span><span>Kurumsal</span></div></div></div></section>
      <section style={{ padding: "80px 0", background: "var(--surface-alt)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/hakkimizda" className="card" style={{ textDecoration: "none", padding: 40, textAlign: "center" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>🏢</div>
              <h3>Hakkımızda</h3>
              <p>PMDTR&apos;nin kuruluş hikayesi, misyonu ve vizyonu.</p>
            </Link>
            <Link href="/referanslar" className="card" style={{ textDecoration: "none", padding: 40, textAlign: "center" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>🤝</div>
              <h3>Referanslarımız</h3>
              <p>Birlikte çalıştığımız firmalar ve başarı hikayelerimiz.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
