"use client";
import { useState } from "react";

export default function Iletisim() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="page-banner"><div className="max-w-7xl mx-auto px-4"><div className="banner-content"><h1>İletişim</h1><div className="breadcrumb"><a href="/">Anasayfa</a><span>/</span><span>İletişim</span></div></div></div></section>
      <section style={{ padding: "80px 0" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="section-label">Bize Ulaşın</div>
              <h2 className="section-heading">İletişim Bilgilerimiz</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 32 }}>
                {[
                  { icon: "📍", title: "Adres", text: "Kartaltepe Mah. İncirli Cad. No.46 D.11 Bakırköy / İSTANBUL" },
                  { icon: "📞", title: "Telefon", text: "+90 212 438 0464" },
                  { icon: "📱", title: "Cep", text: "+90 545 366 09 96" },
                  { icon: "✉️", title: "E-Posta", text: "info@pmdtr.com" },
                ].map((c, i) => (
                  <div key={i} style={{ display: "flex", gap: 14 }}>
                    <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--surface-alt)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{c.icon}</div>
                    <div><strong style={{ color: "var(--heading)" }}>{c.title}</strong><br /><span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>{c.text}</span></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="contact-form-card">
              <h3 style={{ marginBottom: 8 }}>İletişim Formu</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: 20 }}>Formu doldurun, en kısa sürede dönüş yapalım.</p>
              {sent ? <div style={{ textAlign: "center", padding: 24, color: "#15be53" }}>✅ Gönderildi!</div> : (
                <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <input className="form-control" type="text" placeholder="Adınız Soyadınız" required />
                  <input className="form-control" type="tel" placeholder="Telefon" required />
                  <input className="form-control" type="email" placeholder="E-Posta" required />
                  <select className="form-control" defaultValue=""><option disabled value="">Hizmet Seçiniz</option><option>Muhasebe</option><option>KDV İade</option><option>Bordrolama</option><option>Diğer</option></select>
                  <textarea className="form-control" rows={3} placeholder="Mesajınız" />
                  <button type="submit" className="btn btn-gradient btn-lg" style={{ width: "100%" }}>Gönder</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
