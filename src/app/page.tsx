import ChatNow from "@/components/Home/ChatNow";
import FAQS from "@/components/Home/FAQS";
import Global from "@/components/Home/Global";
import HeroSection from "@/components/Home/HeroSection";
import PayTrack from "@/components/Home/PayTrack";
import ShopOrSend from "@/components/Home/ShopOrSend";
import TrustedBrands from "@/components/Home/TrustedBrands";
import WhyTumeni from "@/components/Home/WhyTumeni";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <div >
     <HeroSection/>
     <ShopOrSend/>
     <PayTrack/>
     <ChatNow/>
     <WhyTumeni/>
     <HowItWorks/>
     <TrustedBrands/>
     <FAQS/>
     <Global/>
    </div>
  );
}
