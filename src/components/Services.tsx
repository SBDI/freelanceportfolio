const services = [
  {
    icon: "🎯",
    title: "Strategy & Direction",
    description:
      "Defining the problem, identifying the scope and finally, organizing the design roadmap to bring out the best of every project.",
  },
  {
    icon: "✨",
    title: "Design UI/UX",
    description:
      "Website, application or other design related tasks. I love tackling digital problems and help in them.",
  },
  {
    icon: "📱",
    title: "Mobile App",
    description:
      "It's 2020, we should really step up our mobile game a bit more, right? Open to tackling new mobile projects.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-dark-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-dark-200 hover:transform hover:scale-105 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-white/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;