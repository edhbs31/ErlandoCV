import  { useState } from "react";
import "../assets/css/home.css";
import "../assets/css/Experience.css";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/background.JPG";
import Mayora from "../assets/mayora.png"
import Gramedia from "../assets/gramedia.png"
import HMI from "../assets/hmi.png"

const experiences = [
  {
    company: "Mayora Indah",
    year: "2020 - 2022",
    role: "Java Developer & SAP Abaper",
    logo: Mayora,
    details: [
      "Develop Tax Numbering Program",
      "Develop Credit Memo Program",
      "Develop Payment Advice",
      "Develop Transfers Expense Batch",
      "Maintenance and enhancement of old applications",
      "Develop Reports in Java",
      "APT Automatic Deployment Package",
      "Develop function module for ZFCCPA, FBL5N, FBL1N, FBL3N, F-02, F-01, FBE1 in SE37",
      "Create background job in SE38 for automation and data migration"
    ]
  },
  {
    company: "Gramedia Digital",
    year: "2023",
    role: "B2C & B2B Developer",
    logo: Gramedia,
    details: [
      "Clean Code Architecture",
      "Integrate Apple Pay using SHA256 and AES256",
      "Digital Item Delivery (MP3, Ebooks from AWS S3)",
      "Unit Testing and CI/CD",
      "New Relic & Elastic Search Integration",
      "Caching with Redis",
      "Docker and Kubernetes (Stateful Architecture)",
      "CMS Revamp with Vue.js and Node.js",
      "Maintain legacy system in Python Flask"
    ]
  },
  {
    company: "MHC HMI Asia Group Singapore",
    year: "2024 - Now",
    role: "Software Engineer",
    logo: HMI,
    details: [
      "Handle Payment, Claim, Data Migration Microservices",
      "Data Transformation: Raw to Formatted",
      "Attachment Handling",
      "DB ORM Modeling",
      "Data Migration CronJob with RabbitMQ",
      "SOLID and OOP Principles",
      "E2E Unit Tests with JEST and Selenium",
      "Jenkins Setup",
      "Code Quality with SonarQube",
      "Serverless with AWS Lambda",
      "Docker Container",
      "Kubernates Orchestration",
    ]
  }
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const togglePopup = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const closePopup = () => {
    setActiveIndex(null);
  };

  return (
    <div className="experience-page">
      <Navbar />
      <div
              className="experience-background"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>

      

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-entry">
            <div className="timeline-dot"></div>
            <div className="timeline-line"></div>

            <div className="entry-content">
              <img src={exp.logo} alt={`${exp.company} logo`} className="company-logo" />
              <div>
                <h3>{exp.company}</h3>
                <p className="date">{exp.year}</p>
                <p className="role">{exp.role}</p>
                <button onClick={() => togglePopup(index)}>
                  {activeIndex === index ? "Hide Details" : "View Details"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-card fade-in" onClick={(e) => e.stopPropagation()}>
            <button className="close-icon" onClick={closePopup}>
              &times;
            </button>
            <ul>
              {experiences[activeIndex].details.map((item, i) => (
                <li key={i}>✅ {item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <a href="/about" className="experience-button">
        Want To Know More About Me?
      </a>
    </div>
  );
};

export default Experience;
