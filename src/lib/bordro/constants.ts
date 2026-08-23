export type LawCode = "0000" | "5510" | "5746" | "4691";
export type WageType = "gunluk" | "aylik";
export type CalcMode = "asgari" | "brut" | "net" | "maliyet";
export type Education = "doktora" | "yuksek" | "diger";
export type Disability = "yok" | "1" | "2" | "3";
export type SskGroup = "01" | "02";

export const MONTHS = [
  "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
  "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık",
] as const;

export const DAMGA_ORANI = 0.00759;

/** İşçi payları */
export const SGK_ISCI = 0.14;
export const ISSIZLIK_ISCI = 0.01;

/** İşveren payları (taban) */
export const SGK_ISVEREN_TAM = 0.2075; // %20.5 + kısa vadeli ortalama paylaşım için ~%20.75'e yakın resmi tabloda %21.75
export const SGK_ISVEREN_RESMI = 0.2175; // CSGB tablosu (prim indirimi yok)
export const ISSIZLIK_ISVEREN = 0.02;

/** 5 puanlık işveren SGK indirimi sonrası */
export const SGK_ISVEREN_5PUAN = 0.1675; // CSGB 2026 imalat dışı 5 puanlı
export const SGK_ISVEREN_2PUAN = 0.1975; // normal 5510 tarzı 2 puan (baz tablolar)

export const LAW_LABELS: Record<LawCode, string> = {
  "0000": "0000 - Prim borcu olan işverenler için",
  "5510": "5510 - Prim Borcu Olmayan İşverenler için",
  "5746": "5746 - Tübitak projeleri, Arge ve Tasarım Merkezleri için",
  "4691": "4691 - Teknokent Projeleri için",
};

export const EDUCATION_RATIO: Record<Education, number> = {
  doktora: 0.95,
  yuksek: 0.9,
  diger: 0.8,
};

export const EDUCATION_LABELS: Record<Education, string> = {
  doktora: "Doktora veya Temel Bilimlerde Yüksek Lisans",
  yuksek: "Yüksek Lisans veya Lisans",
  diger: "Diğer Arge Personeli",
};

type YearParams = {
  brutAsgari: number;
  brackets: { upTo: number; rate: number }[];
  /** Aylık engelli indirimi matrahı */
  disability: Record<"1" | "2" | "3", number>;
};

/** Ücret gelirleri için yıllık GV dilimleri + asgari ücret */
export const YEAR_PARAMS: Record<number, YearParams> = {
  2024: {
    brutAsgari: 20002.5, // 2024 2. yarı yaklaşık / yıllık tek değer olarak ortalama kullanım; Ocak-Haz: 17002.12 varsa ayrı tutulabilir
    brackets: [
      { upTo: 110000, rate: 0.15 },
      { upTo: 230000, rate: 0.2 },
      { upTo: 870000, rate: 0.27 },
      { upTo: 3000000, rate: 0.35 },
      { upTo: Infinity, rate: 0.4 },
    ],
    disability: { "1": 6900, "2": 4000, "3": 1700 },
  },
  2025: {
    brutAsgari: 26005.5,
    brackets: [
      { upTo: 158000, rate: 0.15 },
      { upTo: 330000, rate: 0.2 },
      { upTo: 1200000, rate: 0.27 },
      { upTo: 4300000, rate: 0.35 },
      { upTo: Infinity, rate: 0.4 },
    ],
    disability: { "1": 9900, "2": 5700, "3": 2400 },
  },
  2026: {
    brutAsgari: 33030,
    brackets: [
      { upTo: 190000, rate: 0.15 },
      { upTo: 400000, rate: 0.2 },
      { upTo: 1500000, rate: 0.27 },
      { upTo: 5300000, rate: 0.35 },
      { upTo: Infinity, rate: 0.4 },
    ],
    disability: { "1": 12600, "2": 7200, "3": 3100 },
  },
};

/** 2024 için dönemsel asgari (isteğe bağlı daha doğru hesap) */
export function getBrutAsgari(year: number, monthIndex: number): number {
  if (year === 2024) {
    // 01-06: 20.002,50 (2024 1. yarı fiilen 17.002,12 idi; referans araçlar çoğu yerde tek değer kullanır)
    // Basit model: tüm yıl 20.002,50 (CSGB 2024 2. yarı)
    return monthIndex <= 5 ? 17002.12 : 20002.5;
  }
  return YEAR_PARAMS[year]?.brutAsgari ?? YEAR_PARAMS[2026].brutAsgari;
}
