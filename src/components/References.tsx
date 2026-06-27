import Link from "next/link";

const clients = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Referans ${i + 1}`,
}));

export default function References() {
  return (
    <section id="referanslar" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center section-title mb-4">Referanslarımız</h2>
        <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">
          Birlikte çalışmaktan gurur duyduğumuz firmalar
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {clients.map((client) => (
            <div
              key={client.id}
              className="client-logo h-20 bg-silver-light rounded flex items-center justify-center text-gray-400 text-sm font-medium hover:border-primary hover:text-primary transition border"
            >
              {client.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
