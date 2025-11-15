import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import placeholderLogo from "../assets/logo/logo_page-0001.jpg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
   const navigate = useNavigate();
  const navItems = [
    { label: "HOME", path: "/" },
    { label: "TOOLS", path: "/tools" },
    { label: "ABOUT", path: "/about" },
    { label: "DONATIONS", path: "/donations" },
    { label: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border ">
      {/* Debug color test */}
      {/* <div className="container mx-auto px-6">
        <div className="flex gap-4 py-2 text-sm">
          <div className="debug-primary px-2 py-1 rounded">Primary Test</div>
          <div className="debug-secondary px-2 py-1 rounded">Secondary Test</div>
          <Button variant="test" size="sm">Test Button</Button>
          <Button variant="primary" size="sm">Primary</Button>
          <Button variant="secondary" size="sm">Secondary</Button>
        </div>
      </div> */}
      
      <div className="container mx-auto px-6 ">
        <div className="flex items-center justify-between h-20 ">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center overflow-hidden rounded-full">
              <img src={placeholderLogo} alt="Placeholder Logo" className="w-full h-full object-cover" />
            </div>
            <div className="font-heading font-bold text-foreground leading-tight">
              <div className="text-sm tracking-wider">HUMAN</div>
              <div className="text-sm tracking-wider">RIGHTS</div>
            </div>
             <div className="h-12 w-px bg-border mx-2 hidden md:block" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                className="text-sm font-medium tracking-wider text-muted-foreground hover:text-yellow-500 transition-colors cursor-pointer pb-1 border-b-2 border-transparent hover:border-yellow-400"
                onClick={() => navigate(item.path)}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              variant="donation"
              size="donation"
              className="w-40 mr-6"
              onClick={() => navigate('/donations')}
            >
              MAKE A DONATION
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  className="text-sm font-medium tracking-wider text-muted-foreground hover:text-primary transition-colors text-left pb-2 border-b-2 border-transparent hover:border-yellow-500"
                  onClick={() => {
                    navigate(item.path);
                    setIsOpen(false);
                  }}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                variant="secondary" 
                size="lg" 
                className="font-heading font-bold tracking-wider w-full"
                onClick={() => navigate('/donations')}
              >
                MAKE A DONATION
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
