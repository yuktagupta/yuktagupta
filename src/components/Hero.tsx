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
              <h2 className="text-2xl text-foreground font-bold font-sans text-left lg:text-2xl">Turning Complex Data Into Meaningful Stories</h2>
            </div>
            
            <p className="text-muted-foreground max-w-2xl leading-relaxed text-base">I’m a Data Analyst passionate about transforming raw data into clear insights. Using Python, SQL, Excel, Power BI, and Tableau, I build dashboards, automate reports, and help businesses understand their data better. I’m dedicated to learning, growing, and creating meaningful analytics solutions.</p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-all duration-300 font-semibold" asChild>
                <a href="https://drive.google.com/uc?export=download&id=1nCTDADRLICqzT2LYic8nycBvyGqP_gkT" target="_blank" rel="noopener noreferrer">
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
                <a href="https://github.com/yuktagupta333" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 animate-glow" />
              <img src="/lovable-uploads/yukta-profile-new.jpg" alt="Yukta Gupta" className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover object-top rounded-full border-4 border-primary shadow-[0px_4px_10px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;