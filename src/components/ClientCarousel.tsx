"use client";

import { useEffect, useRef, useState } from "react";

const clients = Array.from({ length: 12 }, (_, i) => `Referans ${i + 1}`);

export default function ClientCarousel() {
  const [scroll, setScroll] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setScroll((s) => {
        if (containerRef.current) {
          const max = containerRef.current.scrollWidth - containerRef.current.clientWidth;
          return s >= max ? 0 : s + 2;
        }
        return s;
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = scroll;
    }
  }, [scroll]);

  return (
    <section className="pdt-30 pdb-30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="overflow-hidden" ref={containerRef}>
          <div className="flex gap-4" style={{ width: "max-content" }}>
            {[...clients, ...clients].map((client, idx) => (
              <div key={idx} className="client-item flex-shrink-0 w-[140px]">
                <div className="text-gray-400 text-xs font-medium text-center">{client}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
