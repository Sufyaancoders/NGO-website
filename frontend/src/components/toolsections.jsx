import { ClipboardList, DollarSign, Calendar, MessageSquare } from "lucide-react";
import { ToolCard } from "../components/ui/toolsection/toolcard.jsx";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  const tools = [
    {
      icon: ClipboardList,
      title: "Volunteer Registration Form",
      description: "Join our team of volunteers and make a difference in your community. Sign up to participate in our ongoing initiatives.",
    },
    {
      icon: DollarSign,
      title: "Donation Tracker",
      description: "Check how donations are utilized with full transparency. See real-time updates on fund allocation and project impact.",
    },
    {
      icon: Calendar,
      title: "Event Calendar",
      description: "Stay updated with upcoming activities, workshops, and community events. Never miss an opportunity to get involved.",
    },
    {
      icon: MessageSquare,
      title: "Feedback Form",
      description: "Share suggestions or ideas to help us improve our services. Your feedback shapes our future initiatives.",
    },
  ];

  const handleToolClick = (toolName) => {
    toast({
      title: "Opening Tool",
      description: `${toolName} will be available soon!`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
            Internal NGO Tools
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Access essential tools to manage volunteers, track donations, stay updated on events, and share your valuable feedback.
          </p>
        </div>
      </header>

      {/* Tools Grid Section */}
      <main className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {tools.map((tool, index) => (
            <ToolCard
              key={index}
              icon={tool.icon}
              title={tool.title}
              description={tool.description}
              onAction={() => handleToolClick(tool.title)}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Our NGO. Making a difference together.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
