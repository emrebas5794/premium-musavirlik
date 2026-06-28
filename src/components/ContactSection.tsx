"use client";

import { useState } from "react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  return (
    <section className="section">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" style={{ alignItems: "center" }}>
          <div>
            <div className="section-label">İletişim</div>
            <h2 className="section-title">Bizimle İletişime Geçin</h2>
            <p className="section-subtitle" style={{ margin: "0 0 32px" }}>
              Aşağıdaki formu doldurarak bizimle iletişime geçebilirsiniz. En kısa sürede size dönüş yapacağız.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--surface-alt)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", fontSize: 18, flexShrink: 0 }}>📍</div>
                <div>
                  <strong style={{ color: "var(--heading)", fontSize: "var(--text-sm)" }}>Adres</strong>
                  <p style={{ fontSize: "var(--text-sm)", margin: "4px 0 0" }}>Kartaltepe Mah. İncirli Cad. No.46 D.11 Bakırköy / İSTANBUL</p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--surface-alt)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", fontSize: 18, flexShrink: 0 }}>📞</div>
                <div>
                  <strong style={{ color: "var(--heading)", fontSize: "var(--text-sm)" }}>Telefon</strong>
                  <p style={{ fontSize: "var(--text-sm)", margin: "4px 0 0" }}>+90 212 438 0464</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            {sent ? (
              <div style={{ textAlign: "center", padding: 32, color: "var(--success)" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
                <h3 style={{ color: "var(--heading)", marginBottom: 8 }}>Teşekkürler!</h3>
                <p style={{ margin: 0 }}>Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.</p>
              </div>
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
                <textarea className="form-control" rows={4} placeholder="Mesajınız" />
                <button type="submit" className="btn btn-gradient btn-lg" style={{ width: "100%" }}>Gönder</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
