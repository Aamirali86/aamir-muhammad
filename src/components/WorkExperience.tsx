
import { Briefcase, Building, Calendar } from 'lucide-react';

const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      company: "Uber Inc. (Careem)",
      role: "Senior iOS Developer",
      period: "2020 - Present",
      description: "Lead iOS developer for Careem (acquired by Uber), working on the super app that provides rides, food delivery, and payment services.",
      highlights: [
        "Led the development of key features using Swift and UIKit",
        "Implemented MVVM architecture and RxSwift for reactive programming",
        "Collaborated with cross-functional teams across multiple regions"
      ]
    },
    {
      id: 2,
      company: "Droobi Health",
      role: "iOS Team Lead",
      period: "2018 - 2020",
      description: "Led the iOS development team for the leading Arabic-region chronic disease management platform.",
      highlights: [
        "Architected and developed the iOS application using Swift",
        "Integrated HealthKit and Core Data for health metrics tracking",
        "Managed team of developers and established best practices"
      ]
    },
    {
      id: 3,
      company: "Commonwealth",
      role: "Senior Flutter Developer",
      period: "2017 - 2018",
      description: "Developed investment platform enabling users to invest in athletes' careers.",
      highlights: [
        "Built cross-platform application using Flutter and Dart",
        "Implemented real-time investment tracking features",
        "Integrated payment gateways and security measures"
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
