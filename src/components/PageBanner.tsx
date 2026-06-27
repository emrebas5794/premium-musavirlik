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
      style={{ backgroundImage: "linear-gradient(135deg, #0e4354, #134354)" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="page-title-content">
          <h1 className="title text-white">{title}</h1>
          <nav>
            <ol className="breadcrumb inline-flex items-center gap-2">
              {breadcrumbs.map((crumb, idx) => (
                <li key={idx} className="breadcrumb-item flex items-center gap-2">
                  {crumb.href ? (
                    <Link href={crumb.href}>{crumb.label}</Link>
                  ) : (
                    <span className={idx === breadcrumbs.length - 1 ? "active" : ""}>{crumb.label}</span>
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
