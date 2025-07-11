
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Target, CheckCircle } from "lucide-react";

const WorkSection = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="h-4 w-4" />
            How I Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Simple Process,
            <span className="text-primary block">Guaranteed Results</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Card className="bg-card/50 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-1">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Direct & Focused</h3>
              <p className="text-muted-foreground leading-relaxed">
                No portfolios upfront. I only share work samples after we talk—saves time for both serious inquiries.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-1">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Fast Execution</h3>
              <p className="text-muted-foreground leading-relaxed">
                Quick turnaround without compromising quality. I get things done efficiently and professionally.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-1">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Results Guaranteed</h3>
              <p className="text-muted-foreground leading-relaxed">
                What you need, when you need it. Clean, professional, and built to work perfectly.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
