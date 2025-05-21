
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, ExternalLink, Image, Database } from "lucide-react";

type ProjectCategory = "all" | "web" | "design" | "photo";

interface Project {
  id: number;
  title: string;
  description: string;
  category: "web" | "design" | "photo";
  image: string;
  technologies: string[];
  link?: string;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Mercy Safe Haven Academy",
      description: "Developed a comprehensive school website for Mercy Safe Haven Academy featuring academic programs, admissions information, and an interactive events calendar.",
      category: "web",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
      technologies: ["Django", "Python", "PostgreSQL", "Bootstrap"],
      link: "https://www.mercysafehavenacademy.edu"
    },
    {
      id: 2,
      title: "Tanolope Dairy Consultants",
      description: "Created a modern company website for Tanolope Dairy Consultants showcasing their services, expertise, and client success stories.",
      category: "web",
      image: "https://images.unsplash.com/photo-1565600425657-125a1f8948b2",
      technologies: ["Django", "Python", "Bootstrap", "JavaScript"],
      link: "https://www.tanolopedairy.com"
    },
    {
      id: 3,
      title: "EUNCCU Website",
      description: "Served as backend developer for Egerton University Njoro Campus Christian Union website implementing user authentication, content management, and database architecture.",
      category: "web",
      image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66",
      technologies: ["Django", "Python", "PostgreSQL", "RESTful API"],
      link: "https://eunccu.org"
    },
    {
      id: 4,
      title: "E-Library System",
      description: "Developed a comprehensive digital library system with features for book cataloging, user borrowing, and administrative management.",
      category: "web",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
      technologies: ["Django", "Python", "PostgreSQL", "Bootstrap"],
      link: "https://elibrary-project.com"
    },
    {
      id: 5,
      title: "Context Expert Agencies",
      description: "Built a professional company website for Context Expert Agencies with service listings, team profiles, and client testimonial features.",
      category: "web",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      technologies: ["Django", "Python", "JavaScript", "Bootstrap"],
      link: "https://contextexpertagencies.com"
    },
    {
      id: 6,
      title: "Church Management System",
      description: "Developed a comprehensive system for church administration including membership management, event scheduling, and financial tracking.",
      category: "web",
      image: "https://images.unsplash.com/photo-1600457307358-2704506ae589",
      technologies: ["Django", "Python", "PostgreSQL", "Bootstrap", "JavaScript"],
      link: "https://churchmanagement-demo.com"
    },
    {
      id: 7,
      title: "Blog CMS",
      description: "Created a content management system that allows users to create, edit, and manage blog posts with a custom Django admin interface and database optimization.",
      category: "web",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      technologies: ["Django", "Python", "PostgreSQL"],
      link: "https://www.stalog.cloud/"
    },
    {
      id: 8,
      title: "Brand Identity Design",
      description: "Complete brand identity package for a local business including logo, color scheme, and brand guidelines.",
      category: "design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
      technologies: ["Illustrator", "Photoshop"]
    },
    {
      id: 9,
      title: "Nature Photography Collection",
      description: "A series of nature photographs capturing landscapes and wildlife in Kenya.",
      category: "photo",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      technologies: ["Photography", "Lightroom"]
    }
  ];
  
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  const projectIcons = {
    web: <Code className="h-5 w-5" />,
    design: <Image className="h-5 w-5" />,
    photo: <Image className="h-5 w-5" />
  };
  
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              variant={activeFilter === "all" ? "default" : "outline"} 
              onClick={() => setActiveFilter("all")}
              className="px-6"
            >
              All
            </Button>
            <Button 
              variant={activeFilter === "web" ? "default" : "outline"} 
              onClick={() => setActiveFilter("web")}
              className="px-6"
            >
              <Code className="mr-2 h-4 w-4" /> Web Development
            </Button>
            <Button 
              variant={activeFilter === "design" ? "default" : "outline"} 
              onClick={() => setActiveFilter("design")}
              className="px-6"
            >
              <Image className="mr-2 h-4 w-4" /> Design
            </Button>
            <Button 
              variant={activeFilter === "photo" ? "default" : "outline"} 
              onClick={() => setActiveFilter("photo")}
              className="px-6"
            >
              <Image className="mr-2 h-4 w-4" /> Photography
            </Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6 flex-grow">
                <div className="flex items-center mb-4">
                  <Badge variant="outline" className="flex items-center gap-1 text-primary border-primary">
                    {projectIcons[project.category]}
                    {project.category === "web" ? "Web Development" : project.category === "design" ? "Design" : "Photography"}
                  </Badge>
                </div>
                <CardTitle className="mb-2">{project.title}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="px-2 py-0.5">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              {project.link && (
                <CardFooter className="p-6 pt-0">
                  <Button variant="outline" className="w-full" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      <ExternalLink className="h-4 w-4 mr-2" /> View Project
                    </a>
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
