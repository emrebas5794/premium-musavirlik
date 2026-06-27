const steps = [
  {
    icon: "📋",
    title: "Planlama",
    description: "Hızlı bilgi ile süreçlerinizi planlıyoruz. Zamandan tasarruf hepimiz için önemli bir kriterdir.",
  },
  {
    icon: "🔍",
    title: "Analiz",
    description: "Süreçlerinizi sizden en iyi şekilde dinleyip, en iyi şekilde analizlerimizi yapıyoruz.",
  },
  {
    icon: "⚡",
    title: "Yönetim",
    description: "Süreçleriniz için en iyi yönetim planlamasını ortaya çıkarıp, sizin için uyguluyoruz.",
  },
  {
    icon: "🤝",
    title: "Destek",
    description: "Sorularınız, düşünceleriniz, fikirleriniz için sizlere en iyi desteği vermeye her zaman hazırız.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-silver-light">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <div>
            <h5 className="section-subtitle mb-4">Premium Danışmanlık</h5>
            <h2 className="section-title">Sizin İçin Buradayız!</h2>
          </div>
          <div className="flex items-center">
            <p className="text-gray-500">
              Zaman, Maliyet, Planlama, Süreç ve daha bir sürü akılda kalan düşünceler. Hepsi için buradayız.
            </p>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="service-box group rounded-xl">
              <div className="service-icon group-hover:bg-primary group-hover:text-white transition">
                <span className="text-3xl">{step.icon}</span>
              </div>
              <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition">{step.title}</h3>
              <p className="text-gray-500 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
