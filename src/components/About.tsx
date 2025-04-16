
import { Code, Lightbulb, Layout, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    { name: "HTML & CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "UI/UX Design", level: 75 },
    { name: "Node.js", level: 70 },
    { name: "TypeScript", level: 65 },
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            About <span className="text-teal-600">Me</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know more about me, my background, and what I do.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              My Story
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Hello! I'm a passionate web developer and designer with over 5 years of experience
                creating beautiful digital experiences. I combine my technical knowledge with creative
                design thinking to build engaging and functional websites and applications.
              </p>
              <p>
                I specialize in front-end development with a focus on creating responsive, accessible,
                and performant web applications. I'm constantly learning and exploring new technologies
                to stay at the forefront of web development.
              </p>
              <p>
                When I'm not coding, you can find me exploring design trends, attending tech meetups,
                or hiking in the mountains. I believe in creating work that not only looks good but
                also delivers real value to users.
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
            What I Do
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Layout size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Web Design</h4>
              <p className="text-gray-600">
                Creating beautiful, intuitive designs focused on user experience and brand identity.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Web Development</h4>
              <p className="text-gray-600">
                Building responsive, performant websites and applications with modern technologies.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">UI/UX Design</h4>
              <p className="text-gray-600">
                Designing user interfaces and experiences that are both functional and delightful.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Performance Optimization</h4>
              <p className="text-gray-600">
                Optimizing websites for speed, accessibility, and search engine visibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
