import { useState } from 'react';
import { ExternalLink, Github, Apple } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  link?: string;
  github?: string;
  technologies: string[];
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Careem (Uber Inc.)",
      description: "The everything app for everyday needs. Rides, food, groceries, payments and more.",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1740&auto=format&fit=crop",
      category: "iOS",
      technologies: ["Swift", "UIKit", "RxSwift", "Google Maps", "Bitrise"],
      link: "https://apps.apple.com/us/app/careem-rides-food-more/id592978487"
    },
    {
      id: 2,
      title: "Droobi Health",
      description: "Leading chronic disease management platform tailored for the Arabic-speaking region.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1740&auto=format&fit=crop",
      category: "iOS",
      technologies: ["Swift", "UIKit", , "Firebase", "Jenkins"],
      link: "https://apps.apple.com/us/app/droobi-health/id1258209665"
    },
    {
      id: 3,
      title: "Commonwealth",
      description: "Investment platform allowing users to invest in athletes' careers starting at $50/share.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1740&auto=format&fit=crop",
      category: "Flutter",
      technologies: ["Flutter", "Dart", "Firebase", "Github Actions", "Core Data"],
      link: "https://apps.apple.com/us/app/cmnwlth/id1484029029"
    },
    {
      id: 4,
      title: "Casa Shares",
      description: "Real estate investment app enabling portfolio building with as low as $100/share.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1740&auto=format&fit=crop",
      category: "iOS",
      technologies: ["SwiftUI", "Combine", "Core Data", "Charts", "Github Actions"],
      link: "https://apps.apple.com/ie/app/casa-shares/id6667117553"
    },
    {
      id: 5,
      title: "Bookr",
      description: "A new way of booking, Bookr makes scheduling appointments rewarding. Through Bookr, you can discover new beauty spots, read real reviews and book appointments instantly with just a touch of a button. No dialing required!",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1740&auto=format&fit=crop",
      category: "React Native",
      technologies: ["React Native", "Expo", "Charts", "GraphQL"],
      link: "https://apps.apple.com/us/app/bookr-for-salons-and-spas/id984497050"
    }
  ];

  const categories = ["All", ...new Set(projects.map(project => project.category))];
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            iOS <span className="text-teal-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my iOS native/hybrid application development expertise
          </p>
        </div>
        
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-5 py-2 rounded-full ${
                activeCategory === category
                  ? "bg-teal-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              } transition-colors`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-medium text-teal-600 uppercase mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.link && (
                    <a 
                      href={project.link} 
                      className="flex items-center gap-1 text-teal-600 hover:text-teal-800 transition-colors font-medium"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      <span>View Project</span>
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github} 
                      className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors font-medium"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
