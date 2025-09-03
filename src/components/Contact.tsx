import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "developer@example.com",
      action: "mailto:developer@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Available for Remote Work",
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-secondary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss opportunities and how we can work together on your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-card/50 backdrop-blur-sm hover:bg-card transition-colors">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        {item.action ? (
                          <a 
                            href={item.action}
                            className="text-lg font-medium hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-lg font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Let's Connect</h4>
              <p className="text-muted-foreground mb-6">
                I'm always interested in discussing new opportunities, 
                collaborating on projects, or simply connecting with fellow developers.
              </p>
              <div className="flex gap-3">
                <Button variant="default" className="shadow-glow">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </Button>
                <Button variant="outline">
                  Schedule Call
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <Input placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input placeholder="Project inquiry, collaboration, etc." />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project or how we can work together..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button type="submit" className="w-full shadow-glow">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;