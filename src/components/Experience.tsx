import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Data Analyst",
    company: "Freelance Project",
    location: "Mumbai",
    period: "Apr 2025 – Present",
    type: "Full-time",
    achievements: [
      "Analyzed client data to uncover key business insights.",
      "Built interactive dashboards using Power BI and Tableau.",
      "Performed data cleaning, transformation, and automation with Python and SQL."
    ]
  },
  {
    title: "Data Analyst Intern",
    company: "Cubicus Technology",
    location: "Mumbai",
    period: "Jun 2024 – Mar 2025",
    type: "Internship",
    achievements: [
      "Prepared and cleaned large datasets, increasing data accuracy by 25% across key projects",
      "Supported senior analysts in conducting data analysis and generating business insights",
      "Helped design dashboards and visual reports using Excel, Power BI, and Tableau",
      "Collaborated with teams to gather data requirements and deliver ad hoc analytical support"
    ]
  },
  {
    title: "Data Research Intern",
    company: "UBS Forums",
    location: "Mumbai",
    period: "Sep 2023 – Apr 2024",
    type: "Internship",
    achievements: [
      "Automated data cleaning processes, increasing data accuracy, and reducing manual effort by 20%",
      "Assisted in preparing research reports and databases for internal use",
      "Conducted secondary research and data extraction to support business strategy and event planning"
    ]
  }
];

const Experience = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Work Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey in data analysis and business intelligence
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-neon-blue" />
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start gap-8">
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg" />
                  </div>
                  
                  {/* Content */}
                  <Card className="flex-1 p-6 hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50 animate-fade-in">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-primary font-semibold">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col lg:items-end gap-2 mt-2 lg:mt-0">
                        <Badge variant="secondary" className="w-fit">
                          {exp.type}
                        </Badge>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-2 flex-shrink-0">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;