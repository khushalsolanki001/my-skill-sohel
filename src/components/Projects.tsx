import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Folder, Sparkles, Rocket, Star, Eye, Code } from "lucide-react";
import { useState, useEffect } from "react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Brand Identity: Cafe Bloom",
      description: "Complete brand system including logo suite, color palette, typography, packaging, and social templates for a boutique cafe.",
      technologies: ["Logo Design", "Brand Guidelines", "Illustrator", "Photoshop"],
      status: "Completed",
      type: "Branding",
      image: "☕",
      color: "from-red-500 to-red-600",
      features: ["Logo suite", "Color & type system", "Packaging", "Social templates"],
      github: "#",
      demo: "#"
    },
    {
      title: "Social Media Campaign: FitPulse",
      description: "High-conversion posts, stories, and ad creatives for a 6-week fitness program launch across Instagram and Facebook.",
      technologies: ["Photoshop", "Canva", "Content Strategy", "A/B Creatives"],
      status: "Completed",
      type: "Social Media",
      image: "💪",
      color: "from-green-500 to-emerald-500",
      features: ["Carousel posts", "Reel covers", "Story set", "Ad variants"],
      github: "#",
      demo: "#"
    },
    {
      title: "Product Retouching: Luxe Cosmetics",
      description: "Professional photo retouching and color grading for an e-commerce catalog of 120+ SKUs.",
      technologies: ["Photoshop", "Lightroom", "Color Grading", "Retouching"],
      status: "Completed",
      type: "Photo Editing",
      image: "💄",
      color: "from-purple-500 to-pink-500",
      features: ["Skin/product cleanup", "Shadow work", "Consistent tones", "Export presets"],
      github: "#",
      demo: "#"
    },
    {
      title: "Pitch Deck: TechNova",
      description: "30-slide investor deck with cohesive visuals, iconography, and typography system.",
      technologies: ["Figma", "Layout", "Typography", "Icons"],
      status: "Completed",
      type: "Presentation",
      image: "📊",
      color: "from-orange-500 to-red-500",
      features: ["Master slides", "Infographics", "Charts", "Mockups"],
      github: "#",
      demo: "#"
    },
    {
      title: "Event Poster Series: SoundWave",
      description: "Poster series and social adaptations for a music event featuring a bold visual language.",
      technologies: ["Illustrator", "Photoshop", "Grids", "Print"],
      status: "Completed",
      type: "Poster Design",
      image: "🎶",
      color: "from-indigo-500 to-purple-500",
      features: ["A3/A4 print", "Story/Reel covers", "Feed set", "Brand alignment"],
      github: "#",
      demo: "#"
    },
    {
      title: "Restaurant Menu & Packaging: SpiceHub",
      description: "Menu layout system, packaging labels, and social launch pack for a new restaurant.",
      technologies: ["Illustrator", "InDesign", "Brand", "Mockups"],
      status: "Completed",
      type: "Print & Branding",
      image: "🍽️",
      color: "from-red-600 to-red-500",
      features: ["Menu system", "Packaging labels", "Brand assets", "Social kit"],
      github: "#",
      demo: "#"
    }
  ];

  const getStatusColor = (status: string) => {
    return status === "Completed" 
      ? "bg-green-500/20 text-green-400 border-green-500/30" 
      : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
  };

  const getStatusIcon = (status: string) => {
    return status === "Completed" ? <Star className="h-3 w-3" /> : <Rocket className="h-3 w-3" />;
  };

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Minimal Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className={`inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-6 animate-slide-up ${isVisible ? 'animate-slide-up' : ''}`}>
           
          </div>
          
          <h2 className={`text-5xl md:text-7xl font-black mb-6 text-gradient animate-slide-up-delayed ${isVisible ? 'animate-slide-up-delayed' : ''}`}>
            Featured Projects
          </h2>
          
          <p className={`text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in ${isVisible ? 'animate-fade-in' : ''}`}>
            Selected design work across branding, social media, photo editing, and marketing
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`card-professional p-6 group cursor-pointer animate-scale-in ${isVisible ? 'animate-scale-in' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-3xl">{project.image}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {project.type}
                    </p>
                  </div>
                </div>
                <Badge className={`px-3 py-1 rounded-full text-xs font-medium border flex items-center gap-1 ${getStatusColor(project.status)}`}>
                  {getStatusIcon(project.status)}
                  {project.status}
                </Badge>
              </div>
              
              {/* Project Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Key Features
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Technologies */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs px-3 py-1 border-primary/30 hover:border-primary/60 transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 glass border-primary/30 hover:border-primary/60 hover-lift"
                >
                  <Github className="h-4 w-4 mr-2" />
                  <Code className="h-3 w-3 mr-1" />
                  Code
                </Button>
                <Button 
                  variant="default" 
                  size="sm" 
                  className="flex-1 btn-glow hover-lift"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  <Eye className="h-3 w-3 mr-1" />
                  Demo
                </Button>
              </div>

              {/* Hover Effect Overlay */}
              {hoveredProject === index && (
                <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-2xl pointer-events-none" />
              )}
            </div>
          ))}
        </div>
        
        {/* View All Projects Button */}
        <div className={`text-center mt-16 animate-fade-in ${isVisible ? 'animate-fade-in' : ''}`}>
          <Button 
            variant="outline" 
            size="lg" 
            className="glass border-primary/30 hover:border-primary/60 px-8 py-4 rounded-2xl font-semibold hover-lift"
          >
            <Github className="h-5 w-5 mr-3" />
            View All Projects
            <Rocket className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;