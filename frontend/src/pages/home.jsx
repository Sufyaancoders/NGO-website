import React from "react";
// import Navbar from "../components/navbar.jsx";
import Hero from "../components/hero.jsx";

import AboutSection from "../components/AboutSection.jsx";
import PetitionSection from "../components/PetitionSection.jsx";
function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className=" min-h-screen">
        {/* <SocialSidebar /> */}
        <Hero />
        <AboutSection />
        <PetitionSection />
      </div>
    </div>
  );
}

export default Home;