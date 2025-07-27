import React, { useState } from "react";
import "../assets/css/why.css"; // why-specific styles
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/background.JPG";

import {
  FaBriefcase,
  FaChartBar,
  FaRocket,
  FaPuzzlePiece,
  FaBrain,
  FaCubes,
  FaProjectDiagram,
  FaCompass,
  FaSearch,
  FaPaintBrush,
} from "react-icons/fa";
const features = [
  {
    id: 1,
    title: "5+ Years of Enterprise Experience",
    icon: <FaBriefcase />,
    detail: `
✅ Over 5 years of experience in both enterprise and startup environments.  
✅ Started at Mayora, handling SAP FI and Java apps for hundreds of branches.  
✅ Worked at a Golang-based B2C eBook startup with clean architecture and fast iteration.  
✅ Currently building scalable microservices at an international insurance firm.  
✅ Skilled in cross-functional, global team collaboration.`,
  },
  {
    id: 2,
    title: "Project Management Expert",
    icon: <FaChartBar />,
    detail: `
✅ MBA graduate with a solid understanding of business processes.  
✅ Leads projects using Agile and Scrum methodologies.  
✅ Experienced in sprint planning and cross-department coordination.  
✅ Oversees projects from initiation to delivery.  
✅ Adept at stakeholder communication and risk management.`,
  },
  {
    id: 3,
    title: "Lean Startup Oriented",
    icon: <FaRocket />,
    detail: `
✅ Applies Lean Startup principles for fast, iterative development.  
✅ Builds MVPs quickly based on real user feedback.  
✅ Reduces waste and maximizes customer value.  
✅ Aligns product development closely with business needs.  
✅ Promotes innovation through experimentation.`,
  },
  {
    id: 4,
    title: "Full-Stack Engineer",
    icon: <FaPuzzlePiece />,
    detail: `
✅ Experienced in frontend (React, Vue)   
✅ Experienced in backend (Node, Go, Java and ABAP) 
✅ Skilled in database design with MongoDB and PostgreSQL.  
✅ Builds and maintains CI/CD pipelines.  
✅ Works across the full development lifecycle.  
✅ Proficient with Docker, K8S, Git, and modern DevOps tools.`,
  },
  {
    id: 5,
    title: "Polyglot Developer",
    icon: <FaBrain />,
    detail: `
✅ Writes clean code in Go, Java, JavaScript, Python, SQL, and ABAP.  
✅ Understands strengths of each language and when to use them.  
✅ Flexible in adapting to new tech stacks and tools.  
✅ Bridges legacy systems with modern frameworks.  
✅ Applies best practices across languages.`,
  },
  {
    id: 6,
    title: "Object-Oriented Thinker",
    icon: <FaCubes />,
    detail: `
✅ Deep knowledge of OOP principles and patterns.  
✅ Follows SOLID principles in software design.  
✅ Builds reusable, maintainable components.  
✅ Practices clean architecture across services.  
✅ Comfortable with domain-driven design.`,
  },
  {
    id: 7,
    title: "Clean And Scalable Microservices Design",
    icon: <FaProjectDiagram />,
    detail: `
✅ Designs scalable and modular microservices.  
✅ Implements best practices in service orchestration.  
✅ Understands service boundaries and responsibilities.  
✅ Focused on decoupled and high-availability systems.  
✅ Prioritizes observability and performance.`,
  },
  {
    id: 8,
    title: "Strategic IT Planner",
    icon: <FaCompass />,
    detail: `
✅ Shapes IT strategy aligned with business goals.  
✅ Implements Agile processes and automates workflows.  
✅ Designs disaster recovery and business continuity plans.  
✅ Applies security best practices and compliance awareness.  
✅ Leverages AI and automation for faster, smarter development.`,
  },
  {
    id: 9,
    title: "Real-World Problem Solver",
    icon: <FaSearch />,
    detail: `
✅ Tackles business problems with practical tech solutions.  
✅ Led digital transformation in both startups and enterprises.  
✅ Effective in bridging communication between tech and business.  
✅ Automates tedious manual processes with smart systems.  
✅ Focuses on measurable impact and value delivery.`,
  },
  {
    id: 10,
    title: "Strong UI/UX Sensibility",
    icon: <FaPaintBrush />,
    detail: `
✅ Designs user interfaces that are intuitive and elegant.  
✅ Skilled in responsive layout and cross-device compatibility.  
✅ User Centered Design 
✅ Focused on accessibility and usability.  
✅ Balances aesthetics with functionality.`,
  },
];


const Why = () => {
  const [activeFeature, setActiveFeature] = useState(null);
  const [redirecting] = useState(false);
  //const navigate = useNavigate();

  // const handleRedirect = () => {
  //   setRedirecting(true);
  //   setTimeout(() => {
  //     navigate("/skills");
  //   }, 500); // match with fade duration
  // };

  return (
    <div className={`why-page ${redirecting ? "fade-out" : ""}`}>
      <div
        className="why-background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <Navbar />
      <div className="why-container">
        <h1 className="why-title">Why Must Me?</h1>
        <div className="card-grid">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="why-card"
              onClick={() => setActiveFeature(feature)}
            >
              <div className="icon-wrapper">{feature.icon}</div>
              <div className="card-title">{feature.title}</div>
            </div>
          ))}
        </div>
      </div>

     <a href="/skills" className="experience-button">
        What I can Do?
      </a>

      {activeFeature && (
        <div className="dialog-overlay" onClick={() => setActiveFeature(null)}>
          <div className="dialog-panel" onClick={(e) => e.stopPropagation()}>
            <h2 className="dialog-title">{activeFeature.title}</h2>
            <p className="dialog-content">{activeFeature.detail}</p>
            <button
              className="dialog-button"
              onClick={() => setActiveFeature(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Why;
