
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16 pb-8">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 to-transparent"></div>
      <div className="section-container relative z-10 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 animate-fade-in">
          <div className="space-y-2">
            <h2 className="text-lg md:text-xl font-medium text-primary">Hello, I'm</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Peter Mbuthia</h1>
            <p className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300">Software Developer</p>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-lg">
            I am a skilled software developer with expertise in building scalable, efficient, and robust applications with a strong foundation in web technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6"
              size="lg"
            >
              Contact Me
            </Button>
            <Button 
              variant="outline"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6"
              size="lg"
            >
              View Projects
            </Button>
          </div>
          <div className="flex items-center gap-4 pt-4">
            <a href="https://github.com/PydevG" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/peter-ndindi-003350359/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:peterndindi41@gmail.com" className="text-gray-600 hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
        <div className="relative mx-auto md:ml-auto">
          <div className="bg-gradient absolute inset-0 rounded-full blur-3xl opacity-20"></div>
          <div className="bg-white dark:bg-gray-800 rounded-full h-64 w-64 md:h-72 md:w-72 border-4 border-purple-100 dark:border-purple-900 overflow-hidden shadow-xl relative mx-auto">
            <img 
              src="/lovable-uploads/photo-portrait.webp" 
              alt="Peter Mbuthia" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
