"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const slides = [
  {
    title: "Sizde en hızlı çözümlere bizim ile birlikte ulaşmak ister misiniz?",
    desc: "Premium Danışmanlık firması olarak yenilenen ve değişime uğrayan bütün süreçlere en hızlı bir şekilde sizlere çözümler sunarak daima birlikte büyümeyi hedefliyoruz.",
  },
  {
    title: "Fikirlerinizi Gerçekten Önemsiyoruz",
    desc: "Attığınız her adımda, sektöre katmış olduğunuz her değerde, en ufak düşüncenize ait fikirlerinizi önemsiyoruz. Sizler ile büyümeyi hedefliyor, tecrübemizi en iyi şekilde aktarmayı istiyoruz.",
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
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`slide-item text-center ${idx === current ? "" : "hidden"}`}
          style={{
            background: `linear-gradient(135deg, #0e4354 ${idx * 30}%, #131c34, #55bab3)`,
          }}
        >
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <div className="content-box">
              <h1>{slide.title}</h1>
              <p>{slide.desc}</p>
              <div className="btn-box">
                <Link href="/iletisim" className="cs-btn-one btn-gradient-color">
                  İletişim
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === current ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
