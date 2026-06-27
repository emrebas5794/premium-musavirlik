import PageBanner from "@/components/PageBanner";
import Link from "next/link";

export const metadata = {
  title: "Kurumsal - Premium Danışmanlık",
};

export default function Kurumsal() {
  return (
    <>
      <PageBanner
        title="Kurumsal"
        breadcrumbs={[{ label: "Anasayfa", href: "/" }, { label: "Kurumsal" }]}
      />

      <section className="pdt-105 pdb-80 bg-silver-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/hakkimizda" className="feature-box group p-8 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0e4354] to-[#55bab3] rounded-xl flex items-center justify-center text-white text-3xl mrb-20">
                🏢
              </div>
              <h3 className="mrb-15 group-hover:text-primary transition">Hakkımızda</h3>
              <p className="text-gray-500 text-sm">
                Premium Danışmanlık'ın kuruluş hikayesi, misyonu, vizyonu ve ekibi hakkında detaylı bilgi.
              </p>
            </Link>

            <Link href="/referanslar" className="feature-box group p-8 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0e4354] to-[#55bab3] rounded-xl flex items-center justify-center text-white text-3xl mrb-20">
                🤝
              </div>
              <h3 className="mrb-15 group-hover:text-primary transition">Referanslarımız</h3>
              <p className="text-gray-500 text-sm">
                Birlikte çalıştığımız firmalar ve başarı hikayelerimiz.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
