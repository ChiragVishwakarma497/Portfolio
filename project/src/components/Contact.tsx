import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from 'lucide-react';
import type { Contact } from '../types/portfolio';

interface ContactProps {
  contact: Contact;
}

export function Contact({ contact }: ContactProps) {
  return (
    <section id="contact" className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-black to-indigo-950 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-white [text-shadow:0_0_20px_rgba(99,102,241,0.5)]">
          Get in Touch
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="space-y-4 sm:space-y-6">
            {[
              { 
                icon: Mail, 
                title: 'Email', 
                value: contact.email, 
                href: `mailto:${contact.email}` 
              },
              { 
                icon: Phone, 
                title: 'Phone', 
                value: contact.phone, 
                href: `tel:${contact.phone}` 
              },
              { 
                icon: MapPin, 
                title: 'Location', 
                value: contact.location 
              }
            ].map((item, index) => (
              <div
                key={item.title}
                className="group bg-gradient-to-br from-indigo-950/50 to-purple-950/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base text-indigo-400">{item.title}</h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm sm:text-base text-gray-300 hover:text-indigo-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm sm:text-base text-gray-300">{item.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-8">Social Media</h3>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {[
                { icon: Github, href: contact.github, label: 'GitHub' },
                { icon: Linkedin, href: contact.linkedin, label: 'LinkedIn' },
                { icon: Instagram, href: contact.instagram, label: 'Instagram' }
              ].map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-br from-indigo-950/50 to-purple-950/50 backdrop-blur-sm p-3 sm:p-6 rounded-xl border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <span className="text-xs sm:text-sm text-gray-400 group-hover:text-indigo-400 transition-colors">
                      {item.label}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
