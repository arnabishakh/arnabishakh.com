
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const educations = [
    {
      institution: "AMERICAN INTERNATIONAL UNIVERSITY-BANGLADESH",
      degree: "Bachelor of Science in Computer Science and Engineering",
      period: "2021 - Present",
      cgpa: "3.82 (out of 4.00)",
      major: "Software Engineering",
      additionalInfo: [
        "Dean's List Honors (AIUB) - Awarded for exceptional academic performance.",
      ]
    },
    {
      institution: "DHAKA RESIDENTIAL MODEL COLLEGE",
      degree: "Secondary and Higher Secondary Education",
      period: "2017 - 2019",
      grade: "A+ (GPA 5.00) Both SSC & HSC",
      skills: ["Team Leadership", "C Programming", "HTML Scripting", "Microsoft Office", "Adobe Premiere Pro & Photoshop"],
      activities: ["Olympiad", "Cricket", "Quiz Competitions", "Art & Craft"]
    }
  ];

  return (
    <section id="education" className="bg-portfolio-light py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Education</h2>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          {educations.map((education, index) => (
            <Card key={index} className="shadow-lg border-none animate-fade-in">
              <CardHeader className="bg-portfolio-dark text-white rounded-t-lg">
                <CardTitle className="text-xl">{education.institution}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div>
                      <h3 className="font-bold text-portfolio-dark">{education.degree}</h3>
                      {education.major && (
                        <p className="text-sm text-portfolio-gray">Major: {education.major}</p>
                      )}
                    </div>
                    <Badge className="bg-portfolio-purple text-white self-start md:self-auto mt-2 md:mt-0">
                      {education.period}
                    </Badge>
                  </div>
                  
                  {(education.cgpa || education.grade) && (
                    <div className="bg-portfolio-light rounded-lg p-4">
                      <span className="font-medium text-portfolio-dark">
                        {education.cgpa ? `CGPA: ${education.cgpa}` : `Grade: ${education.grade}`}
                      </span>
                    </div>
                  )}
                  
                  {education.skills && education.skills.length > 0 && (
                    <div className="mt-4">
                      <p className="font-medium text-portfolio-dark mb-2">Skills:</p>
                      <div className="flex flex-wrap gap-2">
                        {education.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="border-portfolio-purple text-portfolio-dark">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {education.activities && education.activities.length > 0 && (
                    <div className="mt-4">
                      <p className="font-medium text-portfolio-dark mb-2">Activities:</p>
                      <div className="flex flex-wrap gap-2">
                        {education.activities.map((activity, activityIndex) => (
                          <Badge key={activityIndex} variant="outline" className="border-portfolio-purple text-portfolio-dark">
                            {activity}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {education.additionalInfo && education.additionalInfo.length > 0 && (
                    <div className="mt-4">
                      <p className="font-medium text-portfolio-dark mb-2">Certifications:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        {education.additionalInfo.map((info, infoIndex) => (
                          <li key={infoIndex} className="text-portfolio-gray">{info}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
