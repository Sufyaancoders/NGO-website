import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const DonationForm = () => {
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Thank you for your donation!",
      description: "We'll process your contribution shortly.",
    });
  };

  return (
    <section className="bg-donate-bg py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-primary-foreground mb-8 text-center">
          We Need Your Help
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-1">
            <Select value={amount} onValueChange={setAmount}>
              <SelectTrigger className="bg-background text-foreground h-12">
                <SelectValue placeholder="Amount" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">$10</SelectItem>
                <SelectItem value="25">$25</SelectItem>
                <SelectItem value="50">$50</SelectItem>
                <SelectItem value="100">$100</SelectItem>
                <SelectItem value="250">$250</SelectItem>
                <SelectItem value="custom">Custom Amount</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-background text-foreground h-12"
              required
            />
          </div>
          <div className="flex-1">
            <Input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-background text-foreground h-12"
              required
            />
          </div>
          <Button type="submit" variant="donate" size="lg" className="h-12 px-12">
            Donate
          </Button>
        </form>
      </div>
    </section>
  );
};

export default DonationForm;
