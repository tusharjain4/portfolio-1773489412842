import React from 'react';

interface HeroProps {
  name: string;
  role: string;
  tagline: string;
  heroImageUrl?: string;
}

const Hero: React.FC<HeroProps> = ({ name, role, tagline, heroImageUrl }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-white text-gray-900 pt-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {heroImageUrl && (
          <img 
            src={heroImageUrl} 
            alt={name} 
            className="w-32 h-32 rounded-full mx-auto mb-8 object-cover shadow-md"
          />
        )}
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
          {name}
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 mb-6">
          {role}
        </p>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {tagline}
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a 
            href="#contact" 
            className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 text-sm font-medium"
          >
            Get in Touch
          </a>
          <a 
            href="#projects" 
            className="px-6 py-3 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors duration-300 text-sm font-medium text-gray-700"
          >
            View Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;