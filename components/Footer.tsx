import React from 'react';

interface FooterProps {
  name?: string;
}

const Footer: React.FC<FooterProps> = ({ name = 'Portfolio' }) => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {year} {name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#hero" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">Home</a>
            <a href="#about" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">About</a>
            <a href="#contact" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;