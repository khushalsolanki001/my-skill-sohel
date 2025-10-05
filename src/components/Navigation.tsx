import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import siteLogo from "../../logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "about", "skills", "projects", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white border-b border-gray-200 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="relative flex items-center h-20 justify-center lg:justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-3 group cursor-pointer"
            onClick={() => scrollToSection("#home")}
          >
            <img
              src={siteLogo}
              alt="Site logo"
              className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 group text-black text-lg hover:text-red-600 uppercase"
                style={{ fontFamily: "Pepi Medium, sans-serif" }}
              >
                <span>{item.label}</span>
              </button>
            ))}
            <div className="ml-4 pl-4 border-l border-border flex gap-2">
              <Button
                onClick={() => scrollToSection("#contact")}
                className="btn-glow px-8 py-3 rounded-xl font-semibold hover-lift text-lg transition-colors duration-300 hover:text-red-600 uppercase"
                style={{ fontFamily: "Pepi Medium, sans-serif" }}
              >
                Follow Me
              </Button>
              <Button
                onClick={() => window.open('https://my-art-ten.vercel.app/', '_blank')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-3 rounded-xl font-semibold hover-lift text-lg transition-colors duration-300 text-white uppercase"
                style={{ fontFamily: "Pepi Medium, sans-serif" }}
              >
                Art Gallery
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="sm"
            className="lg:hidden glass border-white/20 hover:border-primary/50 absolute right-0 top-1/2 -translate-y-1/2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 glass border-t border-white/10 shadow-2xl">
            <div className="px-6 py-6 space-y-3">
              {navItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="w-full flex items-center gap-4 px-4 py-4 rounded-xl font-semibold transition-all duration-300 hover-lift text-black text-lg hover:text-red-600 uppercase"
                  style={{
                    fontFamily: "Pepi Medium, sans-serif",
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <span>{item.label}</span>
                </button>
              ))}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <Button
                  onClick={() => scrollToSection("#contact")}
                  className="w-full btn-glow py-4 rounded-xl font-semibold text-lg transition-colors duration-300 hover:text-red-600 uppercase"
                  style={{ fontFamily: "Pepi Medium, sans-serif" }}
                >
                  Follow Me
                </Button>
                <Button
                  onClick={() => window.open('https://my-art-ten.vercel.app/', '_blank')}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 py-4 rounded-xl font-semibold text-lg transition-colors duration-300 text-white uppercase"
                  style={{ fontFamily: "Pepi Medium, sans-serif" }}
                >
                  Art Gallery
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
