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
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h5 className="shadow-text text-5xl md:text-7xl lg:text-8xl">Premium</h5>
          <h5 className="text-primary-color mb-6 md:mb-8 relative inline-block text-sm md:text-base">
            <span className="absolute -top-2 md:-top-3 left-1/2 -translate-x-1/2 w-8 md:w-10 h-[2px] bg-primary" />
            Premium Danışmanlık
          </h5>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#151a33]">
            Müşterilerimiz Ne Diyor?
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="testimonial-item">
              <span className="quote-icon opacity-20 md:opacity-25">❞</span>
              <h4 className="client-name text-lg md:text-xl">{item.name}</h4>
              <h6 className="client-designation text-sm md:text-base">{item.title}</h6>
              <div className="testimonial-content">
                <p className="comments text-sm md:text-base">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
