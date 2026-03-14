import React from 'react';

interface Project {
  name: string;
  description?: string;
  tech?: string[];
  github?: string;
  demo?: string;
  imageUrl?: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  if (!projects || projects.length === 0) return null;

  return (
    <section id="projects" className="py-20 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 tracking-tight">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {project.imageUrl && (
                <img 
                  src={project.imageUrl} 
                  alt={project.name} 
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="text-lg font-medium mb-2">{project.name}</h3>
                {project.description && (
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                )}
                {project.tech && project.tech.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex gap-4 text-sm">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;