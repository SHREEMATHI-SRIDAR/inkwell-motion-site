
import { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'MEAN', level: 80 },
    { name: 'MERN', level: 80 },
    { name: 'JAVA', level: 80 },
    { name: 'MYSQL', level: 90 },
    { name: 'CYBER SECURITY', level: 70 },
    
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            About Me
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Passionate Developer with a Creative Edge
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I’m a passionate Computer Science graduate with a solid foundation in software development, algorithms, and analytical problem-solving. I thrive in dynamic environments where innovation meets impact.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
With hands-on experience in building scalable solutions and a strong drive to continuously learn and adapt, I aim to contribute meaningfully to forward-thinking teams. I'm eager to apply my technical expertise to real-world challenges and grow as a well-rounded technology professional in today’s ever-evolving industry.
            </p>
            <div className="flex flex-wrap gap-3">
              {['MEAN', 'MERN', 'JAVA', 'CYBERSECURITY'].map((tech, index) => (
                <span
                  key={tech}
                  className={`px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium transition-all duration-300 delay-${index * 100} ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Skills & Expertise</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-gray-500 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000 delay-${index * 200 + 700} ${
                        isVisible ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
