
import React from "react";
import { Button } from "@/components/ui/button";
import { Code, Image } from "lucide-react";
import { ProjectCategory } from "./types";

interface FilterButtonsProps {
  activeFilter: ProjectCategory;
  setActiveFilter: (filter: ProjectCategory) => void;
}

const FilterButtons = ({ activeFilter, setActiveFilter }: FilterButtonsProps) => {
  return (
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
  );
};

export default FilterButtons;
