import BenefitsSection from "@/components/home/benefitsSection";
import CallToActionSection from "@/components/home/callToActionSection";
import FeaturesSection from "@/components/home/featuresSection";
import Footer from "@/components/home/footer";
import HowWorkSection from "@/components/home/howWorkSection";
import MainSection from "@/components/home/mainSection";
import NavBar from "@/components/navbar/navbar";
import { Divider } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <MainSection />

      <FeaturesSection />

      <BenefitsSection />

      <HowWorkSection />

      <CallToActionSection />

    </main>
  );
}
