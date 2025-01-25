import React from 'react';
import type { Experience } from '../types/portfolio';

interface ExperienceProps {
  experiences: Experience[];
}

export function Experience({ experiences }: ExperienceProps) {
  return (
    <section id="experience" className="relative py-20 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-black/[0.02] -z-1" />
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 animate-fade-in">
          Professional Journey
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12 stagger-children">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-indigo-600 to-purple-600" />
                <div className="absolute -left-2 top-0 w-5 h-5">
                  <div className="absolute w-full h-full rounded-full bg-white border-2 border-indigo-600 animate-pulse" />
                  <div className="absolute w-3 h-3 rounded-full bg-indigo-600 top-1 left-1" />
                </div>
                <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 glass-effect">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                      {exp.position} at {exp.company}
                    </h3>
                    <p className="text-gray-600">
                      {exp.startDate} - {exp.endDate}
                    </p>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {exp.description.map((desc, i) => (
                      <li
                        key={i}
                        className="transform transition-transform duration-300 hover:translate-x-2"
                      >
                        {desc}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-indigo-50 text-indigo-700 rounded-full transform transition-all duration-300 hover:scale-110 hover:bg-indigo-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}