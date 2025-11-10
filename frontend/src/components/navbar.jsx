
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "HOME", path: "/" },
    { label: "TOOLS", path: "/tools" },
    { label: "ABOUT", path: "/about" },
    { label: "DONATIONS", path: "/donations" },
    { label: "BLOG", path: "/blog" },
    { label: "PETITION", path: "/petition" },
    { label: "CONTACTS", path: "/contacts" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 border-b border-border ">
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
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
              <div className="w-8 h-8 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-secondary-foreground">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="currentColor"/>
                </svg>
              </div>
            </div>
            <div className="font-heading font-bold text-foreground leading-tight">
              <div className="text-sm tracking-wider">HUMAN</div>
              <div className="text-sm tracking-wider">RIGHTS</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                className="text-sm font-medium tracking-wider text-muted-foreground hover:text-yellow-500 transition-colors cursor-pointer pb-1 border-b-2 border-transparent hover:border-yellow-400"
                onClick={() => console.log(`Navigate to: ${item.path}`)}
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
              onClick={() => console.log('Navigate to donations')}
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
                    console.log(`Navigate to: ${item.path}`);
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
                onClick={() => console.log('Navigate to donations')}
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
