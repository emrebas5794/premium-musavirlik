const stats = [
  { value: "40+", label: "Uzman Ekip" },
  { value: "500+", label: "Aktif Müşteri" },
  { value: "2018", label: "Kuruluş Yılı" },
  { value: "19", label: "Hizmet Alanı" },
];

export default function StatsSection() {
  return (
    <section className="section section-dark">
      <div className="max-w-7xl mx-auto px-4">
        <div className="section-header">
          <div className="section-label">PMDTR Rakamlarla</div>
          <h2 className="section-title">Neden Bizi Tercih Etmelisiniz?</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="stat-card" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="stat-number" style={{ color: "#fff" }}>{s.value}</div>
              <div className="stat-label" style={{ color: "rgba(255,255,255,0.6)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
