import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Database, BarChart3, Brain, Code, Server, Users } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Programming Languages",
    color: "neon-purple",
    skills: ["Python", "SQL", "HTML", "CSS"]
  },
  {
    icon: Database,
    title: "Libraries & Tools",
    color: "neon-teal",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "SciPy"]
  },
  {
    icon: BarChart3,
    title: "Visualization Tools",
    color: "neon-blue",
    skills: ["Power BI", "Tableau", "QlikView"]
  },
  {
    icon: Server,
    title: "Frameworks & APIs",
    color: "neon-green",
    skills: ["FastAPI"]
  },
  {
    icon: Database,
    title: "Databases",
    color: "neon-purple",
    skills: ["PostgreSQL"]
  },
  {
    icon: Users,
    title: "Soft Skills",
    color: "neon-teal",
    skills: ["Communication", "Problem-Solving", "Teamwork", "Adaptability"]
  }
];

const Skills = () => {
  return (
    <section className="py-20 bg-card/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to transform data into actionable insights
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50 group animate-fade-in">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-${category.color}/20 group-hover:bg-${category.color}/30 transition-colors duration-300`}>
                    <IconComponent className={`h-6 w-6 text-${category.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-pointer"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;