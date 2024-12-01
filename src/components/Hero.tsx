import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-up">
          <div className="w-48 h-48 mx-auto mb-16 rounded-full overflow-hidden">
            <img
              src="profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-white/70 text-3xl mb-4">Hi, I'm Mohamed BOUABIDI</h2>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Data Scientist
            <br />
            <span className="text-white/70">& ML Engineer</span>
          </h1>
          <p className="text-white/70 text-lg md:text-2xl max-w-4xxl mx-auto mb-8">
          I am a seasoned data scientist with a proven track record of unraveling complex and challenging topics through the lens of data. 
          With 3+ years of hands-on experience in the field, I thrive on leveraging the power of data 
          to drive informed decision-making.
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
