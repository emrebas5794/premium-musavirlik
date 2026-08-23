export type ServiceSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  icon: string;
  sections: ServiceSection[];
};

/** Hizmet içerikleri: https://www.e-calp.com/tr menü yapısı ve sayfa metinleri referans alınarak PMDTR için uyarlanmıştır. */
export const services: Service[] = [
  {
    slug: "sirket-kurulus-islemleri",
    title: "Şirket Kuruluş İşlemleri",
    summary:
      "Şahıs, limited ve anonim şirket kuruluşunda sorumluluklar, vergisel avantajlar ve süreç yönetimi danışmanlığı.",
    icon: "🏢",
    sections: [
      {
        title: "Şirket Kuruluş İşlemleri",
        paragraphs: [
          "Türkiye’de yaygın olarak faaliyet gösteren şirket türlerini; şahıs şirketleri (işletmeleri), limited şirketler ve anonim şirketler olarak sıralayabiliriz.",
          "Yukarıda belirtilen şirket türlerinin dışında komandit, kollektif gibi şirket türleri de mevcut olmakla birlikte bu şirket türleri diğerlerine oranla daha az rastlanan türlerdir.",
          "Şahıs şirketi, limited şirket ve anonim şirket arasında getirdiği sorumluluklar, vergisel avantajlar, kuruluş ve aylık maliyetler gibi konular değişkenlik göstermektedir.",
        ],
      },
      {
        title: "Şahıs Şirketi (İşletmesi)",
        paragraphs: [
          "Şahıs şirketi kuruluşunda herhangi bir sermaye şartı bulunmamaktadır. Kuruluş maliyetleri limited şirkete ve anonim şirkete göre daha düşüktür. Şahıs şirketlerini kurmak ve kapatmak için daha az zaman ve emek harcanmakta olup süreç de oldukça kısadır.",
          "Ancak şahıs şirketinde kamu borçlarından şirket sahibi tüm mal varlığıyla sorumludur. Ayrıca şahıs şirketlerinde anonim ve limited şirkette olduğu gibi sabit bir vergi oranı yerine %15 ile başlayıp %40’a kadar çıkan gelir vergisi oranları uygulanmaktadır.",
        ],
      },
      {
        title: "Limited Şirket",
        paragraphs: [
          "Limited şirket kurulurken sermaye taahhüdü şartı bulunmaktadır ve bu sermayenin şirket kuruluşundan itibaren 24 ay içinde ödenmesi gerekmektedir. Şirketi kurarken herhangi bir bankaya sermayenin %25’ini bloke etme şartı kalkmıştır.",
          "Limited şirketi tek ortaklı olarak kurmak mümkündür. Ortak sayısı en fazla 50’ye kadar çıkabilmektedir. Limited şirketin kanuni temsilcileri kamu borçlarının tamamından sorumlu iken, temsil yetkisi olmayan ortaklar ise kamu borçlarından sermaye payları oranında sorumludur. Ayrıca limited şirketlerde ortakların hisse devri işlemleri anonim şirketlere göre daha karmaşık ve maliyetlidir.",
        ],
      },
      {
        title: "Anonim Şirket",
        paragraphs: [
          "Anonim şirketlerin kuruluşunda sermaye taahhüdünün en az 50.000 TL olması ve limited şirket kuruluşundan farklı olarak taahhüt edilen sermayenin ¼’ünün şirket kuruluşundan önce bankada bloke ettirilmesi gerekmektedir. Ancak şirketiniz tescil edildikten sonra bu blokeyi kaldırabilirsiniz. Limited şirketlerde olduğu gibi anonim şirketlerde de taahhüt edilen sermayenin 24 ay içinde ödenmesi gerekmektedir.",
          "Anonim şirketler de tek ortakla kurulabilmekte ve ortak sayısı en fazla 500’e kadar çıkabilmektedir. Anonim şirketlerin yönetim kurulu üyesi ortakları şirketin kamu borçlarının tamamından sorumlu iken, yönetim kurulu üyesi olmayan ortakların kamu borçlarından herhangi bir sorumluluğu bulunmamaktadır.",
          "Şirket kuruluşu konusunda uzman kadromuz ile danışmanlık, süreç yönetimi ve takibinde iş hayatına atacağınız bu önemli ilk adımda yanınızdayız.",
        ],
      },
    ],
  },
  {
    slug: "teknopark-danismanligi",
    title: "Teknopark Danışmanlığı",
    summary:
      "4691 sayılı kanun kapsamında proje süreçleri, muafiyet/yıllık faaliyet raporları, personel ve mali uyumluluk danışmanlığı.",
    icon: "🔬",
    sections: [
      {
        title: "Proje Süreç Danışmanlığı",
        paragraphs: [
          "Devam eden ya da yeni projelerinizin mevzuata uygun şekilde vergisel süreçleri kontrol edilerek aylık düzenli ve sistematik bir şekilde kontrol edilmesi; teknik ve mali açıdan raporlanması.",
        ],
      },
      {
        title: "Firma Bilgileri",
        paragraphs: [
          "Firmanıza ait bilgilerinizin kontrol edilmesi, yapılan/yapılacak revizelerin 4691 sayılı kanuna uyumlu olması gereken alanların düzenlenmesi, kontrolü ve güncellenmesi.",
        ],
      },
      {
        title: "Muafiyet Raporu",
        paragraphs: [
          "4691 kanun kapsamında proje/projelerinize ilişkin aylık muafiyet faaliyet raporunuzun zamanında hazırlanıp, yönetime teslim edilmesi süreçlerinin takibinin yapılması.",
        ],
      },
      {
        title: "Süreklilik",
        paragraphs: [
          "4691 Teknoloji Geliştirme Bölgesi Uygulama Yönetmeliği kapsamında teknoparkta faaliyette olduğunuz sürece kanun ile uyumlu bir şekilde faaliyetlerinizin sürdürülmesinin kontrolü.",
        ],
      },
      {
        title: "Personel Süreçleri",
        paragraphs: [
          "Projenizde görevli personellerinizin haftalık/aylık çalışma sürelerinin kontrol edilmesi ve personellerinizin projenize mevzuata uyumlu bir şekilde tanımlandırılması.",
        ],
      },
      {
        title: "Mali Bilgiler",
        paragraphs: [
          "Proje/projelerinize ait muafiyet faaliyet raporlarınızın oluşturulması, muhasebe tarafının 4691’e uygun hesap planı oluşturmasının sağlanması; veri girişlerinin düzenli ve sistematik hale getirilmesi.",
        ],
      },
      {
        title: "Yıllık Faaliyet Raporu",
        paragraphs: [
          "4691 kanun kapsamında yıllık faaliyet raporunuzun zamanında hazırlanıp, yönetime teslim edilmesi süreçlerinin takibinin yapılması. Not: Rapor yükümlülüklerinin yerine getirilmemesi durumunda kullanılan teşviklerin iptal edilmesi söz konusudur.",
        ],
      },
    ],
  },
  {
    slug: "kosgeb-ve-tubitak-proje-surecleri",
    title: "Kosgeb ve Tübitak Proje Süreçleri",
    summary:
      "TGB, KOSGEB ve TÜBİTAK odaklı proje yazımı, hibe/teşvik danışmanlığı ve sürdürülebilirlik yönetimi.",
    icon: "📋",
    sections: [
      {
        title: "Teknokent / KOSGEB / TÜBİTAK Proje Yazımı ve Destek Başvuru Süreçleri",
        paragraphs: [
          "Günümüzde verimlilik, katma değer ve sürdürülebilir rekabet kavramları firmaların iş hayatındaki devamlılığı için bir zorunluluktur. Bu özelliklerin gerçekleşmesi AR-GE çalışmaları ile mümkündür. AR-GE çalışması yapmayan firmaların karlılıkları azalmakta, değer/fon yaratamamaktadır.",
          "Ulusal ve uluslararası alanda Ar-Ge ve tasarım faaliyetlerine sağlanan tüm teşvik ve destek mekanizmalarına yönelik süreçlerde firmaların ihtiyaçlarına birebir cevap verecek danışmanlık hizmeti sunmaktayız. Farklı sektörlerde Ar-Ge, tasarım ve yenilikçi faaliyetlerini yürüten firmalara yapılarına uygun teşvik ve hibeleri öneriyoruz.",
          "Teknoloji geliştirme bölgeleri, proje bazlı destekler, Ar-Ge ve tasarım merkezlerinin işleyişi hakkında girişimcileri bilgilendirerek en uygun hibe ve teşviklerden faydalanmaları konusunda yönlendirmeler yapıyoruz. İşletmelerin faaliyet alanlarına uygun programları bulup proje yazım ve sürdürülebilirlik faaliyetlerini yönetiyoruz.",
        ],
      },
      {
        title: "Başlıca Destekler ve Hizmetlerimiz",
        bullets: [
          "Ulusal & uluslararası Ar-Ge destek programları (TÜBİTAK ve KOSGEB destekleri mali ve teknik danışmanlığı)",
          "Uluslararası Ar-Ge destek programları (TÜBİTAK ve H2020 destekleri mali ve teknik danışmanlığı)",
          "Yatırım teşvik destekleri mali ve teknik danışmanlığı",
          "4691 ve 5746 temelinde Ar-Ge mevzuatı müşavirlik hizmetleri",
          "Tematik ve çağrı esaslı ulusal destek programları (KOSGEB ve Kalkınma Ajansı)",
          "Ar-Ge ve Tasarım Merkezi kurulumu başvuru ve yönetimi",
          "TGB/TTO kurulumu, başvuru ve yönetimi",
          "Ar-Ge ve inovasyon süreçleri yönetimi, mevzuat danışmanlığı",
          "Dijital dönüşüm süreçleri yönetimi",
          "KOSGEB / İŞKUR / SGK teşvikleri (personel) danışmanlığı",
          "Ar-Ge muhasebesi, mali mühendislik temelinde müşavirlik hizmetleri",
          "Enerji ve Tabii Kaynaklar, Sanayi ve Teknoloji, Ticaret, Tarım ve Orman, Ulaştırma ve Altyapı bakanlıkları destekleri",
          "Fizibilite, girişimcilik ve iş planı danışmanlığı",
          "Hazine ve Maliye Bakanlığı destekleri, TTGV destekleri",
        ],
      },
    ],
  },
  {
    slug: "mali-musavirlik-hizmeti",
    title: "Mali Müşavirlik Hizmeti",
    summary:
      "TTK, VUK ve Tek Düzen Hesap Planına uygun muhasebe; 4691/5746 uyumlu bordrolama, vergi ve Ar-Ge mali danışmanlık.",
    icon: "📊",
    sections: [
      {
        title: "Mali Müşavirlik Hizmeti",
        paragraphs: [
          "Mali müşavirlik hizmetlerimiz kapsamında şirketlerin yasal defterlerini ve finansal tablolarını Türk Ticaret Kanunu, Vergi Usul Kanunu ve Tek Düzen Hesap Planına uygun olarak tutuyor; şeffaflık ilkesine uygun şekilde bilgi kullanıcılarının faydalanabileceği hale getiriyoruz.",
          "Vergi beyannamelerinin, SGK bildirimlerinin zamanında ve yasal defterlerle uyumlu olarak hazırlanması; ilgili mercilere gönderilmesi şirketler için önemli bir yükümlülüktür.",
          "4691 Teknoloji Geliştirme Bölgeleri mevzuatı ile 5746 sayılı Ar-Ge Faaliyetlerinin Desteklenmesi Hakkında Kanun kapsamı ile uyumluluk çerçevesinde hizmetlerimizi sürdürmekteyiz.",
          "Bordrolama, vergi danışmanlığı, mali ve teknik denetim hizmetlerini sağlamayı misyon edinmekteyiz.",
        ],
      },
      {
        title: "Mali Danışmanlık",
        paragraphs: [
          "Mali danışmanlık hizmetlerimizde mevcut mali müşaviriniz ile birlikte 4691 ve 5746 kapsamında koordineli çalışmaktayız. Bu kapsamda sağlayacağımız hizmetler aşağıdaki gibidir;",
        ],
        bullets: [
          "Mali kontrol ve muhasebe sistemlerinin tanımlanması",
          "Şirketin organizasyonel yapılanmasının teknopark için uygun hale getirilmesi",
          "Gelir vergisi teşviki hesaplamaları bilgilendirilmesi",
          "KDV muafiyet analizi ve uygulamaları bilgilendirilmesi",
          "Kazanç istisnası uygulaması; transfer fiyatlandırması için metotların belirlenmesi, dağıtım anahtarının oluşturulması bilgilendirilmesi",
          "Teşvikli SGK bordro ve bildirgelerinin oluşturulması hususunda danışmanlık",
          "Faaliyet izleme ve değerlendirme raporu takibi ve danışmanlığı",
          "Ar-Ge muhasebesi finansal danışmanlık hizmetleri",
          "Muhasebe beyannamelerinin hazırlanması kapsamında danışmanlık",
          "Ücret hesaplamaları ve teşvikli bordro hazırlanması konusunda insan kaynakları birimine destek",
        ],
      },
    ],
  },
  {
    slug: "ar-ge-ve-tasarim-merkezi-basvuru-surecleri",
    title: "Ar-Ge ve Tasarım Merkezi Başvuru Süreçleri",
    summary:
      "5746 kapsamında Ar-Ge / Tasarım Merkezi kurulumu, başvuru, onay ve devamlı yönetim danışmanlığı.",
    icon: "🧪",
    sections: [
      {
        title: "Ar-Ge ve Tasarım Merkezi Kurulumu",
        paragraphs: [
          "5746 sayılı Kanun kapsamında Ar-Ge ve tasarım merkezlerinin kurulumu; başvuru dosyasının hazırlanması, personel ve altyapı uygunluğunun kontrolü, başvuru ve onay süreçlerinin takibi konularında danışmanlık sunuyoruz.",
          "Merkez kurulumundan sonra teşviklerin doğru uygulanması, raporlama yükümlülükleri ve mevzuat değişikliklerinin takibi ile sürdürülebilir bir yapı kurmanıza destek oluyoruz.",
        ],
        bullets: [
          "Ar-Ge / Tasarım Merkezi kuruluş uygunluk analizi",
          "Başvuru dosyası ve proje dokümantasyonu hazırlığı",
          "Personel niteliği ve oran uyumluluğu kontrolü",
          "Başvuru sonrası izleme, raporlama ve teşvik yönetimi",
          "4691 / 5746 mevzuat danışmanlığı ile entegre süreç yönetimi",
        ],
      },
    ],
  },
  {
    slug: "belgelendirme-hizmetleri",
    title: "Belgelendirme Hizmetleri",
    summary:
      "Proje, teşvik ve kurumsal süreçlerde ihtiyaç duyulan belgelendirme ve dosyalama danışmanlığı.",
    icon: "📑",
    sections: [
      {
        title: "Belgeleendirme Süreçleri",
        paragraphs: [
          "Teknopark, Ar-Ge merkezi, KOSGEB ve TÜBİTAK süreçlerinde istenen teknik ve idari belgelerin hazırlanması; başvuru dosyalarının mevzuata uygun şekilde derlenmesi konularında destek veriyoruz.",
          "Belgelerin zamanında ve eksiksiz tamamlanması, teşvik kaybı ve uygulama risklerini azaltır. Süreçlerinizi uçtan uca takip ederek belge setlerinin güncelliğini sağlıyoruz.",
        ],
        bullets: [
          "Başvuru ve yenileme belge setlerinin hazırlanması",
          "Yönetim ve kamu kurumlarına sunulacak rapor / eklerin derlenmesi",
          "Mevzuat değişikliklerine göre belge güncellemeleri",
          "İç kontrol amaçlı kontrol listeleri ve arşiv düzeni",
        ],
      },
    ],
  },
  {
    slug: "egitim-hizmetleri",
    title: "Eğitim Hizmetleri",
    summary:
      "5746 / 4691 mevzuat, iş planı, proje yazma ve girişimcilik eğitimleri.",
    icon: "🎓",
    sections: [
      {
        title: "5746 Sayılı Ar-Ge Mevzuatı",
        paragraphs: [
          "Ar-Ge, yenilik ve tasarım faaliyetlerinde bulunan / bulunmak isteyen firmalara 5746 sayılı Ar-Ge mevzuatı hakkında eğitimler vermekteyiz.",
        ],
      },
      {
        title: "İş Planı Hazırlama Eğitimi",
        paragraphs: [
          "İş planı hazırlama eğitiminde yeni bir iş kurulması esnasında iş fikrinden iş modeli oluşturma, kanvas iş modeli, 9 iş bloğu, iş modeli inovasyonu, mevcut iş modelini doğrulama, bu modele bağlı iş faaliyetleri tasarlama ve iş planı hazırlama yöntemi katılımcılara aktarılmaktadır. Uygulamalı ve interaktif bir çalıştay şeklinde yapılır. Eğitimler bulunduğunuz il ve kurumunuzda verilebilir.",
        ],
      },
      {
        title: "Proje Yazma Eğitimi",
        paragraphs: [
          "Proje yazmak, yönetmek ve değerlendiricisi olabilecek şekilde hazırlanan eğitim müfredatı sizi uzman seviyesine yükseltecektir. Eğitim uygulamalı ve atölye çalışmaları ile gerçekleştirilecektir.",
        ],
      },
      {
        title: "Girişimcilik Eğitimi",
        paragraphs: [
          "Girişimcilik eğitimi, kendi işini kurmak isteyen girişimci adaylarının girişimcilik için sahip olmaları gereken kişisel özelliklerini ortaya koymalarını, gerekli bilgi ve beceriyi kazanmalarını ve uygulamalı olarak bu yetkinlikleri elde etmelerini amaçlamaktadır.",
        ],
      },
      {
        title: "4691 Sayılı Teknopark Mevzuatı",
        paragraphs: [
          "Türkiye’de Ar-Ge faaliyeti yürüten şirketlerin, Ar-Ge mevzuatı ve nakit destek programları kapsamında sağlanan farklı teşvik ve desteklerden faydalanma imkânı bulunmaktadır.",
          "Şirketlerin Ar-Ge ve yenilik faaliyetlerinin maliyetlerini düşürmek amacıyla yapılarına en uygun destek ve teşvik mekanizmasından faydalanmaları önem arz etmektedir.",
        ],
      },
    ],
  },
  {
    slug: "patent-surecleri",
    title: "Patent Süreçleri",
    summary:
      "Fikri ve sınai mülkiyet hakları kapsamında patent / faydalı model süreç danışmanlığı.",
    icon: "💡",
    sections: [
      {
        title: "Patent ve Faydalı Model Süreçleri",
        paragraphs: [
          "Ar-Ge çıktılarının korunması, patent ve faydalı model başvurularının planlanması ve süreç takibi konularında danışmanlık sunuyoruz.",
          "Başvuru öncesi değerlendirme, dokümantasyon, başvuru sonrası yazışmalar ve portföy yönetimi süreçlerinde firmaları yönlendiriyor; teknopark / Ar-Ge teşvikleri ile patent süreçlerini birlikte ele alıyoruz.",
        ],
        bullets: [
          "Başvuru öncesi yenilik / buluş değerlendirmesi yönlendirmesi",
          "Patent ve faydalı model başvuru süreç danışmanlığı",
          "Ar-Ge projeleri ile entegre fikri mülkiyet planlaması",
          "Süreç takibi ve kurum yazışmalarının koordinasyonu",
        ],
      },
    ],
  },
  {
    slug: "tekmer-danismanligi",
    title: "TEKMER Danışmanlığı",
    summary:
      "Teknoloji Geliştirme Merkezi giriş, proje hazırlığı, portal yönetimi ve 5746 kapsamındaki sürdürülebilirlik danışmanlığı.",
    icon: "🚀",
    sections: [
      {
        title: "TEKMER Danışmanlığı",
        paragraphs: [
          "Teknoloji Geliştirme Merkezleri (TEKMER), erken aşamadaki girişimlerin Ar-Ge ve yenilik faaliyetlerini destekleyen önemli bir yapıdır. 5746 sayılı Kanun kapsamındaki teşvik ve uygulama esaslarıyla birlikte değerlendirildiğinde, firmalar için hem teknik hem idari açıdan güçlü bir gelişim alanı oluşturur.",
          "PMDTR olarak firmaların TEKMER süreçlerine doğru hazırlanmasını, başvuru ve yürütme aşamalarında mevzuat uyumunu sağlamasını ve sunulan desteklerden etkin şekilde yararlanmasını hedefliyoruz. Giriş danışmanlığı, proje içeriği, portal işlemleri ve süreç takibi bütüncül bir yaklaşımla ele alınır.",
          "Güncel uygulamalar ve yükümlülükler hakkında bilgilendirme ile eğitim çalışmaları yürütülür; 5746 sayılı Kanun başta olmak üzere ilgili mevzuat yakından izlenir. Proje sürecinde ortaya çıkan revizyon ihtiyaçları planlı biçimde değerlendirilir; idari ve teknik gerekliliklerin uyumu birlikte gözetilir.",
        ],
      },
      {
        title: "Proje Hazırlama",
        paragraphs: [
          "TEKMER proje geliştirme süreci, firmanın mevcut teknik yetkinlikleri ile geliştirilecek ürün veya çözümün problem tanımının netleştirilmesiyle başlar. Hedeflenen teknik kazanımlar, kullanılacak yöntemler ve doğrulama yaklaşımı yapılandırılır.",
          "Proje dokümanında yenilik unsuru mevcut çözümlerle karşılaştırılarak tanımlanır; faaliyet–zaman planı, ekip yetkinlikleri ve teknik riskler bütüncül bir çerçevede ele alınır. Amaç, değerlendirme süreçlerinde içeriği güçlü, ilerlemesi izlenebilir ve gelişim potansiyeli net projeler oluşturmaktır.",
        ],
      },
      {
        title: "Sürdürülebilirlik ve Portal Yönetimi",
        paragraphs: [
          "TEKMER’de sürdürülebilirlik yalnızca kabul aşamasıyla sınırlı değildir; proje boyunca faaliyetlerin mevzuata uygun, izlenebilir ve kesintisiz yürütülmesini gerektirir.",
          "Proje takibi, personel yapılanması, portal kayıtlarının güncelliği ve dönemsel raporlama yükümlülükleri bu kapsamda yönetilir. Proje sonuna yaklaşıldığında kapanış süreci planlanır; çıktıların derlenmesi ve gerekli işlemlerin tamamlanması hedeflenir.",
        ],
        bullets: [
          "Portal kayıtları ve dönemsel raporlama takibi",
          "Personel ve proje ilerleme izleme",
          "İdari–teknik uyum kontrolleri",
          "Proje kapanış sürecinin planlanması",
        ],
      },
      {
        title: "Proje Revizyon Süreçleri",
        paragraphs: [
          "Proje süresinde teknik gelişmeler, iş planı güncellemeleri veya ekip değişiklikleri revizyon ihtiyacı doğurabilir. Kapsam, faaliyet planı, süre ve ekip yapısı birlikte değerlendirilir.",
          "Ekip değişikliği, süre uzatımı veya proje yöneticisi değişimi gibi talepler teknik gerekçeleriyle yapılandırılır; proje bütünlüğü korunarak TEKMER sürecine devam edilmesi sağlanır.",
        ],
      },
      {
        title: "TEKMER Eğitimleri",
        paragraphs: [
          "Girişimlerin mevzuata uyum ve teknik farkındalık düzeyini artırmak için TEKMER odaklı eğitimler sunuyoruz. İçerikler; TEKMER işleyişi, proje yürütme esasları, Ar-Ge ve yenilik kavramlarının doğru konumlandırılması, portal süreçleri ve sık yapılan hatalar üzerine kurgulanır.",
          "Eğitimler girişimin ihtiyacına göre şekillendirilir; katılımcıların sorumluluklarını netleştirmesi ve faaliyetlerini planlı yürütmesi amaçlanır.",
        ],
      },
    ],
  },
  {
    slug: "bordrolama-hizmetleri",
    title: "Bordrolama Hizmetleri",
    summary:
      "Teşvikli SGK bordro, bildirge ve Ar-Ge / teknopark personel puantaj süreçleri.",
    icon: "💳",
    sections: [
      {
        title: "Bordrolama ve Teşvikli SGK",
        paragraphs: [
          "Personel bordrolarının mevzuata uygun hazırlanması, SGK bildirimleri ve teşvikli bordro uygulamaları konusunda hizmet veriyoruz.",
          "4691 ve 5746 kapsamında Ar-Ge / teknopark personeline ilişkin puantaj, gelir vergisi stopaj teşviki ve SGK teşviklerinin doğru uygulanmasını destekliyoruz.",
        ],
        bullets: [
          "Aylık bordro ve SGK bildirge süreçleri",
          "Teşvikli bordro hesaplama ve uygulama danışmanlığı",
          "Ar-Ge / teknopark personel puantaj takibi",
          "Ücret, vergi ve prim kesintilerinin kontrolü",
        ],
      },
    ],
  },
  {
    slug: "stratejik-is-ortakligi",
    title: "Stratejik İş Ortaklığı",
    summary:
      "Proje ve danışmanlık süreçlerinde bilgi, yetkinlik ve tecrübe birleşimine dayalı iş birlikleri.",
    icon: "🤝",
    sections: [
      {
        title: "Stratejik İş Ortaklığı ve Birliktelik",
        paragraphs: [
          "Proje faaliyetlerimizin daha verimli biçimde başarılı sonuçlara ulaşması için gerekli bilgi, yetenek, beceri ve tecrübe birleşimlerinden ortaya çıkan sinerjiden güç alarak çözüm ortaklığı gerçekleştirebiliriz.",
          "Kolektif bilinç ile değer üretmek üzere bir araya gelen bağımsız profesyoneller olarak ortaklaşa gerçekleştirdiğimiz iş birliktelikten daha büyük başarıların ortaya çıkacağına inanıyoruz.",
        ],
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getServiceByTitle(title: string) {
  return services.find((s) => s.title === title);
}

export const serviceNavItems = services.map((s) => ({
  label: s.title,
  href: `/hizmetler/${s.slug}`,
}));
