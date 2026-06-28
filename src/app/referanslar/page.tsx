export default function Referanslar() {
  const refs = Array.from({ length: 24 }, (_, i) => `İş Ortağı ${i + 1}`);
  return (
    <>
      <section className="page-banner"><div className="max-w-7xl mx-auto px-4"><div className="banner-content"><h1>Referanslar</h1><div className="breadcrumb"><a href="/">Anasayfa</a><span>/</span><span>Referanslar</span></div></div></div></section>
      <section style={{ padding: "80px 0", background: "var(--surface-alt)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {refs.map((r, i) => (
              <div key={i} className="card" style={{ textAlign: "center", padding: "24px 12px", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "linear-gradient(135deg, var(--primary), var(--primary-light))", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 18, fontWeight: 600 }}>{i + 1}</div>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
