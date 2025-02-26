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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-black opacity-90 animate-gradient" />
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [transform-origin:0_0] [animation:grid-move_20s_linear_infinite]" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <p className="text-indigo-400 font-medium animate-slide-in-left">Welcome to my portfolio</p>
              <h1 className="text-6xl lg:text-8xl font-bold text-white animate-slide-in-left animate-glow">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient hover-scale">
                  {profile.name}
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-indigo-200 animate-slide-in-left">
                {profile.title}
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed animate-slide-in-left">
                {profile.bio}
              </p>
              <div className="flex gap-4 animate-slide-in-left">
                <a
                  href={profile.resumeUrl}
                  download
                  className="group relative inline-flex items-center px-8 py-4 bg-indigo-600 text-white rounded-lg overflow-hidden transition-all duration-500 hover:bg-indigo-700 hover:scale-105 animate-border-glow"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Download className="w-5 h-5 mr-2 animate-bounce-subtle" />
                  <span className="relative">Download Resume</span>
                </a>
                <div className="flex gap-4">
                  {socialLinks.map(({ id, icon: Icon, href }, index) => (
                    <a
                      key={id}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-all duration-500 group hover:scale-110 hover-rotate"
                      style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                    >
                      <Icon className="w-5 h-5 text-white group-hover:text-white transition-colors" />
                      <div className="absolute inset-0 rounded-lg bg-indigo-600/30 blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse" />
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                <div className="relative w-64 h-64 rounded-full border-4 border-indigo-500/50 shadow-[0_0_30px_rgba(99,102,241,0.5)] overflow-hidden animate-float transition-transform duration-500 group-hover:scale-105">
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle cursor-pointer">
        <ChevronDown className="w-8 h-8 text-indigo-400" />
      </div>
    </div>
  );
}
