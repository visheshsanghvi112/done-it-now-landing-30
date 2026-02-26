
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Target, CheckCircle } from "lucide-react";

const WorkSection = () => {
  return (
    <section className="py-24 px-4 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 bg-muted/30 text-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-border">
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
            <span>How I Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tighter">
            Simple Process,
            <span className="text-muted-foreground block">Guaranteed Results</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-card border border-border shadow-sm rounded-md transition-colors hover:bg-muted/10 text-left">
            <CardContent className="p-8">
              <div className="inline-flex items-center justify-center p-3 bg-muted/30 border border-border rounded-md mb-6">
                <Target className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground tracking-tight">One Point of Contact</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Stop juggling five different freelancers. Whether it's code, SEO, AI, or video editing, I handle the entire pipeline from start to finish.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border border-border shadow-sm rounded-md transition-colors hover:bg-muted/10 text-left">
            <CardContent className="p-8">
              <div className="inline-flex items-center justify-center p-3 bg-muted/30 border border-border rounded-md mb-6">
                <Clock className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground tracking-tight">Blazing Fast Execution</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Hyper-optimized workflows mean your projects are delivered faster than an agency, without ever compromising on top-tier quality.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border border-border shadow-sm rounded-md transition-colors hover:bg-muted/10 text-left">
            <CardContent className="p-8">
              <div className="inline-flex items-center justify-center p-3 bg-muted/30 border border-border rounded-md mb-6">
                <Shield className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground tracking-tight">Built to Convert</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Everything I build is strictly optimized for performance, SEO, and conversions. If it doesn't make your business better, I don't build it.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
