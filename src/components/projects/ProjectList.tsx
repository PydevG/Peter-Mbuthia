
import React from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "./types";
import ProjectCarousel from "../ProjectCarousel";

interface ProjectListProps {
  filteredProjects: Project[];
  imageError: Record<number, boolean>;
  handleImageError: (projectId: number) => void;
  activeFilter: "all" | "web" | "design" | "photo";
}

const ProjectList = ({ 
  filteredProjects, 
  imageError, 
  handleImageError,
  activeFilter 
}: ProjectListProps) => {
  if (activeFilter === "design") {
    return <ProjectCarousel />;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProjects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          imageError={imageError}
          onImageError={handleImageError}
        />
      ))}
    </div>
  );
};

export default ProjectList;
