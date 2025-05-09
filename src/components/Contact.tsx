
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Github, Linkedin, Mail, Facebook } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // This would be replaced with actual email sending functionality
    // For now, let's just show a toast notification
    console.log("Form submitted to bishakh99@gmail.com:", formData);
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/arnabishakh",
      icon: <Github className="h-6 w-6" />
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/arnabishakh/", 
      icon: <Linkedin className="h-6 w-6" />
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/arnabishakh",
      icon: <Facebook className="h-6 w-6" />
    },
    {
      name: "Email",
      url: "mailto:bishakh99@gmail.com",
      icon: <Mail className="h-6 w-6" />
    }
  ];

  return (
    <section id="contact" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <Card className="shadow-lg border-none h-full">
              <CardHeader>
                <CardTitle className="text-xl text-portfolio-dark">Contact Information</CardTitle>
                <CardDescription>Feel free to reach out to me anytime</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-portfolio-light p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-portfolio-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-portfolio-dark">Phone</h3>
                      <p className="text-portfolio-gray">+88 01754-649180</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-portfolio-light p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-portfolio-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-portfolio-dark">Email</h3>
                      <p className="text-portfolio-gray">bishakh99@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-portfolio-light p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-portfolio-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-portfolio-dark">Location</h3>
                      <p className="text-portfolio-gray">Dhaka, Bangladesh</p>
                    </div>
                  </div>
                  
                  <div className="pt-6">
                    <h3 className="font-medium text-portfolio-dark mb-4">Connect with me</h3>
                    <div className="grid grid-cols-4 gap-4">
                      {socialLinks.map((link, index) => (
                        <a 
                          key={index}
                          href={link.url}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex flex-col items-center group"
                        >
                          <div className="bg-portfolio-light p-4 rounded-full group-hover:bg-portfolio-purple group-hover:text-white transition-colors duration-300">
                            {link.icon}
                          </div>
                          <span className="mt-2 text-sm text-portfolio-dark group-hover:text-portfolio-purple transition-colors duration-300">
                            {link.name}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="animate-fade-in">
            <Card className="shadow-lg border-none h-full">
              <CardHeader>
                <CardTitle className="text-xl text-portfolio-dark">Send a Message</CardTitle>
                <CardDescription>Fill out the form below to send me a message</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4" action="mailto:bishakh99@gmail.com" method="post" encType="text/plain">
                  <div>
                    <Input 
                      type="text" 
                      placeholder="Your Name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-portfolio-gray/30 focus:border-portfolio-purple"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Your Email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-portfolio-gray/30 focus:border-portfolio-purple"
                    />
                  </div>
                  <div>
                    <Input 
                      type="text" 
                      placeholder="Subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="border-portfolio-gray/30 focus:border-portfolio-purple"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Your Message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="border-portfolio-gray/30 focus:border-portfolio-purple min-h-[150px] resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="bg-portfolio-purple hover:bg-portfolio-purple/90 text-white w-full"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
