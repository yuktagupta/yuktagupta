import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { useState } from "react";
import Chat from "./Chat";
const contactInfo = [{
  icon: Mail,
  label: "Email",
  value: "yuktagupta333@gmail.com",
  href: "mailto:yuktagupta333@gmail.com",
  color: "neon-teal"
}, {
  icon: Phone,
  label: "Phone",
  value: "+91 9987014007",
  href: "tel:+919987014007",
  color: "neon-purple"
}, {
  icon: Github,
  label: "GitHub",
  value: "Github",
  href: "https://github.com/yuktagupta",
  color: "neon-blue"
}, {
  icon: Linkedin,
  label: "LinkedIn",
  value: "LinkedIn",
  href: "https://linkedin.com/in/yuktagupta333",
  color: "neon-green"
}];
const Contact = () => {
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      await emailjs.send('service_qfcmqis',
      // Service ID
      'template_ynhrlxl',
      // Template ID
      {
        from_name: formData.get('name'),
        from_email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
      }, 'Ble7TJa1jaDi9mPSz' // Public Key
      );
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon."
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm available for freelancing and open to discussing data analytics opportunities
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Let's Connect
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              return <Card key={index} className="p-4 hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50 group">
                    <a href={contact.href} target={contact.href.startsWith('http') ? '_blank' : undefined} rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-${contact.color}/20 group-hover:bg-${contact.color}/30 transition-colors duration-300`}>
                        <IconComponent className={`h-5 w-5 text-${contact.color}`} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{contact.label}</p>
                        <p className="text-foreground font-medium group-hover:text-primary transition-colors duration-300 mx-0 px-0 my-0 text-sm">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  </Card>;
            })}
            </div>
            
            <div className="mt-8 p-6 bg-card/50 rounded-lg border border-border/50">
              <p className="text-center text-foreground">
                I'm <span className="text-neon-green font-semibold">available</span> for freelancing.
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="p-6">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Send me a message
            </h3>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input id="name" name="name" placeholder="Your name" required className="border-border/50 focus:border-primary transition-colors duration-300" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" placeholder="your.email@example.com" required className="border-border/50 focus:border-primary transition-colors duration-300" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input id="subject" name="subject" placeholder="Project discussion" required className="border-border/50 focus:border-primary transition-colors duration-300" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea id="message" name="message" placeholder="Tell me about your project..." rows={4} required className="border-border/50 focus:border-primary transition-colors duration-300" />
              </div>
              
              <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300 font-semibold disabled:opacity-50">
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
      <Chat />
    </section>;
};
export default Contact;