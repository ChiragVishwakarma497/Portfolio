import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from 'lucide-react';
import type { Contact } from '../types/portfolio';

interface ContactProps {
  contact: Contact;
}

export function Contact({ contact }: ContactProps) {
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-black to-indigo-950 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-bold text-center mb-16 text-white [text-shadow:0_0_20px_rgba(99,102,241,0.5)]">
          Get in Touch
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {[
              { icon: Mail, title: 'Email', value: contact.email, href: `mailto:${contact.email}` },
              { icon: Phone, title: 'Phone', value: contact.phone, href: `tel:${contact.phone}` },
              { icon: MapPin, title: 'Location', value: contact.location }
            ].map((item, index) => (
              <div
                key={item.title}
                className="group bg-gradient-to-br from-indigo-950/50 to-purple-950/50 backdrop-blur-sm p-6 rounded-xl border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-indigo-400">{item.title}</h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-gray-300 hover:text-indigo-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{item.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">Social Media</h3>
            <div className="grid grid-cols-3 gap-4">
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
                  className="group bg-gradient-to-br from-indigo-950/50 to-purple-950/50 backdrop-blur-sm p-6 rounded-xl border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-gray-400 group-hover:text-indigo-400 transition-colors">
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
