import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    title: "StyleMatch.AI",
    description: "AI-Powered Clothing Color Suggestions Based on Skin Tone Analysis",
    technologies: ["Gemini API", "Next.js", "FastAPI", "Koyeb"],
    github: "#",
    demo: "#",
    status: "Public"
  },
  {
    title: "HR Analytics Dashboard",
    description: "Delivered insights from 2022 HR data using BI dashboards",
    technologies: ["Power BI", "Tableau", "Excel"],
    github: "#",
    demo: "#",
    status: "Public"
  },
  {
    title: "Airbnb Data Analysis",
    description: "Trends in pricing, availability, and reviews",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    github: "#",
    demo: "#",
    status: "Public"
  },
  {
    title: "Reward Redemption Analytics",
    description: "Content-based system using cosine similarity",
    technologies: ["Python", "SQL", "Power BI", "Excel"],
    github: "#",
    demo: "#",
    status: "Public"
  }
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} className={`py-20 bg-card/20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Recent Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my data science and analytics projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50 group animate-fade-in">
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <Badge variant="secondary" className="text-xs">
                    {project.status}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground mb-4 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline"
                      className="text-xs border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-primary hover:opacity-90 transition-all duration-300"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Prev
            </Button>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              Next
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;