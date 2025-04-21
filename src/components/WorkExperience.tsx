
import { Briefcase, Building, Calendar } from 'lucide-react';

const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      company: "Scalio",
      role: "Staff Software Engineer",
      period: "2021 - Present",
      description: "Core iOS application development with high standards from design to app store deployment.",
      highlights: [
        "Lead iOS application development with emphasis on quality and best practices",
        "Collaborated with DevOps team to establish CICD pipeline using Github Action and CircleCI",
        "Implementing high-standard iOS applications using modern Swift practices"
      ]
    },
    {
      id: 2,
      company: "Venturedive/Careem",
      role: "Senior Software Engineer",
      period: "2015 - 2021",
      description: "Senior developer role focusing on iOS development and team mentorship.",
      highlights: [
        "Mentored team members and monitored their progress towards objectives",
        "Implemented reactive programming using RxSwift and RxCocoa",
        "Developed generic and reusable repositories for multiple projects"
      ]
    },
    {
      id: 3,
      company: "Digital Dividend / Tradekey",
      role: "Software Engineer",
      period: "2012 - 2015",
      description: "Full-stack mobile development across iOS and Android platforms.",
      highlights: [
        "Developed instant messaging modules for mobile applications",
        "Built applications using Objective-C and Java for iOS and Android",
        "Implemented best practices in mobile development across platforms"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Work <span className="text-teal-600">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Over a decade of professional experience in mobile development
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp) => (
            <div 
              key={exp.id}
              className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Building className="text-teal-600" size={20} />
                    <h3 className="text-xl font-bold text-gray-900">{exp.company}</h3>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4 text-gray-600">
                    <Briefcase size={16} />
                    <span>{exp.role}</span>
                    <span className="mx-2">•</span>
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-teal-600 mt-1.5">•</span>
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
