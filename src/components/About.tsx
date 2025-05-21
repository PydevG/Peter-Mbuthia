
import { Card, CardContent } from "@/components/ui/card";
import { User, Calendar, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Card className="shadow-lg border-none overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient p-1">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-t-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white">
                      <img 
                        src="/lovable-uploads/300c3ede-f95d-499c-8206-cfab97f37497.png" 
                        alt="Peter Mbuthia" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold">Peter Mbuthia</h3>
                      <p className="text-gray-500 dark:text-gray-400">Software Developer</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <User className="h-5 w-5 text-primary mr-3" />
                      <span>Bachelor of Science in Computer Science</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-primary mr-3" />
                      <span>Experience: 2022 - Present</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-primary mr-3" />
                      <span>Nakuru, Kenya</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">Professional Profile</h3>
            <p className="text-gray-600 dark:text-gray-300">
              I am a skilled software developer with expertise in building scalable, efficient, and robust applications with a strong foundation in web technologies and a focus on delivering clean, maintainable code.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              I specialize in creating seamless server-side solutions to power dynamic, user-centric platforms. I am also familiar with RESTful API Development as well as graphics designing.
            </p>
            <h4 className="text-xl font-semibold mt-6">Education</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h5 className="font-semibold">Egerton University</h5>
                  <p className="text-gray-600 dark:text-gray-400">Bachelor of Science in Computer Science</p>
                </div>
                <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">2022 - Current</span>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <h5 className="font-semibold">Chinga Boys High School</h5>
                  <p className="text-gray-600 dark:text-gray-400">Attained a B+</p>
                </div>
                <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">2018 - 2021</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
