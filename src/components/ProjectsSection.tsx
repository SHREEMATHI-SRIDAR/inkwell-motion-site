
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Linkedin, Mail } from 'lucide-react';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
   
    {
      title: 'Finance Management platform',
      description: 'A collaborative Finance Management platform with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '../public/image.png',
      tech: ['Angular', 'TypeScript', 'MongoDB', 'Node.Js'],
      github: 'https://github.com/SHREEMATHI-SRIDAR/FinanceManagement',
      live: 'https://example.com'
    },
     {
      title: 'Railway Ticket Vending System',
      description: 'A console-based Railway Ticket Vending System that allows admins to manage train schedules and passengers to book, cancel, or modify e-tickets.It simulates core ticketing operations with a user-friendly, menu-driven interface.',
      image: '../public/ooad.png',
      tech: ['Mysql','Java'],
      github: 'https://github.com/SHREEMATHI-SRIDAR/RailwayTicketVendingSystem',
      live: 'https://example.com'
    },
    {
      title: 'Theme Park Management System ',
      description: 'A Java AWT-based Theme Park Management System that enables customers to book ride tickets and allows admins to manage rides and system operations through a graphical interface',
      image: '../public/theme.png',
      tech: ['JavaAwt', 'MySql'],
      github: 'https://github.com/SHREEMATHI-SRIDAR/ThemePark-Management/tree/main/src/themepark',
      live: 'https://example.com'
    },
    {
      title: 'Spotify Database Management ',
      description: 'A Spotify Database Management System built with Java and Oracle Database, allowing users to search and listen to music while admins manage the overall system.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop',
      tech: ['Oracle Database','Java'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Featured Projects
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}></div>
          <p className={`text-gray-600 mt-4 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Here are some of my recent projects that showcase my skills and passion for creating innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`hover-lift group overflow-hidden transition-all duration-1000 delay-${index * 100 + 400} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
