import { Button } from "../components/ui/button";
import { Facebook, Twitter } from "lucide-react";
import petitionHero from "../assets/petition-hero.jpg";

const PetitionSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-white relative w-full z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-yellow-500 font-bold text-sm tracking-[0.2em] uppercase">
                PETITION
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-petition-heading leading-tight">
              CHARITY FUNDS FOR FAMILIES
            </h1>
            
            <p className="text-[#938f8f] text-lg">
              Free and equal citizens is what we stand for. We demand that the social issues are resolved at the government level.
            </p>
            
            <div className="relative w-full aspect-[3/2] overflow-hidden">
              <img 
                src={petitionHero} 
                alt="Community members standing together for justice" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Social Share Buttons */}
            <div className="flex gap-3">
              <button 
                className="w-12 h-12 flex items-center justify-center border border-border hover:bg-yellow-600 transition-colors"
                aria-label="Share on Twitter"
              >
                <Twitter className="w-5 h-5 text-foreground" />
              </button>
              <button 
                className="w-12 h-12 flex items-center justify-center border border-border hover:bg-yellow-600 transition-colors"
                aria-label="Share on Facebook"
              >
                <Facebook className="w-5 h-5 text-foreground" />
              </button>
              <button 
                className="w-12 h-12 flex items-center justify-center border border-border hover:bg-yellow-600 transition-colors font-serif text-lg"
                aria-label="Share on Tumblr"
              >
                t
              </button>
            </div>
          </div>
          
          {/* Right Column - Sign Up Box */}
          <div className="bg-blue-900 p-6 md:p-22 h-fit">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-6">
              Sign the petition!
            </h2>
            
            <p className="text-[#938f8f] mb-6 leading-relaxed">
              Our history brings so many controversies into todays society, and by forming peaceful petitions and movements, we want to get rid of multiple ancient horrible issues:
            </p>
            
            <ul className="space-y-4 mb-6">
              <li className="flex gap-3">
                <span className="text-primary text-xl font-bold mt-1">•</span>
                <span className="text-white">
                  Ethic discrimination in any type of demonstration.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary text-xl font-bold mt-1">•</span>
                <span className="text-white">
                  Police violence and black citizens' murders.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary text-xl font-bold mt-1">•</span>
                <span className="text-white">
                  Improvement of the criminal justice system & prosecutors.
                </span>
              </li>
            </ul>
            
            <p className="text-white mb-8 leading-relaxed">
              We need to show our support to those whose families have faced with racism, healthcare denial during COVID-19, violence, social, political and economic inequality. We are asking you to participate in our movement for human rights in 2020!
            </p>
            
            <Button 
              className="w-full bg-blue-800 hover:bg-blue-600 border border-2 text-white font-bold text-sm tracking-wider uppercase py-6"
              size="lg"
            >
              SIGN NOW
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetitionSection;
