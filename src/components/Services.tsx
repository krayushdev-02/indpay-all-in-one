import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  Tv, 
  Zap, 
  Wifi, 
  CreditCard,
  Globe
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile Recharge",
    description: "Prepaid & Postpaid",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Tv,
    title: "DTH Recharge",
    description: "All operators supported",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Zap,
    title: "Electricity",
    description: "Pay your electricity bills",
    color: "bg-success/10 text-success",
  },
  {
    icon: Wifi,
    title: "Broadband",
    description: "Internet bill payments",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: CreditCard,
    title: "FASTag",
    description: "Toll payments made easy",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Globe,
    title: "Data Card",
    description: "Internet recharge",
    color: "bg-success/10 text-success",
  },
];

const Services = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            All Services in One Place
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recharge your mobile, pay bills, and manage all your payments seamlessly
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className="p-6 hover:shadow-medium transition-shadow duration-300 cursor-pointer group"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className={`h-16 w-16 rounded-2xl ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-1">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                  <Button variant="ghost" className="w-full mt-2">
                    Recharge Now
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
