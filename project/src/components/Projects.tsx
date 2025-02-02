import React from 'react';
import { Github, ExternalLink, ChevronDown } from 'lucide-react';
import type { Project } from '../types/portfolio';

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('contact');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="relative py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-gray-100 pr-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
            >
              {project.imageUrl && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer animate-bounce-subtle"
        onClick={scrollToNextSection}
      >
        <ChevronDown className="w-8 h-8 text-indigo-600" />
      </div>
    </section>
  );
}
