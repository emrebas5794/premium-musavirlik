import HeroSlider from "@/components/HeroSlider";
import ServiceCards from "@/components/ServiceCards";
import StatsSection from "@/components/StatsSection";
import ProcessSection from "@/components/ProcessSection";
import Testimonials from "@/components/Testimonials";
import Announcements from "@/components/Announcements";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <ServiceCards />
      <StatsSection />
      <ProcessSection />
      <Testimonials />
      <Announcements />
      <ContactSection />
    </>
  );
}
