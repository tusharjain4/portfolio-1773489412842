import React from 'react';

interface AboutProps {
  about: string;
  experience?: string;
  currentRole?: string;
  highlights?: string[];
}

const About: React.FC<AboutProps> = ({ about, experience, currentRole, highlights }) => {
  return (
    <section id="about" className="py-20 bg-gray-50 text-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 tracking-tight">About</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {about}
            </p>
            {currentRole && (
              <p className="text-md text-gray-500">
                <span className="font-medium text-gray-700">Current Role:</span> {currentRole}
              </p>
            )}
          </div>
          <div className="space-y-4">
            {experience && (
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-medium text-gray-900 mb-2">Experience</h3>
                <p className="text-gray-600 text-sm">{experience}</p>
              </div>
            )}
            {highlights && highlights.length > 0 && (
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-medium text-gray-900 mb-2">Highlights</h3>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                  {highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;