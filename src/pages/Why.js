import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "../assets/css/why.css";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/background.JPG";

import {
  FaBriefcase,
  FaPuzzlePiece,
  FaProjectDiagram,
  FaCloud,
  FaCogs,
  FaChartLine,
  FaRobot,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "Enterprise & Startup Experience",
    icon: <FaBriefcase />,
    summary:
      "Proven experience delivering scalable systems in both structured enterprises and fast-moving startups.",
    detail: [
      "5+ years across enterprise (Mayora) and startup environments.",
      "Handled SAP FI and Java systems supporting hundreds of branches.",
      "Built Golang-based services in a fast-paced B2C startup.",
      "Currently developing microservices in an international insurance system.",
      "Collaborates across global and cross-functional teams.",
    ],
  },
  {
    id: 2,
    title: "Backend & Distributed Systems",
    icon: <FaProjectDiagram />,
    summary:
      "Designs scalable backend systems using microservices, messaging, and high-performance APIs.",
    detail: [
      "Builds microservices using Go, Java, and Node.js.",
      "Implements REST and gRPC APIs.",
      "Works with Kafka and RabbitMQ for event-driven systems.",
      "Uses Redis caching and Elasticsearch for performance.",
      "Focuses on scalability and reliability trade-offs.",
    ],
  },
  {
    id: 3,
    title: "Cloud & Infrastructure",
    icon: <FaCloud />,
    summary:
      "Deploys and manages cloud-native systems with strong focus on scalability and cost-efficiency.",
    detail: [
      "Uses AWS, Docker, and Kubernetes for deployment.",
      "Builds CI/CD pipelines.",
      "Implements serverless architectures (Lambda).",
      "Manages Linux and Nginx environments.",
      "Balances cost, performance, and complexity.",
    ],
  },
  {
    id: 4,
    title: "Full-Stack Capability",
    icon: <FaPuzzlePiece />,
    summary:
      "Handles end-to-end development from frontend interfaces to backend systems and data layers.",
    detail: [
      "Builds frontend with React and Vue.",
      "Designs backend APIs and services.",
      "Works with SQL and NoSQL databases.",
      "Delivers full-stack solutions independently.",
    ],
  },
  {
    id: 5,
    title: "Engineering Practices",
    icon: <FaCogs />,
    summary:
      "Applies clean architecture and disciplined engineering practices for maintainable systems.",
    detail: [
      "Uses SOLID principles and clean architecture.",
      "Writes testable and maintainable code.",
      "Implements Jest and Selenium testing.",
      "Continuously improves code quality.",
    ],
  },
  {
    id: 6,
    title: "Business & Execution Awareness",
    icon: <FaChartLine />,
    summary:
      "Understands business context and delivers technical solutions aligned with real outcomes.",
    detail: [
      "MBA background with business understanding.",
      "Works in Agile/Scrum environments.",
      "Aligns technical work with business goals.",
      "Communicates effectively with stakeholders.",
    ],
  },
  {
    id: 7,
    title: "Automation & Efficiency",
    icon: <FaRobot />,
    summary:
      "Automates workflows to eliminate manual processes and improve operational efficiency.",
    detail: [
      "Builds automation using n8n and scripts.",
      "Reduces repetitive manual tasks.",
      "Focuses on measurable productivity gains.",
    ],
  },
];

const Why = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  return (
    <>
      <Helmet>
        <title>Why Hire Erlando Dominico | Software Engineer & IT Consultant</title>
        <meta name="description" content="Alasan memilih Erlando Dominico: pengalaman enterprise & startup, backend, cloud, automation, dan engineering best practices." />
      </Helmet>
      <div className="why-page">
        <div
          className="why-background"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />

        <Navbar />

        <div className="why-container">
          <h1 className="why-title">Why I’m Worth Hiring</h1>

          <div className="card-grid">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="why-card"
                onClick={() => setActiveFeature(feature)}
              >
                <div className="icon-wrapper">{feature.icon}</div>

                <div className="card-title">{feature.title}</div>

                {/* ✅ REAL SUMMARY */}
                <p className="card-summary">{feature.summary}</p>
              </div>
            ))}
          </div>
        </div>

        <a href="/skills" className="experience-button">
          Explore My Skills →
        </a>

        {/* MODAL */}
        {activeFeature && (
          <div
            className="dialog-overlay"
            onClick={() => setActiveFeature(null)}
          >
            <div
              className="dialog-panel"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="dialog-title">{activeFeature.title}</h2>

              <ul className="dialog-content">
                {activeFeature.detail.map((item, index) => (
                  <li
                    key={index}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {item}
                  </li>
                ))}
              </ul>

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
    </>
  );
};

export default Why;