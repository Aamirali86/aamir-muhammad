
import { Code, Apple, SwissFranc, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    { name: "SwiftUI", level: 90 },
    { name: "RxSwift", level: 85 },
    { name: "iOS Development", level: 80 },
    { name: "UIKit", level: 75 },
    { name: "Core Data", level: 70 },
    { name: "Swift", level: 95 },
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            About <span className="text-teal-600">Me</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate iOS developer creating innovative mobile experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              My iOS Development Journey
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                As a dedicated iOS native application developer, I specialize in creating 
                robust and performant mobile applications using SwiftUI and RxSwift.
              </p>
              <p>
                My expertise lies in building clean, maintainable code with a strong focus 
                on reactive programming principles and elegant user interfaces.
              </p>
              <p>
                I'm passionate about leveraging the latest iOS technologies to deliver 
                exceptional user experiences that push the boundaries of mobile development.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              My Skills
            </h3>
            <div className="space-y-5">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-teal-600 h-2 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">
            My Expertise
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Apple size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">SwiftUI Development</h4>
              <p className="text-gray-600">
                Creating modern, declarative user interfaces for iOS applications
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Reactive Programming</h4>
              <p className="text-gray-600">
                Implementing complex app logic using RxSwift and reactive patterns
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <SwissFranc size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">App Architecture</h4>
              <p className="text-gray-600">
                Designing clean, scalable, and maintainable iOS application architectures
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Performance Optimization</h4>
              <p className="text-gray-600">
                Ensuring smooth, efficient, and responsive iOS application performance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

