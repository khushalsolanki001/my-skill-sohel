import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Folder } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "System Performance Monitor",
      description: "A C++ application for monitoring system resources, memory usage, and process management with real-time visualization.",
      technologies: ["C++", "System Programming"],
      status: "Completed",
      type: "System Programming"
    },
    {
      title: "Data Structure Library",
      description: "Comprehensive C library implementing essential data structures including linked lists, binary trees, and hash tables.",
      technologies: ["C", "Data Structures"],
      status: "In Progress",
      type: "Library"
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website showcasing programming skills and projects with clean design and smooth animations.",
      technologies: ["HTML", "CSS", "JavaScript"],
      status: "Completed",
      type: "Web Development"
    },
    {
      title: "Object-Oriented Design Patterns",
      description: "Java implementation of common design patterns including Singleton, Factory, Observer, and MVC architecture.",
      technologies: ["Java", "Design Patterns"],
      status: "In Progress",
      type: "Software Architecture"
    }
  ];

  const getStatusColor = (status: string) => {
    return status === "Completed" ? "bg-primary" : "bg-accent";
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projects & Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my programming skills and problem-solving abilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Folder className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {project.type}
                      </p>
                    </div>
                  </div>
                  <Badge variant="secondary" className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="default" size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Github className="h-5 w-5 mr-2" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;