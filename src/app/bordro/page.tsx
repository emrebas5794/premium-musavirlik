"use client";

import BordroCalculator from "@/components/BordroCalculator";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function BordroPage() {
  const { locale, t } = useLanguage();
  const title = t.pages.payroll.title;

  const intro =
    locale === "en"
      ? "Incentive payroll calculator covering SGK – 5746 – 4691 (compliant with Law 7555 Art.19). Enter parameters to calculate monthly gross, net, income tax incentive, stamp tax and employer cost."
      : locale === "de"
        ? "Geförderte Lohnabrechnungs-Berechnung für SGK – 5746 – 4691 (konform mit Gesetz 7555 Art.19). Geben Sie Parameter ein, um Brutto, Netto, Einkommensteuerförderung, Stempelsteuer und Arbeitgeberkosten zu berechnen."
        : "SGK – 5746 – 4691 teşvikli bordro hesaplama aracı (7555 s.k. Md.19 uyumludur). Parametreleri girip aylık brüt, net, gelir vergisi teşviki, damga ve işveren maliyetini hesaplayın.";

  return (
    <>
      <section className="page-banner">
        <div className="max-w-7xl mx-auto px-4">
          <div className="banner-content">
            <h1>{title}</h1>
            <div className="breadcrumb">
              <a href="/">{t.common.home}</a>
              <span>/</span>
              <span>{title}</span>
            </div>
          </div>
        </div>
      </section>
      <section style={{ padding: "48px 0 80px", background: "var(--surface-alt)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <p style={{ maxWidth: 820, marginBottom: 28, color: "var(--muted)" }}>{intro}</p>
          <BordroCalculator />
        </div>
      </section>
    </>
  );
}
