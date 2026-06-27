"use client";

import Link from "next/link";

const stats = [
  { value: 100, suffix: "+", label: "Teknopark Firma Süreç Danışmanlığı" },
  { value: 150, suffix: "+", label: "Teknopark Ar-Ge Muhasebe Mali Müşavirlik Hizmeti" },
  { value: 450, suffix: "+", label: "Teknopark Proje Yazımı" },
  { value: 75, suffix: "+", label: "Tübitak / Kosgeb Projeleri" },
];

const destekler = ["TÜBİTAK", "KOSGEB", "TEKNOPARK", "TEKNOKENT", "AR-GE"];

export default function AboutStats() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Devlet Destekleri */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#151a33] mb-4">Devlet Destekleri</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8 md:mb-10 px-2">
            Birçok kurumun çeşitli Hibe ve Teşviklerini iş planlarına entegre ederek, işletmelerin projelerinin finansmanını kolaylaştırıyoruz.
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
            {destekler.map((name) => (
              <div key={name} className="bg-silver-light rounded-lg px-5 py-3 md:px-8 md:py-4 text-primary font-bold text-xs md:text-sm shadow-sm border border-gray-100">
                {name}
              </div>
            ))}
          </div>
          <Link href="/iletisim" className="cs-btn-one btn-md btn-round btn-primary-color element-shadow">
            İletişim
          </Link>
        </div>

        {/* Funfact Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="funfact">
              <div className="icon">
                <span className="text-5xl text-primary">+</span>
              </div>
              <h2 className="counter">{stat.value}{stat.suffix}</h2>
              <h5 className="title">{stat.label}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
