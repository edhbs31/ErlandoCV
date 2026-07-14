import { useState } from "react";
import { Helmet } from "react-helmet";
import "../assets/css/Experience.css";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/background.JPG";

import Mayora from "../assets/mayora.png";
import Gramedia from "../assets/gramedia.png";
import HMI from "../assets/hmi.png";
import Freelance from "../assets/freelance.png";  
import { ArrowUpRight, CalendarDays, X, Layers3, Database, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    company: "Mayora Indah",
    year: "2020 - 2022",
    role: "Java Developer & SAP ABAP",
    logo: Mayora,
    summary:
      "Built and maintained enterprise financial systems supporting large-scale operations across hundreds of branches.",
    details: [
      "Automated tax numbering process, reducing manual errors",
      "Developed credit memo and payment systems for finance operations",
      "Handled batch financial processing at scale",
      "Maintained and modernized legacy enterprise applications",
      "Built reporting tools in Java for operational insights",
      "Automated deployment processes to reduce release friction",
      "Developed SAP function modules across FI workflows",
      "Created background jobs for data migration and automation",
    ],
  },
  {
    company: "Gramedia Digital",
    year: "2023",
    role: "B2C & B2B Developer",
    logo: Gramedia,
    summary:
      "Delivered scalable digital platform features, improving system performance and enabling secure transactions.",
    details: [
      "Implemented clean architecture for maintainable system design",
      "Integrated Apple Pay using secure encryption (SHA256, AES256)",
      "Built digital delivery pipeline for MP3 & eBooks via AWS S3",
      "Developed CI/CD pipelines to accelerate releases",
      "Integrated monitoring tools (New Relic, Elasticsearch)",
      "Optimized performance using Redis caching",
      "Worked with Docker & Kubernetes for scalable deployment",
      "Revamped CMS using Vue.js and Node.js",
      "Maintained legacy Python Flask systems",
    ],
  },
  {
    company: "MHC HMI Asia Group Singapore",
    year: "2024 - Now",
    role: "Software Engineer",
    logo: HMI,
    summary:
      "Designing and building microservices powering payment, claims, and data pipelines in a distributed system.",
    details: [
      "Developed payment and claim microservices",
      "Built large-scale data migration pipelines",
      "Designed data transformation systems (raw → structured)",
      "Implemented attachment handling services",
      "Designed scalable ORM data models",
      "Built async processing using RabbitMQ",
      "Applied SOLID and clean architecture principles",
      "Implemented E2E testing (Jest, Selenium)",
      "Set up CI/CD pipelines with Jenkins",
      "Ensured code quality using SonarQube",
      "Developed serverless features with AWS Lambda",
      "Automated workflows using n8n",
      "Managed containerized systems with Docker & Kubernetes",
    ],
    
  },{
  company: "Freelance Projects",
  year: "May 2026",
  role: "Golang & AI Engineer",
  logo: Freelance, // replace with your freelance logo if available
  summary:
    "Built OCR automation systems integrated with AI for document extraction, spreadsheet automation, and intelligent folder mapping.",
  details: [
    "Built OCR system using Golang integrated with AI for spreadsheet automation",
    "Developed OCR pipeline to extract and structure transaction data automatically",
    "Integrated AI processing for document classification and validation",
    "Built OCR system with intelligent folder mapping automation",
    "Designed scalable file processing workflows for large document batches",
    "Automated structured output generation from raw image and PDF sources",
  ],
},
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="experience-page">
      <Helmet>
        <title>Experience | Erlando Dominico - Software Engineer & IT Consultant</title>
        <meta name="description" content=" Erlando Dominico's experience as  Software Engineer, IT Consultant, dan Digital Transformation Expert." />
      </Helmet>

      <Navbar />

      <div
        className="experience-background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      <div className="experience-container">
        <header className="experience-heading">
          <p>Career journey</p>
          <h1>Experience that<br /><span>ships.</span></h1>
          <p className="experience-intro">A selection of roles across enterprise systems, digital products, and AI-powered automation. Open a role to explore its delivery highlights.</p>
        </header>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <article key={index} className="timeline-entry">
            <div className="timeline-dot" />
            <div className="timeline-line" />
            <span className="roadmap-step">{String(index + 1).padStart(2, "0")}</span>

            <div className="entry-content">
              <img src={exp.logo} alt="logo" className="company-logo" />

              <div className="entry-text">
                <h3>{exp.company}</h3>
                <p className="date"><CalendarDays size={14} /> {exp.year}</p>
                <p className="role">{exp.role}</p>

                {/* 🔥 KEY CHANGE */}
                <p className="summary">{exp.summary}</p>

                <button
                  onClick={() =>
                    setActiveIndex(index === activeIndex ? null : index)
                  }
                  aria-expanded={activeIndex === index}
                  aria-controls={`experience-details-${index}`}
                >
                  {activeIndex === index ? "Close highlights" : "View highlights"} <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div></div>

      <section className="experience-principles">
        <div className="principles-copy">
          <p className="section-label">What experience taught me</p>
          <h2>Range that<br />reduces risk.</h2>
          <p>Enterprise, startup, and freelance work each expose different failure modes — that range is what lets me spot risk earlier and ship with fewer surprises.</p>
        </div>
        <div className="principles-list">
          <div><Layers3 size={21} /><span><b>Adapts to the environment</b><small>Structured enterprise process one year, fast-moving startup delivery the next.</small></span></div>
          <div><Database size={21} /><span><b>Handles the full lifecycle</b><small>From legacy SAP systems to greenfield microservices and AI automation.</small></span></div>
          <div><CheckCircle2 size={21} /><span><b>Delivers under real constraints</b><small>Track record of shipping at scale, not just in theory.</small></span></div>
        </div>
      </section>

      {/* MODAL */}
      {activeIndex !== null && (
        <div className="experience-popup-overlay" onClick={() => setActiveIndex(null)}>
          <div className="experience-popup-card" id={`experience-details-${activeIndex}`} role="dialog" aria-modal="true" aria-labelledby="experience-modal-title" onClick={(e) => e.stopPropagation()}>
            <button className="close-icon" aria-label="Close experience highlights" onClick={() => setActiveIndex(null)}>
              <X size={20} />
            </button>

            <div className="popup-header">
              <img
                src={experiences[activeIndex].logo}
                alt={`${experiences[activeIndex].company} logo`}
                className="popup-logo"
              />
              <div>
                <p className="popup-eyebrow">Selected contribution</p>
                <h2 id="experience-modal-title">{experiences[activeIndex].company}</h2>
                <p>{experiences[activeIndex].role}</p>
                <span>{experiences[activeIndex].year}</span>
              </div>
            </div>

            <div className="popup-divider" />

            <p className="popup-section-title">Delivery highlights</p>
            <ul className="popup-list">
              {experiences[activeIndex].details.map((item, i) => (
                <li
                  key={i}
                  className="popup-item"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {item}
                </li>
              ))}
            </ul>
            <button className="popup-close-button" onClick={() => setActiveIndex(null)}>Close</button>
          </div>
        </div>
      )}

      <a href="/about" className="experience-button">
        About Me →
      </a>
    </div>
  );
};

export default Experience;
