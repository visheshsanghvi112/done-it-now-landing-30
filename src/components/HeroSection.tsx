
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const handleGetStarted = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/40 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-5xl mx-auto text-center animate-fade-in relative z-10">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8 border border-primary/20">
          <Sparkles className="h-4 w-4" />
          Available for new projects
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-8 leading-tight tracking-tight">
          Need It Done?
          <br />
          <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            I'll Make It Happen.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-light">
          Portfolios • Landing Pages • Presentations • Automation Tools • Dashboards • AI Solutions • Research Projects • Whatever You Need
        </p>

        <Button 
          size="lg" 
          className="text-lg px-12 py-8 bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-primary/25 group"
          onClick={handleGetStarted}
        >
          Tell Me What You Need
          <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
        </Button>
        
        <div className="mt-12 text-sm text-muted-foreground">
          <p>Trusted by entrepreneurs, startups, and businesses worldwide</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
