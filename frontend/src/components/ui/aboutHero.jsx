import { Button } from "../../components/ui/button";
import heroImage from "../../assets/about-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[60vh] md:h-[70vh] lg:mt-18 mt-2  lg:h-[60vh] lg:mt-7 flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Children in community"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-hero-overlay/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-12 lg:px-8 text-center">
        <p className="text-black font-bold text-sm sm:text-base md:text-lg pt-4 sm:pt-10 mb-3 md:mb-4 italic">
          Need your help......
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 md:mb-8 leading-tight px-4">
          Change <span className="text-yellow-500">World</span> With Your
          <br className="hidden sm:block" />
          Small <span className="text-yellow-500">Contribution</span>
        </h1>
        <div className="flex flex-col sm:flex-row sm:px-16 px-12 lg:px-4
         gap-3 md:gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="bg-[#0404a9] hover:bg-[#0606be] text-white w-full sm:w-auto">
            Donate Now
          </Button>
          <Button variant="hero-outline" size="lg" className="bg-[#0404a9] hover:bg-[#0606be] text-white w-full sm:w-auto">
            Discover
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
