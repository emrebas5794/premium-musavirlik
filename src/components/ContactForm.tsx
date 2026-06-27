"use client";

import { useState } from "react";

const serviceOptions = [
  "Hizmet Seçiniz",
  "Şirket Kuruluş İşlemleri",
  "Teknopark Danışmanlığı",
  "Kosgeb ve Tübitak Proje Süreçleri",
  "Mali Müşavirlik Hizmeti",
  "Ar-Ge ve Tasarım Merkezi Başvuru Süreçleri",
  "Belgelendirme Hizmetleri",
  "Eğitim Hizmetleri",
  "Patent Süreçleri",
  "Web Tasarım Hizmetleri",
  "Bordrolama Hizmetleri",
  "Stratejik İş Ortaklığı",
];

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", code: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="iletisim" className="py-20 bg-dark relative" data-overlay-dark="8">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Video / Image Area */}
          <div className="lg:col-span-3 flex items-center">
            <div className="relative w-full rounded-xl overflow-hidden bg-gradient-to-br from-primary to-primary-light h-[400px] flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10" fill="white" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-white/70">Tanıtım Videosu</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-8 shadow-xl">
              <h3 className="font-bold text-2xl mb-2 text-dark">Bizimle İletişime Geçin</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary-light rounded mb-4" />
              <p className="text-gray-500 text-sm mb-6">
                Aşağıdaki formu doldurarak bizimle iletişime geçebilirsiniz.
              </p>

              {sent ? (
                <div className="bg-green-50 text-green-700 p-4 rounded-lg text-center">
                  ✅ Mesajınız başarıyla gönderildi! En kısa sürede dönüş yapacağız.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <input
                    type="text"
                    placeholder="Adınız Soyadınız"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Telefon"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    required
                  />
                  <input
                    type="email"
                    placeholder="E-Posta"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    required
                  >
                    {serviceOptions.map((opt, i) => (
                      <option key={i} value={i === 0 ? "" : opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    placeholder="Güvenlik Kodu"
                    value={form.code}
                    onChange={(e) => setForm({ ...form, code: e.target.value })}
                    className="mb-3"
                  />
                  <div className="bg-gray-100 rounded px-4 py-2 mb-4 text-center text-sm text-gray-500 font-mono">
                    CAPTCHA
                  </div>
                  <button type="submit" className="btn-gradient w-full text-center">
                    Gönder
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
