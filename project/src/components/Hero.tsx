import React from 'react';
import { Github, Linkedin, Instagram, Download, ChevronDown } from 'lucide-react';
import type { Profile } from '../types/portfolio';

interface HeroProps {
  profile: Profile;
}

export function Hero({ profile }: HeroProps) {
  const socialLinks = [
    { id: 'github', icon: Github, href: profile.github },
    { id: 'linkedin', icon: Linkedin, href: profile.linkedin },
    { id: 'instagram', icon: Instagram, href: profile.instagram }
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center animate-gradient bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="absolute inset-0 bg-grid-black/[0.02] -z-1" />
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4 stagger-children">
              <p className="text-indigo-600 font-medium animate-slide-in-left">Welcome to my portfolio</p>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 animate-slide-in-left">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 animate-gradient">
                  {profile.name}
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-600 animate-slide-in-left">{profile.title}</h2>
              <p className="text-lg text-gray-600 leading-relaxed animate-slide-in-left">{profile.bio}</p>
              <div className="flex gap-4 animate-slide-in-left">
                <a
                  href={profile.resumeUrl}
                  download
                  className="group relative inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg overflow-hidden transition-all duration-300 hover:bg-indigo-700"
                >
                  <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <Download className="w-5 h-5 mr-2 animate-bounce-subtle" />
                  <span>Download Resume</span>
                </a>
                <div className="flex gap-4">
                  {socialLinks.map(({ id, icon: Icon, href }, index) => (
                    <a
                      key={id}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-12 h-12 bg-white/80 rounded-lg flex items-center justify-center hover:bg-indigo-50 transition-colors group"
                      style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                    >
                      <Icon className="w-5 h-5 text-gray-600 group-hover:text-indigo-600 transition-colors" />
                      <div className="animate-pulse-ring opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse" />
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity" />
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="relative w-64 h-64 object-cover rounded-full border-4 border-white shadow-xl animate-float transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <ChevronDown className="w-8 h-8 text-indigo-600" />
      </div>
    </div>
  );
}