import { Palette, Image as ImageIcon, Type as TypeIcon, Camera, Sparkles, Target, Rocket, PenTool } from "lucide-react";
import { useState, useEffect } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Palette,
      title: "Brand Identity",
      description: "Crafting cohesive brand systems: logos, color palettes, typography, and guidelines.",
      color: "from-red-500 to-red-600",
      delay: 0,
    },
    {
      icon: ImageIcon,
      title: "Social Media Graphics",
      description: "High-impact posts, stories, reels covers, and ad creatives tailored for engagement.",
      color: "from-purple-500 to-pink-500",
      delay: 1,
    },
    {
      icon: PenTool,
      title: "Marketing Collaterals",
      description: "Flyers, posters, brochures, pitch decks, banners, and print-ready assets.",
      color: "from-green-500 to-emerald-500",
      delay: 2,
    },
    {
      icon: Camera,
      title: "Photo Editing",
      description: "Professional retouching and color grading using Adobe Photoshop and Lightroom.",
      color: "from-yellow-500 to-orange-500",
      delay: 3,
    },
  ];

  const stats = [
    { label: "Brand Projects", value: "50+", icon: Target },
    { label: "Years Experience", value: "2+", icon: Rocket },
    { label: "Happy Clients", value: "30+", icon: Sparkles },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Minimal Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          {/* 🔴 Removed "About Me" pill completely */}
          
          <h2
            className={`text-5xl md:text-7xl font-black mb-6 text-gradient animate-slide-up-delayed ${
              isVisible ? "animate-slide-up-delayed" : ""
            }`}
          >
            GRAPHIC DESIGNER
          </h2>

          <p
            className={`text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in ${
              isVisible ? "animate-fade-in" : ""
            }`}
          >
            Specializing in branding, social media graphics, marketing collaterals, and custom
            creative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div className={`animate-slide-up ${isVisible ? "animate-slide-up" : ""}`}>
            <div className="space-y-6 text-lg text-muted-foreground mb-12">
              <p className="leading-relaxed">
                I am SOHEL KHAN, a creative and detail-oriented Graphic Designer with over 2 years of
                experience delivering visually compelling designs that bring ideas to life.
                Skilled in Adobe Photoshop, Adobe Illustrator, Adobe Lightroom, Canva, and Figma.
              </p>

              <p className="leading-relaxed">
                I specialize in branding materials, social media graphics, marketing collaterals, and
                custom creative solutions tailored to client needs. With a strong eye for aesthetics,
                color, and typography, I ensure every design communicates the intended message
                effectively.
              </p>

              <p className="leading-relaxed">
                Education: 12th from D.T.S.S. College of Commerce. Graphic Design Trainer experience.
                Graphic Design course at Dynamic Computer Education. Freelance Graphic Designing
                experience delivering professional, modern, and impactful designs that help businesses
                stand out and connect with their audience.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="text-center glass-card p-6 rounded-2xl hover-lift"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="text-2xl font-bold text-gradient mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`card-professional p-6 text-center group cursor-pointer animate-scale-in ${
                    isVisible ? "animate-scale-in" : ""
                  }`}
                  style={{ animationDelay: `${item.delay * 0.2}s` }}
                >
                  <div className="relative mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-glow`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
