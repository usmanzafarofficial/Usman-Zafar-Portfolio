import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-container">
        <h3 className="title">About Me</h3>

        <div className="about-content">
          <div className="about-summary">
            <h4>Professional Summary</h4>
            <p>
              Computer Science graduate and Full Stack Developer specializing in AI, Machine Learning, and scalable web applications.
              Experienced in delivering end-to-end remote projects including E-commerce platforms, billing systems, and AI-powered solutions.
              Strong background in Python, JavaScript, and modern web frameworks with a focus on performance, usability, and impact.
            </p>
          </div>

          <div className="about-skills">
            <h4>Technical Skills</h4>
            <div className="skills-grid">
              <div className="skill-category">
                <h5>Languages</h5>
                <span>Python</span>
                <span>JavaScript</span>
                <span>HTML/CSS</span>
                <span>SQL</span>
                <span>PHP</span>
              </div>
              <div className="skill-category">
                <h5>Frameworks</h5>
                <span>React</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>WordPress</span>
              </div>
              <div className="skill-category">
                <h5>AI/ML</h5>
                <span>Machine Learning</span>
                <span>Computer Vision</span>
                <span>Natural Language Processing</span>
                <span>Data Science</span>
              </div>
              <div className="skill-category">
                <h5>Tools</h5>
                <span>Git</span>
                <span>Three.js</span>
                <span>Vercel</span>
                <span>GSAP</span>
              </div>
            </div>
          </div>

          <div className="about-certifications">
            <h4>Certifications</h4>
            <ul>
              <li>HP Life Data Science & Analytics AI for Beginners</li>
              <li>WordPress Development</li>
            </ul>
          </div>

          <div className="about-languages">
            <h4>Languages</h4>
            <div className="languages-list">
              <span>English (Fluent)</span>
              <span>Urdu (Native)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
