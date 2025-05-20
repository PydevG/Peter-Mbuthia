
import React from "react";
import { Code, Image } from "lucide-react";
import { Project } from "./types";

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Mercy Safe Haven Academy",
    description: "Developed a comprehensive school website for Mercy Safe Haven Academy featuring academic programs, admissions information, and an interactive events calendar.",
    category: "web",
    categoryIcon: <Code className="h-5 w-5" />,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    technologies: ["Django", "Python", "MySQL", "Bootstrap"],
    link: "https://www.mercysafehavenacademy.edu"
  },
  {
    id: 2,
    title: "Tanolope Dairy Consultants",
    description: "Created a modern company website for Tanolope Dairy Consultants showcasing their services, expertise, and client success stories.",
    category: "web",
    categoryIcon: <Code className="h-5 w-5" />,
    image: "/lovable-uploads/677f8e2d-e7fb-4f15-9472-48eacf881814.png",
    technologies: ["Django", "Python", "Bootstrap", "JavaScript"],
    link: "https://www.tanolopedairy.com"
  },
  {
    id: 3,
    title: "EUNCCU Website",
    description: "Served as backend developer for Egerton University Njoro Campus Christian Union website implementing user authentication, content management, and database architecture.",
    category: "web",
    categoryIcon: <Code className="h-5 w-5" />,
    image: "/lovable-uploads/eunccu.PNG",
    technologies: ["Django", "Python", "MySQL", "RESTful API"],
    link: "https://eunccu.org"
  },
  {
    id: 4,
    title: "E-Library System",
    description: "Developed a comprehensive digital library system with features for book cataloging, user borrowing, and administrative management.",
    category: "web",
    categoryIcon: <Code className="h-5 w-5" />,
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
    technologies: ["Django", "Python", "MySQL", "Bootstrap"],
    link: "https://elibrary-project.com"
  },
  {
    id: 5,
    title: "Context Expert Agencies",
    description: "Built a professional company website for Context Expert Agencies with service listings, team profiles, and client testimonial features.",
    category: "web",
    categoryIcon: <Code className="h-5 w-5" />,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    technologies: ["Django", "Python", "JavaScript", "Bootstrap"],
    link: "https://contextexpertagencies.com"
  },
  {
    id: 6,
    title: "Church Management System",
    description: "Developed a comprehensive system for church administration including membership management, event scheduling, and financial tracking.",
    category: "web",
    categoryIcon: <Code className="h-5 w-5" />,
    image: "/lovable-uploads/6d17cc97-1b46-4a8e-9a9b-c811dafea809.png",
    technologies: ["Django", "Python", "MySQL", "Bootstrap", "JavaScript"],
    link: "https://churchmanagement-demo.com"
  },
  {
    id: 7,
    title: "Blog CMS",
    description: "Created a content management system that allows users to create, edit, and manage blog posts with a custom Django admin interface and database optimization.",
    category: "web",
    categoryIcon: <Code className="h-5 w-5" />,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    technologies: ["Django", "Python", "MySQL"],
    link: "https://www.stalog.cloud/"
  },
  {
    id: 8,
    title: "Brand Identity Design",
    description: "Complete brand identity package for a local business including logo, color scheme, and brand guidelines.",
    category: "design",
    categoryIcon: <Image className="h-5 w-5" />,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
    technologies: ["Illustrator", "Photoshop"]
  },
  {
    id: 9,
    title: "Nature Photography Collection",
    description: "A series of nature photographs capturing landscapes and wildlife in Kenya.",
    category: "photo",
    categoryIcon: <Image className="h-5 w-5" />,
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    technologies: ["Photography", "Lightroom"]
  }
];

export default projectsData;
