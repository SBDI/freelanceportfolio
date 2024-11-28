import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
        <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
          Looking for a data scientist to help bring your project to life? I'd love to hear about your
          ideas and explore how we can collaborate.
        </p>
        <Button
          className="bg-white text-dark-200 hover:bg-white/90 text-lg px-8 py-6"
          onClick={() => window.location.href = "mailto:contact@example.com"}
        >
          Get in Touch
        </Button>
      </div>
    </section>
  );
};

export default Contact;