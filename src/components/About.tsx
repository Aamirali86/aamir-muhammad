
import { Code, Apple, SwissFranc, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    { name: "iOS Development", level: 95 },
    { name: "Flutter", level: 90 },
    { name: "SwiftUI", level: 90 },
    { name: "UIKit", level: 95 },
    { name: "RxSwift", level: 90 },
    { name: "Kotlin", level: 85 },
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            About <span className="text-teal-600">Me</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transforming ideas into exceptional mobile experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              My Journey
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                After completing my graduate studies in food science, I discovered my true passion 
                in mobile app development. What started as exploration turned into a fulfilling 
                12+ year career in creating innovative mobile solutions.
              </p>
              <p>
                I find joy in the rapid transformation of ideas into working prototypes, 
                specializing in both iOS and Flutter development. My expertise spans across 
                Swift, Kotlin, React Native, and Flutter, allowing me to create versatile 
                and powerful mobile applications.
              </p>
              <p>
                With extensive experience in iOS SDK, including UIKit, SwiftUI, Core Data, 
                and RxSwift, I focus on building scalable applications following SOLID principles 
                and modern architectural patterns like MVVM and Viper.
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
              <h4 className="text-xl font-bold text-gray-900 mb-3">iOS Development</h4>
              <p className="text-gray-600">
                Expert in UIKit, SwiftUI, and iOS SDK for building scalable applications
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Flutter Development</h4>
              <p className="text-gray-600">
                Creating cross-platform applications with Flutter and Dart
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <SwissFranc size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Architecture Design</h4>
              <p className="text-gray-600">
                Implementing SOLID principles and modern architectural patterns
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">CI/CD Pipeline</h4>
              <p className="text-gray-600">
                Automating deployment and ensuring seamless app updates
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
