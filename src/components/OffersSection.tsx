import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Gift, Percent, TrendingUp } from "lucide-react";

const offers = [
  {
    icon: Gift,
    title: "Welcome Bonus",
    description: "Get ₹50 cashback on your first recharge",
    code: "FIRST50",
    color: "bg-accent",
  },
  {
    icon: Percent,
    title: "Weekend Special",
    description: "5% extra cashback on all DTH recharges",
    code: "WEEKEND5",
    color: "bg-success",
  },
  {
    icon: TrendingUp,
    title: "Referral Rewards",
    description: "Earn ₹100 for every friend you refer",
    code: "REFER100",
    color: "bg-primary",
  },
];

const OffersSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Exciting Offers & Cashback
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Save more with our exclusive deals and promotional offers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer) => {
            const Icon = offer.icon;
            return (
              <Card 
                key={offer.code}
                className="relative overflow-hidden p-6 hover:shadow-strong transition-all duration-300"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${offer.color} opacity-10 rounded-full -translate-y-1/2 translate-x-1/2`}></div>
                
                <div className="relative">
                  <div className={`inline-flex h-12 w-12 rounded-xl ${offer.color} items-center justify-center mb-4`}>
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {offer.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {offer.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="font-mono">
                      {offer.code}
                    </Badge>
                    <Button size="sm" variant="link">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
