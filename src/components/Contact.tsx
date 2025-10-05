import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, MessageCircle, Calendar, Sparkles, Rocket, Instagram } from "lucide-react";
import { useState, useEffect } from "react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "soheldzine@gmail.com",
      action: "mailto:soheldzine@gmail.com",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 85912 50727",
      action: "tel:+9185912 50727",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      label: "Instagram",
      value: "@soheldzine",
      action: "https://www.instagram.com/soheldzine/",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/soheldzine/", color: "from-pink-500 to-purple-500" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Show success message (you can implement toast notification here)
    alert('Message sent successfully!');
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Minimal Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
         
          
          <h2 className={`text-5xl md:text-7xl font-black mb-6 text-gradient animate-slide-up-delayed ${isVisible ? 'animate-slide-up-delayed' : ''}`}>
            Let's Connect
          </h2>
          
          <p className={`text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in ${isVisible ? 'animate-fade-in' : ''}`}>
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className={`space-y-8 animate-slide-up ${isVisible ? 'animate-slide-up' : ''}`}>
            <div>
              <h3 className="text-3xl font-bold mb-8 text-gradient">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={index} 
                      className="group glass-card p-6 rounded-2xl hover-lift cursor-pointer"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center gap-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                          {item.action ? (
                            <a 
                              href={item.action}
                              className="text-lg font-semibold hover:text-primary transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-lg font-semibold">{item.value}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-2xl font-bold mb-6 text-gradient">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-14 h-14 bg-gradient-to-r ${social.color} rounded-2xl flex items-center justify-center shadow-glow hover:scale-110 transition-transform duration-300 group`}
                    >
                      <Icon className="h-7 w-7 text-white group-hover:scale-110 transition-transform" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h4 className="text-2xl font-bold mb-6 text-gradient">Quick Actions</h4>
              <div className="flex flex-col gap-4">
                <Button 
                  variant="default" 
                  size="lg"
                  className="btn-glow justify-start px-6 py-4 rounded-2xl font-semibold hover-lift"
                  onClick={() => window.open('mailto:soheldzine@gmail.com', '_blank')}
                >
                  <Mail className="h-5 w-5 mr-3" />
                  Send Email
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="glass border-primary/30 hover:border-primary/60 justify-start px-6 py-4 rounded-2xl font-semibold hover-lift"
                >
                  <Calendar className="h-5 w-5 mr-3" />
                  Schedule a Call
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`animate-scale-in ${isVisible ? 'animate-scale-in' : ''}`}>
            <Card className="card-professional p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                    <Send className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gradient">Send a Message</h3>
                    <p className="text-muted-foreground">I'll get back to you within 24 hours</p>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold mb-3 block text-foreground">Name</label>
                      <Input 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name" 
                        className="glass border-primary/30 focus:border-primary/60 rounded-xl h-12"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-3 block text-foreground">Email</label>
                      <Input 
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com" 
                        className="glass border-primary/30 focus:border-primary/60 rounded-xl h-12"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-semibold mb-3 block text-foreground">Subject</label>
                    <Input 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project inquiry, collaboration, etc." 
                      className="glass border-primary/30 focus:border-primary/60 rounded-xl h-12"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-semibold mb-3 block text-foreground">Message</label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or how we can work together..."
                      className="glass border-primary/30 focus:border-primary/60 rounded-xl min-h-[140px] resize-none"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full btn-glow py-4 rounded-2xl font-semibold text-lg hover-lift"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-3" />
                        Send Message
                        <Rocket className="h-4 w-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;