import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PMDTR - Premium Danışmanlık | Muhasebe, Vergi, SGK, Danışmanlık",
  description: "PMDTR; muhasebe, mali müşavirlik, vergi, KDV iadesi, SGK, bordrolama, şirket kurma ve danışmanlık hizmetleri. 2018'den beri Bakırköy / İstanbul.",
  keywords: ["muhasebe", "vergi", "sgk", "danışmanlık", "pmdtr", "bakırköy"],
  openGraph: { title: "PMDTR - Premium Danışmanlık", description: "Muhasebe, vergi, SGK ve danışmanlık hizmetleri.", locale: "tr_TR" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
