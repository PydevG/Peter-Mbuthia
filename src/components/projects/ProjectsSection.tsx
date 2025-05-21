
import React, { useState } from "react";
import FilterButtons from "./FilterButtons";
import ProjectList from "./ProjectList";
import projectsData from "./ProjectsData";
import { ProjectCategory } from "./types";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
  const [imageError, setImageError] = useState<Record<number, boolean>>({});
  
  const filteredProjects = activeFilter === "all" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);
  
  const handleImageError = (projectId: number) => {
    setImageError(prev => ({
      ...prev,
      [projectId]: true
    }));
  };
  
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          
          <FilterButtons 
            activeFilter={activeFilter} 
            setActiveFilter={setActiveFilter} 
          />
        </div>
        
        <ProjectList 
          filteredProjects={filteredProjects}
          imageError={imageError}
          handleImageError={handleImageError}
          activeFilter={activeFilter}
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
