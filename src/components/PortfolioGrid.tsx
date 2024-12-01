import { useState } from "react";

const projects = [
  {
    title: "Geo-Metallurgical Predictive Model",
    description: "Created a predictive model to assist mine planning by analyzing key geo-metallurgical factors for resource allocation.",
    image: "project1.png",
    tags: ["Python", "Scikit-learn", "Data Analytics"],
    category: "Machine Learning"
  },
  {
    title: "Automated Email Categorization",
    description: "Built a Python-based machine learning solution to automate email data extraction and categorization, increasing operational efficiency by 25%.",
    image: "project2.png",
    tags: ["Python", "Flask", "NLP", "Azure"],
    category: "Natural Language Processing"
  },
  {
    title: "Reporting System for Decision Support",
    description: "Designed and implemented a reporting system using Power BI and SQL to support data-driven decision-making processes.",
    image: "project3.jpg",
    tags: ["Power BI", "SQL", "Data Visualization"],
    category: "Data Analysis & Viz"
  }
];

const PortfolioGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="work" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] shadow-xl hover:shadow-2xl transition-all duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-dark-200/95 to-dark-200/20 p-8 flex flex-col justify-end transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-90"
                }`}
              >
                <span className="text-sm font-semibold text-white/70 mb-3">{project.category}</span>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-lg text-white/80">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;