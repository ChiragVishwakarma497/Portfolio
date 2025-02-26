import React from 'react';
import type { Skill } from '../types/portfolio';

interface SkillsProps {
  skills: Skill[];
}

export function Skills({ skills }: SkillsProps) {
  const categories = {
    'frontend': 'Programming Languages',
    'backend': 'Databases',
    'ai-data': 'AI & Data Science',
    'cloud': 'Cloud & Infrastructure',
    'tools': 'Tools & Technologies',
    'Soft-Skills': 'Soft-Skills'
  } as const;

  const renderSkills = (category: string, skills: Skill[]) => {
    const filteredSkills = skills.filter((skill) => skill.category === category);
    
    if (category === 'tools') {
      const midpoint = Math.ceil(filteredSkills.length / 2);
      const firstRow = filteredSkills.slice(0, midpoint);
      const secondRow = filteredSkills.slice(midpoint);

      return (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              {firstRow.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 p-3 bg-black/20 rounded-lg backdrop-blur-sm transform transition-all duration-300 hover:translate-x-2 hover:bg-indigo-600/30 group"
                >
                  {skill.icon && (
                    <img 
                      src={skill.icon} 
                      alt={`${skill.name} icon`}
                      className="w-6 h-6 object-contain group-hover:scale-110 transition-transform"
                    />
                  )}
                  <span className="text-gray-100 font-medium group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {secondRow.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 p-3 bg-black/20 rounded-lg backdrop-blur-sm transform transition-all duration-300 hover:translate-x-2 hover:bg-indigo-600/30 group"
                >
                  {skill.icon && (
                    <img 
                      src={skill.icon} 
                      alt={`${skill.name} icon`}
                      className="w-6 h-6 object-contain group-hover:scale-110 transition-transform"
                    />
                  )}
                  <span className="text-gray-100 font-medium group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-3 p-3 bg-black/20 rounded-lg backdrop-blur-sm transform transition-all duration-300 hover:translate-x-2 hover:bg-indigo-600/30 group"
          >
            {skill.icon && (
              <img 
                src={skill.icon} 
                alt={`${skill.name} icon`}
                className="w-6 h-6 object-contain group-hover:scale-110 transition-transform"
              />
            )}
            <span className="text-gray-100 font-medium group-hover:text-white transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="relative py-20 bg-gradient-to-br from-black to-indigo-950 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-bold text-center mb-16 text-white [text-shadow:0_0_20px_rgba(99,102,241,0.5)]">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(Object.entries(categories) as [keyof typeof categories, string][]).map(([category, title], categoryIndex) => (
            <div
              key={category}
              className="group bg-gradient-to-br from-indigo-950/50 to-purple-950/50 backdrop-blur-sm p-6 rounded-xl border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                {title}
              </h3>
              {renderSkills(category, skills)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
