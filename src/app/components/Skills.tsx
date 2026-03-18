interface SkillCategory {
  title: string;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "HTML/CSS"],
    color: "blue"
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"],
    color: "green"
  },
  {
    title: "Tools & Others",
    skills: ["Git", "Docker", "AWS", "Chroma", "CI/CD", "Figma", "RAG"],
    color: "purple"
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-3">Skills & Technologies</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Technologies and tools I work with to bring ideas to life
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div 
              key={category.title}
              className="p-8 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg transition-shadow"
            >
              <h3 className="mb-6 text-center">{category.title}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className={`px-4 py-2 rounded-full text-sm bg-${category.color}-100 text-${category.color}-700 hover:bg-${category.color}-200 transition-colors`}
                    style={{
                      backgroundColor: category.color === 'blue' ? '#dbeafe' : 
                                     category.color === 'green' ? '#dcfce7' : '#f3e8ff',
                      color: category.color === 'blue' ? '#1e40af' : 
                             category.color === 'green' ? '#15803d' : '#6b21a8'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
