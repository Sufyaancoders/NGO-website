import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card";



export const ToolCard = ({ icon, title, description, onAction }) => {
    const Icon = icon ;
  return (
  <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-(--shadow-card-hover) hover:-translate-y-1 border-border bg-card flex flex-col h-full">
      <CardHeader className="space-y-3">
        <div className="w-14 h-14 rounded-xl bg-accent/50 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
          <Icon className="w-7 h-7 text-yellow-500" />
        </div>
        <CardTitle className="text-xl font-semibold text-card-foreground">
          {title}
        </CardTitle>
      </CardHeader>
  <CardContent className="grow">
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button 
          onClick={onAction}
          className="w-full bg-blue-900 hover:bg-blue-800 text-primary-foreground font-medium transition-all duration-300"
        >
          Open Tool
        </Button>
      </CardFooter>
    </Card>
  );
};
