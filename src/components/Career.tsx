import "./styles/Career.css";

const Career = () => {
  const experiences = [
    {
      role: "Computer Science Intern",
      company: "University of Education",
      period: "Sep 2025 – Dec 2025",
      location: "Lahore, Pakistan",
      description: "Successfully completed an internship focusing on AI research, machine learning advancements, and data-driven problem solving.",
    },
    {
      role: "Machine Learning Intern",
      company: "Nexus AI Digital",
      period: "Oct 2025 – Dec 2025",
      location: "Remote",
      description: "Developed and evaluated machine learning models. Contributed to AI-driven solutions and research tasks.",
    },
    {
      role: "Machine Learning Intern",
      company: "Arch Technologies",
      period: "Nov 2025 – Dec 2025",
      location: "Remote",
      description: "Worked on data analysis and ML-based implementations.",
    },
    {
      role: "Web Developer",
      company: "DevelopersHub Corporation",
      period: "May 2025 – Aug 2025",
      location: "Remote",
      description: "Built real-world web applications using React, Node.js, HTML, CSS. Handled APIs, databases, testing, and bug fixing using Git.",
    },
    {
      role: "Web & WordPress Developer",
      company: "Freelance (Fiverr / Self-employed)",
      period: "Feb 2022 – Oct 2025",
      location: "Remote",
      description: "Delivered E-commerce, Doctor Appointment, and Billboard Management systems. Built custom WordPress themes, plugins, and AI-powered tools. Maintained high client satisfaction with global remote clients.",
    },
    {
      role: "Computer Science Teacher",
      company: "Times Tuition Academy",
      period: "Oct 2022 – Nov 2025",
      location: "Pakistan",
      description: "Taught Computer Science fundamentals and programming concepts.",
    },
  ];

  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Professional <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline"></div>
          {experiences.map((exp, index) => (
            <div className="career-info-box" key={index}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{exp.role}</h4>
                  <h5>{exp.company}</h5>
                  <span className="career-location">{exp.location}</span>
                </div>
                <h3>{exp.period}</h3>
              </div>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
