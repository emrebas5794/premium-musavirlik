"use client";

import { useState, useEffect, useCallback } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Testimonials() {
  const { t } = useLanguage();
  const items = t.testimonials.items;
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % items.length);
    setAnimKey((k) => k + 1);
  }, [items.length]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + items.length) % items.length);
    setAnimKey((k) => k + 1);
  }, [items.length]);

  const goTo = (i: number) => {
    setCurrent(i);
    setAnimKey((k) => k + 1);
  };

  useEffect(() => {
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [next]);

  useEffect(() => {
    setCurrent(0);
    setAnimKey((k) => k + 1);
  }, [items[0]?.text]);

  const item = items[current];

  return (
    <section className="section section-alt testimonials-section">
      <div className="max-w-7xl mx-auto px-4">
        <div className="section-header">
          <div className="section-label">{t.testimonials.label}</div>
          <h2 className="section-title">{t.testimonials.title}</h2>
        </div>

        <div className="testimonial-slider">
          <button type="button" className="testimonial-nav testimonial-nav-prev" onClick={prev} aria-label={t.common.prev}>
            ‹
          </button>

          <div className="testimonial-stage" key={animKey}>
            <div className="testimonial-quote" aria-hidden>“</div>
            <p className="testimonial-text">{item.text}</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar" aria-hidden>{item.initials}</div>
              <div>
                <div className="testimonial-name">{item.name}</div>
                <div className="testimonial-role">{item.role}</div>
              </div>
            </div>
          </div>

          <button type="button" className="testimonial-nav testimonial-nav-next" onClick={next} aria-label={t.common.next}>
            ›
          </button>
        </div>

        <div className="testimonial-dots">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              className={i === current ? "active" : ""}
              onClick={() => goTo(i)}
              aria-label={`${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
