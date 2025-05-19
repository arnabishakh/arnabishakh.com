
import { Button } from '@/components/ui/button';
import { FileDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-gradient-to-b from-white to-portfolio-light pt-20"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="flex flex-col items-start space-y-4 animation-delay-200 animate-fade-in">
              <span className="text-portfolio-gray text-lg">Hello, I'm</span>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-black">Arnab</span> <span className="text-portfolio-purple">Bishakh</span> <span className="block text-portfolio-dark">Sarker</span>
              </h1>
              <p className="text-xl md:text-2xl text-portfolio-gray">
                Full Stack Developer | .NET Framework | ReactJS NextJS | Machine Learning & Computer Vision Enthusiast
              </p>
              <div className="flex gap-4 mt-4">
                <Button className="bg-portfolio-dark hover:bg-opacity-90 text-white">
                  <a href="#contact">Contact Me</a>
                </Button>
                <Button variant="outline" className="border-portfolio-dark text-portfolio-dark hover:bg-portfolio-dark hover:text-white">
                  <FileDown className="mr-2" size={20} />
                  <a href="/CV.pdf">Download CV</a>
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end animation-delay-300 animate-fade-in">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-xl md:mr-20">
            <img 
              src="/bishakh.webp"
              alt="Arnab Bishakh Sarker" 
              className="w-full h-full object-cover"
            />
          </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a 
          href="#about" 
          className="animate-bounce bg-white p-2 w-10 h-10 ring-1 ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center"
        >
          <svg 
            className="w-6 h-6 text-portfolio-dark" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
