import { Button } from "@/components/ui/button";
import { Menu, User, Wallet } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <Wallet className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">IndPay</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Offers</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Help</a>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="gap-2">
              <User className="h-4 w-4" />
              Login
            </Button>
            <Button variant="default" className="gap-2">
              Sign Up
            </Button>
          </div>
          
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 text-foreground" />
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <a href="#" className="block text-foreground hover:text-primary transition-colors py-2">Home</a>
            <a href="#" className="block text-foreground hover:text-primary transition-colors py-2">Services</a>
            <a href="#" className="block text-foreground hover:text-primary transition-colors py-2">Offers</a>
            <a href="#" className="block text-foreground hover:text-primary transition-colors py-2">Help</a>
            <div className="pt-4 space-y-2">
              <Button variant="ghost" className="w-full gap-2">
                <User className="h-4 w-4" />
                Login
              </Button>
              <Button variant="default" className="w-full gap-2">
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
