"use client";

import Link from "next/link";

const stats = [
  { value: 100, suffix: "+", label: "Teknopark Firma Süreç Danışmanlığı" },
  { value: 150, suffix: "+", label: "Teknopark Ar-Ge Muhasebe Mali Müşavirlik Hizmeti" },
  { value: 450, suffix: "+", label: "Teknopark Proje Yazımı" },
  { value: 75, suffix: "+", label: "Tübitak / Kosgeb Projeleri" },
];

export default function AboutStats() {
  return (
    <section className="pdt-50 pdb-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Devlet Destekleri */}
        <div className="text-center mrb-60">
          <h2 className="mrb-30">Devlet Destekleri</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mrb-40">
            Birçok kurumun çeşitli Hibe ve Teşviklerini iş planlarına entegre ederek, işletmelerin projelerinin finansmanını kolaylaştırıyoruz.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mrb-30">
            {["TÜBİTAK", "KOSGEB", "TEKNOPARK", "TEKNOKENT", "AR-GE"].map((name) => (
              <div key={name} className="bg-silver-light rounded-lg px-8 py-4 text-primary font-bold text-sm shadow-sm">
                {name}
              </div>
            ))}
          </div>
          <Link href="/iletisim" className="cs-btn-one btn-md btn-round btn-primary-color element-shadow">
            İletişim
          </Link>
        </div>

        {/* Funfact Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="funfact">
              <div className="icon">+</div>
              <h2 className="counter">{stat.value}{stat.suffix}</h2>
              <h5 className="title">{stat.label}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
