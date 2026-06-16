import { useState } from "react";
import { Helmet } from "react-helmet";
import "../assets/css/Experience.css";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/background.JPG";

import Mayora from "../assets/mayora.png";
import Gramedia from "../assets/gramedia.png";
import HMI from "../assets/hmi.png";
import Freelance from "../assets/freelance.png";  

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

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-entry">
            <div className="timeline-dot" />
            <div className="timeline-line" />

            <div className="entry-content">
              <img src={exp.logo} alt="logo" className="company-logo" />

              <div className="entry-text">
                <h3>{exp.company}</h3>
                <p className="date">{exp.year}</p>
                <p className="role">{exp.role}</p>

                {/* 🔥 KEY CHANGE */}
                <p className="summary">{exp.summary}</p>

                <button
                  onClick={() =>
                    setActiveIndex(index === activeIndex ? null : index)
                  }
                >
                  {activeIndex === index ? "Hide Details" : "View Details"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {activeIndex !== null && (
        <div className="popup-overlay" onClick={() => setActiveIndex(null)}>
          <div className="popup-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-icon" onClick={() => setActiveIndex(null)}>
              ×
            </button>

            <div className="popup-header">
              <img
                src={experiences[activeIndex].logo}
                className="popup-logo"
              />
              <div>
                <h2>{experiences[activeIndex].company}</h2>
                <p>{experiences[activeIndex].role}</p>
                <span>{experiences[activeIndex].year}</span>
              </div>
            </div>

            <div className="popup-divider" />

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