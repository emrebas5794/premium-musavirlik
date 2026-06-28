"use client";

import { useState } from "react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  return (
    <section style={{ padding: "80px 0" }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" style={{ alignItems: "center" }}>
          <div>
            <div className="section-label">İletişim</div>
            <h2 className="section-heading">Bizimle İletişime Geçin</h2>
            <p className="section-subtitle" style={{ marginBottom: 32 }}>
              Aşağıdaki formu doldurarak bizimle iletişime geçebilirsiniz. En kısa sürede size dönüş yapacağız.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--surface-alt)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", fontWeight: 700 }}>📍</div>
                <div><strong style={{ color: "var(--heading)" }}>Adres</strong><br /><span style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>Kartaltepe Mah. İncirli Cad. No.46 D.11 Bakırköy / İSTANBUL</span></div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--surface-alt)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", fontWeight: 700 }}>📞</div>
                <div><strong style={{ color: "var(--heading)" }}>Telefon</strong><br /><span style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>+90 212 438 0464</span></div>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            {sent ? (
              <div style={{ textAlign: "center", padding: 32, color: "#15be53" }}>✅ Mesajınız başarıyla gönderildi!</div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <input className="form-control" type="text" placeholder="Adınız Soyadınız" required />
                <input className="form-control" type="tel" placeholder="Telefon" required />
                <input className="form-control" type="email" placeholder="E-Posta" required />
                <select className="form-control" defaultValue="">
                  <option value="" disabled>Hizmet Seçiniz</option>
                  <option>Muhasebe ve Mali Müşavirlik</option>
                  <option>KDV ve ÖTV İade</option>
                  <option>Bordrolama ve SGK</option>
                  <option>Şirket Kurma</option>
                  <option>Vergi Danışmanlığı</option>
                  <option>Diğer</option>
                </select>
                <textarea className="form-control" rows={3} placeholder="Mesajınız" />
                <button type="submit" className="btn btn-gradient btn-lg" style={{ width: "100%" }}>Gönder</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
