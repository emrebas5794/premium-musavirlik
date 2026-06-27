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

const gradients = [
  "linear-gradient(135deg, #0a2a35, #09334f, #0e4354)",
  "linear-gradient(135deg, #0e4354, #09334f, #0a3a40)",
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
            style={{ background: gradients[idx] }}
          >
            <div className="auto-container max-w-7xl mx-auto px-4">
              <div className="content-box text-center">
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
      </div>

      {/* Dots */}
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
