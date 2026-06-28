export const metadata = { title: "Hakkımızda - PMDTR" };

export default function Hakkimizda() {
  return (
    <>
      <section className="page-banner">
        <div className="max-w-7xl mx-auto px-4">
          <div className="banner-content">
            <h1>Hakkımızda</h1>
            <div className="breadcrumb"><a href="/">Anasayfa</a><span>/</span><span>Hakkımızda</span></div>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div style={{ width: "100%", height: 400, borderRadius: "var(--radius-xl)", background: "linear-gradient(135deg, #0e4354, #55bab3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "4rem", color: "rgba(255,255,255,0.2)", fontWeight: 700 }}>PMDTR</div>
            </div>
            <div>
              <div className="section-label">Kurumsal</div>
              <h2 style={{ fontSize: "2rem", fontWeight: 600, color: "var(--heading)", marginBottom: 24 }}>Biz Kimiz?</h2>
              <p style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--primary)", marginBottom: 20 }}>Neden PremiumTax Mali Müşavirlik ve Danışmanlık Tercih Etmelisiniz?</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, color: "var(--text-muted)", lineHeight: 1.7 }}>
                <p>✓ Tüm vergi ve SGK süreçlerinde mevzuata hâkim <strong>40 kişilik uzman ekibimiz</strong> ile yanınızdayız.</p>
                <p>✓ İşimizi çok önemsiyoruz ve hizmet verdiğimiz firmalara azami devlet teşviki sağlıyoruz.</p>
                <p>✓ Global vizyonumuz neticesinde çeşitli ülkedeki çözüm ortaklarımız vasıtası ile geniş bir iş birliği ağına sahibiz.</p>
                <p>✓ Mali konular ve muhasebe işlemlerinde rehberlik görevi üstleniyoruz.</p>
                <p>✓ Dijital çağ ile yakından ilgileniyor, tüm uygulamalarda güncel yazılımları kullanıyoruz.</p>
                <p>✓ Hizmetimizden memnun kalınmayan durumlarda cezai şart ödemeden sözleşme fesih hakkı sunuyoruz.</p>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 64, color: "var(--text-muted)", maxWidth: 600, margin: "64px auto 0" }}>
            <p>2018 yılında başladığımız ve günümüzde yer aldığımız sektörde örnek kuruluş olarak gösterilmenin gururunu yaşıyoruz. Değerli iş ortaklarımız ve çalışma arkadaşlarımız ile gayret göstermeye devam edeceğiz.</p>
          </div>
        </div>
      </section>
    </>
  );
}
