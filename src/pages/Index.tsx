import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Experience />
      <Education />
      <Skills />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
