
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, Brain, Eye, Database, Globe, BookOpen,
  Cpu, Network, Server, Cloud, Brush, Smartphone,
  Monitor,
  Phone
} from 'lucide-react';

const Skills = () => {
  

  const expertiseAreas = [
    {
      title: "Full Stack Development",
      icon: <Code className="text-white" size={24} />,
      description: ".NET . NodeJS . NestJS . ReactJS",
      bgClass: "bg-gradient-to-r from-purple-600 to-indigo-600"
    },
    {
      title: "Machine Learning",
      icon: <Brain className="text-white" size={24} />,
      description: "Python . TensorFlow . PyTorch",
      bgClass: "bg-gradient-to-r from-pink-500 to-rose-500"
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="text-white" size={24} />,
      description: "React Native(Basic)",
      bgClass: "bg-gradient-to-r from-emerald-500 to-teal-500"
    },
    {
      title: "Database Management",
      icon: <Database className="text-white" size={24} />,
      description: "PostgreSQL . MySQL . Oracle . MicrosoftSQL Server",
      bgClass: "bg-gradient-to-r from-amber-500 to-yellow-500"
    },
    {
      title: "Computer Vision",
      icon: <Cloud className="text-white" size={24} />,
      description: "Python . TensorFlow . Keras . PyTorch . Deep Learning",
      bgClass: "bg-gradient-to-r from-blue-500 to-cyan-500"
    },
    {
      title: "UI/UX Design",
      icon: <Monitor className="text-white" size={24} />,
      description: "Figma(Basic)",
      bgClass: "bg-gradient-to-r from-violet-500 to-purple-500"
    },
  ];

  const technologies = [
    ".NET (C#)", "ReactJS", "NestJS", "Python", "C++", "JAVA",
    "HTML", "PHP", "JavaScript", "AJAX", "JSON", "PostgreSQL", "MySQL", "Oracle",
    "MicrosoftSQL Server", "Machine Learning", "Computer Vision"
  ];

  return (
    <section id="skills" className="bg-portfolio-light py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {expertiseAreas.map((area, index) => (
            <Card key={index} className={`shadow-lg border-none overflow-hidden hover:shadow-xl transition-shadow animate-fade-in ${area.bgClass} text-white transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300`}>
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-full">
                  {area.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">
                    {area.title}
                  </h3>
                  <p className="text-white/80">
                    {area.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
       
        
        <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in">
          <h3 className="text-xl font-bold text-portfolio-dark mb-6 text-center">
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-portfolio-light text-portfolio-dark px-4 py-2 rounded-full text-sm font-medium hover:bg-portfolio-purple hover:text-white transition-colors transform hover:scale-105 cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
