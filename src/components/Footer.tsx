import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="max-w-7xl mx-auto px-4">
        <div className="footer-grid">
          <div>
            <img src="/logo.png" alt="PMDTR" style={{ height: 36, marginBottom: 16 }} />
            <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "rgba(255,255,255,0.5)" }}>
              PMDTR - Premium Danışmanlık; muhasebe, mali müşavirlik, vergi, SGK ve danışmanlık alanlarında 40 kişilik uzman kadrosuyla 2018&apos;den beri hizmet vermektedir.
            </p>
          </div>
          <div>
            <h5>Hızlı Menü</h5>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {["Anasayfa", "Hakkımızda", "Hizmetlerimiz", "Referanslar", "Duyurular", "İletişim"].map((l, i) => (
                <Link key={i} href={l === "Anasayfa" ? "/" : `/${l.toLowerCase().replace("ı","i").replace("ş","s")}`}>{l}</Link>
              ))}
            </div>
          </div>
          <div>
            <h5>Hizmetler</h5>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {["Muhasebe", "KDV İadesi", "Bordrolama", "Şirket Kurma", "Vergi Danışmanlığı", "SGK Teşvik"].map((l, i) => (
                <Link key={i} href="/hizmetler">{l}</Link>
              ))}
            </div>
          </div>
          <div>
            <h5>İletişim</h5>
            <div style={{ fontSize: "0.9rem", lineHeight: 1.8 }}>
              <p style={{ margin: "0 0 12px", color: "rgba(255,255,255,0.5)" }}>
                Kartaltepe Mah. İncirli Cad. No.46 D.11<br />Bakırköy / İSTANBUL
              </p>
              <p style={{ margin: "0 0 4px" }}>📞 +90 212 438 0464</p>
              <p style={{ margin: "0 0 4px" }}>📱 +90 545 366 09 96</p>
              <p style={{ margin: 0 }}>✉️ info@pmdtr.com</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="max-w-7xl mx-auto px-4" style={{ textAlign: "center" }}>
            © {new Date().getFullYear()} PMDTR - Premium Danışmanlık. Tüm hakları saklıdır.
          </div>
        </div>
      </div>
    </footer>
  );
}
