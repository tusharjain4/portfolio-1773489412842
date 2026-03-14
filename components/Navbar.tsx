import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" className="text-lg font-medium text-gray-900 hover:text-black transition-colors">
          Portfolio
        </a>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">About</a>
          <a href="#skills" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Skills</a>
          <a href="#projects" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
          <a href="#contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;