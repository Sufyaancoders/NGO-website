import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const DonationForm = () => {
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { toast } = useToast();
const { token } = useSelector((state) => state.auth);
const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Token value:", token); // Debugging token value
    if (!token) {
      console.log("Token is null or undefined. Navigating to /auth/login");
      try {
        navigate('/auth/login');
      } catch (error) {
        console.error("Navigation to /auth/login failed:", error);
      }
    } else {
      console.log("Token exists. Navigating to /donations");
      try {
        navigate('/donations');
      } catch (error) {
        console.error("Navigation to /donations failed:", error);
      }
    }
    toast({
      title: "Thank you for your donation!",
      description: "We'll process your contribution shortly.",
    });
  };

  return (
    <section className="bg-[#dedede] lg:py-16 py-4 sm:py-8 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-black mb-8 text-center">
          We Need Your Help
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-4 items-end"
        >
          <div className="flex-1 w-full md:w-auto">
            <Select value={amount} onValueChange={setAmount}>
              <SelectTrigger className="bg-background text-foreground h-12 w-full">
                <SelectValue placeholder="Amount" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">rs10</SelectItem>
                <SelectItem value="25">rs25</SelectItem>
                <SelectItem value="50">rs50</SelectItem>
                <SelectItem value="100">rs100</SelectItem>
                <SelectItem value="250">rs250</SelectItem>
                <SelectItem value="custom">Custom Amount</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1 w-full md:w-auto">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-background text-foreground h-12 w-full"
              required
            />
          </div>
          <div className="flex-1 w-full md:w-auto">
            <Input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-background text-foreground h-12 w-full"
              required
            />
          </div>
          <Button
            type="submit"
            variant="donate"
            size="lg"
            className="h-12 px-12 bg-[#060fc4] text-white hover:bg-[#0606be] w-full md:w-auto"
          >
            Donate
          </Button>
        </form>
      </div>
    </section>
  );
};

export default DonationForm;
