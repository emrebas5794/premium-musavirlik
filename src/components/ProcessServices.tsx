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
    <section className="bg-silver-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 mb-10 md:mb-16">
          <div>
            <h5 className="text-primary-color sub-title-side-line mb-3 text-sm md:text-base">
              Premium Danışmanlık
            </h5>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#151a33] mb-0">
              Sizin İçin Buradayız!
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-gray-500 text-sm md:text-base">
              Zaman, Maliyet, Planlama, Süreç ve daha bir sürü akılda kalan düşünceler. Hepsi için buradayız.
            </p>
          </div>
        </div>

        {/* Service Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="service-box group rounded-xl">
              <div className="service-icon relative z-10">
                <span className="text-3xl md:text-4xl">{step.icon}</span>
              </div>
              <div className="service-content relative z-10">
                <div className="title">
                  <h3 className="text-lg md:text-xl mb-3">
                    <a href="#" className="text-[#151a33] no-underline hover:text-inherit">
                      {step.title}
                    </a>
                  </h3>
                </div>
                <div className="para">
                  <p className="text-xs md:text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
