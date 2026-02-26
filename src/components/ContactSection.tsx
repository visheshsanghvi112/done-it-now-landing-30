
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Mail, Send, Clock, ArrowRight, MapPin, Globe, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with form data
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Hi,

My name is ${formData.name}.

Project Details:
${formData.project}

Please get back to me at: ${formData.email}

Thanks!`);

    window.location.href = `mailto:visheshsanghvi112@gmail.com?subject=${subject}&body=${body}`;

    toast({
      title: "Opening email client...",
      description: "Your default email app should open with the message pre-filled.",
    });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'd like to discuss a project with you.");
    window.open(`https://wa.me/917977282697?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 px-4 bg-background relative border-t border-border">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-muted/30 text-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-border">
            <Send className="h-4 w-4 text-muted-foreground" />
            <span>Let's Work Together</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tighter">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground">
            Tell me what you need. I'll make it happen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Form */}
          <Card className="bg-card border border-border rounded-md shadow-sm">
            <CardHeader className="pb-6 border-b border-border/50">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Send className="h-5 w-5 text-muted-foreground" />
                Send Project Details
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  placeholder="Your name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-transparent border-border rounded-md h-12 text-base focus:ring-1 focus:ring-ring focus:border-border"
                />
                <Input
                  type="email"
                  placeholder="Your email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-transparent border-border rounded-md h-12 text-base focus:ring-1 focus:ring-ring focus:border-border"
                />
                <Textarea
                  placeholder="What do you need built? Be as specific as possible..."
                  name="project"
                  value={formData.project}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="bg-transparent border-border rounded-md resize-none text-base focus:ring-1 focus:ring-ring focus:border-border"
                />
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base rounded-md font-medium transition-colors">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-card border border-border rounded-md shadow-sm">
            <CardHeader className="pb-6 border-b border-border/50">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-muted-foreground" />
                Quick Contact
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <p className="text-muted-foreground leading-relaxed text-sm">
                Prefer to chat directly? Reach out on WhatsApp for an immediate response or send an email.
              </p>

              <Button
                onClick={handleWhatsApp}
                variant="outline"
                className="w-full h-12 border-border hover:bg-muted font-medium rounded-md justify-start px-4"
              >
                <MessageSquare className="mr-3 h-5 w-5 text-muted-foreground" />
                Message on WhatsApp
              </Button>

              <Button
                variant="outline"
                onClick={() => window.location.href = 'mailto:visheshsanghvi112@gmail.com'}
                className="w-full h-12 border-border hover:bg-muted font-medium rounded-md justify-start px-4"
              >
                <Mail className="mr-3 h-5 w-5 text-muted-foreground" />
                Send Email Directly
              </Button>

              {/* Contact Details */}
              <div className="pt-6 border-t border-border/50">
                <div className="space-y-4 text-sm font-medium">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground">visheshsanghvi112@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground">+91 79772 82697</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground">Mumbai, Charni Road</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-border/50">
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-transparent border-border hover:bg-muted text-foreground rounded-md text-xs h-9"
                    onClick={() => window.open('https://www.visheshsanghvi.me/', '_blank')}
                  >
                    <Globe className="mr-2 h-3.5 w-3.5" />
                    Portfolio
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-transparent border-border hover:bg-muted text-foreground rounded-md text-xs h-9"
                    onClick={() => window.open('https://www.linkedin.com/in/vishesh-sanghvi-96b16a237/', '_blank')}
                  >
                    <Linkedin className="mr-2 h-3.5 w-3.5" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
