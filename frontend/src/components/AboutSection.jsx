import { Button } from "../components/ui/button";
import { Play, Pause } from "lucide-react";
import heroPortrait from "../assets/hero-portrait.jpg";
import { useState, useRef } from "react";
import { NationalMovement } from "./NationalMovement";
import { EncryptedText } from "@/components/ui/encrypted-text";

const AboutSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
    <section className="min-h-screen grid grid-cols-1 relative  lg:grid-cols-2">
      {/* Left Side - Video */}
      <div className="relative bg-black flex items-center justify-center overflow-hidden">
        <video 
          ref={videoRef}
          className="w-full h-full object-cover grayscale"
          poster={heroPortrait}
          loop
          playsInline
        >
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <button 
          onClick={toggleVideo}
          className="absolute inset-0 flex items-center justify-center group bg-black/20 hover:bg-black/30 transition-colors"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          <div className="w-20 h-20 border-4 border-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10">
            {isPlaying ? (
              <Pause className="w-10 h-10 text-white fill-white" />
            ) : (
              <Play className="w-10 h-10 text-white fill-white ml-1" />
            )}
          </div>
        </button>
      </div>

      {/* Right Side - Content */}
      <div className="relative z-10 bg-[#1e3a5f] flex items-center justify-center px-8 md:px-16 py-16 lg:py-24">
        <div className="max-w-xl space-y-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-0.5 bg-[#f0b429]"></div>
              <span className="text-[#f0b429] font-bold text-sm tracking-wider uppercase">
                About
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <EncryptedText
                text="ACTIVE & CARING COMMUNITY"
                encryptedClassName="text-gray-400"
                revealedClassName="text-white"
                revealDelayMs={30}
                flipDelayMs={30}
              />
            </h2>

            <p className="text-gray-200 text-lg leading-relaxed">
              We're mobilising thousands of people to build a world where no person will have to sacrifice their family or freedom, safety or dignity, because of who they are or who they love.
            </p>
          </div>

          <Button 
            size="lg"
            className="bg-[#f0b429] hover:bg-[#d9a024] text-black px-12 py-6 text-base font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105"
          >
            Read More
          </Button>
        </div>
      </div>
     
      
    </section>
    <div className="bg-[grey] relative">
        <NationalMovement   />
    </div>
    </div>
  );
};

export default AboutSection;
