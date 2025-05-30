
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ImageOff } from "lucide-react";
import { Project } from "./types";

interface ProjectCardProps {
  project: Project;
  imageError: Record<number, boolean>;
  onImageError: (projectId: number) => void;
}

const ProjectCard = ({ project, imageError, onImageError }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="h-48 overflow-hidden relative">
        {imageError[project.id] ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-800">
            <ImageOff className="h-10 w-10 text-gray-400 mb-2" />
            <p className="text-sm text-gray-500">Image unavailable</p>
          </div>
        ) : (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            onError={() => onImageError(project.id)}
          />
        )}
      </div>
      <CardContent className="p-6 flex-grow">
        <div className="flex items-center mb-4">
          <Badge variant="outline" className="flex items-center gap-1 text-primary border-primary">
            {project.categoryIcon}
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
  );
};

export default ProjectCard;
