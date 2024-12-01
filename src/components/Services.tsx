const services = [
  {
    icon: "🔍",
    title: "Data Analytics & Insights",
    description:
      "Unlock the story in your data with advanced analytics and professional visualizations. Empower decision-making and drive growth with actionable insights.",
  },
  {
    icon: "🤖",
    title: "AI and Machine Learning Solutions",
    description:
      "Develop and deploy custom AI and machine learning models tailored to your business challenges, delivering intelligent solutions with measurable results.",
  },
  {
    icon: "⚙️",
    title: "Data Engineering & Automation",
    description:
      "Streamline your data workflows by designing scalable pipelines and integrating cloud-based solutions for enhanced efficiency and reliability.",
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
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
