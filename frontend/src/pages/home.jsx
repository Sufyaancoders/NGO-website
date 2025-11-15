import React from "react";
// import Navbar from "../components/navbar.jsx";
import Hero from "../components/hero.jsx";
import CampaignsCarousel from "../components/CampaignsCarousel.jsx";
import AboutSection from "../components/AboutSection.jsx";
import PetitionSection from "../components/PetitionSection.jsx";
import SocialAwarenessSection from "../components/SocialAwarenessSection.jsx";
import DonationSection from "../components/DonationSection.jsx";
import FooterSection from "@/components/footer.jsx";
import FAQsThree from "../components/frq.jsx";
function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className=" min-h-screen">
        {/* <SocialSidebar /> */}
        <Hero />
        <AboutSection />
        <PetitionSection />
        <CampaignsCarousel />
        <SocialAwarenessSection />
        <DonationSection />
        <FAQsThree />
        <FooterSection />

       
      </div>
    </div>
  );
}

export default Home;