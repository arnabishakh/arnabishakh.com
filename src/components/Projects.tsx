
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Unlocking Myopia Detection",
      description: "Leveraging Deep Learning for Accurate Diagnosis (2023)",
      supervisor: "DR. DEBAJYOTI KARMAKER, ASSOCIATE PROFESSOR, AIUB",
      skills: ["Python", "TensorFlow", "Keras", "PyTorch", "Deep Learning", "Computer Vision", "Research Skills"],
      color: "bg-gradient-to-br from-purple-50 to-indigo-50"
    },
    {
      title: "Green Dhaka",
      description: "Creating greenery on rooftops & offering assistance by training the unemployed but eligible people (2023-24)",
      supervisor: "MD. AL-AMIN, ASSISTANT PROFESSOR, AIUB & FARZANA BENTE ALAM, LECTURER, AIUB",
      skills: ["Software Engineering", "HTML", "PHP", "Javascript", "AJAX", "JSON"],
      color: "bg-gradient-to-br from-green-50 to-emerald-50"
    },
    {
      title: "Fitness Tracker",
      description: "(2024)",
      supervisor: "TANVIR AHMED, ASSISTANT PROFESSOR, AIUB",
      skills: [".NET Full Stack Development", "N Layer Architecture"],
      color: "bg-gradient-to-br from-blue-50 to-sky-50"
    },
    {
      title: "Skillup",
      description: "Learning Management System (2024)",
      supervisor: "SAZZAD HOSSAIN, ASSISTANT PROFESSOR, AIUB",
      skills: ["ReactJS", "NestJS", "NextJS"],
      color: "bg-gradient-to-br from-amber-50 to-yellow-50"
    },
    {
      title: "Graphics Designer & Video Editor",
      description: "Illustrax (Self-owned) (2019-)",
      link: "facebook.com/illustraxx",
      skills: ["Adobe Photoshop", "Illustrator", "Premier Pro"],
      color: "bg-gradient-to-br from-pink-50 to-rose-50"
    },
    {
      title: "Ensemble Learning for Intrusion Detection",
      description: "Evaluating the efficacy of Ensemble Learning with Meta Learners in Hybrid Machine Learning Frameworks for Intrusion Detection in Evolving Multifaceted IoT Environments utilising IPFS (2024-2025)",
      supervisor: "SIFAT RAHMAN AHONA, ASSISTANT PROFESSOR, AIUB",
      skills: ["Machine Learning", "Ensembled Learning", "Cyber Security", "Blockchain", "Python", "PyTorch"],
      color: "bg-gradient-to-br from-orange-50 to-red-50"
    }
  ];

  return (
    <section id="projects" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Work & Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`shadow-lg border-none hover:shadow-xl transition-shadow animate-fade-in ${project.color}`}
            >
              <CardHeader>
                <CardTitle className="text-xl text-portfolio-dark">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {project.supervisor && (
                  <p className="text-sm text-portfolio-gray mb-4">
                    <span className="font-medium">Supervisor:</span> {project.supervisor}
                  </p>
                )}
                {project.link && (
                  <p className="text-sm text-portfolio-gray mb-4">
                    <span className="font-medium">Link:</span>{" "}
                    <a 
                      href={`https://${project.link}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-portfolio-purple hover:underline"
                    >
                      {project.link}
                    </a>
                  </p>
                )}
              </CardContent>
              <CardFooter>
                <div className="flex flex-wrap gap-2">
                  {project.skills.slice(0, 3).map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="border-portfolio-purple text-portfolio-dark">
                      {skill}
                    </Badge>
                  ))}
                  {project.skills.length > 3 && (
                    <Badge variant="outline" className="border-portfolio-purple text-portfolio-dark">
                      +{project.skills.length - 3} more
                    </Badge>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
