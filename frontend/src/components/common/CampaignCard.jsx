import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export const CampaignCard = ({ image, title, description, onReadMore }) => {
  return (
    <Card className="border-0 shadow-none bg-transparent overflow-hidden shrink-0 w-full md:w-[500px] animate-fade-scale group">
      <div className="relative h-64 w-full overflow-hidden mb-6">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardContent className="bg-card p-8 space-y-4 transition-all duration-300 group-hover:shadow-lg">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight uppercase tracking-tight transition-colors duration-300 group-hover:text-accent">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
        <Button 
          onClick={onReadMore}
          className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold uppercase tracking-wide px-8 py-6 text-sm transition-all duration-300 hover:scale-105 hover:shadow-md"
        >
          Read More
        </Button>
      </CardContent>
    </Card>
  );
};
