import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    title: "Data Scientist",
    company: "Tech Solutions Inc.",
    period: "2020 - Present",
    description: "Led machine learning projects and developed predictive models for client solutions.",
  },
  {
    title: "Data Analyst",
    company: "Analytics Corp",
    period: "2018 - 2020",
    description: "Performed statistical analysis and created data visualization dashboards.",
  },
];

const education = [
  {
    degree: "M.S. in Data Science",
    school: "Tech University",
    period: "2016 - 2018",
    description: "Focus on machine learning and statistical modeling.",
  },
  {
    degree: "B.S. in Computer Science",
    school: "State University",
    period: "2012 - 2016",
    description: "Specialization in artificial intelligence and algorithms.",
  },
];

const Resume = () => {
  return (
    <section className="py-20 bg-dark-200">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Resume</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div className="space-y-6 animate-fade-up">
            <h3 className="text-2xl font-semibold mb-6">Experience</h3>
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-dark-100 border-none">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-medium">{exp.title}</h4>
                    <span className="text-sm text-white/70">{exp.period}</span>
                  </div>
                  <p className="text-white/70 mb-2">{exp.company}</p>
                  <p className="text-white/60">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Education Section */}
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: "200ms" }}>
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            {education.map((edu, index) => (
              <Card key={index} className="bg-dark-100 border-none">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-medium">{edu.degree}</h4>
                    <span className="text-sm text-white/70">{edu.period}</span>
                  </div>
                  <p className="text-white/70 mb-2">{edu.school}</p>
                  <p className="text-white/60">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;