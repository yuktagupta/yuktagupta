import { Card } from "@/components/ui/card";
import { 
  Code2, 
  Database, 
  BarChart3, 
  Server, 
  Brain,
  MessageSquare,
  PuzzleIcon,
  Users,
  Target,
  FileCode,
  Table,
  ChartArea,
  Zap,
  GitBranch,
  Layers
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: Code2, color: "text-yellow-400" },
      { name: "SQL", icon: Database, color: "text-blue-400" },
      { name: "HTML", icon: FileCode, color: "text-orange-400" },
      { name: "CSS", icon: Layers, color: "text-blue-500" }
    ]
  },
  {
    title: "Data Science Libraries",
    skills: [
      { name: "Pandas", icon: Table, color: "text-green-400" },
      { name: "NumPy", icon: BarChart3, color: "text-blue-400" },
      { name: "Matplotlib", icon: ChartArea, color: "text-purple-400" },
      { name: "Seaborn", icon: BarChart3, color: "text-teal-400" },
      { name: "Scikit-learn", icon: Brain, color: "text-orange-400" },
      { name: "SciPy", icon: GitBranch, color: "text-red-400" }
    ]
  },
  {
    title: "Machine Learning",
    skills: [
      { name: "Regression", icon: Target, color: "text-red-400" },
      { name: "Classification", icon: Brain, color: "text-purple-400" },
      { name: "Clustering", icon: PuzzleIcon, color: "text-green-400" },
      { name: "Feature Engineering", icon: Zap, color: "text-yellow-400" }
    ]
  },
  {
    title: "Visualization Tools",
    skills: [
      { name: "Power BI", icon: BarChart3, color: "text-yellow-400" },
      { name: "Tableau", icon: ChartArea, color: "text-blue-400" },
      { name: "QlikView", icon: BarChart3, color: "text-green-400" }
    ]
  },
  {
    title: "Frameworks & APIs",
    skills: [
      { name: "FastAPI", icon: Server, color: "text-green-400" }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: Database, color: "text-blue-400" }
    ]
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
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50 group animate-fade-in bg-card/50">
              <h3 className="text-xl font-bold text-center mb-6 text-foreground">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={skillIndex} className="flex flex-col items-center p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-all duration-300 group/skill">
                      <div className={`p-3 rounded-full bg-muted/50 mb-2 group-hover/skill:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`h-8 w-8 ${skill.color}`} />
                      </div>
                      <span className="text-sm font-medium text-center text-foreground">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;