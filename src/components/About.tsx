import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Layers, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, efficient code following best practices and industry standards."
    },
    {
      icon: Database,
      title: "Problem Solving",
      description: "Analytical thinking and systematic approach to complex programming challenges."
    },
    {
      icon: Layers,
      title: "Full Stack",
      description: "Experience spanning from low-level system programming to modern web development."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, efficiency, and resource management."
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gradient-secondary">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About Me
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground mb-8">
              <p>
                I'm a dedicated programmer with a strong foundation in multiple programming 
                languages and technologies. My journey spans from low-level system programming 
                with C and C++ to modern web development with HTML and CSS.
              </p>
              
              <p>
                I believe in writing clean, efficient code and continuously learning new 
                technologies to solve complex problems. Whether it's building robust systems 
                or creating engaging web experiences, I approach each project with attention 
                to detail and a commitment to quality.
              </p>
              
              <p>
                My diverse skill set allows me to work across different domains and contribute 
                meaningfully to various types of projects.
              </p>
            </div>
          </div>
          
          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;