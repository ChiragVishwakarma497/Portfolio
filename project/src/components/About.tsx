import type { Profile } from '../types/portfolio';

interface AboutProps {
  profile: Profile;
}

export function About({ profile }: AboutProps) {
  return (
    <section id="about" className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-indigo-950 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-white [text-shadow:0_0_20px_rgba(99,102,241,0.5)]">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto overflow-hidden">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-300" />
            <div className="relative p-4 sm:p-6 md:p-8 bg-gradient-to-br from-indigo-950/50 to-purple-950/50 backdrop-blur-sm rounded-lg border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300">
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg transform transition-all duration-300 group-hover:translate-x-1">
                {profile.bio}
              </p>
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}