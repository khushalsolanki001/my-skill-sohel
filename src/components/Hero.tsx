import { Button } from "@/components/ui/button";
import { Github, Mail, Download, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Developer_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container-custom text-center">
        <div className="max-w-4xl mx-auto">
          {/* Professional Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-6 ${isLoaded ? 'animate-slide-up' : ''}`}>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Available for new opportunities</span>
          </div>

          {/* Heading - Single Line, Same Color */}
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-primary animate-slide-up-delayed ${isLoaded ? 'animate-slide-up-delayed' : ''}`}>
            Sohel Khan
          </h1>

          {/* Subtitle */}
          <p className={`text-base md:text-lg lg:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in ${isLoaded ? 'animate-fade-in' : ''}`}>
            Graphic Designer specializing in branding, social media graphics, and marketing creatives
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-wrap gap-4 justify-center mb-16 animate-scale-in ${isLoaded ? 'animate-scale-in' : ''}`}>
            <Button 
              size="lg" 
              className="btn-glow px-8 py-4 rounded-xl font-semibold hover-lift"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Github className="mr-2 h-5 w-5" />
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="glass border-primary/30 hover:border-primary/60 px-8 py-4 rounded-xl font-semibold hover-lift"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="px-8 py-4 rounded-xl font-semibold hover-lift"
              onClick={handleDownloadCV}
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          {/* Tech Stack */}
          <div className={`flex flex-wrap gap-3 justify-center animate-fade-in ${isLoaded ? 'animate-fade-in' : ''}`}>
            {['Adobe Photoshop', 'Adobe Illustrator', 'Lightroom', 'Canva', 'Figma', 'Brand Identity'].map((tech, index) => (
              <div
                key={tech}
                className="glass-card px-4 py-2 rounded-lg hover-lift cursor-pointer group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-sm font-medium group-hover:text-primary transition-colors">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="glass-card p-2 rounded-full">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
