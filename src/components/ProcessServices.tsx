const steps = [
  {
    icon: "📋",
    title: "Planlama",
    desc: "Hızlı bilgi ile süreçlerinizi planlıyoruz. Zamandan tasarruf hepimiz için önemli bir kriterdir.",
  },
  {
    icon: "🔍",
    title: "Analiz",
    desc: "Süreçlerinizi sizden en iyi şekilde dinleyip, en iyi şekilde analizlerimizi yapıyoruz.",
  },
  {
    icon: "⚡",
    title: "Yönetim",
    desc: "Süreçleriniz için en iyi yönetim planlamasını ortaya çıkarıp, sizin için uyguluyoruz.",
  },
  {
    icon: "🤝",
    title: "Destek",
    desc: "Sorularınız, düşünceleriniz, fikirleriniz için sizlere en iyi desteği vermeye her zaman hazırız.",
  },
];

export default function ProcessServices() {
  return (
    <section className="bg-silver-light pdt-105 pdb-80">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mrb-60">
          <div>
            <h5 className="text-primary-color sub-title-side-line mrb-15">Premium Danışmanlık</h5>
            <h2 className="mrb-0">Sizin İçin Buradayız!</h2>
          </div>
          <div className="flex items-center">
            <p className="text-gray-500">
              Zaman, Maliyet, Planlama, Süreç ve daha bir sürü akılda kalan düşünceler. Hepsi için buradayız.
            </p>
          </div>
        </div>

        {/* Service Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="service-box group">
              <div className="service-icon relative z-10">
                <span className="text-4xl">{step.icon}</span>
              </div>
              <div className="service-content relative z-10">
                <div className="title">
                  <h3><a href="#">{step.title}</a></h3>
                </div>
                <div className="para">
                  <p className="text-sm text-gray-500">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
