
import { ReactElement } from "react";

export type ProjectCategory = "all" | "web" | "design" | "photo";

export interface Project {
  id: number;
  title: string;
  description: string;
  category: "web" | "design" | "photo";
  categoryIcon?: ReactElement;
  image: string;
  technologies: string[];
  link?: string;
}
