import {
  DAMGA_ORANI,
  EDUCATION_RATIO,
  getBrutAsgari,
  ISSIZLIK_ISCI,
  ISSIZLIK_ISVEREN,
  SGK_ISCI,
  SGK_ISVEREN_2PUAN,
  SGK_ISVEREN_5PUAN,
  SGK_ISVEREN_RESMI,
  YEAR_PARAMS,
  type CalcMode,
  type Disability,
  type Education,
  type LawCode,
  type SskGroup,
  type WageType,
} from "./constants";

export type PayrollInput = {
  law: LawCode;
  wageType: WageType;
  calcMode: CalcMode;
  cumulTaxBase: number;
  cumulMwExemptBase: number;
  salaryAmount: number;
  year: number;
  startMonth: number; // 1-12
  monthCount: number;
  days: number;
  isPartner: boolean;
  education: Education;
  argeDays: number;
  manufacturingDiscount: boolean;
  besEnabled: boolean;
  besPercent: number;
  disability: Disability;
  sskGroup: SskGroup;
  sskIncentive: boolean;
  mwExemption: boolean;
};

export type MonthResult = {
  month: number;
  monthLabel: string;
  year: number;
  days: number;
  argeDays: number;
  brut: number;
  sgkIsci: number;
  issizlikIsci: number;
  bes: number;
  disabilityDeduction: number;
  gvMatrah: number;
  gvHesaplanan: number;
  gvAsgariIstisna: number;
  gvOdenecek: number;
  gvTesvik: number;
  damgaHesaplanan: number;
  damgaIstisna: number;
  damgaOdenecek: number;
  net: number;
  sgkIsveren: number;
  issizlikIsveren: number;
  sgkTesvik: number;
  isverenMaliyet: number;
  cumulTaxBaseAfter: number;
  cumulMwExemptBaseAfter: number;
};

export type PayrollSummary = {
  months: MonthResult[];
  totals: {
    brut: number;
    net: number;
    gvOdenecek: number;
    gvTesvik: number;
    damgaOdenecek: number;
    sgkTesvik: number;
    isverenMaliyet: number;
  };
};

function round2(n: number) {
  return Math.round((n + Number.EPSILON) * 100) / 100;
}

function taxOnCumulative(amount: number, year: number): number {
  const brackets = YEAR_PARAMS[year]?.brackets ?? YEAR_PARAMS[2026].brackets;
  let remaining = Math.max(0, amount);
  let prev = 0;
  let tax = 0;
  for (const b of brackets) {
    const span = Math.min(remaining, b.upTo - prev);
    if (span <= 0) break;
    tax += span * b.rate;
    remaining -= span;
    prev = b.upTo;
    if (remaining <= 0) break;
  }
  return tax;
}

/** Kümülatif matrah artışı üzerinden aylık GV hesabı */
export function monthlyIncomeTax(prevCumul: number, monthBase: number, year: number): number {
  const after = taxOnCumulative(prevCumul + monthBase, year);
  const before = taxOnCumulative(prevCumul, year);
  return round2(Math.max(0, after - before));
}

function disabilityAmount(year: number, disability: Disability): number {
  if (disability === "yok") return 0;
  return YEAR_PARAMS[year]?.disability[disability] ?? 0;
}

function employerSgkRate(input: PayrollInput): number {
  if (input.law === "0000") return SGK_ISVEREN_RESMI; // indirim yok
  if (input.manufacturingDiscount) return SGK_ISVEREN_5PUAN;
  if (input.law === "5510" || input.sskIncentive) return SGK_ISVEREN_5PUAN;
  // 5746 / 4691: önce 5 puan, kalanın yarısı Ar-Ge teşviki ile düşülür (ayrı kalemde)
  return SGK_ISVEREN_5PUAN;
}

function incentiveRate(law: LawCode, education: Education): number {
  if (law === "4691") return 1;
  if (law === "5746") return EDUCATION_RATIO[education];
  return 0;
}

function apply40xCap(year: number, month: number, brutAsgari: number, value: number, baseCapOnBrut: number): number {
  // 7555 Md.19 / Gt.2: 01.08.2025'ten itibaren 40 kat sınırı
  const enforce = year > 2025 || (year === 2025 && month >= 8);
  if (!enforce) return value;
  const cap = brutAsgari * 40;
  const ratio = baseCapOnBrut <= 0 ? 0 : Math.min(1, cap / baseCapOnBrut);
  return value * ratio;
}

type CoreResult = {
  brut: number;
  sgkIsci: number;
  issizlikIsci: number;
  bes: number;
  disabilityDeduction: number;
  gvMatrah: number;
  gvHesaplanan: number;
  gvAsgariIstisna: number;
  gvOdenecek: number;
  gvTesvik: number;
  damgaHesaplanan: number;
  damgaIstisna: number;
  damgaOdenecek: number;
  net: number;
  sgkIsveren: number;
  issizlikIsveren: number;
  sgkTesvik: number;
  isverenMaliyet: number;
  nextCumul: number;
  nextMwCumul: number;
};

function computeFromGross(
  brut: number,
  input: PayrollInput,
  month: number,
  cumul: number,
  mwCumul: number,
): CoreResult {
  const year = input.year;
  const brutAsgari = getBrutAsgari(year, month - 1);
  const dayRatio = Math.min(30, Math.max(0, input.days)) / 30;
  const argeRatio =
    input.days > 0 ? Math.min(1, Math.max(0, input.argeDays) / input.days) : 0;

  // Ortaklık / SGK grubu: 02 => SGDP benzeri, basit modelde işçi %7.5 civarı yerine klasik kesinti bırakıp teşvik kapatıyoruz
  const isSgdp = input.sskGroup === "02" || input.isPartner;
  const employeeSgkRate = isSgdp ? 0.075 : SGK_ISCI;
  const employeeUnempRate = isSgdp ? 0 : ISSIZLIK_ISCI;

  const sgkBase = brut; // tavan kontrolü çizgisel yaklaşım
  const sgkIsci = round2(sgkBase * employeeSgkRate);
  const issizlikIsci = round2(sgkBase * employeeUnempRate);
  const bes = input.besEnabled ? round2(brut * (input.besPercent / 100)) : 0;
  const disabilityDeduction = round2(disabilityAmount(year, input.disability) * dayRatio);

  const gvMatrah = round2(Math.max(0, brut - sgkIsci - issizlikIsci - disabilityDeduction));
  const gvHesaplanan = monthlyIncomeTax(cumul, gvMatrah, year);

  // Asgari ücret istisnası: asgari brüt üzerinden hesaplanan GV (kümülatif istisna matrahı ile)
  const mwMatrahFull = round2(brutAsgari * (1 - SGK_ISCI - ISSIZLIK_ISCI));
  const mwMatrah = round2(mwMatrahFull * dayRatio);
  const gvAsgariFull = monthlyIncomeTax(mwCumul, mwMatrah, year);
  const gvAsgariIstisna = input.mwExemption ? Math.min(gvHesaplanan, gvAsgariFull) : 0;
  let gvOdenecekOncesiTesvik = round2(Math.max(0, gvHesaplanan - gvAsgariIstisna));

  // Teşvik (5746 / 4691): asgari istisna düşülmüş GV üzerinden, Ar-Ge gün oranı + eğitim oranı + 40 kat
  let gvTesvik = 0;
  if (input.law === "5746" || input.law === "4691") {
    const rate = incentiveRate(input.law, input.education);
    let incentiveBase = gvOdenecekOncesiTesvik * argeRatio * rate;
    incentiveBase = apply40xCap(year, month, brutAsgari, incentiveBase, brut);
    // 40 kat sınırını GV açısından daha doğru: brüt asgari*40 matrahı üzerinden hesaplanan net teşvik tavanı
    if (year > 2025 || (year === 2025 && month >= 8)) {
      const capBrut = brutAsgari * 40;
      const cappedBrut = Math.min(brut, capBrut);
      const cappedSgk = round2(cappedBrut * employeeSgkRate);
      const cappedUnemp = round2(cappedBrut * employeeUnempRate);
      const cappedMatrah = round2(Math.max(0, cappedBrut - cappedSgk - cappedUnemp - disabilityDeduction));
      const cappedGv = monthlyIncomeTax(cumul, cappedMatrah, year);
      const cappedAfterMw = round2(Math.max(0, cappedGv - gvAsgariIstisna));
      const cappedIncentive = cappedAfterMw * argeRatio * rate;
      incentiveBase = Math.min(incentiveBase, cappedIncentive);
    }
    gvTesvik = round2(Math.min(gvOdenecekOncesiTesvik, incentiveBase));
  }

  const gvOdenecek = round2(Math.max(0, gvOdenecekOncesiTesvik - gvTesvik));

  // Damga
  const damgaHesaplanan = round2(brut * DAMGA_ORANI);
  let damgaIstisna = 0;
  if (input.mwExemption) {
    damgaIstisna = round2(brutAsgari * dayRatio * DAMGA_ORANI);
  }
  if (input.law === "5746" || input.law === "4691") {
    // Teşvik damga istisnası: Ar-Ge kısmı (40 kat sınırlı)
    let incentivizedBrut = brut * argeRatio;
    if (year > 2025 || (year === 2025 && month >= 8)) {
      incentivizedBrut = Math.min(incentivizedBrut, brutAsgari * 40);
    }
    damgaIstisna = round2(Math.max(damgaIstisna, incentivizedBrut * DAMGA_ORANI));
  }
  damgaIstisna = Math.min(damgaHesaplanan, damgaIstisna);
  const damgaOdenecek = round2(Math.max(0, damgaHesaplanan - damgaIstisna));

  const net = round2(brut - sgkIsci - issizlikIsci - bes - gvOdenecek - damgaOdenecek);

  // İşveren maliyetleri
  const employerRate = employerSgkRate(input);
  let sgkIsveren = round2(sgkBase * employerRate);
  const issizlikIsveren = isSgdp ? 0 : round2(sgkBase * ISSIZLIK_ISVEREN);

  // 5746/4691: 5 puan sonrası kalan işveren priminin %50'si Hazine (Ar-Ge günleri)
  let sgkTesvik = 0;
  if ((input.law === "5746" || input.law === "4691") && input.sskIncentive) {
    const after5 = SGK_ISVEREN_5PUAN;
    const remaining = Math.max(0, SGK_ISVEREN_RESMI - after5);
    sgkTesvik = round2(sgkBase * remaining * 0.5 * argeRatio);
    sgkIsveren = round2(sgkBase * after5 - sgkTesvik);
  } else if (input.law === "0000") {
    sgkIsveren = round2(sgkBase * SGK_ISVEREN_RESMI);
  } else if (input.manufacturingDiscount) {
    sgkIsveren = round2(sgkBase * SGK_ISVEREN_5PUAN);
  } else if (input.law === "5510" && input.sskIncentive) {
    sgkIsveren = round2(sgkBase * SGK_ISVEREN_5PUAN);
  } else if (!input.sskIncentive && input.law === "5510") {
    sgkIsveren = round2(sgkBase * SGK_ISVEREN_2PUAN);
  }

  const isverenMaliyet = round2(brut + sgkIsveren + issizlikIsveren);

  return {
    brut: round2(brut),
    sgkIsci,
    issizlikIsci,
    bes,
    disabilityDeduction,
    gvMatrah,
    gvHesaplanan,
    gvAsgariIstisna,
    gvOdenecek,
    gvTesvik,
    damgaHesaplanan,
    damgaIstisna,
    damgaOdenecek,
    net,
    sgkIsveren,
    issizlikIsveren,
    sgkTesvik,
    isverenMaliyet,
    nextCumul: round2(cumul + gvMatrah),
    nextMwCumul: round2(mwCumul + (input.mwExemption ? mwMatrah : 0)),
  };
}

function resolveMonthlyGross(input: PayrollInput, month: number, cumul: number, mwCumul: number): number {
  const brutAsgari = getBrutAsgari(input.year, month - 1);
  const dayFactor = input.days / 30;

  let amount = input.salaryAmount;
  if (input.wageType === "gunluk") {
    amount = input.salaryAmount * input.days;
  }

  if (input.calcMode === "asgari") {
    return round2(brutAsgari * dayFactor);
  }

  if (input.calcMode === "brut") {
    return round2(amount);
  }

  // net veya maliyet -> brüte sakıncı yaklaşım / ikili arama
  const target = amount;
  let low = target;
  let high = target * 2.2 + brutAsgari;
  for (let i = 0; i < 40; i++) {
    const mid = (low + high) / 2;
    const r = computeFromGross(mid, input, month, cumul, mwCumul);
    const value = input.calcMode === "net" ? r.net : r.isverenMaliyet;
    if (value < target) low = mid;
    else high = mid;
  }
  return round2((low + high) / 2);
}

const MONTH_LABELS = [
  "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
  "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık",
];

export function calculatePayroll(input: PayrollInput): PayrollSummary {
  const months: MonthResult[] = [];
  let cumul = input.cumulTaxBase;
  let mwCumul = input.cumulMwExemptBase;

  for (let i = 0; i < input.monthCount; i++) {
    const absolute = input.startMonth - 1 + i;
    const year = input.year + Math.floor(absolute / 12);
    const month = (absolute % 12) + 1;
    // Yıl değişiminde parametre: input.year sabit calibrasyon; pratikte aynı yıl parametresi kullanılır
    const monthInput = { ...input, year: input.year };
    const brut = resolveMonthlyGross(monthInput, month, cumul, mwCumul);
    const core = computeFromGross(brut, monthInput, month, cumul, mwCumul);
    cumul = core.nextCumul;
    mwCumul = core.nextMwCumul;

    months.push({
      month,
      monthLabel: MONTH_LABELS[month - 1],
      year,
      days: input.days,
      argeDays: input.argeDays,
      brut: core.brut,
      sgkIsci: core.sgkIsci,
      issizlikIsci: core.issizlikIsci,
      bes: core.bes,
      disabilityDeduction: core.disabilityDeduction,
      gvMatrah: core.gvMatrah,
      gvHesaplanan: core.gvHesaplanan,
      gvAsgariIstisna: core.gvAsgariIstisna,
      gvOdenecek: core.gvOdenecek,
      gvTesvik: core.gvTesvik,
      damgaHesaplanan: core.damgaHesaplanan,
      damgaIstisna: core.damgaIstisna,
      damgaOdenecek: core.damgaOdenecek,
      net: core.net,
      sgkIsveren: core.sgkIsveren,
      issizlikIsveren: core.issizlikIsveren,
      sgkTesvik: core.sgkTesvik,
      isverenMaliyet: core.isverenMaliyet,
      cumulTaxBaseAfter: cumul,
      cumulMwExemptBaseAfter: mwCumul,
    });
  }

  const totals = months.reduce(
    (acc, m) => {
      acc.brut += m.brut;
      acc.net += m.net;
      acc.gvOdenecek += m.gvOdenecek;
      acc.gvTesvik += m.gvTesvik;
      acc.damgaOdenecek += m.damgaOdenecek;
      acc.sgkTesvik += m.sgkTesvik;
      acc.isverenMaliyet += m.isverenMaliyet;
      return acc;
    },
    { brut: 0, net: 0, gvOdenecek: 0, gvTesvik: 0, damgaOdenecek: 0, sgkTesvik: 0, isverenMaliyet: 0 },
  );

  Object.keys(totals).forEach((k) => {
    const key = k as keyof typeof totals;
    totals[key] = round2(totals[key]);
  });

  return { months, totals };
}

export function formatTRY(n: number) {
  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(n);
}
