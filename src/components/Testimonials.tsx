import { FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Ahmet YILMAZ",
    title: "XYZ Teknoloji - Genel Müdür",
    text: "Premium Danışmanlık sayesinde şirketimizin yıllardır ertelediği teknokent ve destek programlarına başvurularımızı ve kabullerimizi çok hızlı şekilde tamamladık. Projenin yazım aşamasından başlayarak tamamlanana kadar, her adımda bilgi ve deneyimleriyle bize destek sağladılar.",
  },
  {
    id: 2,
    name: "Mehmet KAYA",
    title: "ABC Yazılım - Yönetici",
    text: "Teknopark süreçleri hem teknik hem idari hem de mevzuat açısından yoğun geçen süreçler oldu. Bu danışmanlık sayesinde hem zamandan hem de personelden tasarruf ederek bir çok mevzuatı öğrenme yükünden de kurtulmuş olduk.",
  },
  {
    id: 3,
    name: "Ayşe DEMİR",
    title: "TechStart - Kurucu Ortak",
    text: "Her şey bir fikri hayata geçirme isteği ile başlıyor. Bu yolculukta Premium Danışmanlık bize yoldaş oldu. Her türlü fırsattan yararlanabilmemiz için bizim adımıza uğraştı ve sonuçlandırdı. Bu sayede biz de asıl işimize odaklanma fırsatı elde ettik.",
  },
  {
    id: 4,
    name: "Can ERSOY",
    title: "DataViz A.Ş. - CEO",
    text: "Günümüzde, engel olarak karşımıza çıkan bürokrasi ve formaliteleri aşmak Premium Danışmanlık sayesinde mümkün oldu. Dinamik, sonuç odaklı ve anında çözümler için teşekkür ediyoruz.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h5 className="text-gray-300 text-6xl font-extrabold mb-2 opacity-30">Premium</h5>
          <h5 className="section-subtitle mb-4 inline-block">Premium Danışmanlık</h5>
          <h2 className="section-title">Müşterilerimiz Ne Diyor?</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="testimonial-card">
              <span className="quote-icon">
                <FaQuoteRight />
              </span>
              <h4 className="font-bold text-lg mb-1">{item.name}</h4>
              <h6 className="text-gray-400 text-sm mb-6">{item.title}</h6>
              <p className="text-gray-600 text-sm leading-relaxed italic">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
