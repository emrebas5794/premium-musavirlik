const testimonials = [
  {
    name: "Ahmet Berat ERARSLAN",
    title: "AKM İnteraktif - Genel Müdür",
    text: "Premium Danışmanlık'tan hizmet almaya başladığımız tarihten itibaren gerek kişiliğinden gerek ise güler yüzlü yaklaşımlarından şirket olarak her daim memnun kaldık. Özellikle Makine Techizat aldığımız süreçlerde bizleri yönlendirmesiyle yapmış olduğumuz KDV Muafiyeti ile şirketimize yüklü bir miktar kar elde ettirmiştir.",
  },
  {
    name: "Ahmet ÖZRENK",
    title: "CEVİZSOFT - Genel Müdür",
    text: "Premium Danışmanlık dinamik ekip yapısı ve disiplinli çalışmaları ile bize tamamen uyum sağladığından dolayı tüm teknokent yasal süreçlerine kolaylıkla adapte olmamızı sağlamıştır. Bize sunmuş oldukları bilgi ve destekleri ile de ciddi anlamda tasarruf elde etmemizi sağlamışlardır.",
  },
  {
    name: "Mehmet Tevfik BAŞKAYA",
    title: "GAUS Teknoloji - Genel Müdür",
    text: "Teknopark süreçleri hem teknik hem idari hem de mevzuat açısından yoğun geçen süreçler oldu. Bu danışmanlık sayesinde hem zamandan hem de personelden tasarruf ederek bir çok mevzuatı öğrenme yükünden de kurtulmuş olduk.",
  },
  {
    name: "Hasan Cem DERTLİ",
    title: "SODEC Teknoloji - Genel Müdür",
    text: "Premium Danışmanlık sayesinde şirketimizin yıllardır ertelediği teknokent ve destek programlarına başvurularımızı ve kabullerimizi çok hızlı şekilde tamamladık. Projenin yazım aşamasından başlayarak tamamlanana kadar her adımda bilgi ve deneyimleriyle bize destek sağladılar.",
  },
];

export default function Testimonials() {
  return (
    <section className="pdt-80 pdb-110">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mrb-60">
          <h5 className="shadow-text">Premium</h5>
          <h5 className="text-primary-color mrb-30 relative inline-block">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-[2px] bg-primary" />
            Premium Danışmanlık
          </h5>
          <h2>Müşterilerimiz Ne Diyor?</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="testimonial-item">
              <span className="quote-icon">❞</span>
              <h4 className="client-name">{item.name}</h4>
              <h6 className="client-designation">{item.title}</h6>
              <div className="testimonial-content">
                <p className="comments">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
