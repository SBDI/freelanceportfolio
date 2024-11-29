import { useState } from "react";

const projects = [
  {
    title: "Predictive Analytics Dashboard",
    description: "Machine learning-powered analytics platform for business intelligence",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: "Machine Learning",
  },
  {
    title: "Time Series Forecasting",
    description: "Advanced forecasting models for financial market prediction",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    category: "Data Analysis",
  },
  {
    title: "NLP Classification System",
    description: "Natural language processing for sentiment analysis",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    category: "Natural Language Processing",
  },
];

const PortfolioGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Featured Projects</h2>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-video"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-dark-200/90 to-dark-200/20 p-6 flex flex-col justify-end transform transition-all duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <span className="text-sm text-purple-300 mb-2">{project.category}</span>
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-purple-200">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;