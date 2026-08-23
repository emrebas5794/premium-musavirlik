"use client";

import { useMemo, useState } from "react";
import {
  calculatePayroll,
  formatTRY,
  type PayrollInput,
} from "@/lib/bordro/calculate";
import {
  EDUCATION_LABELS,
  LAW_LABELS,
  MONTHS,
  type CalcMode,
  type Disability,
  type Education,
  type LawCode,
  type SskGroup,
  type WageType,
} from "@/lib/bordro/constants";

const initial: PayrollInput = {
  law: "5746",
  wageType: "aylik",
  calcMode: "brut",
  cumulTaxBase: 0,
  cumulMwExemptBase: 0,
  salaryAmount: 50000,
  year: 2026,
  startMonth: 1,
  monthCount: 1,
  days: 30,
  isPartner: false,
  education: "yuksek",
  argeDays: 30,
  manufacturingDiscount: false,
  besEnabled: false,
  besPercent: 3,
  disability: "yok",
  sskGroup: "01",
  sskIncentive: true,
  mwExemption: true,
};

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <span style={{ fontSize: 13, fontWeight: 600, color: "var(--heading)" }}>{label}</span>
      {children}
    </label>
  );
}

export default function BordroCalculator() {
  const [form, setForm] = useState<PayrollInput>(initial);
  const [result, setResult] = useState<ReturnType<typeof calculatePayroll> | null>(null);

  const educationDisabled = form.law !== "5746";

  const set = <K extends keyof PayrollInput>(key: K, value: PayrollInput[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const onCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setResult(calculatePayroll(form));
  };

  const csv = useMemo(() => {
    if (!result) return "";
    const header = [
      "Ay", "Yıl", "Gün", "Arge Gün", "Brüt", "SGK İşçi", "İşsizlik İşçi", "BES",
      "GV Matrah", "GV Hesaplanan", "GV Asg.İst.", "GV Teşvik", "GV Ödenecek",
      "Damga Ödenecek", "Net", "SGK İşveren", "SGK Teşvik", "İşveren Maliyet",
    ].join(";");
    const rows = result.months.map((m) =>
      [
        m.monthLabel, m.year, m.days, m.argeDays, m.brut, m.sgkIsci, m.issizlikIsci, m.bes,
        m.gvMatrah, m.gvHesaplanan, m.gvAsgariIstisna, m.gvTesvik, m.gvOdenecek,
        m.damgaOdenecek, m.net, m.sgkIsveren, m.sgkTesvik, m.isverenMaliyet,
      ].map((v) => (typeof v === "number" ? formatTRY(v).replace(/\./g, "").replace(",", ".") : v)).join(";"),
    );
    return [header, ...rows].join("\n");
  }, [result]);

  const downloadCsv = () => {
    if (!csv) return;
    const blob = new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "tesvikli-bordro.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <form onSubmit={onCalculate}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Genel */}
          <div className="card" style={{ padding: 24 }}>
            <h3 style={{ marginBottom: 16, fontSize: "1.05rem" }}>Genel Parametreler</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <Field label="Kanun Seçimi">
                <select className="form-control" value={form.law} onChange={(e) => set("law", e.target.value as LawCode)}>
                  {(Object.keys(LAW_LABELS) as LawCode[]).map((k) => (
                    <option key={k} value={k}>{LAW_LABELS[k]}</option>
                  ))}
                </select>
              </Field>
              <Field label="Ücret Türü">
                <select className="form-control" value={form.wageType} onChange={(e) => set("wageType", e.target.value as WageType)}>
                  <option value="gunluk">Günlük Ücret</option>
                  <option value="aylik">Aylık Ücret</option>
                </select>
              </Field>
              <Field label="Hesaplama Şekli">
                <select className="form-control" value={form.calcMode} onChange={(e) => set("calcMode", e.target.value as CalcMode)}>
                  <option value="asgari">Asgari Ücret</option>
                  <option value="brut">Brüt Ücret</option>
                  <option value="net">Net Ödenen</option>
                  <option value="maliyet">Toplam Maliyet (Tübitak için)</option>
                </select>
              </Field>
              <Field label="Kümüle Gel. Vergi Matrahı">
                <input className="form-control" type="number" min={0} step="0.01" value={form.cumulTaxBase}
                  onChange={(e) => set("cumulTaxBase", Number(e.target.value) || 0)} />
              </Field>
              <Field label="Asg.Ücr. Kümüle İst.Matr">
                <input className="form-control" type="number" min={0} step="0.01" value={form.cumulMwExemptBase}
                  onChange={(e) => set("cumulMwExemptBase", Number(e.target.value) || 0)} />
              </Field>
              <Field label="Maaş Tutarı">
                <input className="form-control" type="number" min={0} step="0.01" value={form.salaryAmount}
                  onChange={(e) => set("salaryAmount", Number(e.target.value) || 0)}
                  disabled={form.calcMode === "asgari"} />
              </Field>
              <Field label="Yıl">
                <select className="form-control" value={form.year} onChange={(e) => set("year", Number(e.target.value))}>
                  <option value={2024}>2024</option>
                  <option value={2025}>2025</option>
                  <option value={2026}>2026</option>
                </select>
              </Field>
              <Field label="Başlangıç Ayı">
                <select className="form-control" value={form.startMonth} onChange={(e) => set("startMonth", Number(e.target.value))}>
                  {MONTHS.map((m, i) => (
                    <option key={m} value={i + 1}>{m}</option>
                  ))}
                </select>
              </Field>
              <Field label="Kaç Aylık Bordro?">
                <select className="form-control" value={form.monthCount} onChange={(e) => set("monthCount", Number(e.target.value))}>
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </Field>
              <Field label="Bordro Günü Sayısı">
                <input className="form-control" type="number" min={1} max={30} value={form.days}
                  onChange={(e) => set("days", Math.min(30, Math.max(1, Number(e.target.value) || 30)))} />
              </Field>
              <Field label="Şirket Ortağı Mı">
                <select className="form-control" value={form.isPartner ? "evet" : "hayir"}
                  onChange={(e) => set("isPartner", e.target.value === "evet")}>
                  <option value="hayir">Hayır</option>
                  <option value="evet">Evet</option>
                </select>
              </Field>
            </div>
          </div>

          {/* Teşvik */}
          <div className="card" style={{ padding: 24 }}>
            <h3 style={{ marginBottom: 16, fontSize: "1.05rem" }}>Teşvik Parametreleri</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <Field label="Eğitim Durumu">
                <select
                  className="form-control"
                  value={form.education}
                  disabled={educationDisabled}
                  onChange={(e) => set("education", e.target.value as Education)}
                >
                  {(Object.keys(EDUCATION_LABELS) as Education[]).map((k) => (
                    <option key={k} value={k}>{EDUCATION_LABELS[k]}</option>
                  ))}
                </select>
              </Field>
              <p style={{ fontSize: 12, color: "var(--muted)", margin: 0 }}>
                {educationDisabled
                  ? "Eğitim oranı yalnızca 5746 için etkilidir (4691’de %100, diğerlerinde teşvik yok)."
                  : "5746: Doktora %95 · Y.Lisans/Lisans %90 · Diğer %80"}
              </p>
              <Field label="Arge Gün Sayısı">
                <input className="form-control" type="number" min={0} max={30} value={form.argeDays}
                  onChange={(e) => set("argeDays", Math.min(30, Math.max(0, Number(e.target.value) || 0)))} />
              </Field>
            </div>

            <h3 style={{ margin: "28px 0 16px", fontSize: "1.05rem" }}>Diğer Parametreler</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <label style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 14 }}>
                <input type="checkbox" checked={form.manufacturingDiscount}
                  onChange={(e) => set("manufacturingDiscount", e.target.checked)} />
                İmalat Sektörü İndirimi
              </label>
              <label style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 14 }}>
                <input type="checkbox" checked={form.besEnabled}
                  onChange={(e) => set("besEnabled", e.target.checked)} />
                BES Kesintisi Uygula
              </label>
              <Field label="BES Yüzdesi">
                <input className="form-control" type="number" min={0} max={100} step="0.1" value={form.besPercent}
                  disabled={!form.besEnabled}
                  onChange={(e) => set("besPercent", Number(e.target.value) || 0)} />
              </Field>
              <Field label="Engelli İndirimi">
                <select className="form-control" value={form.disability}
                  onChange={(e) => set("disability", e.target.value as Disability)}>
                  <option value="yok">Yok</option>
                  <option value="1">1. Derece Engelli</option>
                  <option value="2">2. Derece Engelli</option>
                  <option value="3">3. Derece Engelli</option>
                </select>
              </Field>
              <Field label="SSK Grup">
                <select className="form-control" value={form.sskGroup}
                  onChange={(e) => set("sskGroup", e.target.value as SskGroup)}>
                  <option value="01">01 Hizmet Akdi İle Tüm Sigorta Kollarına Tabi Çalışanlar</option>
                  <option value="02">02 Sosyal Güvenlik Destek Primine Tabi Çalışanlar</option>
                </select>
              </Field>
              <label style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 14 }}>
                <input type="checkbox" checked={form.sskIncentive}
                  onChange={(e) => set("sskIncentive", e.target.checked)} />
                SSK Teşviki Uygula
              </label>
              <label style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 14 }}>
                <input type="checkbox" checked={form.mwExemption}
                  onChange={(e) => set("mwExemption", e.target.checked)} />
                Asg. Ücr. İst. Uygula
              </label>
            </div>
          </div>

          {/* Aksiyon + özet formül */}
          <div className="card" style={{ padding: 24 }}>
            <h3 style={{ marginBottom: 12, fontSize: "1.05rem" }}>7555 s.k. Md.19 Kapsamı</h3>
            <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.7 }}>
              01.08.2025’ten itibaren 5746 / 4691 gelir vergisi stopaj teşviki ve damga istisnası,
              <strong> brüt asgari ücret × 40</strong> ile sınırlıdır. Teşvik = (GV − asgari ücret GV istisnası)
              üzerinden 4691’de %100, 5746’da eğitim oranına göre %80/%90/%95 uygulanır.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 20 }}>
              <button type="submit" className="btn btn-gradient btn-lg" style={{ width: "100%" }}>
                Bordro Hesapla
              </button>
              <button type="button" className="btn btn-outline" style={{ width: "100%" }}
                disabled={!result} onClick={downloadCsv}>
                Excel (CSV) İndir
              </button>
            </div>

            {result && (
              <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[
                  ["Toplam Brüt", result.totals.brut],
                  ["Toplam Net", result.totals.net],
                  ["GV Teşvik", result.totals.gvTesvik],
                  ["GV Ödenecek", result.totals.gvOdenecek],
                  ["SGK Teşvik", result.totals.sgkTesvik],
                  ["İşveren Maliyet", result.totals.isverenMaliyet],
                ].map(([label, val]) => (
                  <div key={label as string} style={{ background: "var(--surface-alt)", borderRadius: 10, padding: 12 }}>
                    <div style={{ fontSize: 11, color: "var(--muted)", marginBottom: 4 }}>{label}</div>
                    <div style={{ fontWeight: 700, color: "var(--heading)" }}>{formatTRY(val as number)} ₺</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </form>

      {result && (
        <div style={{ marginTop: 32, overflowX: "auto" }}>
          <h3 style={{ marginBottom: 16 }}>Hesaplama Sonuçları</h3>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, minWidth: 1100 }}>
            <thead>
              <tr style={{ background: "var(--primary)", color: "#fff" }}>
                {[
                  "Ay", "Brüt", "SGK İşçi", "İşs. İşçi", "GV Matrah", "GV", "GV İstisna",
                  "GV Teşvik", "GV Ödenecek", "Damga", "Net", "SGK İşv.", "SGK Teşvik", "Maliyet",
                ].map((h) => (
                  <th key={h} style={{ padding: "10px 8px", textAlign: "right", whiteSpace: "nowrap" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {result.months.map((m) => (
                <tr key={`${m.year}-${m.month}`} style={{ borderBottom: "1px solid var(--border-light)" }}>
                  <td style={{ padding: "10px 8px", textAlign: "left", fontWeight: 600 }}>{m.monthLabel} {m.year}</td>
                  <td style={{ padding: "10px 8px", textAlign: "right" }}>{formatTRY(m.brut)}</td>
                  <td style={{ padding: "10px 8px", textAlign: "right" }}>{formatTRY(m.sgkIsci)}</td>
                  <td style={{ padding: "10px 8px", textAlign: "right" }}>{formatTRY(m.issizlikIsci)}</td>
                  <td style={{ padding: "10px 8px", textAlign: "right" }}>{formatTRY(m.gvMatrah)}</td>
                  <td style={{ padding: "10px 8px", textAlign: "right" }}>{formatTRY(m.gvHesaplanan)}</td>
                  <td style={{ padding: "10px 8px", textAlign: "right" }}>{formatTRY(m.gvAsgariIstisna)}</td>
                  <td style={{ padding: "10px 8px", textAlign: "right", color: "var(--success)", fontWeight: 600 }}>{formatTRY(m.gvTesvik)}</td>
                  <td style={{ padding: "10px 8px", textAlign: "right" }}>{formatTRY(m.gvOdenecek)}</td>
                  <td style={{ padding: "10px 8px", textAlign: "right" }}>{formatTRY(m.damgaOdenecek)}</td>
                  <td style={{ padding: "10px 8px", textAlign: "right", fontWeight: 700 }}>{formatTRY(m.net)}</td>
                  <td style={{ padding: "10px 8px", textAlign: "right" }}>{formatTRY(m.sgkIsveren)}</td>
                  <td style={{ padding: "10px 8px", textAlign: "right", color: "var(--success)" }}>{formatTRY(m.sgkTesvik)}</td>
                  <td style={{ padding: "10px 8px", textAlign: "right" }}>{formatTRY(m.isverenMaliyet)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ fontSize: 12, color: "var(--muted)", marginTop: 12 }}>
            Bu araç bilgilendirme amaçlıdır; resmi beyanname için YMM / mali müşavir kontrolü önerilir.
          </p>
        </div>
      )}
    </div>
  );
}
