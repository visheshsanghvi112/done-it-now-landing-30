
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Presentation,
  Bot,
  BarChart3,
  FileText,
  Zap,
  Globe,
  Settings,
  ArrowRight
} from "lucide-react";

const CapabilitiesSection = () => {
  const capabilities = [
    {
      icon: Globe,
      title: "Full-Stack Development",
      items: ["Blazing fast React apps", "Vercel-optimized builds", "Responsive UI", "Complete backend"],
    },
    {
      icon: Bot,
      title: "Custom AI Agents",
      items: ["24/7 automated workflows", "Customer service bots", "Data scraping", "Internal LLM tools"],
    },
    {
      icon: BarChart3,
      title: "Technical SEO",
      items: ["Hyper-optimized code", "Core Web Vitals tuning", "Meta & OpenGraph", "Organic traffic growth"],
    },
    {
      icon: Settings,
      title: "Full Outsourcing",
      items: ["Pro video editing", "Content management", "Social media assets", "Day-to-day operations"],
    },
    {
      icon: Zap,
      title: "Data & Systems",
      items: ["Custom SaaS dashboards", "Automated reporting", "API integrations", "Performance tracking"],
    },
    {
      icon: Presentation,
      title: "High-Conversion Decks",
      items: ["Investor pitch decks", "Sales presentations", "B2B proposals", "Brand strategy"],
    }
  ];

  return (
    <section className="hidden md:block py-24 px-4 bg-background border-t border-border relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 bg-muted/30 text-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-border">
            <Zap className="h-4 w-4 text-muted-foreground" />
            <span>What I Build</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tighter">
            Fast, Professional,
            <br />
            <span className="text-muted-foreground">Exactly What You Need</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl font-normal">
            No fluff, just results. Here's what I can create for you in record time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <Card key={index} className="bg-card border border-border rounded-md shadow-sm transition-colors hover:bg-muted/10">
              <CardContent className="p-8">
                <div className="flex items-center mb-8">
                  <div className="p-2.5 bg-muted/30 border border-border rounded-md mr-4 flex items-center justify-center">
                    <capability.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground tracking-tight">
                    {capability.title}
                  </h3>
                </div>
                <ul className="space-y-3.5">
                  {capability.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-muted-foreground transition-colors hover:text-foreground">
                      <ArrowRight className="h-3.5 w-3.5 mr-3 flex-shrink-0 text-muted-foreground" />
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
