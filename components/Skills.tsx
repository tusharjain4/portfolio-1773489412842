import React from 'react';

interface Skill {
  name: string;
  category?: string;
}

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  if (!skills || skills.length === 0) return null;

  // Group skills by category if categories exist
  const groupedSkills = skills.reduce((acc, skill) => {
    const category = skill.category || 'General';
    if (!acc[category]) acc[category] = [];
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="py-20 bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 tracking-tight">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category} className="space-y-3">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {categorySkills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-200"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;