
import { Briefcase, Building, Calendar } from 'lucide-react';

const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      company: "Scalio",
      role: "Senior Software Engineer",
      period: "2021 - Present",
      description: "Core iOS application development with high standards from design to app store deployment.",
      highlights: [
        "Led the development of high-performance investment applications focused on live sports markets including horse racing, tennis, and golf, ensuring seamless real-time experiences for users.",
        "Built scalable and maintainable apps using MVVM-C and Clean Architecture, enabling modular codebases and facilitating easy feature expansion and testing.",
        "Utilized SwiftUI and UIKit in production-level apps, taking full advantage of declarative UI and Apple’s latest frameworks to deliver intuitive, modern user interfaces.",
        "Set up and maintained robust CI/CD pipelines using GitHub Actions and CircleCI, automating build, test, and deployment processes to ensure smooth release cycles.",
        "Leveraged RxSwift and Combine (where applicable) to architect complex reactive flows for live data streams, user interactions, and background syncing, making the apps more responsive and resilient."
      ]
    },
    {
      id: 2,
      company: "Venturedive/Careem",
      role: "Senior Software Engineer",
      period: "2015 - 2021",
      description: "Senior developer role focusing on iOS development and team mentorship.",
      highlights: [
        "Conducted regular code reviews, advocated for best practices in testing, and mentored junior engineers in architectural decisions and reactive programming paradigms",
        "Contributed to the development of major consumer apps including Careem, VistaJet, Bookr, and Munchies, each with unique business domains and complex technical challenges.",
        "Architected and implemented modular, reusable frameworks adopted across multiple clients and internal projects, accelerating development speed and maintaining consistency.",
        "Collaborated on React Native and Flutterprojects when needed, bridging native modules and contributing to hybrid app strategies.",
        "Championed clean code practices and peer code reviews, uplifting the team’s overall development standards and delivery confidence"
      ]
    },
    {
      id: 3,
      company: "Digital Dividend / Tradekey",
      role: "Software Engineer",
      period: "2012 - 2015",
      description: "Full-stack mobile development across iOS and Android platforms.",
      highlights: [
        "Engineered real-time messaging modules with seamless synchronization, delivery receipts, and push notifications, enhancing in-app communication across platforms.",
        "Developed native mobile applications using Objective-C (iOS) and Java (Android), with a focus on performance, maintainability, and platform-specific best practices.",
        "Applied industry-standard mobile development practices, including clean architecture, modular code, and automated testing to ensure consistency, scalability, and ease of future enhancements"
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
