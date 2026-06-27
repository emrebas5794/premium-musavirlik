"use client";

import { useState } from "react";
import PageBanner from "@/components/PageBanner";

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
];

export default function Iletisim() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageBanner
        title="İletişim"
        breadcrumbs={[{ label: "Anasayfa", href: "/" }, { label: "İletişim" }]}
      />

      <section className="pdt-110 pdb-95">
        <div className="max-w-7xl mx-auto px-4">
          {/* Contact Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mrb-60">
            <div className="contact-block flex items-start gap-6">
              <div className="contact-icon flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0e4354] to-[#55bab3] rounded-lg flex items-center justify-center text-white text-2xl">
                  🏢
                </div>
              </div>
              <div>
                <h5 className="mrb-10">Merkez Ofis</h5>
                <p className="text-gray-500">İstanbul / Türkiye</p>
              </div>
            </div>

            <div className="contact-block flex items-start gap-6">
              <div className="contact-icon flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0e4354] to-[#55bab3] rounded-lg flex items-center justify-center text-white text-2xl">
                  🔬
                </div>
              </div>
              <div>
                <h5 className="mrb-10">Ar-Ge Ofisi</h5>
                <p className="text-gray-500">
                  Cumhuriyet Mh. Mithatpaşa Cd. No:26/16 K:2 Çankaya / ANKARA
                </p>
              </div>
            </div>

            <div className="contact-block flex items-start gap-6">
              <div className="contact-icon flex-shrink-0">
                <div className="space-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0e4354] to-[#55bab3] rounded-lg flex items-center justify-center text-white text-2xl">
                    ✉️
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0e4354] to-[#55bab3] rounded-lg flex items-center justify-center text-white text-2xl">
                    📞
                  </div>
                </div>
              </div>
              <div>
                <h5 className="mrb-10">E-Posta</h5>
                <p className="mrb-10 text-gray-500">info@premiumdanismanlik.com</p>
                <h5 className="mrb-10">Telefon</h5>
                <p className="text-gray-500">0 555 296 87 87</p>
              </div>
            </div>
          </div>

          {/* Contact Form + Info */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <h5 className="sub-title-side-line text-primary-color mrt-0 mrb-15">
                Premium Danışmanlık
              </h5>
              <h2 className="text-[42px] font-extrabold leading-tight mrb-30">İletişim Formu</h2>
              <p className="mrb-40 text-gray-500">
                Yandaki formu doldurarak bizimle iletişime geçebilir veya sosyal medya üzerinden bizimle iletişime geçebilirsiniz.
              </p>
              <div className="flex gap-3">
                {["🔗", "📷", "𝕏", "💬"].map((icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-lg hover:bg-primary-light transition">
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="request-a-call-back-form">
                {sent ? (
                  <div className="bg-green-50 text-green-700 p-6 rounded-lg text-center">
                    ✅ Mesajınız başarıyla gönderildi! En kısa sürede dönüş yapacağız.
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    </div>
                    <div className="form-group">
                      <textarea className="form-control" rows={4} placeholder="Mesajınız" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Güvenlik Kodu" />
                    </div>
                    <button type="submit" className="cs-btn-one btn-gradient-color btn-md btn-block">
                      Gönder
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
