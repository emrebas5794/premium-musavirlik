"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const stats = [
  { value: 100, suffix: "+", label: "Teknopark Firma Süreç Danışmanlığı" },
  { value: 150, suffix: "+", label: "Teknopark Ar-Ge Muhasebe Mali Müşavirlik" },
  { value: 450, suffix: "+", label: "Teknopark Proje Yazımı" },
  { value: 75, suffix: "+", label: "Tübitak / Kosgeb Projeleri" },
];

function AnimatedCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}</span>;
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Devlet Destekleri */}
        <div className="text-center mb-20">
          <h2 className="section-title mb-4">Devlet Destekleri</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-10">
            Birçok kurumun çeşitli Hibe ve Teşviklerini iş planlarına entegre ederek, işletmelerin projelerinin finansmanını kolaylaştırıyoruz.
          </p>
          {/* Placeholder for devlet destekleri logos */}
          <div className="bg-silver-light rounded-xl p-8 max-w-3xl mx-auto mb-8 flex flex-wrap justify-center gap-6">
            {["TÜBİTAK", "KOSGEB", "TEKNOPARK", "TEKNOKENT", "AR-GE"].map((name) => (
              <div key={name} className="bg-white rounded-lg px-6 py-4 shadow-sm text-primary font-bold text-sm">
                {name}
              </div>
            ))}
          </div>
          <Link href="#iletisim" className="btn-gradient">
            İletişime Geç
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="funfact">
              <div className="text-4xl mb-3 text-primary-light">+</div>
              <div className="counter text-4xl font-extrabold text-primary mb-3">
                <AnimatedCounter target={stat.value} />
                {stat.suffix}
              </div>
              <h5 className="text-gray-600 text-sm max-w-[200px] mx-auto">{stat.label}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
