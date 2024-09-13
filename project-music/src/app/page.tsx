import HeroSection from "@/components/HeroSection";
import FeaturedSection from './../components/FeaturedSection';
import ScrollReveal from "@/components/ScrollReveal";
import MovingCard from "@/components/MovingCard";
import UpComingWebinar from "@/components/UpComingWebinar";
import Instructor from "@/components/Instructor";

export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
    <HeroSection/>
    <FeaturedSection/>
    <ScrollReveal/>
    <MovingCard/>
    <UpComingWebinar/>
    <Instructor/>
   
   </main>
  );
}
