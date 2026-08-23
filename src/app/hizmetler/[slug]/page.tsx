import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/data/services";
import ServiceDetailClient from "@/components/ServiceDetailClient";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Hizmet - PMDTR" };
  return {
    title: `${service.title} - PMDTR`,
    description: service.summary,
  };
}

export default async function HizmetDetayPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return <ServiceDetailClient service={service} />;
}
