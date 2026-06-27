import HomeSlider from "@/components/HomeSlider";
import Announcements from "@/components/Announcements";
import ClientCarousel from "@/components/ClientCarousel";
import ServiceFeatureCards from "@/components/ServiceFeatureCards";
import AboutStats from "@/components/AboutStats";
import ProcessServices from "@/components/ProcessServices";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <HomeSlider />
      <Announcements />
      <ClientCarousel />
      <ServiceFeatureCards />
      <AboutStats />
      <ProcessServices />
      <Testimonials />
      <ContactSection />
    </>
  );
}
