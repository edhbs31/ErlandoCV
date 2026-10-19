import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ArrowUpRight, CheckCircle2, Database, Layers3, X } from "lucide-react";
import { Helmet } from "react-helmet";
import "../assets/css/offers.css";
import backgroundImage from "../assets/background.JPG";
import { getContent } from "../services/api";
import { useLang } from "../i18n/LanguageContext";

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
  const { t } = useLang();
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [content, setContent] = useState(offers);
  useEffect(() => {
    getContent("offers").then((data) => {
      if (Array.isArray(data)) setContent(data);
    }).catch(() => {});
  }, []);

  return (
    <>
      <Helmet>
        <title>{t("Offers | Erlando Dominico - Scalable Systems & Automation Solutions")}</title>
        <meta name="description" content={t("Erlando Dominico Offers: scalable systems, automation, digital transformation, cloud, DevOps, dan solusi backend untuk bisnis modern.")} />
      </Helmet>
      <div className="offers-page">

        <div
          className="offers-background"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />

        <div className="offers-container">
          <p className="offers-eyebrow">{t("Capabilities")}</p>
          <h1 className="offers-title">{t("What I Offer")}</h1>

          <p className="offers-subtitle">
            {t("Engineering scalable systems, automation platforms, and digital solutions that improve operational efficiency and business execution.")}
          </p>

          <div className="offers-grid">
            {content.map((offer, index) => (
              <article className="offer-card" key={index}>
                <div className="offer-card-top"><div className="offer-icon">{offer.icon}</div><span>0{index + 1}</span></div>
                <h2>{t(offer.title)}</h2>
                <p className="offer-description">{t(offer.description)}</p>
                <button className="offer-details-button" onClick={() => setSelectedOffer(offer)}>
                  {t("Explore service")} <ArrowUpRight size={16} />
                </button>
              </article>
            ))}
          </div>
        </div>

        <section className="offers-principles">
          <div className="principles-copy">
            <p className="section-label">{t("How I deliver")}</p>
            <h2>{t("Services built")}<br />{t("around outcomes.")}</h2>
            <p>{t("Every service above is delivered the same way: understand the real problem first, then build the smallest thing that solves it well.")}</p>
          </div>
          <div className="principles-list">
            <div><Layers3 size={21} /><span><b>{t("Scoped to the problem")}</b><small>{t("No over-engineering — just the architecture the problem actually needs.")}</small></span></div>
            <div><Database size={21} /><span><b>{t("Reliable by default")}</b><small>{t("Observable flows and dependable source-of-truth systems in every build.")}</small></span></div>
            <div><CheckCircle2 size={21} /><span><b>{t("Handover-ready")}</b><small>{t("Documented, maintainable delivery your team can run without me.")}</small></span></div>
          </div>
        </section>

        <Link to="/why" className="experience-button">
          {t("Why Work With Me →")}
        </Link>
      </div>
      {selectedOffer && (
        <div className="offer-modal-overlay" onClick={() => setSelectedOffer(null)}>
          <section className="offer-modal" role="dialog" aria-modal="true" aria-labelledby="offer-modal-title" onClick={(event) => event.stopPropagation()}>
            <button className="offer-modal-close" aria-label={t("Close service details")} onClick={() => setSelectedOffer(null)}><X size={20} /></button>
            <div className="offer-modal-icon">{selectedOffer.icon}</div>
            <p>{t("Service overview")}</p>
            <h2 id="offer-modal-title">{t(selectedOffer.title)}</h2>
            <p className="offer-modal-description">{t(selectedOffer.description)}</p>
            <div className="offer-modal-divider" />
            <h3>{t("What I can deliver")}</h3>
            <ul>{selectedOffer.points.map((point) => <li key={point}><CheckCircle2 size={18} />{t(point)}</li>)}</ul>
            <Link to="/about" className="offer-modal-contact">{t("Discuss your project")} <ArrowUpRight size={17} /></Link>
          </section>
        </div>
      )}
    </>
  );
};

export default Offers;
