
import { ArrowDown } from 'lucide-react';
import { Code, Smartphone, Apple } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6">
          <span className="block">Hi, I'm</span>
          <span className="text-teal-600">Muhammad Aamir Ali</span>
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-display font-medium text-gray-700 mb-6">
          iOS & Flutter Developer <span className="text-amber-500">with 12+ Years Experience</span>
        </h2>
        
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10">
          Passionate mobile app developer specializing in iOS and Flutter development.
          Creating scalable, user-friendly applications with clean architecture and
          exceptional user experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#projects" 
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-md transition-colors font-medium text-center flex items-center justify-center gap-2"
          >
            <Code size={20} />
            View My Projects
          </a>
          <a 
            href="#contact" 
            className="bg-white hover:bg-gray-100 text-gray-900 border border-gray-300 px-8 py-3 rounded-md transition-colors font-medium text-center flex items-center justify-center gap-2"
          >
            <Smartphone size={20} />
            Contact Me
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#projects" className="flex flex-col items-center text-gray-600 hover:text-teal-600 transition-colors">
          <span className="mb-2 text-sm">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
