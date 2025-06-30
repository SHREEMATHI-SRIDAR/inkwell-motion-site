import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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

  const [activeCategory, setActiveCategory] = useState('NPTEL');

  const certificates = {
    NPTEL: [
      {
        title: 'Data Mining',
        image: '../public/certificates/Data Mining.pdf',
      },
      {
        title: 'Google Cloud Computing Foundations',
        image: '../public/certificates/Google Cloud Computing Foundations.pdf',
      },
      {
        title: 'Social Network Analysis',
        image: '../public/certificates/Social Network Analysis.pdf',
      },
    ],
    Workshops: [
      {
        title: 'AI Intensified Scientific Accelerated Computing',
        image: '/certificates/5-DAY WORKSHOP.png',
      },
      {
        title: 'Cloud Computing Symposium',
        image: '/certificates/symposium-cloud.png',
      },
    ],
    International_Certification: [
      {
        title: 'Java Certified Foundations Associate',
        image: '../public/certificates/Oracle certification.pdf',
      },
    ],
    Others: [
      {
        title: 'Pragati: Path to Future - INFOSYS',
        image: '/certificates/PRAGTHI PATH TO SUCCESS.pdf',
      },
    ],
  };

  const categories = ['NPTEL', 'Workshops', 'International_Certification', 'Others'];

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

          <div className={`mt-10 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Education</h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Mepco Schlenk Engineering College, Sivakasi</strong><br />
                Bachelor of Engineering in Computer Science (Honours - Cyber Security)<br />
                CGPA: 8.55
              </li>
              <li>
                <strong>St. Joseph’s Girls Higher Secondary School, Dindigul</strong><br />
                HSC: 95.6%<br />
                SSLC: 94.33%
              </li>
            </ul>
          </div>

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

      {/* Certificates Section */}
      <section id="certificates" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Certificates</h2>

          <div className="flex justify-center mb-6 space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full font-medium ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-800 border'
                } transition-all duration-300`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {certificates[activeCategory].map((cert, idx) => (
              <Card key={idx} className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {cert.image.endsWith('.pdf') ? (
                    <a
                      href={cert.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-blue-600 hover:underline"
                    >
                      View PDF
                    </a>
                  ) : (
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-48 object-contain rounded-lg"
                    />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutSection;
