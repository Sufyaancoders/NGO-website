import React from "react";
import Navbar from "../components/navbar.jsx";
import Hero from "../components/hero.jsx";
import SocialSidebar from "../components/SocialSidebar.jsx";
import AboutSection from "../components/AboutSection.jsx";
function Home() {
  return (
    <div>
      <Navbar />
      <div className=" min-h-screen">
        {/* <SocialSidebar /> */}
        <Hero />
        <AboutSection />
      </div>
    </div>
  );
}

export default Home;