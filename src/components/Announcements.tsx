"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Announcements() {
  const { t } = useLanguage();

  return (
    <section className="section">
      <div className="max-w-7xl mx-auto px-4">
        <div className="section-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", textAlign: "left", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div className="section-label">{t.announcements.label}</div>
            <h2 className="section-title" style={{ marginBottom: 0 }}>{t.announcements.title}</h2>
          </div>
          <Link href="/duyurular" className="btn btn-outline">{t.common.viewAll}</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.announcements.items.map((item, i) => (
            <div key={i} className="news-card">
              <div className="news-image">📋</div>
              <div className="news-body">
                <h4><Link href="/duyurular">{item.title}</Link></h4>
                <div className="news-date">📅 {item.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
