"use client";

import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <div
        className={`back-to-top ${visible ? "visible" : ""}`}
        onClick={scrollTop}
      >
        ↑
      </div>
      <a
        href="https://wa.me/905453660996"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-box"
        aria-label="WhatsApp"
      >
        💬
      </a>
    </>
  );
}
