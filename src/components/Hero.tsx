import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
const Hero = () => {
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-neon-teal font-medium tracking-wide">Hello, I'm</p>
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Yukta Gupta
              </h1>
              <h2 className="text-2xl text-foreground font-semibold lg:text-3xl">Data Analyst | Dashboard Creator | Business Analyst</h2>
            </div>
            
            <p className="text-muted-foreground max-w-2xl leading-relaxed text-base">Data Analyst with 1.5+ years of experience in data cleaning, exploratory data analysis, and dashboard creation using Python, SQL, Power BI, Tableau, and Excel. Proven track record of turning raw data into actionable insights, automating workflows, and supporting strategic business decisions. Adept at working in fast-paced, data-driven environments.</p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-all duration-300 font-semibold" asChild>
                <a href="https://drive.google.com/uc?export=download&id=1PPtxZG3oV5IWtq-eWDT-HLL-yEPJiZvs" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                View Projects
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <Button variant="ghost" size="icon" className="hover:bg-neon-teal hover:text-white transition-all duration-300" asChild>
                <a href="mailto:yuktagupta333@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-neon-blue hover:text-white transition-all duration-300" asChild>
                <a href="https://linkedin.com/in/yuktagupta333" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-neon-purple hover:text-white transition-all duration-300" asChild>
                <a href="https://github.com/yuktagupta" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 animate-glow" />
              <img src="/lovable-uploads/8500fd40-403a-410d-8470-98540666fc57.png" alt="Yukta Gupta" className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-primary shadow-2xl hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;