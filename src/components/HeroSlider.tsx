"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const slides = [
  {
    title: "Premium Danışmanlık Hizmetleri",
    desc: "PMDTR olarak muhasebe, mali müşavirlik, vergi, SGK ve danışmanlık alanlarında 40 kişilik uzman kadromuzla işletmenizin tüm finansal süreçlerinde yanınızdayız.",
  },
  {
    title: "İşletmenizi Geleceğe Taşıyın",
    desc: "Vergi planlaması, KDV iadesi, şirket kurulumu ve uluslararası vergi danışmanlığı alanlarında 360 derece çözüm ortağınız.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);

  useEffect(() => { const t = setInterval(next, 5000); return () => clearInterval(t); }, [next]);

  return (
    <section className="hero-slider" style={{ height: 540, background: "#061b31" }}>
      {slides.map((s, i) => (
        <div key={i} className={`hero-slide${i === current ? " active" : ""}`}>
          <div className="hero-overlay" />
          <div className="max-w-7xl mx-auto px-4" style={{ position: "relative", zIndex: 1 }}>
            <h1>{s.title}</h1>
            <p>{s.desc}</p>
            <Link href="/iletisim" className="btn btn-gradient btn-lg">İletişime Geç</Link>
          </div>
        </div>
      ))}
      <div className="hero-dots">
        {slides.map((_, i) => (
          <button key={i} className={i === current ? "active" : ""} onClick={() => setCurrent(i)} />
        ))}
      </div>
    </section>
  );
}
