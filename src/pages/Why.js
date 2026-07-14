import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "../assets/css/why.css";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/background.JPG";

import {
  FaBriefcase,
  FaProjectDiagram,
  FaCloud,
  FaChartLine,
  FaRobot,
} from "react-icons/fa";
import { ArrowUpRight, Layers3, Database, CheckCircle2 } from "lucide-react";

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
    title: "Cloud-Native Engineering",
    icon: <FaCloud />,
    summary:
      "Delivers cloud-native systems with disciplined architecture, automated delivery, and dependable operations.",
    detail: [
      "Uses AWS, Docker, and Kubernetes for deployment.",
      "Builds CI/CD pipelines.",
      "Implements serverless architectures (Lambda).",
      "Manages Linux and Nginx environments.",
      "Balances cost, performance, and complexity.",
      "Applies SOLID principles and clean architecture.",
      "Builds testable, maintainable systems with quality checks.",
    ],
  },
  {
    id: 4,
    title: "AI & Automation",
    icon: <FaRobot />,
    summary:
      "Automates workflows and repetitive operations with AI-assisted systems, n8n, and pragmatic integrations.",
    detail: [
      "Builds automation using n8n and scripts.",
      "Reduces repetitive manual tasks.",
      "Builds OCR and document-processing workflows.",
      "Focuses on measurable productivity gains.",
    ],
  },
  {
    id: 5,
    title: "Business-Aware Technical Execution",
    icon: <FaChartLine />,
    summary:
      "Connects product needs, technical execution, and operational outcomes across the full delivery lifecycle.",
    detail: [
      "MBA background with business understanding.",
      "Works in Agile/Scrum environments.",
      "Aligns technical work with business goals.",
      "Communicates effectively with stakeholders.",
      "Builds frontend with React and Vue when needed.",
      "Designs backend APIs, data layers, and integrations end to end.",
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
          <p className="why-eyebrow">Why work with me</p>
          <h1 className="why-title">Why Teams Choose Me</h1>

          <div className="card-grid">
            {features.map((feature) => (
              <article
                key={feature.id}
                className="why-card"
              >
                <div className="why-card-top"><div className="icon-wrapper">{feature.icon}</div><span>0{feature.id}</span></div>

                <div className="card-title">{feature.title}</div>

                {/* ✅ REAL SUMMARY */}
                <p className="card-summary">{feature.summary}</p>
                <button className="why-details-button" onClick={() => setActiveFeature(feature)}>Explore strength <ArrowUpRight size={16} /></button>
              </article>
            ))}
          </div>
        </div>

        <section className="why-principles">
          <div className="principles-copy">
            <p className="section-label">Why hire me</p>
            <h2>Hire for outcomes,<br />not just hours.</h2>
            <p>Every engagement is judged by one question: does this reduce risk, speed up delivery, and leave behind a system the team can actually maintain?</p>
          </div>
          <div className="principles-list">
            <div><Layers3 size={21} /><span><b>Proven across contexts</b><small>Enterprise discipline and startup speed, applied to the problem in front of me.</small></span></div>
            <div><Database size={21} /><span><b>Ownership, not just output</b><small>I take responsibility for outcomes, not just the tickets assigned to me.</small></span></div>
            <div><CheckCircle2 size={21} /><span><b>Built to be inherited</b><small>Clear, maintainable systems the next engineer can pick up without guesswork.</small></span></div>
          </div>
        </section>

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
