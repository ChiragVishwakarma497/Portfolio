import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send, X, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import type { Contact } from '../types/portfolio';

interface ContactProps {
  contact: Contact;
}

export function Contact({ contact }: ContactProps) {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [emailData, setEmailData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEmailData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    // Initialize EmailJS with your public key
    emailjs.init("SlPvLONgUAZOAnXY0"); // Replace with your actual public key when setting up EmailJS
    
    // Prepare template parameters
    const templateParams = {
      to_email: contact.email,
      from_name: emailData.name,
      from_email: emailData.email,
      subject: emailData.subject,
      message: emailData.message
    };
    
    // Send email using EmailJS
    emailjs.send(
      "service_5qb3g36", // Replace with your EmailJS service ID
      "template_x4ru1ws", // Replace with your EmailJS template ID
      templateParams
    )
    .then(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setShowEmailForm(false);
        setSubmitSuccess(false);
        setEmailData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 3000);
    })
    .catch((error) => {
      console.error("Email sending failed:", error);
      setIsSubmitting(false);
      setSubmitError("Failed to send email. Please try again or contact directly via email.");
    });
  };

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
                action: () => setShowEmailForm(true),
                isClickable: true
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
                className={`group bg-gradient-to-br from-indigo-950/50 to-purple-950/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] hover:-translate-y-1 ${item.isClickable ? 'cursor-pointer' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={item.action}
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
                      <p className="text-sm sm:text-base text-gray-300 flex items-center">
                        {item.value}
                        {item.isClickable && (
                          <span className="ml-2 text-xs text-indigo-400">(Click to send message)</span>
                        )}
                      </p>
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

      {/* Email Form Modal */}
      {showEmailForm && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-md bg-gradient-to-br from-indigo-950 to-purple-950 rounded-xl border border-indigo-500/30 shadow-[0_0_30px_rgba(99,102,241,0.3)] p-6 animate-scale-in">
            <button 
              onClick={() => setShowEmailForm(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <h3 className="text-xl font-bold text-white mb-4">Send Message</h3>
            
            {submitSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <p className="text-green-400 font-medium">Message sent successfully!</p>
                <p className="text-gray-400 text-sm mt-2">I'll get back to you soon.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-indigo-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={emailData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-indigo-950/50 border border-indigo-500/30 rounded-lg px-3 py-2 text-white placeholder-indigo-300/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-indigo-300 mb-1">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={emailData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-indigo-950/50 border border-indigo-500/30 rounded-lg px-3 py-2 text-white placeholder-indigo-300/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-indigo-300 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={emailData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-indigo-950/50 border border-indigo-500/30 rounded-lg px-3 py-2 text-white placeholder-indigo-300/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-indigo-300 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={emailData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full bg-indigo-950/50 border border-indigo-500/30 rounded-lg px-3 py-2 text-white placeholder-indigo-300/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 resize-none"
                    placeholder="Hello, I'd like to discuss a project..."
                  />
                </div>
                
                {submitError && (
                  <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
                    <p className="text-red-400 text-sm">{submitError}</p>
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
