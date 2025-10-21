import DefaultLayout from "@/layouts/default";
import ProcessSection from "@/components/sections/processSection";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import PlacesSection from "@/components/sections/placesSection";
import ContactSection from "@/components/sections/ContactSection";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <HeroSection />
      <ProcessSection />
      <FeaturesSection />
      <PlacesSection />
      <ContactSection />
    </DefaultLayout>
  );
}
