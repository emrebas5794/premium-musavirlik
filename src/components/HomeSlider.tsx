"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const slides = [
  {
    title: "Premium Danışmanlık Hizmetleri",
    desc: "PMDTR olarak muhasebe, mali müşavirlik, vergi, SGK ve danışmanlık alanlarında uzman kadromuzla hizmetinizdeyiz. İşletmenizin finansal süreçlerini profesyonel ekibimize emanet edin.",
  },
  {
    title: "İşletmenizi Geleceğe Taşıyın",
    desc: "Vergi planlaması, KDV iadesi, şirket kurulumu ve uluslararası vergi danışmanlığı alanlarında 360 derece çözüm ortağınız. Sizin için en doğru stratejiyi birlikte belirleyelim.",
  },
];

export default function HomeSlider() {
  const [current, setCurrent] = useState(0);
  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section className="banner-section">
      <div className="relative">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`slide-item absolute inset-0 transition-opacity duration-1000 ${
              idx === current ? "opacity-100 z-10 relative" : "opacity-0 z-0"
            }`}
            style={{ background: `linear-gradient(135deg, #0a2a35, #09334f, #0e4354)` }}
          >
            <div className="auto-container max-w-7xl mx-auto px-4">
              <div className="content-box text-center">
                <h1>{slide.title}</h1>
                <p>{slide.desc}</p>
                <div className="btn-box">
                  <Link href="/iletisim" className="cs-btn-one btn-gradient-color">
                    İletişime Geç
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
