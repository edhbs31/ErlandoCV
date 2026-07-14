import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, Database, Layers3, X } from "lucide-react";
import { Helmet } from "react-helmet";
import "../assets/css/offers.css";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/background.JPG";

const offers = [
  {
    title: "Backend & Microservices Engineering",
    icon: "⚙️",
    description:
      "Scalable backend platforms, APIs, and distributed services built for performance, reliability, and independent scale.",
    points: [
      "Microservices using Golang, Java, and Node.js",
      "Kafka & RabbitMQ event-driven systems",
      "REST & gRPC APIs",
      "Docker & Kubernetes deployment",
      "Database architecture across SQL and NoSQL",
      "Redis caching and asynchronous processing",
    ],
  },
  {
    title: "AI Document & Workflow Automation",
    icon: "🤖",
    description:
      "AI-powered document intelligence and automation that reduce manual operations and turn unstructured work into reliable workflows.",
    points: [
      "OCR document extraction pipelines",
      "AI-based validation & classification",
      "Spreadsheet automation systems",
      "Intelligent folder mapping automation",
      "Large-scale file processing workflows",
      "n8n workflows and custom internal tools",
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
    title: "Technical Strategy & MVP Development",
    icon: "🧠",
    description:
      "Technical direction and pragmatic MVP delivery that connect business goals with scalable engineering execution.",
    points: [
      "Technical feasibility analysis",
      "System architecture planning",
      "Workflow & operational optimization",
      "Scalable platform strategy",
      "Automation opportunity assessment",
      "Rapid MVP backend development",
      "Scalable architecture foundations",
    ],
  },
];

const Offers = () => {
  const [selectedOffer, setSelectedOffer] = useState(null);

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
          <p className="offers-eyebrow">Capabilities</p>
          <h1 className="offers-title">What I Offer</h1>

          <p className="offers-subtitle">
            Engineering scalable systems, automation platforms, and digital
            solutions that improve operational efficiency and business execution.
          </p>

          <div className="offers-grid">
            {offers.map((offer, index) => (
              <article className="offer-card" key={index}>
                <div className="offer-card-top"><div className="offer-icon">{offer.icon}</div><span>0{index + 1}</span></div>
                <h2>{offer.title}</h2>
                <p className="offer-description">{offer.description}</p>
                <button className="offer-details-button" onClick={() => setSelectedOffer(offer)}>
                  Explore service <ArrowUpRight size={16} />
                </button>
              </article>
            ))}
          </div>
        </div>

        <section className="offers-principles">
          <div className="principles-copy">
            <p className="section-label">How I deliver</p>
            <h2>Services built<br />around outcomes.</h2>
            <p>Every service above is delivered the same way: understand the real problem first, then build the smallest thing that solves it well.</p>
          </div>
          <div className="principles-list">
            <div><Layers3 size={21} /><span><b>Scoped to the problem</b><small>No over-engineering — just the architecture the problem actually needs.</small></span></div>
            <div><Database size={21} /><span><b>Reliable by default</b><small>Observable flows and dependable source-of-truth systems in every build.</small></span></div>
            <div><CheckCircle2 size={21} /><span><b>Handover-ready</b><small>Documented, maintainable delivery your team can run without me.</small></span></div>
          </div>
        </section>

        <a href="/why" className="experience-button">
          Why Work With Me →
        </a>
      </div>
      {selectedOffer && (
        <div className="offer-modal-overlay" onClick={() => setSelectedOffer(null)}>
          <section className="offer-modal" role="dialog" aria-modal="true" aria-labelledby="offer-modal-title" onClick={(event) => event.stopPropagation()}>
            <button className="offer-modal-close" aria-label="Close service details" onClick={() => setSelectedOffer(null)}><X size={20} /></button>
            <div className="offer-modal-icon">{selectedOffer.icon}</div>
            <p>Service overview</p>
            <h2 id="offer-modal-title">{selectedOffer.title}</h2>
            <p className="offer-modal-description">{selectedOffer.description}</p>
            <div className="offer-modal-divider" />
            <h3>What I can deliver</h3>
            <ul>{selectedOffer.points.map((point) => <li key={point}><CheckCircle2 size={18} />{point}</li>)}</ul>
            <a href="/contact" className="offer-modal-contact">Discuss your project <ArrowUpRight size={17} /></a>
          </section>
        </div>
      )}
    </>
  );
};

export default Offers;
