import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Checkbox } from "../components/ui/checkbox";
import { useState } from "react";
import { toast } from "sonner";
import unityHandsImage from "../assets/handshake.jpg";
import { EncryptedText } from "@/components/ui/encrypted-text";

const SocialAwarenessSection = () => {
  const [email, setEmail] = useState("");
  const [acceptedPolicy, setAcceptedPolicy] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    
    if (!acceptedPolicy) {
      toast.error("Please accept the privacy policy");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    toast.success("Thank you for joining our community!");
    setEmail("");
    setAcceptedPolicy(false);
  };

  return (
    <div className="w-full  relative z-10">
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Statistics Section */}
        <div className="bg-[#0d3055] text-black p-6 md:p-6 lg:p-12 flex flex-col justify-center">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-0.5 w-12 bg-yellow-500"></div>
              <span className="text-white text-sm font-bold tracking-widest uppercase">
                Statistics
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-tight mb-6">
              <EncryptedText
                text="Social Awareness In The USA"
                encryptedClassName="text-gray-400"
                revealedClassName="text-white"
                revealDelayMs={30}
                flipDelayMs={30}
              />
            </h2>

            <div className="mb-8">
              <div className="text-yellow-500 text-5xl md:text-6xl font-black mb-3">
                4.5%
              </div>
              <p className="text-[gray] text-base md:text-lg leading-relaxed">
                The percentage of African American adults who have NEVER
                experienced sharp social discrimination has fallen to 4.5%
              </p>
            </div>

            <p className="text-white text-base md:text-lg leading-relaxed mb-8">
              The number of black citizens who stay out of protests is
              extremely low. It proves that the issues with ethnicity have never
              been under control. Make your choice and vote!
            </p>

            <Button 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold uppercase tracking-wider px-8 py-6 text-sm"
            >
              Read More
            </Button>
          </div>
        </div>

        {/* Community Section */}
        <div className="grid grid-rows-[auto_1fr]">
          {/* Image */}
          <div className="relative h-54 md:h-80 overflow-hidden">
            <img
              src={unityHandsImage}
              alt="Hands holding together in unity and support"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Subscribe Form */}
          <div className="bg-blue-700 text-black p-4 md:p-8 lg:p-10 flex flex-col justify-center">
            <div className="max-w-xl mx-auto w-full">
              <h2 className="text-2xl text-cyan-50 md:text-3xl lg:text-4xl font-black uppercase leading-tight mb-4">
                Join The Community Of
                <br />
                Over A Million People
              </h2>

              <div className="h-1 w-16 bg-blue-700 mb-8"></div>

              <form onSubmit={handleSubscribe} className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="YOUR EMAIL"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-white text-foreground placeholder:text-muted-foreground border-0 h-14 px-6 text-sm uppercase tracking-wide"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-[#756f6f] hover:bg-[#4d4a4a] text-white font-bold uppercase tracking-wider px-8 h-14 text-sm"
                  >
                    Subscribe
                  </Button>
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="privacy"
                    checked={acceptedPolicy}
                    onCheckedChange={(checked) => setAcceptedPolicy(checked)}
                    className="mt-1 border-white data-[state=checked]:bg-white data-[state=checked]:text-secondary"
                  />
                  <label
                    htmlFor="privacy"
                    className="text-sm text-secondary-foreground cursor-pointer leading-relaxed"
                  >
                    I've read and accept the{" "}
                    <a href="#" className="underline hover:no-underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialAwarenessSection;
