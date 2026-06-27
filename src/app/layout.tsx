import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Premium Danışmanlık | Teknopark, Ar-Ge, Teşvik Danışmanlığı",
  description:
    "Premium Danışmanlık - Teknopark süreç danışmanlığı, şirket kuruluş, KOSGEB, TÜBİTAK proje süreçleri, mali müşavirlik, patent, eğitim ve belgelendirme hizmetleri.",
  keywords: [
    "danışmanlık",
    "teknopark",
    "teknokent",
    "arge",
    "tübitak",
    "kosgeb",
    "premium danışmanlık",
    "şirket kuruluş",
    "mali müşavirlik",
    "patent",
  ],
  openGraph: {
    title: "Premium Danışmanlık | Kurumsal Danışmanlık Hizmetleri",
    description:
      "Profesyonel teknopark, AR-GE ve teşvik danışmanlığı hizmetleri. Şirket kuruluş, KOSGEB, TÜBİTAK proje yönetimi.",
    locale: "tr_TR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className={`${poppins.className} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        {/* WhatsApp Float Button */}
        <a
          href="https://wa.me/905552968787"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
          aria-label="WhatsApp ile iletişime geç"
        >
          <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
            <path d="M17 17v2H7v2H7h2v2H7h2v2H7h2z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
