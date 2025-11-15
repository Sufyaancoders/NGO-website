import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { CampaignCard } from "../components/common/CampaignCard.jsx";
import campaignJustice from "../assets/slums/boy_slums.jpg";
import campaignInvestigation from "../assets/slums/campaign-investigation.jpg";
import campaignCommunity from "../assets/slums/lifeinsideslums.jpg";
import campaignEducation from "../assets/slums/poor.jpg";
import campaignLegal from "../assets/slums/poor_boy.jpg";

const campaigns = [
  {
    id: 1,
    image: campaignJustice,
    title: "Fight the Government Injustice and Violence",
    description: "We must demand justice from the system. Innocent people keep getting attacked by the officers, thrown in jail and murdered.",
  },
  {
    id: 2,
    image: campaignInvestigation,
    title: "Independent Investigation System",
    description: "In the days of national awareness, we fight for justice. An independent prosecutor for criminal law enforcement is a necessity in 2020.",
  },
  {
    id: 3,
    image: campaignCommunity,
    title: "Community Empowerment Programs",
    description: "Building stronger communities through grassroots initiatives. Together we provide resources, support, and opportunities for those in need.",
  },
  {
    id: 4,
    image: campaignEducation,
    title: "Equal Access to Education",
    description: "Every child deserves quality education. We're fighting to ensure equal educational opportunities regardless of background or economic status.",
  },
  {
    id: 5,
    image: campaignLegal,
    title: "Free Legal Aid Services",
    description: "Access to justice shouldn't be a privilege. Our legal aid program provides free representation to those who cannot afford it.",
  },
];

const CampaignsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: "start",
    containScroll: "trimSnaps",
    loop: true,
  });

  const scrollPrev = () => {
    emblaApi?.scrollPrev();
  };
  
  const scrollNext = () => {
    emblaApi?.scrollNext();
  };

  return (
    <section className="py-20  bg-white relative w-full z-10">
      <div className="container mx-auto px-10 ">
        <div className="flex items-center justify-between mb-14 animate-slide-in">
          <h2 className="text-4xl md:text-5xl font-bold ml-4 underline line-clamp-1 text-black uppercase tracking-tight">
            Current Campaigns
          </h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="border-2 border-black hover:bg-gray-300 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="h-7 w-7" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="border-2 border-black hover:bg-gray-300 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="h-7 w-7" />
            </Button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 px-4 "> 
            {campaigns.map((campaign) => (
              <CampaignCard
                key={campaign.id}
                image={campaign.image}
                title={campaign.title}
                description={campaign.description}
                onReadMore={() => console.log(`Read more about ${campaign.title}`)}
              />
            ))}
          </div>
        </div>
      </div>
   
    </section>
  );
};

export default CampaignsCarousel;
