import React from 'react';

const experiences = [
  {
    company: "Groupe Managem",
    title: "Data Scientist",
    period: "Oct 2021 - Dec 2023",
  },
  {
    company: "Berexia Consulting",
    title: "Data Scientist",
    period: "Dec 2024 - May 2024",
  },
  {
    company: "Freelance",
    title: "Data Scientist Gen AI",
    period: "June 2024 -  Current",
  }
];

const education = [
  {
    school: "Mines Rabat",
    degree: "Eng. Information Systems Management",
    period: "2017 - 2021",
  },
  {
    school: "CPGE",
    degree: "Maths & Physics",
    period: "2017 - 2021",
  }
];

const Resume = () => {
  return (
    <section className="py-20 bg-dark-200">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">Resume</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience Section */}
          <div>
            <h3 className="text-3xl font-normal mb-12">Work Experience</h3>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl">{exp.company}</h4>
                    <span className="text-xl">↗</span>
                  </div>
                  <p className="text-lg text-white">{exp.title}</p>
                  <p className="text-gray-400">{exp.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-3xl font-normal mb-12">Education</h3>
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl">{edu.school}</h4>
                    <span className="text-xl">↗</span>
                  </div>
                  <p className="text-lg text-white">{edu.degree}</p>
                  <p className="text-gray-400">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
