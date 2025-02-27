import React from 'react';
import type { Experience } from '../types/portfolio';

interface ExperienceProps {
  experiences: Experience[];
}

export function Experience({ experiences }: ExperienceProps) {
  return (
    <section id="experience" className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-black to-indigo-950 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-white [text-shadow:0_0_20px_rgba(99,102,241,0.5)]">
          Professional Journey
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-6 sm:pl-8 group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-indigo-600 to-purple-600 group-hover:scale-y-110 transition-transform origin-top" />
                <div className="absolute -left-1.5 sm:-left-2 top-0 w-4 sm:w-5 h-4 sm:h-5">
                  <div className="absolute w-full h-full rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 animate-pulse" />
                  <div className="absolute w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-indigo-600 top-1 left-1 group-hover:scale-150 transition-transform" />
                </div>
                <div className="group bg-gradient-to-br from-indigo-950/50 to-purple-950/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] hover:-translate-y-1">
                  <div className="mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                      {exp.position} at {exp.company}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400">
                      {exp.startDate} - {exp.endDate}
                    </p>
                  </div>
                  <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-300">
                    {exp.description.map((desc, i) => (
                      <li
                        key={i}
                        className="transform transition-all duration-300 hover:translate-x-2 hover:text-indigo-400"
                      >
                        {desc}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-indigo-950/50 text-indigo-300 rounded-full border border-indigo-500/20 transform transition-all duration-300 hover:scale-110 hover:border-indigo-500/40 hover:bg-indigo-900/30"
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
