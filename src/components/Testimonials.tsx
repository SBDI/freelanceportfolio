import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO at TechCorp",
    image: "https://i.pravatar.cc/150?u=1",
    text: "Working with John was transformative for our data infrastructure. His insights helped us reduce processing time by 40%.",
  },
  {
    name: "Michael Chen",
    role: "Lead Data Engineer",
    image: "https://i.pravatar.cc/150?u=2",
    text: "The machine learning models developed by John significantly improved our prediction accuracy.",
  },
  {
    name: "Emma Davis",
    role: "Product Manager",
    image: "https://i.pravatar.cc/150?u=3",
    text: "John's ability to translate complex data into actionable insights has been invaluable for our product strategy.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-dark-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Client Testimonials</h2>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="bg-dark-200 border-none">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <Avatar className="w-20 h-20">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <blockquote className="text-lg text-white/80 italic">"{testimonial.text}"</blockquote>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-white/60">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;