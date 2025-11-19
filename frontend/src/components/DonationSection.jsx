import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useSelector } from "react-redux";
import TrueFocus from './TrueFocus';
import { useNavigate } from "react-router-dom";
const DonationSection = () => {
  const [selectedAmount, setSelectedAmount] = useState(10);
  const [customAmount, setCustomAmount] = useState("");
  const [isCustom, setIsCustom] = useState(false);
const { token } = useSelector((state) => state.auth);
const navigate = useNavigate();
  const presetAmounts = [10, 20, 50, 100];

  const handlePresetClick = (amount) => {
    setSelectedAmount(amount);
    setIsCustom(false);
    setCustomAmount("");
  };

  const handleCustomClick = () => {
    setIsCustom(true);
    setSelectedAmount(null);
  };

  const handleDonate = () => {
    const amount = isCustom ? parseFloat(customAmount) : selectedAmount;
    if (amount && amount > 0) {
      console.log(`Donating $${amount}`);
      // Here you would integrate with your payment processor
    }
    try{
      token ? navigate('/donations') : navigate('/auth/login');

    }catch(error){
      console.error("Donation failed:", error);
    }
  };

  const displayAmount = isCustom ? customAmount : selectedAmount?.toString() || "";

  return (
    <section className="py-22 lg:pb-32 px-2 bg-gray-50 relative max-w-8xl z-10">
      <div className="max-w-5xl bg-[#e9e7e7] mx-auto text-center py-4">
        {/* Section Label */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 bg-yellow-500 mt-3.5 pt-3 max-pt-6"></div>
          <span className="text-black font-bold text-sm tracking-widest uppercase">
            Donation
          </span>
          <div className="h-px w-12 bg-yellow-500"></div>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          {/* MAKE A DONATION */}
      

<TrueFocus 
sentence="MAKE A DONATION"
manualMode={false}
blurAmount={5}
borderColor="red"
animationDuration={2}
pauseBetweenAnimations={1}
/>
        </h2>

        {/* Subtitle */}
        <p className="text-[#938f8f] text-lg mb-12 max-w-2xl mx-auto">
          Global Network Foundation Announces $2.5 Million Fund to Support Organizing Work
        </p>

        {/* Amount Input */}
        <div className="flex justify-center items-center mb-8">
          <div className="flex items-stretch border border-border rounded-md overflow-hidden shadow-sm max-w-xs w-full">
            <div className="bg-yellow-500 w-12 px-6 flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">₹</span>
            </div>
            <Input
              type="number"
              value={displayAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setIsCustom(true);
                setSelectedAmount(null);
              }}
              placeholder="10"
              className="border-0 bg-amber-50 text-center text-lg font-semibold rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
              min="1"
            />
          </div>
        </div>

        {/* Preset Amount Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {presetAmounts.map((amount) => (
            <Button
              key={amount}
              variant={selectedAmount === amount && !isCustom ? "default" : "outline"}
              onClick={() => handlePresetClick(amount)}
              className="min-w-[100px] bg-blue-800  h-12 text-white font-semibold"
            >
              ₹{amount} 
            </Button>
          ))}
          <Button
            variant={isCustom ? "default" : "outline"}
            onClick={handleCustomClick}
            className="min-w-[200px] h-12  bg-white text-black font-semibold"
          >
            GIVE A CUSTOM AMOUNT
          </Button>
        </div>

        {/* Donate Button */}
        <Button
          onClick={handleDonate}
          size="lg"
          className="px-12 py-6 text-base text-amber-50 bg-blue-800 font-bold tracking-wider"
        >
          DONATE
        </Button>
      </div>
    </section>
  );
};

export default DonationSection;
