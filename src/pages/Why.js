import React, { useState } from "react";
import "../assets/css/home.css"; // shared background blur
import "../assets/css/why.css"; // why-specific styles
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/background.JPG";
//import { useNavigate } from "react-router-dom";

const features = [
  {
    id: 1,
    title: "5+ Years of Enterprise Experience",
    icon: "💼",
    detail:
      "Worked across international teams and large-scale enterprise environments. Started career at Mayora, handling SAP FI systems and integrating cross-department workflows.",
  },
  {
    id: 2,
    title: "Project Management Expert",
    icon: "📊",
    detail:
      "MBA graduate with hands-on leadership in agile, scrum, sprint planning, and leading digital transformation projects from initiation to delivery.",
  },
  {
    id: 3,
    title: "Lean Startup Oriented",
    icon: "🚀",
    detail:
      "Expert in aligning IT solutions with real business needs through Lean Startup methodologies. Build MVPs fast and iterate with user feedback.",
  },
  {
    id: 4,
    title: "Full-Stack Engineer",
    icon: "🧩",
    detail:
      "Can manage full development lifecycle—from UI/UX, frontend (React/Vue), backend (Node/Java), database (Mongo/Postgres), to DevOps (Docker, CI/CD).",
  },
  {
    id: 5,
    title: "Polyglot Developer",
    icon: "🧠",
    detail:
      "Fluent in multiple languages: Go, Java, JavaScript, Python, SQL, and ABAP. Can choose the right tool for every project.",
  },
  {
    id: 6,
    title: "Object-Oriented Thinker",
    icon: "🧱",
    detail:
      "Deep understanding of Object-Oriented Programming and software design principles (SOLID, clean architecture, reusable components).",
  },
  {
    id: 7,
    title: "Clean And Scalable Microservices Design",
    icon: "🧬",
    detail:
      "Deep understanding of  System Design for Microservices.",
  },
{
  id: 8,
  title: "Strategic IT Planner",
  icon: "🧭",
  detail:
    "Experienced in shaping IT strategy—from setting up Agile processes and automating workflows to implementing robust disaster recovery plans. Ensures alignment between tech execution and business goals.",
},
{
  id: 9,
  title: "Real-World Problem Solver",
  icon: "🔍",
  detail:
    "Successfully led automation and digital transformation projects in both startup and enterprise settings. Known for bridging business logic with tech execution effectively.",
},
{
  id: 10,
  title: "Strong UI/UX Sensibility",
  icon: "🎨",
  detail:
    "Designs that aren’t just functional, but intuitive and user-centered. Experienced in crafting seamless user journeys using modern design tools and responsive frontends.",
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
