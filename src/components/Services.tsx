import { Card } from "@/components/ui/card";
import { BarChart3, Database, Brain, Server, Rocket } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Data Analysis & Visualization",
    description: "Cleaning, analyzing, and interpreting datasets using Python, SQL, and BI tools.",
    color: "neon-teal"
  },
  {
    icon: Database,
    title: "Interactive Dashboard Creation",
    description: "Designing dashboards for HR, sales, and business operations.",
    color: "neon-purple"
  },
  {
    icon: Brain,
    title: "AI & Machine Learning Solutions",
    description: "Predictive models, recommendation engines, generative AI apps using Gemini/OpenAI APIs.",
    color: "neon-blue"
  },
  {
    icon: Server,
    title: "API Development with FastAPI",
    description: "RESTful APIs and full-stack deployment with backend logic.",
    color: "neon-green"
  },
  {
    icon: Rocket,
    title: "End-to-End Project Deployment",
    description: "Hosting full-stack apps (e.g., StyleMatch.AI) using Next.js, FastAPI, Vercel, Koyeb.",
    color: "neon-purple"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive data solutions to drive your business forward
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/50 group animate-fade-in h-full">
                <div className="flex flex-col h-full">
                  <div className={`p-3 rounded-lg bg-${service.color}/20 group-hover:bg-${service.color}/30 transition-colors duration-300 w-fit mb-4`}>
                    <IconComponent className={`h-8 w-8 text-${service.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;