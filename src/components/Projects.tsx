
import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
  github?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Modern E-commerce Platform",
      description: "A fully responsive e-commerce website with product filtering, cart functionality, and secure checkout.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1664&auto=format&fit=crop",
      category: "Web Development",
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Brand Identity Design",
      description: "Complete brand identity package including logo design, color palette, typography, and brand guidelines.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1740&auto=format&fit=crop",
      category: "Design",
      link: "#"
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "User-friendly mobile banking application with secure authentication, transaction history, and bill payments.",
      image: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?q=80&w=1740&auto=format&fit=crop",
      category: "Mobile App",
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Portfolio Website Template",
      description: "Clean and modern portfolio website template for creatives, built with React and TailwindCSS.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1738&auto=format&fit=crop",
      category: "Web Development",
      link: "#",
      github: "#"
    },
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
            My <span className="text-teal-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise.
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
                <div className="flex gap-3">
                  <a 
                    href={project.link} 
                    className="flex items-center gap-1 text-teal-600 hover:text-teal-800 transition-colors font-medium"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    <span>View Project</span>
                  </a>
                  {project.github && (
                    <a 
                      href={project.github} 
                      className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors font-medium"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      <span>Code</span>
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
