"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const slides = [
  {
    title: "İşletmenizi Bir Adım Öne Taşıyın",
    description:
      "Premium Danışmanlık olarak yenilenen ve değişime uğrayan bütün süreçlere en hızlı bir şekilde çözümler sunarak daima birlikte büyümeyi hedefliyoruz.",
    cta: "İletişime Geç",
    href: "#iletisim",
  },
  {
    title: "Fikirlerinizi Gerçekten Önemsiyoruz",
    description:
      "Attığınız her adımda, sektöre katmış olduğunuz her değerde, en ufak düşüncenize ait fikirlerinizi önemsiyoruz. Sizler ile büyümeyi hedefliyoruz.",
    cta: "İletişime Geç",
    href: "#iletisim",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden bg-dark">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background gradient instead of images */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-dark to-primary-light opacity-90" />
          {/* Pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, white 2px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          />

          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                {slide.description}
              </p>
              <Link href={slide.href} className="btn-gradient text-base px-10 py-4">
                {slide.cta}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === current ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
