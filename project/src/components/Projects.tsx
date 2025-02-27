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
    <section id="projects" className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-black to-indigo-950">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-white [text-shadow:0_0_20px_rgba(99,102,241,0.5)]">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-h-[500px] sm:max-h-[550px] md:max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-indigo-950/50 pr-2 sm:pr-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-gradient-to-br from-indigo-950/50 to-purple-950/50 rounded-xl overflow-hidden border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]"
            >
              {project.imageUrl && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              )}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm bg-indigo-950/50 text-indigo-300 rounded-full border border-indigo-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 sm:gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-indigo-400 transition-colors"
                    >
                      <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-indigo-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div 
        className="absolute bottom-4 left-1/2 -translate-x-1/2 cursor-pointer animate-bounce-subtle"
        onClick={scrollToNextSection}
      >
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-400" />
      </div>
    </section>
  );
}
