const steps = [
  { title: "Planlama", desc: "İşletmenizin ihtiyaçlarını analiz edip en uygun vergi ve finansal stratejiyi belirliyoruz." },
  { title: "Uygulama", desc: "Muhasebe, bordro ve vergi süreçlerinizi mevzuata uygun şekilde yürütüyoruz." },
  { title: "Takip", desc: "SGK teşvikleri, KDV iadeleri ve devlet desteklerinden maksimum faydalanmanızı sağlıyoruz." },
  { title: "Danışmanlık", desc: "Vergi ihtilafları, şirket birleşmeleri ve uluslararası işlemlerde yanınızdayız." },
];

export default function ProcessSection() {
  return (
    <section className="section">
      <div className="max-w-7xl mx-auto px-4">
        <div className="section-header">
          <div className="section-label">Çalışma Sürecimiz</div>
          <h2 className="section-title">Nasıl Çalışıyoruz?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="process-card">
              <div className="step-number">{i + 1}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
