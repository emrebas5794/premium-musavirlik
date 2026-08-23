"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";

const gradients = [
  "linear-gradient(135deg, #eaf8f6 0%, #d4efec 45%, #b8e4e0 100%)",
  "linear-gradient(135deg, #e8f5f8 0%, #d0ebf0 40%, #a8d9d8 100%)",
  "linear-gradient(135deg, #f0faf8 0%, #d8f0ec 50%, #9ed9d2 100%)",
];

export default function HeroSlider() {
  const { t } = useLanguage();
  const slides = t.hero.slides;
  const stats = t.hero.stats;
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
    setAnimKey((k) => k + 1);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
    setAnimKey((k) => k + 1);
  }, [slides.length]);

  const goTo = (i: number) => {
    setCurrent(i);
    setAnimKey((k) => k + 1);
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  useEffect(() => {
    setCurrent(0);
    setAnimKey((k) => k + 1);
  }, [t.hero.slides[0]?.title]);

  return (
    <section className="hero-slider">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`hero-slide${i === current ? " active" : ""}`}
          style={{ "--hero-bg": gradients[i] } as React.CSSProperties}
        >
          <div className="hero-bg" />
          <div className="hero-shapes" aria-hidden>
            <div className="hero-shape hero-shape-1" />
            <div className="hero-shape hero-shape-2" />
            <div className="hero-shape hero-shape-3" />
          </div>
          <div className="hero-overlay" />

          {i === current && (
            <div className="max-w-7xl mx-auto px-4 hero-content" key={animKey}>
              <span className="hero-badge">{s.badge}</span>
              <h1>{s.title}</h1>
              <p>{s.desc}</p>
              <div className="hero-actions">
                <Link href="/iletisim" className="btn btn-gradient btn-lg">{t.hero.ctaContact}</Link>
                <Link href="/hizmetler" className="btn btn-light btn-lg">{t.hero.ctaServices}</Link>
              </div>
              <div className="hero-stats">
                {stats.map((st) => (
                  <div key={st.label} className="hero-stat">
                    <strong>{st.value}</strong>
                    <span>{st.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}

      <button type="button" className="hero-nav hero-nav-prev" onClick={prev} aria-label={t.common.prev}>
        ‹
      </button>
      <button type="button" className="hero-nav hero-nav-next" onClick={next} aria-label={t.common.next}>
        ›
      </button>

      <div className="hero-bottom">
        <div className="hero-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={i === current ? "active" : ""}
              onClick={() => goTo(i)}
              aria-label={`${i + 1}`}
            />
          ))}
        </div>
        <div className="hero-progress">
          <div
            className="hero-progress-bar"
            style={{ animationDuration: "6s", animationPlayState: "running" }}
            key={current}
          />
        </div>
      </div>
    </section>
  );
}
