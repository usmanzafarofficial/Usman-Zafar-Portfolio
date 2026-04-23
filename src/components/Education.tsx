import "./styles/Education.css";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Education, Lahore",
      period: "2022 – 2026",
      description: "Graduate with a strong foundation in AI, Machine Learning, and Full Stack Development. Conducted research projects demonstrating practical and academic research skills.",
    },
  ];

  return (
    <div className="education-section section-container" id="education">
      <div className="education-container">
        <h2>
          My <span>Education</span>
        </h2>
        <div className="education-info">
          {education.map((edu, index) => (
            <div className="education-card" key={index}>
              <div className="education-header">
                <h3>{edu.degree}</h3>
                <span className="education-period">{edu.period}</span>
              </div>
              <h4 className="education-institution">{edu.institution}</h4>
              <p>{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
