const services = [
  {
    icon: "📊",
    title: "Data Analysis & Visualization",
    description:
      "Transform raw data into actionable insights through statistical analysis and creating compelling visualizations that tell your data story.",
  },
  {
    icon: "🤖",
    title: "Machine Learning Solutions",
    description:
      "Develop and deploy custom machine learning models for prediction, classification, and pattern recognition to solve your business challenges.",
  },
  {
    icon: "🔍",
    title: "Business Intelligence",
    description:
      "Create comprehensive BI solutions including dashboards, automated reporting, and KPI tracking to drive data-informed decision making.",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-dark-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-10 rounded-xl bg-dark-200 hover:transform hover:scale-105 transition-all duration-300 animate-fade-up shadow-xl hover:shadow-2xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-6xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-6">{service.title}</h3>
              <p className="text-lg text-white/80 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;