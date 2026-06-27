import HeroSlider from "@/components/HeroSlider";
import Announcements from "@/components/Announcements";
import References from "@/components/References";
import ServiceCards from "@/components/ServiceCards";
import StatsSection from "@/components/StatsSection";
import ProcessSection from "@/components/ProcessSection";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Announcements />
      <References />
      <ServiceCards />
      <StatsSection />
      <ProcessSection />
      <Testimonials />
      <ContactForm />
    </>
  );
}
