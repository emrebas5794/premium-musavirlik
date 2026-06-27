import PageBanner from "@/components/PageBanner";

const references = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  name: `Referans Firma ${i + 1}`,
}));

export const metadata = {
  title: "Referanslar - Premium Danışmanlık",
};

export default function Referanslar() {
  return (
    <>
      <PageBanner
        title="Referanslar"
        breadcrumbs={[{ label: "Anasayfa", href: "/" }, { label: "Referanslar" }]}
      />

      <section className="pdt-50 pdb-50 bg-silver-light bg-no-repeat">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {references.map((ref) => (
              <div key={ref.id} className="feature-box flex items-center justify-center h-[120px]">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0e4354]/10 to-[#55bab3]/10 rounded-full flex items-center justify-center mx-auto mrb-10">
                    <span className="text-primary text-xl">🏢</span>
                  </div>
                  <span className="text-xs text-gray-400">{ref.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
