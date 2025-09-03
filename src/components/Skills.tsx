import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "C", level: "Advanced", description: "System programming, memory management" },
        { name: "C++", level: "Advanced", description: "Object-oriented programming, STL" },
        { name: "Java", level: "Intermediate", description: "Enterprise applications, OOP" }
      ]
    },
    {
      category: "Web Technologies",
      skills: [
        { name: "HTML", level: "Expert", description: "Semantic markup, accessibility" },
        { name: "CSS", level: "Advanced", description: "Responsive design, animations" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert": return "bg-primary";
      case "Advanced": return "bg-accent";
      case "Intermediate": return "bg-secondary";
      default: return "bg-muted";
    }
  };

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proficient in multiple programming languages and modern web technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary">
                  {category.category}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-lg font-medium">{skill.name}</h4>
                        <Badge variant="secondary" className={getLevelColor(skill.level)}>
                          {skill.level}
                        </Badge>
                      </div>
                      
                      <p className="text-muted-foreground text-sm mb-3">
                        {skill.description}
                      </p>
                      
                      {/* Skill Progress Visualization */}
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${getLevelColor(skill.level)} transition-all duration-1000 group-hover:shadow-glow`}
                          style={{ 
                            width: skill.level === "Expert" ? "95%" : 
                                   skill.level === "Advanced" ? "80%" : "65%" 
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;