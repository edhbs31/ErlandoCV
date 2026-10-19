import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Testimonials from "../components/Testimonials";
import "../assets/css/why.css";
import backgroundImage from "../assets/background.JPG";
import {
  FaBriefcase,
  FaProjectDiagram,
  FaCloud,
  FaChartLine,
  FaRobot,
} from "react-icons/fa";
import { ArrowUpRight, CheckCircle2, Layers3, Database } from "lucide-react";
import { getContent } from "../services/api";
import { useLang } from "../i18n/LanguageContext";

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
  const { t } = useLang();
  const [activeFeature, setActiveFeature] = useState(null);
  const [content, setContent] = useState(features);

  useEffect(() => {
    getContent("why-hire-me")
      .then((data) => {
        if (Array.isArray(data)) {
          setContent(
            data.map((item, index) => ({
              ...item,
              id: item.id || index + 1,
              icon: features[index]?.icon || <FaBriefcase />,
            }))
          );
        }
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <Helmet>
        <title>{t("Why Hire Erlando Dominico | Software Engineer & IT Consultant")}</title>
        <meta
          name="description"
          content={t("Alasan memilih Erlando Dominico: pengalaman enterprise & startup, backend, cloud, automation, dan engineering best practices.")}
        />
      </Helmet>

      <div className="why-page">
        <div
          className="why-background"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />

        <div className="why-container">
          {/* SECTION 1: WHY TEAMS CHOOSE ME */}
          <section id="why-choose-me">
            <p className="why-eyebrow">{t("Why work with me")}</p>
            <h1 className="why-title">{t("Why Teams Choose Me")}</h1>

            <div className="why-scroll-group">
              <a href="#how-we-work" className="why-scroll-btn">
                {t("See how I work")} <ArrowUpRight size={15} />
              </a>
              <a href="#vendor-value" className="why-scroll-btn">
                {t("Capabilities & Value")} <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="card-grid">
              {content.map((feature) => (
                <article key={feature.id} className="why-card">
                  <div className="why-card-top">
                    <div className="icon-wrapper">{feature.icon}</div>
                    <span>0{feature.id}</span>
                  </div>
                  <div className="card-title">{t(feature.title)}</div>
                  <p className="card-summary">{t(feature.summary)}</p>
                  <button
                    className="why-details-button"
                    onClick={() => setActiveFeature(feature)}
                  >
                    {t("Explore strength")} <ArrowUpRight size={16} />
                  </button>
                </article>
              ))}
            </div>
          </section>

          {/* SECTION 3: HOW WE WORK */}
<section id="how-we-work" className="how-we-work" aria-labelledby="how-we-work-title">

  <div className="process-heading">
    <p className="why-eyebrow">{t("How we work")}</p>

    <h2 id="how-we-work-title" className="why-title">
      {t("From Ideas")}<br />{t("To Impact.")}
    </h2>

    <p>
      {t("We turn complex technical requirements into reliable software that delivers real business value and is built to evolve.")}
    </p>
  </div>

  <div className="process-grid">

    <article>
      <span>01</span>
      <h3>{t("Understand the Need")}</h3>
      <p>
        {t("We start with your business goals, existing systems, and technical challenges to understand what actually needs to be solved.")}
      </p>
    </article>

    <article>
      <span>02</span>
      <h3>{t("Design the Solution")}</h3>
      <p>
        {t("We define the right architecture, technology, integrations, and delivery approach before development begins.")}
      </p>
    </article>

    <article>
      <span>03</span>
      <h3>{t("Build & Deliver")}</h3>
      <p>
        {t("We develop in focused increments, validate early, and continuously turn ideas into working, production-ready software.")}
      </p>
    </article>

    <article>
      <span>04</span>
      <h3>{t("Deploy & Scale")}</h3>
      <p>
        {t("We handle deployment, documentation, monitoring, and knowledge transfer so the solution can operate and evolve long after launch.")}
      </p>
    </article>

  </div>

  <div className="why-cta-wrapper">
    <a href="#vendor-value" className="why-scroll-btn">
      {t("Capabilities & Value")} <ArrowUpRight size={15} />
    </a>
  </div>

</section>
          {/* SECTION 4: THE SMALL-TEAM ADVANTAGE */}
         {/* SECTION 4: THE SMALL-TEAM ADVANTAGE / CAPABILITY & RELIABILITY */}
<section id="vendor-value" className="vendor-value" aria-labelledby="vendor-value-title">
  <div className="process-heading">
    <p className="why-eyebrow">{t("Capabilities & Value")}</p>
    <h2 id="vendor-value-title" className="why-title">
      {t("Engineering that delivers.")}<br />
      {t("Built for real business needs.")}
    </h2>
    <p className="section-description">
      {t("From technical challenges to production-ready solutions — with experienced engineering, clear communication, and measurable delivery.")}
    </p>
  </div>

  <div className="vendor-grid">
    <article className="vendor-card">
      <div className="vendor-card-num">01</div>
      <h3>{t("Experienced Engineering")}</h3>
      <p>
        {t("Senior-level technical experience across backend systems, cloud infrastructure, integrations, automation, and distributed services.")}
      </p>
    </article>

    <article className="vendor-card">
      <div className="vendor-card-num">02</div>
      <h3>{t("Built Around Your Needs")}</h3>
      <p>
        {t("We adapt to your existing team, architecture, and business process — whether you need project delivery, technical support, or additional engineering capacity.")}
      </p>
    </article>

    <article className="vendor-card">
      <div className="vendor-card-num">03</div>
      <h3>{t("Reliable Delivery")}</h3>
      <p>
        {t("Structured development, CI/CD, documentation, monitoring, and production practices keep delivery predictable from development to deployment.")}
      </p>
    </article>

    <article className="vendor-card">
      <div className="vendor-card-num">04</div>
      <h3>{t("Ready to Work With Your Team")}</h3>
      <p>
        {t("Flexible engagement for companies, vendors, and technology partners — from individual engineering support to end-to-end system delivery.")}
      </p>
    </article>
  </div>

  <div className="why-cta-wrapper">
    <Link to="/about#contact" className="why-cta-primary">
      {t("Let's Talk About Your Project")} <ArrowUpRight size={16} />
    </Link>
  </div>
</section>
               <Testimonials />

               <section className="why-principles">
            <div className="principles-copy">
              <p className="section-label">{t("Why Hire Me")}</p>
              <h2>{t("Hire for outcomes, not just hours.")}</h2>
              <p>
                {t("Every engagement is judged by one question: does this reduce risk, speed up delivery, and leave behind a system the team can actually maintain?")}
              </p>
            </div>
            <div className="principles-list">
              <div>
                <Layers3 size={22} />
                <div>
                  <b>{t("Proven across contexts")}</b>
                  <small>{t("Enterprise discipline and startup speed, applied to the problem in front of me.")}</small>
                </div>
              </div>
              <div>
                <Database size={22} />
                <div>
                  <b>{t("Ownership, not just output")}</b>
                  <small>{t("I take responsibility for outcomes, not just the tickets assigned to me.")}</small>
                </div>
              </div>
              <div>
                <CheckCircle2 size={22} />
                <div>
                  <b>{t("Built to be inherited")}</b>
                  <small>{t("Clear, maintainable systems the next engineer can pick up without guesswork.")}</small>
                </div>
              </div>
            </div>
          </section>
          <Link to="/skills" className="experience-button">
            {t("Explore My Skills →")}
          </Link>
        </div>

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
              <h2 className="dialog-title">{t(activeFeature.title)}</h2>
              <ul className="dialog-content">
                {activeFeature.detail.map((item, index) => (
                  <li
                    key={index}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {t(item)}
                  </li>
                ))}
              </ul>
              <button
                className="dialog-button"
                onClick={() => setActiveFeature(null)}
              >
                {t("Close")}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Why;