import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "MS in Information Technology",
    institution: "University of Mumbai",
    period: "Aug 2023 – Jul 2025",
    status: "Completed",
    icon: GraduationCap
  },
  {
    degree: "BS in Information Technology",
    institution: "University of Mumbai",
    period: "Aug 2019 – Jul 2022",
    status: "Completed",
    icon: GraduationCap
  }
];

const Education = () => {
  return (
    <section className="py-20 bg-card/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Education
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic foundation in information technology and data science
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => {
            const IconComponent = edu.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50 animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/20 flex-shrink-0">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                      <h3 className="text-xl font-bold text-foreground">
                        {edu.degree}
                      </h3>
                      <Badge 
                        variant={edu.status === "Completed" ? "default" : "secondary"}
                        className={`w-fit mt-2 lg:mt-0 ${
                          edu.status === "Completed" 
                            ? "bg-green-600 text-white hover:bg-green-700 border-green-600" 
                            : ""
                        }`}
                      >
                        {edu.status}
                      </Badge>
                    </div>
                    
                    <p className="text-lg text-primary font-semibold mb-2">
                      {edu.institution}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;