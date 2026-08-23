"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";
import NewsletterPopup from "@/components/NewsletterPopup";

export default function Duyurular() {
  const { t } = useLanguage();
  const title = t.pages.announcements.title;
  const posts = t.announcements.items;

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
      <section style={{ padding: "80px 0", background: "var(--surface-alt)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p, i) => (
              <div key={i} className="news-card">
                <div className="news-image" style={{ background: "linear-gradient(135deg, #d4efec, #a8d9d4, #7ec9c2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3rem", color: "rgba(26,53,69,0.3)" }}>📋</div>
                <div className="news-body">
                  <h4><Link href="#">{p.title}</Link></h4>
                  <div className="news-date">📅 {p.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <NewsletterPopup />
    </>
  );
}
