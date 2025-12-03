import ContactUsSection from "@/components/home/Contactus";
import FeaturesSection from "@/components/home/Features";
import HeroSection from "@/components/home/HeroSection";
import HowItWorksSection from "@/components/home/HowitworksSection";
import JoinCommunitySection from "@/components/home/JoinCommunitySection";
import PricingSection from "@/components/home/PriceSection";
import UsefulSection from "@/components/home/UsefulSection";


export default function Home() {
  return (
   <>
     <div className="bg-[#f5f7fb]">
      <HeroSection />
      <FeaturesSection/>
      <ContactUsSection/>
      <HowItWorksSection/>
      <JoinCommunitySection/>
 <UsefulSection/>
 <PricingSection/>
    </div>
   </>
  );
}
