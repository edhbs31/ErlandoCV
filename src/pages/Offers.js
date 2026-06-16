import React from "react";
import { Helmet } from "react-helmet";
import "../assets/css/offers.css";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/background.JPG";

const offers = [
  {
    title: "Enterprise Microservices Architecture",
    icon: "⚙️",
    description:
      "Designs scalable backend systems using microservices, event-driven architecture, and cloud-native infrastructure.",
    points: [
      "Microservices using Golang, Java, and Node.js",
      "Kafka & RabbitMQ event-driven systems",
      "REST & gRPC APIs",
      "Docker & Kubernetes deployment",
      "Scalable distributed architecture",
      "High-performance backend systems",
    ],
  },
  {
    title: "AI & OCR Automation Systems",
    icon: "🤖",
    description:
      "Builds AI-powered OCR and workflow automation systems to reduce manual operations and improve processing speed.",
    points: [
      "OCR document extraction pipelines",
      "AI-based validation & classification",
      "Spreadsheet automation systems",
      "Intelligent folder mapping automation",
      "Large-scale file processing workflows",
      "PDF & image structured data extraction",
    ],
  },
  {
    title: "Digital Transformation Solutions",
    icon: "📈",
    description:
      "Transforms manual and legacy operational workflows into scalable digital systems with measurable efficiency improvements.",
    points: [
      "Legacy system modernization",
      "Workflow automation",
      "Business process optimization",
      "Operational efficiency improvements",
      "Cross-system integration",
      "Business & engineering alignment",
    ],
  },
  {
    title: "Cloud & DevOps Engineering",
    icon: "☁️",
    description:
      "Implements scalable infrastructure and deployment pipelines optimized for reliability and maintainability.",
    points: [
      "AWS cloud infrastructure",
      "CI/CD pipeline automation",
      "Docker & Kubernetes orchestration",
      "Linux & Nginx administration",
      "Monitoring & observability setup",
      "Serverless architecture using AWS Lambda",
    ],
  },
  {
    title: "Backend & API Engineering",
    icon: "🧩",
    description:
      "Develops reliable backend services and APIs focused on scalability, maintainability, and performance.",
    points: [
      "REST & gRPC API development",
      "Database architecture design",
      "SQL & NoSQL systems",
      "Redis caching optimization",
      "Elasticsearch integration",
      "Scalable asynchronous processing",
    ],
  },
  {
    title: "Automation & Internal Tools",
    icon: "🚀",
    description:
      "Builds automation tools and internal systems that eliminate repetitive work and improve operational speed.",
    points: [
      "n8n workflow automation",
      "Internal dashboard systems",
      "File processing automation",
      "Data synchronization tools",
      "Custom operational tooling",
      "Manual process elimination",
    ],
  },
  {
    title: "Technical Product & System Strategy",
    icon: "🧠",
    description:
      "Bridges business objectives with scalable technical execution for startups and operational teams.",
    points: [
      "Technical feasibility analysis",
      "System architecture planning",
      "Workflow & operational optimization",
      "Scalable platform strategy",
      "Automation opportunity assessment",
      "Technology stack recommendations",
    ],
  },
  {
    title: "Startup MVP & Automation Development",
    icon: "🚀",
    description:
      "Helps startups rapidly build scalable MVP systems and automate operations without excessive infrastructure overhead.",
    points: [
      "Rapid MVP backend development",
      "Scalable architecture foundations",
      "Automation-first operational design",
      "Cloud-native deployment setup",
      "AI-assisted workflow integration",
      "Cost-efficient infrastructure planning",
    ],
  },
];

const Offers = () => {
  return (
    <>
      <Helmet>
        <title>Offers | Erlando Dominico - Scalable Systems & Automation Solutions</title>
        <meta name="description" content="Erlando Dominico Offers: scalable systems, automation, digital transformation, cloud, DevOps, dan solusi backend untuk bisnis modern." />
      </Helmet>
      <div className="offers-page">
        <Navbar />

        <div
          className="offers-background"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />

        <div className="offers-container">
          <h1 className="offers-title">What I Offer</h1>

          <p className="offers-subtitle">
            Engineering scalable systems, automation platforms, and digital
            solutions that improve operational efficiency and business execution.
          </p>

          <div className="offers-grid">
            {offers.map((offer, index) => (
              <div className="offer-card" key={index}>
                <div className="offer-icon">{offer.icon}</div>

                <h2>{offer.title}</h2>

                <p className="offer-description">{offer.description}</p>

                <ul className="offer-points">
                  {offer.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <a href="/why" className="experience-button">
          Why Work With Me →
        </a>
      </div>
    </>
  );
};

export default Offers;