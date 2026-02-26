
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const handleGetStarted = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-4 pt-28 pb-12 relative flex-col">
      {/* Subtle Vercel-like grid background (optional) or just blank slate */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center justify-center gap-2 bg-muted/30 text-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-8 border border-border transition-colors hover:bg-muted/50 cursor-pointer">
          <Sparkles className="h-4 w-4 text-muted-foreground" />
          <span>Available for new projects</span>
          <ArrowRight className="h-3 w-3 ml-1 text-muted-foreground" />
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-foreground mb-6 leading-[1.1] tracking-tighter">
          Need It Done?
          <br />
          <span className="text-muted-foreground">
            I'll Make It Happen.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Portfolios • Landing Pages • Presentations • Automation Tools • Dashboards • AI Solutions • Research Projects • Whatever You Need.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4">
          <Button
            size="lg"
            className="w-full sm:w-auto text-base px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md font-medium transition-colors"
            onClick={handleGetStarted}
          >
            Tell Me What You Need
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto text-base px-8 py-6 bg-background hover:bg-muted text-foreground border-border rounded-md font-medium transition-colors"
            onClick={() => window.location.href = '/projects'}
          >
            View All Projects
          </Button>
        </div>

        <div className="mt-16 text-sm text-muted-foreground font-mono">
          Trusted by entrepreneurs and startups worldwide
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
