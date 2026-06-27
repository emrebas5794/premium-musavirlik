import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/WhatsAppBackTop";

export const metadata: Metadata = {
  title: "Premium Danışmanlık | Teknopark Süreç Danışmanlığı & Yazılım",
  description:
    "Premium Danışmanlık - Teknopark süreç danışmanlığı, KOSGEB, TÜBİTAK, mali müşavirlik, AR-GE merkezi başvuruları ve patent süreçlerinde uzman kadro.",
  keywords: [
    "danışmanlık",
    "teknopark",
    "teknokent",
    "arge",
    "tübitak",
    "kosgeb",
    "mali müşavirlik",
    "şirket kuruluş",
    "patent",
  ],
  openGraph: {
    title: "Premium Danışmanlık | Teknopark Süreç Danışmanlığı & Yazılım",
    description:
      "Premium Danışmanlık - Teknopark süreç danışmanlığı, KOSGEB, TÜBİTAK, mali müşavirlik, AR-GE merkezi başvuruları ve patent süreçlerinde uzman kadro.",
    locale: "tr_TR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
