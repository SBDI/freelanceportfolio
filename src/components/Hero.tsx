import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-up">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden">
            <img
              src="/lovable-uploads/1dd37db6-3e87-4af6-bfb4-6f2cec49fbdc.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-white/70 text-xl mb-4">Hi, I'm John Doe</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Data Scientist
            <br />
            <span className="text-white/70">& ML Engineer</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Transforming complex data into actionable insights. Specializing in machine learning,
            statistical analysis, and predictive modeling.
          </p>
          <Button
            className="bg-white text-dark-200 hover:bg-white/90 text-lg px-8 py-6"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Let's Connect
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;