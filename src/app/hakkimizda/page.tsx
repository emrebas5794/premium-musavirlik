import PageBanner from "@/components/PageBanner";

export const metadata = {
  title: "Hakkımızda - PMDTR Premium Danışmanlık",
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

      <section className="py-16 md:py-24 bg-silver-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="about-image-block">
              <div className="w-full h-[500px] bg-gradient-to-br from-[#0e4354] to-[#55bab3] rounded-xl flex items-center justify-center">
                <span className="text-white/30 text-8xl">PMDTR</span>
              </div>
            </div>

            <div>
              <h2 className="title-under-line mrb-70">Biz Kimiz?</h2>

              <p className="mrb-30 text-lg font-semibold text-primary">
                Neden PremiumTax Mali Müşavirlik ve Danışmanlık Tercih Etmelisiniz?
              </p>

              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Tüm vergi ve SGK süreçlerinde mevzuata hâkim ve yaklaşık 40 kişilik uzman ekibimiz ile yanınızdayız.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>İşimizi çok önemsiyoruz ve vergi - SGK yönünden hizmet verdiğimiz firmalara azami devlet teşviki sağlıyoruz.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Global vizyonumuz neticesinde çeşitli ülkedeki çözüm ortaklarımız vasıtası ile dünyada geniş bir iş birliği ağına sahibiz.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Mali konular ve Muhasebe işlemlerinde rehberlik görevi üstleniyoruz.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Dijital çağ ile yakından ilgileniyoruz, tüm uygulamalarda güncel yazılımları kullanıyoruz.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Sağladığımız hizmetleri derhal vakit kaybetmeden tamamlıyoruz.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Hizmetimizden memnun kalınmayan olası durumlarda hiçbir cezai şart ödemeden tüm hizmet sözleşmelerini fesih edebilme hakkını size sunuyoruz.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 max-w-2xl mx-auto mb-10">
            2018 yılında başladığımız ve günümüzde yer aldığımız sektörde örnek kuruluş olarak gösterilmenin ve ülkemize katma değer ve istihdam oluşturmanın gururunu yaşıyoruz.
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Değerli iş ortaklarımız ve çalışma arkadaşlarımız ile çalışmalarımızda gayret göstermeye devam edeceğiz.
          </p>
        </div>
      </section>
    </>
  );
}
