import React from 'react';
import type { Profile } from '../types/portfolio';

interface AboutProps {
  profile: Profile;
}

export function About({ profile }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto prose prose-lg">
          <p className="text-gray-600 leading-relaxed">{profile.bio}</p>
        </div>
      </div>
    </section>
  );
}