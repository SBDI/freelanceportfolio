const skills = [
  {
    category: "Machine Learning",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "Deep Learning"],
  },
  {
    category: "Data Analysis",
    items: ["Python", "R", "SQL", "Pandas", "NumPy"],
  },
  {
    category: "Visualization",
    items: ["Tableau", "Power BI", "Matplotlib", "Seaborn"],
  },
  {
    category: "Cloud & Big Data",
    items: ["AWS", "Google Cloud", "Hadoop", "Spark"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-dark-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-dark-200 hover:transform hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-white/70">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
