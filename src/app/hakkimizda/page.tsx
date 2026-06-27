import PageBanner from "@/components/PageBanner";
import AboutStats from "@/components/AboutStats";

export const metadata = {
  title: "Hakkımızda - Premium Danışmanlık",
};

export default function Hakkimizda() {
  return (
    <>
      <PageBanner
        title="Hakkımızda"
        breadcrumbs={[
          { label: "Anasayfa", href: "/" },
          { label: "Kurumsal", href: "/kurumsal" },
          { label: "Hakkımızda" },
        ]}
      />

      <section className="pdt-50 pdb-50 bg-silver-light bg-no-repeat">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="about-image-block">
              <div className="w-full h-[500px] bg-gradient-to-br from-[#0e4354] to-[#55bab3] rounded-xl flex items-center justify-center">
                <span className="text-white/40 text-8xl">🏢</span>
              </div>
            </div>

            <div>
              <h2 className="title-under-line mrb-70">Hakkımızda</h2>
              <h5 className="mrb-30 text-primary-color">Premium Danışmanlık</h5>

              <p className="mrb-40">
                Premium Danışmanlık firmasının ortaya çıkış amacı Teknoloji Geliştirme Bölgelerinde faaliyet gösteren girişimci firmalarının 4691 sayılı Teknoloji Geliştirme Bölgeleri Kanunu ve 5746 sayılı Araştırma ve Geliştirme Faaliyetlerinin de en doğru bir şekilde süreçlerinin yönetilmesini sağlamak olmuştur.
              </p>

              <p className="mrb-40">
                Bu kapsamda teknokent/teknoparklar tarafında uzun yıllara dayanan tecrübemizle Türkiye genelindeki Teknoparkların yönetimleri ile ikili çalışma fırsatlarını yakalamış bulunmaktayız.
              </p>

              <p className="mrb-40">
                Şirketimiz bu sayede hali hazırda farklı sektörlerde yer alan firmaların, teknopark süreç danışmanlığı, KOSGEB, TÜBİTAK, muhasebe ve mali müşavirliğini yürütmektedir.
              </p>

              <h5 className="mrb-30 text-primary-color">Vizyonumuz</h5>
              <p className="mrb-40">
                İnsana ve işine saygıyı ve sürekli gelişimi amaç edinmiş, hizmet sunduğu firmaların ihtiyaçlarını günümüzün ve geleceğin iş koşullarına uygun olarak &quot;değer&quot; odaklı başarı hikâyelerine dönüştüren, saygın, güvenilir ve performans odaklı seçkin bir firma olmaktır.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AboutStats />
    </>
  );
}
