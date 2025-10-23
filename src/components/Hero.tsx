import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Wallet } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground mb-6 tracking-tight">
            Recharge & Pay Bills
            <span className="block text-accent mt-2">Instantly & Securely</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Mobile, DTH, Electricity, Broadband & More. Get instant cashback and exclusive offers on every transaction.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="secondary" className="gap-2 text-base">
              Start Recharging <ArrowRight className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              View Offers
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
              <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Zap className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-primary-foreground">Instant Processing</h3>
              <p className="text-sm text-primary-foreground/80">Recharges completed in seconds</p>
            </div>
            
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
              <div className="h-12 w-12 rounded-full bg-success/20 flex items-center justify-center">
                <Shield className="h-6 w-6 text-success-foreground" />
              </div>
              <h3 className="font-semibold text-primary-foreground">100% Secure</h3>
              <p className="text-sm text-primary-foreground/80">Bank-grade encryption</p>
            </div>
            
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Wallet className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-primary-foreground">Best Offers</h3>
              <p className="text-sm text-primary-foreground/80">Cashback on every payment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
