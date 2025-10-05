import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Star, Palette, Camera, PenTool } from "lucide-react";
import { useState, useEffect } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skills with delay
          setTimeout(() => {
            setAnimatedSkills(
              new Set([
                "Adobe Photoshop",
                "Adobe Illustrator",
                "Lightroom",
                "Canva",
                "Figma",
                "Brand Identity",
                "Typography",
                "Photo Retouching",
              ])
            );
          }, 500);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("skills");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      category: "Design Tools",
      icon: Palette,
      color: "from-red-500 to-red-600",
      skills: [
        {
          name: "Adobe Photoshop",
          level: "Expert",
          percentage: 95,
          description: "Photo editing, retouching, composites",
          icon: "🖼️",
        },
        {
          name: "Adobe Illustrator",
          level: "Advanced",
          percentage: 90,
          description: "Vector logos, icons, illustrations",
          icon: "✒️",
        },
        {
          name: "Adobe Lightroom",
          level: "Advanced",
          percentage: 88,
          description: "Color grading, presets, batch edits",
          icon: "📸",
        },
        {
          name: "Canva",
          level: "Advanced",
          percentage: 90,
          description: "Quick social media and marketing designs",
          icon: "🧩",
        },
        {
          name: "Figma",
          level: "Intermediate",
          percentage: 75,
          description: "Layouts, UI mockups, collaboration",
          icon: "🧪",
        },
      ],
    },
    {
      category: "Branding & Layout",
      icon: PenTool,
      color: "from-green-500 to-emerald-500",
      skills: [
        {
          name: "Brand Identity",
          level: "Advanced",
          percentage: 90,
          description: "Logos, color, typography systems",
          icon: "🏷️",
        },
        {
          name: "Typography",
          level: "Advanced",
          percentage: 88,
          description: "Type pairing, hierarchy, readability",
          icon: "🔡",
        },
        {
          name: "Layout Design",
          level: "Advanced",
          percentage: 85,
          description: "Brochures, posters, pitch decks",
          icon: "📐",
        },
      ],
    },
    {
      category: "Content & Editing",
      icon: Camera,
      color: "from-purple-500 to-pink-500",
      skills: [
        {
          name: "Photo Retouching",
          level: "Expert",
          percentage: 92,
          description: "Skin, product, and color workflows",
          icon: "✨",
        },
        {
          name: "Social Media Graphics",
          level: "Advanced",
          percentage: 90,
          description: "Posts, stories, reels covers, ads",
          icon: "📱",
        },
        {
          name: "Marketing Collaterals",
          level: "Advanced",
          percentage: 87,
          description: "Flyers, banners, print assets",
          icon: "📰",
        },
      ],
    },
  ];

  const toolLogos: Record<string, string> = {
    "Adobe Photoshop":
      "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/adobephotoshop.svg",
    "Adobe Illustrator":
      "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/adobeillustrator.svg",
    "Adobe Lightroom":
      "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/adobelightroom.svg",
    Canva: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/canva.svg",
    Figma: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/figma.svg",
  };

  const getToolLogo = (name: string) => toolLogos[name] ?? null;

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "from-green-400 to-emerald-500";
      case "Advanced":
        return "from-red-400 to-red-500";
      case "Intermediate":
        return "from-purple-400 to-pink-500";
      default:
        return "from-gray-400 to-gray-500";
    }
  };

  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Advanced":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      case "Intermediate":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Minimal Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          {/* Removed "Skills & Expertise" pill completely */}
          <h2
            className={`text-4xl md:text-6xl font-black mb-6 pb-1 leading-[1.15] text-gradient animate-slide-up-delayed ${
              isVisible ? "animate-slide-up-delayed" : ""
            }`}
          >
            Design Skills
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const CategoryIcon = category.icon;
            return (
              <div
                key={index}
                className={`card-professional p-6 animate-scale-in ${
                  isVisible ? "animate-scale-in" : ""
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center shadow-glow`}
                  >
                    <CategoryIcon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gradient">
                      {category.category}
                    </h3>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-primary fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          {getToolLogo(skill.name) ? (
                            <img
                              src={getToolLogo(skill.name) as string}
                              alt={`${skill.name} logo`}
                              className="h-6 w-6 object-contain"
                              loading="lazy"
                            />
                          ) : (
                            <span className="text-2xl">{skill.icon}</span>
                          )}
                          <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                            {skill.name}
                          </h4>
                        </div>
                        <Badge
                          className={`px-3 py-1 rounded-full text-xs font-medium border ${getLevelBadgeColor(
                            skill.level
                          )}`}
                        >
                          {skill.level}
                        </Badge>
                      </div>

                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {skill.description}
                      </p>

                      {/* Animated Skill Bar */}
                      <div className="relative">
                        <div className="w-full bg-muted/30 rounded-full h-3 overflow-hidden">
                          <div
                            className={`h-3 rounded-full bg-gradient-to-r ${getLevelColor(
                              skill.level
                            )} transition-all duration-2000 ease-out relative overflow-hidden ${
                              animatedSkills.has(skill.name) ? "animate" : ""
                            }`}
                            style={{
                              width: animatedSkills.has(skill.name)
                                ? `${skill.percentage}%`
                                : "0%",
                              transitionDelay: `${skillIndex * 0.2}s`,
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-xs text-muted-foreground">
                            Progress
                          </span>
                          <span className="text-sm font-semibold text-primary">
                            {animatedSkills.has(skill.name)
                              ? `${skill.percentage}%`
                              : "0%"}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Showcase */}
        <div
          className={`mt-20 text-center animate-fade-in ${
            isVisible ? "animate-fade-in" : ""
          }`}
        >
          <h3 className="text-3xl font-bold mb-8 text-gradient">
            Additional Tools & Expertise
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              "Brand Guidelines",
              "Color Theory",
              "Creative Direction",
              "Print Design",
              "Mockups",
              "Content Strategy",
            ].map((tool, index) => (
              <div
                key={tool}
                className="glass-card px-6 py-3 rounded-full hover-lift cursor-pointer group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-sm font-semibold group-hover:text-primary transition-colors">
                  {tool}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
