const items = [
  { name: "Ahmet YILMAZ", role: "XYZ Teknoloji - Genel Müdür", text: "PMDTR ile çalışmaya başladığımızdan beri muhasebe ve vergi süreçlerimizde hiçbir sorun yaşamadık. KDV iadelerimiz rekor sürede sonuçlandı. İşlerini gerçekten bilen bir ekip." },
  { name: "Mehmet KAYA", role: "ABC İhracat - Yönetici", text: "Uluslararası vergi danışmanlığı konusunda PMDTR'nin uzmanlığı sayesinde yurt dışı işlemlerimizde büyük kolaylık sağladık. Global vizyonları gerçekten etkileyici." },
  { name: "Ayşe DEMİR", role: "TechStart - Kurucu", text: "Şirket kurulum sürecimizde her aşamada yanımızda oldular. 40 kişilik ekipleriyle her sorumuza anında cevap aldık. Profesyonellikleri takdire şayan." },
  { name: "Can ERSOY", role: "DataViz A.Ş. - CEO", text: "SGK teşvikleri konusunda bize kazandırdıkları avantajlar sayesinde yıllık ciddi tasarruf elde ettik. Mevzuata hâkimiyetleri ve hızları mükemmel." },
];

export default function Testimonials() {
  return (
    <section className="section section-alt">
      <div className="max-w-7xl mx-auto px-4">
        <div className="section-header">
          <div className="section-label">Referanslar</div>
          <h2 className="section-title">Müşterilerimiz Ne Diyor?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="quote-mark">&ldquo;</div>
              <p className="text">{t.text}</p>
              <div className="author">{t.name}</div>
              <div className="role">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
