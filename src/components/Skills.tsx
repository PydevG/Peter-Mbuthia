
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    "Problem Solving", 
    "Critical Thinking", 
    "Backend Development", 
    "API Development", 
    "Data Science", 
    "Graphics Designing"
  ];
  
  const languages = ["Python", "HTML", "Dynamics365", "C#"];
  const frameworks = ["Django", "FastAPI", "Bootstrap"];
  const certifications = ["Crowdsource ML Learning"];
  
  return (
    <section id="skills" className="py-16">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg border-none h-full">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center text-primary">
                <CheckCircle className="mr-2 h-5 w-5" /> Technical Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
              
              <h3 className="text-xl font-bold mt-8 mb-6 flex items-center text-primary">
                <CheckCircle className="mr-2 h-5 w-5" /> Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {lang}
                  </Badge>
                ))}
              </div>
              
              <h3 className="text-xl font-bold mt-8 mb-6 flex items-center text-primary">
                <CheckCircle className="mr-2 h-5 w-5" /> Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                {frameworks.map((framework, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {framework}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg border-none h-full">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center text-primary">
                <CheckCircle className="mr-2 h-5 w-5" /> Certifications
              </h3>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
              
              <h3 className="text-xl font-bold mt-8 mb-6 flex items-center text-primary">
                <CheckCircle className="mr-2 h-5 w-5" /> Personal Interests
              </h3>
              <div className="grid grid-cols-2 gap-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                  <span>Photography</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                  <span>Graphics</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                  <span>Tech Blogs and Podcasts</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                  <span>Entrepreneurship</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mt-8 mb-6 flex items-center text-primary">
                <CheckCircle className="mr-2 h-5 w-5" /> Languages
              </h3>
              <div className="grid grid-cols-2 gap-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                  <span>English</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                  <span>Swahili</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
