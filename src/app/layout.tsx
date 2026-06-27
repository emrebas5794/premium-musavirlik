import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/WhatsAppBackTop";

export const metadata: Metadata = {
  title: "PMDTR - Premium Danışmanlık | Muhasebe, Vergi, SGK, Danışmanlık",
  description:
    "PMDTR Premium Danışmanlık; muhasebe, mali müşavirlik, vergi, KDV iadesi, SGK, bordrolama, şirket kurma ve danışmanlık hizmetleri. Bakırköy / İstanbul.",
  keywords: [
    "muhasebe", "mali müşavirlik", "vergi danışmanlığı", "kdv iadesi", "sgk",
    "bordrolama", "şirket kurma", "pmdtr", "premium danışmanlık", "bakırköy",
  ],
  openGraph: {
    title: "PMDTR - Premium Danışmanlık | Muhasebe, Vergi, SGK, Danışmanlık",
    description:
      "PMDTR Premium Danışmanlık; muhasebe, mali müşavirlik, vergi, KDV iadesi, SGK, bordrolama, şirket kurma ve danışmanlık hizmetleri.",
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
