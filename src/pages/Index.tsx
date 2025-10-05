import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import Logo from "@/components/Logo";
import { Heart, Sparkles, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative">
      <Navigation />
      <CustomCursor />

      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      {/* Enhanced Footer */}
      <footer className="relative py-16 px-6 border-t border-white/10 glass">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            
            {/* Brand Section */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                {/* Only the logo */}
                <Logo size={60} />

                <div>
                  <h3 className="text-2xl font-black text-gradient"></h3>
                  <p className="text-sm text-muted-foreground"></p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Crafting exceptional digital experiences with modern technologies and innovative solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-lg font-bold mb-4 text-gradient">Quick Links</h4>
              <div className="space-y-2">
                {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="block w-full text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-bold mb-4 text-gradient">Get In Touch</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>soheldzine@gmail.com</p>
                <p>Instagram: @soheldzine</p>
                <p>Available for Freelance Work</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-center md:text-left flex items-center gap-2">
              © 2024 Sohel Khan Portfolio. Built with 
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              and modern technologies.
            </p>
            
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">Made with React & TypeScript</span>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full btn-glow shadow-lg hover-lift z-50"
          size="sm"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </footer>
    </div>
  );
};

export default Index;
