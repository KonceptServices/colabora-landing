"use client";

import HeroSection from "@/components/sections/HeroSection";
import PlacesSection from "@/components/sections/PlacesSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TariffsSection from "@/components/sections/TariffsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <TariffsSection />
      <PlacesSection />
      <ContactSection />
    </div>
  );
}
