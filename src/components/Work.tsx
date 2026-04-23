import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      const padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    // Add extra 200px scroll buffer to ensure smooth transition
    const scrollDistance = translateX + 200;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${scrollDistance}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        id: "work",
        onLeave: () => {
          // Ensure projects are fully scrolled before releasing pin
          gsap.set(".work-flex", { x: -translateX });
        },
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  const projects = [
    {
      name: "NAAWT",
      category: "WordPress Website",
      description: "Responsive WordPress Website",
      link: "https://naawt.com",
      tools: "WordPress, PHP, MySQL, JavaScript, HTML/CSS",
      image: "/images/naawt.png",
    },
    {
      name: "AI Institute of Technology",
      category: "Educational Website",
      description: "Institute Website with modern UI and deployment on Vercel",
      link: "https://ai-institute.example.com",
      tools: "React, Node.js, Vercel, Tailwind CSS",
      image: "/images/ai_institute.png",
    },
    {
      name: "fuVideo",
      category: "Video Downloading App",
      description: "Python-based video downloading web application",
      link: "https://fuvideo.site",
      tools: "Python, Flask, Video Processing, FFmpeg",
      image: "/images/fuvideo.png",
    },
    {
      name: "Champions",
      category: "Dynamic Web Application",
      description: "Created a dynamic website using PHP, SQL, HTML, CSS, JavaScript",
      link: "https://champions.io",
      tools: "PHP, MySQL, JavaScript, HTML/CSS",
      image: "/images/champions.png",
    },
    {
      name: "Urdu Speech-to-Text",
      category: "AI / NLP Application",
      description: "Built an AI-powered Urdu speech-to-text web application",
      link: "https://urdu-stt.example.com",
      tools: "Python, TensorFlow, NLP, Speech Recognition",
      image: "/images/urdu_stt.png",
    },
    {
      name: "Weather Prediction App",
      category: "Machine Learning Application",
      description: "Developed a weather prediction app achieving 95% accuracy",
      link: "https://weather.example.com",
      tools: "Python, ML Algorithms, Data Analysis, Flask",
      image: "/images/weather_app.png",
    },
    {
      name: "Billboard Management System",
      category: "Full Stack Application",
      description: "Built a complete billboard advertisement management system",
      link: "https://billboard.example.com",
      tools: "React, Node.js, Express, MongoDB, Stripe API",
      image: "/images/billboard.png",
    },
  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Projects</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                <p className="project-description">{project.description}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
