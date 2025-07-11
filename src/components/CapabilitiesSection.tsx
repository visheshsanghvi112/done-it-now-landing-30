
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
      title: "Web Development",
      items: ["Landing pages", "Portfolios", "Web applications", "Responsive designs"],
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: Presentation,
      title: "Presentations & Documents",
      items: ["PowerPoint decks", "Professional resumes", "Reports", "Proposals"],
      gradient: "from-purple-500/10 to-pink-500/10"
    },
    {
      icon: Bot,
      title: "AI & Automation",
      items: ["AI chatbots", "Workflow automation", "Data processing", "Smart tools"],
      gradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      icon: BarChart3,
      title: "Dashboards & Analytics",
      items: ["Data visualization", "Business dashboards", "Reporting tools", "KPI tracking"],
      gradient: "from-orange-500/10 to-red-500/10"
    },
    {
      icon: FileText,
      title: "Research & Content",
      items: ["Research projects", "Content strategy", "Documentation", "Technical writing"],
      gradient: "from-indigo-500/10 to-blue-500/10"
    },
    {
      icon: Settings,
      title: "Custom Solutions",
      items: ["Process optimization", "System integrations", "Custom tools", "Problem solving"],
      gradient: "from-teal-500/10 to-cyan-500/10"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4" />
            What I Build
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8 tracking-tight">
            Fast, Professional,
            <br />
            <span className="text-primary">Exactly What You Need</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            No fluff, just results. Here's what I can create for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <Card key={index} className={`bg-gradient-to-br ${capability.gradient} hover:shadow-2xl transition-all duration-500 border-0 shadow-lg group hover:-translate-y-2`}>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl mr-4 group-hover:bg-primary/20 transition-colors">
                    <capability.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {capability.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {capability.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors">
                      <ArrowRight className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
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
