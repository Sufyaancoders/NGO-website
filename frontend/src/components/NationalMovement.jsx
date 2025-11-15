import { Handshake, Network, Bug, Target } from "lucide-react";
import { MovementCard } from "./common/MovementCard";
import { Button } from "../components/ui/button";
import heroImage from "../assets/hero-heart.jpg";

export const NationalMovement = () => {
  const movements = [
    {
      icon: Handshake,
      title: "Peaceful",
      subtitle: "Parades",
    },
    {
      icon: Network,
      title: "Global",
      subtitle: "Network",
    },
    {
      icon: Bug,
      title: "Victims",
      subtitle: "Support",
    },
    {
      icon: Target,
      title: "Charity",
      subtitle: "Campaigns",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 md:py-24">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="mb-3 text-sm text-[#f0b429] font-bold uppercase tracking-wider text-section-label">
            — The Victims of Racism
          </p>
          <h2 className="text-3xl font-bold uppercase tracking-tight text-heading md:text-4xl lg:text-5xl">
            The National Movement
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4 md:mb-16">
          {movements.map((movement, index) => (
            <MovementCard
              key={index}
              icon={movement.icon}
              title={movement.title}
              subtitle={movement.subtitle}
            />
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="grid gap-0 overflow-hidden rounded-lg shadow-xl md:grid-cols-2">
          {/* Left - CTA */}
          <div className="flex flex-col justify-center bg-primary p-12 text-primary-foreground md:p-16">
            <h3 className="mb-8 text-3xl font-bold uppercase leading-tight md:text-4xl lg:text-5xl">
              One Thing You Can Do Right Now
            </h3>
            <div className="inline-block">
              <Button
                size="lg"
                className="bg-blue-800 text-white font-bold uppercase tracking-wider hover:bg-blue-700 px-8 py-6 text-base"
              >
                Demand Equality
              </Button>
            </div>
          </div>

          {/* Right - Hero Image */}
          <div className="relative h-64 md:h-auto">
            <img
              src={heroImage}
              alt="Person making heart shape with hands showing unity and compassion"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
