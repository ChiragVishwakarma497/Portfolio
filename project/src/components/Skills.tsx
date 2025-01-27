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
      // Split tools into two rows
      const midpoint = Math.ceil(filteredSkills.length / 2);
      const firstRow = filteredSkills.slice(0, midpoint);
      const secondRow = filteredSkills.slice(midpoint);

      return (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {/* First Row */}
            <div className="space-y-4">
              {firstRow.map((skill, index) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 transform transition-transform duration-300 hover:translate-x-2"
                >
                  {skill.icon && (
                    <img 
                      src={skill.icon} 
                      alt={`${skill.name} icon`}
                      className="w-6 h-6 object-contain"
                    />
                  )}
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
            {/* Second Row */}
            <div className="space-y-4">
              {secondRow.map((skill, index) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 transform transition-transform duration-300 hover:translate-x-2"
                >
                  {skill.icon && (
                    <img 
                      src={skill.icon} 
                      alt={`${skill.name} icon`}
                      className="w-6 h-6 object-contain"
                    />
                  )}
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // Regular layout for other categories
    return (
      <div className="space-y-4">
        {filteredSkills.map((skill, index) => (
          <div
            key={skill.name}
            className="flex items-center gap-3 transform transition-transform duration-300 hover:translate-x-2"
          >
            {skill.icon && (
              <img 
                src={skill.icon} 
                alt={`${skill.name} icon`}
                className="w-6 h-6 object-contain"
              />
            )}
            <span className="text-gray-700 font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-black/[0.02] -z-1" />
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 animate-fade-in">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          {(Object.entries(categories) as [keyof typeof categories, string][]).map(([category, title], categoryIndex) => (
            <div
              key={category}
              className="group bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in glass-effect"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-xl font-semibold mb-6 capitalize text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
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
