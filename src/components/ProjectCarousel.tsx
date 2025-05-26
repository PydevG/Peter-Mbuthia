
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Image } from "lucide-react";

interface DesignProject {
  id: number;
  title: string;
  image: string;
  category: string;
}

const ProjectCarousel = () => {
  const designProjects: DesignProject[] = [
    {
      id: 1,
      title: "EUNCCU Church Event Posters",
      image: "/lovable-uploads/5a518395-205e-4502-ba16-4381545c49ab.webp",
      category: "Event Design"
    },
    {
      id: 2,
      title: "University Christian Union Poster",
      image: "/lovable-uploads/7088983a-2809-4c2b-ae5e-c40459289065.webp",
      category: "Event Design"
    },
    {
      id: 3,
      title: "Tanolope Dairy Website Promo",
      image: "/lovable-uploads/677f8e2d-e7fb-4f15-9472-48eacf881814.webp",
      category: "Web & Graphic Design"
    },
    {
      id: 4,
      title: "Church Weekend Services Poster",
      image: "/lovable-uploads/6b8ba1c8-b1a1-42cc-aab5-f32e2e51cfca.webp",
      category: "Event Design"
    },
    {
      id: 5,
      title: "Christian Theme Poster",
      image: "/lovable-uploads/fdb0f89f-a7ce-4982-ba64-e6e7c00e3c44.webp",
      category: "Event Design"
    },
    {
      id: 6,
      title: "Bible Study Promotional Poster",
      image: "/lovable-uploads/6d17cc97-1b46-4a8e-9a9b-c811dafea809.webp",
      category: "Event Design"
    },
    {
      id: 7,
      title: "Youth Ministry Event Flyer",
      image: "/lovable-uploads/f06f5243-e8f3-4b06-a163-04ae9bcb9069.webp",
      category: "Event Design"
    },
    {
      id: 8,
      title: "School Election Campaign Poster",
      image: "/lovable-uploads/42277f2f-cf29-4ec5-9372-e82faa44defd.webp",
      category: "Promotional Design"
    },
    {
      id: 9,
      title: "Church Event Promotional Banner",
      image: "/lovable-uploads/ce5e1eaa-d3b8-489d-9989-55776ad71c4f.webp",
      category: "Event Design"
    },
    {
      id: 10,
      title: "Wedding Pre-Invitation Design",
      image: "/lovable-uploads/62965e4e-e38c-4b7e-94f5-b0607de7e888.webp",
      category: "Invitation Design"
    },
    {
      id: 11,
      title: "Wedding Save the Date Design",
      image: "/lovable-uploads/6a4a7a15-574b-45b3-80d3-57dcc9d8b5cb.webp",
      category: "Invitation Design"
    }
  ];

  return (
    <div className="w-full">
      <h3 className="text-xl font-semibold mb-6 flex items-center">
        <Image className="mr-2 h-5 w-5" /> Design Portfolio
      </h3>
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {designProjects.map((project) => (
            <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
              <Card className="border-none shadow-lg">
                <CardContent className="p-0">
                  <div className="relative">
                    <AspectRatio ratio={3/4} className="bg-muted">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="rounded-t-lg object-cover w-full h-full"
                      />
                    </AspectRatio>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <div className="space-y-1">
                        <Badge variant="secondary" className="bg-primary/20 text-primary">
                          {project.category}
                        </Badge>
                        <h4 className="text-white font-medium text-sm truncate">
                          {project.title}
                        </h4>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4">
          <CarouselPrevious className="relative static mr-2 translate-y-0" />
          <CarouselNext className="relative static ml-2 translate-y-0" />
        </div>
      </Carousel>
    </div>
  );
};

export default ProjectCarousel;
