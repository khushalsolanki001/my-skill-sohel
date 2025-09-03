import { Button } from "@/components/ui/button";
import { Github, Mail, Download } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Developer_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Developer & Programmer
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Passionate about building efficient solutions with modern programming languages
            and web technologies
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button variant="default" size="lg" className="shadow-glow">
              <Github className="mr-2 h-5 w-5" />
              View Projects
            </Button>
            <Button variant="outline" size="lg">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button variant="secondary" size="lg" onClick={handleDownloadCV}>
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
          
          {/* Quick Skills Preview */}
          <div className="flex flex-wrap gap-3 justify-center">
            {['C', 'C++', 'Java', 'HTML', 'CSS'].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-card/50 border border-border rounded-full text-sm font-medium backdrop-blur-sm hover:bg-primary/10 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;