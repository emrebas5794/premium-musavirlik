import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBannerProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
}

export default function PageBanner({ title, breadcrumbs }: PageBannerProps) {
  return (
    <section
      className="page-title-section"
      style={{ background: "linear-gradient(135deg, #0e4354, #131c34)" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center relative z-10">
          <h1 className="text-white text-4xl font-extrabold mb-3">{title}</h1>
          <nav>
            <ol className="breadcrumb inline-flex items-center gap-2 text-sm">
              {breadcrumbs.map((crumb, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  {crumb.href ? (
                    <Link href={crumb.href} className="text-[#55bab3] hover:text-white transition">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/70">{crumb.label}</span>
                  )}
                  {idx < breadcrumbs.length - 1 && (
                    <span className="text-white/50 mx-1">/</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}
