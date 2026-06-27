"use client";

import { useState } from "react";

const serviceOptions = [
  "Hizmet Seçiniz",
  "Muhasebe ve Mali Müşavirlik Hizmetleri",
  "KDV ve ÖTV İade Hizmetleri",
  "Bordrolama",
  "Şirket Kurma Hizmetleri",
  "Vergi Danışmanlığı",
  "İş Hukuku Danışmanlığı",
  "Diğer",
];

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="py-16 md:py-24 relative" data-overlay-dark="8">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ background: "linear-gradient(135deg, #0e4354, #131c34, #55bab3)" }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10 items-start">
          {/* Video Area */}
          <div className="lg:col-span-3">
            <div className="video-popup rounded-xl overflow-hidden">
              <div className="bg-gradient-to-br from-[#0e4354]/30 to-[#55bab3]/30 h-64 md:h-[420px] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4 md:mb-5 cursor-pointer hover:bg-white/20 transition">
                    <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-white/60 text-sm md:text-base">PMDTR Tanıtım</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="request-a-call-back-form">
              <h3 className="text-xl md:text-2xl font-bold text-[#151a33] mb-2">Bizimle İletişime Geçin</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-[#0e4354] to-[#55bab3] rounded mb-4" />
              <p className="text-gray-500 text-xs md:text-sm mb-5 md:mb-6">
                Aşağıdaki formu doldurarak bizimle iletişime geçebilirsiniz.
              </p>

              {sent ? (
                <div className="bg-green-50 text-green-700 p-4 rounded-lg text-center text-sm">
                  ✅ Mesajınız başarıyla gönderildi! En kısa sürede dönüş yapacağız.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Adınız Soyadınız" required />
                  </div>
                  <div className="form-group">
                    <input type="tel" className="form-control" placeholder="Telefon" required />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="E-Posta" required />
                  </div>
                  <div className="form-group">
                    <select className="custom-select-categories" defaultValue="">
                      {serviceOptions.map((opt, i) => (
                        <option key={i} value={i === 0 ? "" : opt} disabled={i === 0}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group mb-4 md:mb-5">
                    <input type="text" className="form-control" placeholder="Güvenlik Kodu" />
                  </div>
                  <div className="form-group mb-0">
                    <button type="submit" className="cs-btn-one btn-primary-color btn-md btn-block text-sm md:text-base">
                      Gönder
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
