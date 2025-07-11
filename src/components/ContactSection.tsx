
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
    <section id="contact" className="py-24 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-violet-100 relative overflow-hidden">
      {/* Background decorative elements with orchid theme */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-gradient-to-br from-violet-300/20 to-purple-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-pink-200/10 to-purple-200/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-purple-200">
            <Send className="h-4 w-4" />
            Let's Work Together
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-violet-600 bg-clip-text text-transparent mb-8 tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 font-light">
            Tell me what you need. I'll make it happen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl shadow-purple-200/50">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center text-xl">
                <div className="p-2 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg mr-3">
                  <Send className="h-5 w-5 text-purple-600" />
                </div>
                Send Project Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  placeholder="Your name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-white/70 border-purple-200/50 h-12 text-base focus:border-purple-400"
                />
                <Input
                  type="email"
                  placeholder="Your email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-white/70 border-purple-200/50 h-12 text-base focus:border-purple-400"
                />
                <Textarea
                  placeholder="What do you need built? Be as specific as possible..."
                  name="project"
                  value={formData.project}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="bg-white/70 border-purple-200/50 resize-none text-base focus:border-purple-400"
                />
                <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 h-12 text-base group shadow-lg shadow-purple-200/50">
                  Send Project Details
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl shadow-purple-200/50">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center text-xl">
                <div className="p-2 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg mr-3">
                  <MessageSquare className="h-5 w-5 text-purple-600" />
                </div>
                Quick Contact
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Prefer to chat directly? Reach out on WhatsApp for immediate response or send an email.
              </p>
              
              <Button 
                onClick={handleWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white h-12 group shadow-lg"
              >
                <MessageSquare className="mr-3 h-5 w-5" />
                Message on WhatsApp
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full h-12 group border-2 border-purple-200 hover:bg-purple-50"
                onClick={() => window.location.href = 'mailto:visheshsanghvi112@gmail.com'}
              >
                <Mail className="mr-3 h-5 w-5" />
                Send Email Directly
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Contact Details */}
              <div className="pt-6 border-t border-purple-200/50">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-purple-600" />
                    <p className="text-gray-700">visheshsanghvi112@gmail.com</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-5 w-5 text-purple-600" />
                    <p className="text-gray-700">+91 79772 82697</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-purple-600" />
                    <p className="text-gray-700">Mumbai, Charni Road</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-purple-200/50">
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 border-purple-200 hover:bg-purple-50"
                    onClick={() => window.open('https://www.visheshsanghvi.me/', '_blank')}
                  >
                    <Globe className="mr-2 h-4 w-4" />
                    Portfolio
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 border-purple-200 hover:bg-purple-50"
                    onClick={() => window.open('https://www.linkedin.com/in/vishesh-sanghvi-96b16a237/', '_blank')}
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                </div>
              </div>

              <div className="pt-6 border-t border-purple-200/50">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-purple-600" />
                  <p className="font-semibold text-gray-800">Response Time</p>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    WhatsApp: Usually within 1-2 hours
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Email: Within 24 hours
                  </p>
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
