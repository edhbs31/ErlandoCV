import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Database,
  Filter,
  Layers3,
  X,
} from "lucide-react";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/background.JPG";
import "../assets/css/portfolio.css";
import { getPortfolioProjects } from "../services/api";

const filters = [
  { label: "All work", value: "all" },
  { label: "AI & Automation", value: "ai" },
  { label: "Microservices", value: "microservices" },
  { label: "Cloud & Platform", value: "platform" },
  { label: "Enterprise Systems", value: "enterprise" },
  { label: "Digital Transformation", value: "digitaltransformation" },
];

// The public portfolio must remain available when the optional CMS API is
// offline or not configured on the hosting account.
const fallbackProjects = [
  {
    title: "Healthcare AI Claim Intelligence", kind: "AI Document Automation", category: "ai", number: "01", accent: "violet",
    summary: "An AI-powered platform that automates healthcare claim processing with minimal manual intervention.",
    stack: ["Go", "AI Agents", "RAG", "LLM", "OCR", "AWS"], flow: ["Claim Documents", "OCR & AI Extraction", "RAG Validation", "Structured Claim Data"],
    highlights: ["AI-assisted document understanding", "Source-grounded validation", "Structured data for downstream workflows"],
    challenge: "Claims arrive in many formats and require reliable validation.", solution: "OCR, AI agents, and retrieval work together to produce traceable structured data.", result: "Structured claim data ready for downstream processing.",
  },
  {
    title: "Audio Streaming Delivery Platform", kind: "Media Microservices", category: "microservices", number: "02", accent: "gold",
    summary: "A scalable Go microservice platform for secure audio streaming and asynchronous media processing.",
    stack: ["Go", "gRPC", "RabbitMQ", "AWS S3", "Elasticsearch", "Kubernetes"], flow: ["Upload Audio", "Async Processing", "Secure Storage", "Streaming API"],
    highlights: ["Asynchronous media processing", "Secure S3 delivery", "Independently deployable services"],
    challenge: "Media workloads need to scale without disrupting playback.", solution: "Separate ingestion, processing, search, and streaming services communicate asynchronously.", result: "Secure, low-latency streaming with independent scaling.",
  },
  {
    title: "AI Document Intelligence", kind: "AI Workflow", category: "ai", number: "03", accent: "cyan",
    summary: "A Go and Gemini workflow that turns varied business documents into reliable machine-readable data.",
    stack: ["Go", "Google Gemini", "OCR", "REST API", "Docker"], flow: ["Upload Document", "OCR Extraction", "AI Validation", "Structured Output"],
    highlights: ["Semantic document validation", "Flexible layout handling", "Backend-ready JSON output"],
    challenge: "Business documents have inconsistent layouts that make template-only extraction fragile.", solution: "OCR is paired with AI reasoning to validate and structure each document.", result: "Reliable structured JSON for downstream systems.",
  },
  {
    title: "Healthcare Service Delivery Platform", kind: "Platform Engineering", category: "platform", number: "04", accent: "coral",
    summary: "A cloud-native platform that standardizes delivery and operations across healthcare microservices.",
    stack: ["Docker", "Kubernetes", "Jenkins", "AWS", "RabbitMQ"], flow: ["Commit", "Build", "Deploy", "Observe"],
    highlights: ["Reusable service patterns", "Automated delivery workflows", "Production monitoring"],
    challenge: "Teams needed consistent release and operational practices across many services.", solution: "Reusable delivery patterns embed infrastructure and operational standards in the workflow.", result: "Consistent deployments and reliable claim processing at scale.",
  },
  {
    title: "Kubernetes Microservice Platform", kind: "Microservices Architecture", category: "microservices", number: "05", accent: "blue",
    summary: "A cloud-native commerce architecture built for independent scaling and event-driven reliability.",
    stack: ["Kubernetes", "Docker", "Kafka", "Redis", "PostgreSQL", "Grafana"], flow: ["Client", "API Gateway", "Services", "Event Bus"],
    highlights: ["Clear data ownership", "Event-driven communication", "Fault isolation"],
    challenge: "Growing commerce workflows needed services that could scale and fail independently.", solution: "Bounded services own their data and communicate through well-defined APIs and events.", result: "Independent deployment and horizontal scalability.",
  },
  {
    title: "Enterprise Finance Platform", kind: "Enterprise Systems & ERP", category: "enterprise", number: "06", accent: "blue",
    summary: "SAP ABAP and Java financial systems that automate enterprise finance workflows.",
    stack: ["Java", "SAP R/3 ABAP", "RFC", "Oracle", "Jenkins"], flow: ["Java Application", "RFC", "SAP FI Modules", "Batch Workflows"],
    highlights: ["Automated tax and payment workflows", "SAP RFC integrations", "Consistent release automation"],
    challenge: "Manual financial operations and legacy batch work were slow and error-prone.", solution: "Java integrations and SAP modules automate core Financial Accounting workflows.", result: "Fewer manual errors and more consistent releases.",
  },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [content, setContent] = useState(fallbackProjects);
  const [portfolioStatus, setPortfolioStatus] = useState("ready");
  useEffect(() => {
    getPortfolioProjects().then((data) => {
      if (!Array.isArray(data) || data.length === 0) throw new Error("Invalid portfolio response");
      setContent(data.map((item) => {
        return {
          ...item,
          icon: Code2,
          summary: "",
          stack: [],
          flow: [],
          highlights: [],
          ...item,
        };
      }));
      setPortfolioStatus("ready");
    }).catch(() => {
      setContent(fallbackProjects);
      setPortfolioStatus("ready");
    });
  }, []);
  const visibleProjects = content.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  return (
    <>
      <Helmet>
        <title>Portfolio | Erlando Dominico</title>
        <meta
          name="description"
          content="Selected AI automation, microservices, and cloud platform projects by Erlando Dominico."
        />
      </Helmet>
      <main className="portfolio-page">
        <Navbar />
        <div
          className="portfolio-background"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />

        <section className="portfolio-hero">
          <div className="portfolio-eyebrow"><Code2 size={16} /> Selected work</div>
          <h1>Complex systems,<br /><em>made useful.</em></h1>
          <p className="portfolio-intro">
            A selection of AI, distributed systems, and platform work designed
            around one idea: technology should make the next decision easier.
          </p>
        </section>

        <section className="portfolio-work" aria-labelledby="work-heading">
          <div className="portfolio-section-head">
            <div>
              <p className="section-label">Capabilities in practice</p>
              <h2 id="work-heading">Featured projects</h2>
            </div>
            <div className="portfolio-filters" aria-label="Filter projects">
              <Filter size={15} aria-hidden="true" />
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  className={activeFilter === filter.value ? "is-active" : ""}
                  onClick={() => setActiveFilter(filter.value)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="project-grid">
            {portfolioStatus === "loading" && <p className="portfolio-message">Loading projects…</p>}
            {portfolioStatus === "error" && <p className="portfolio-message">Projects are currently unavailable. Please try again shortly.</p>}
            {portfolioStatus === "ready" && visibleProjects.length === 0 && <p className="portfolio-message">No projects match this filter yet.</p>}
            {portfolioStatus === "ready" && visibleProjects.map((project) => {
              // Fallback projects do not go through the CMS mapper, so they
              // need the same safe default icon as API-provided projects.
              const Icon = project.icon || Code2;
              return (
                <article className={`project-card ${project.accent}`} key={project.title}>
                  <div className="project-card-top">
                    <span className="project-number">/{project.number}</span>
                    <span className="project-icon"><Icon size={23} /></span>
                  </div>
                  <div className="project-card-body">
                    <p style={{color:"white"}}>{project.kind}</p>
                    <h3 style={{color:"white"}}>{project.title}</h3>
                    <span className="project-line" />
                    <p className="project-summary">{project.summary}</p>
                  </div>
                  <button className="project-link" onClick={() => setSelectedProject(project)}>
                    View case study <ArrowUpRight size={18} />
                  </button>
                </article>
              );
            })}
          </div>
        </section>

        <section className="portfolio-principles">
          <div className="principles-copy">
            <p className="section-label">How I work</p>
            <h2>Useful beats<br />impressive.</h2>
            <p>Behind every system is a practical question: will this make work clearer, faster, or more reliable for the people who use it?</p>
          </div>
          <div className="principles-list">
            <div><Layers3 size={21} /><span><b>Architecture with intent</b><small>Clear boundaries, sensible trade-offs, room to grow.</small></span></div>
            <div><Database size={21} /><span><b>Data you can rely on</b><small>Observable flows and dependable source-of-truth systems.</small></span></div>
            <div><CheckCircle2 size={21} /><span><b>Delivery that lasts</b><small>Maintainable software built for the team that inherits it.</small></span></div>
          </div>
        </section>

        <footer className="portfolio-footer">
          <span>Have a system worth improving?</span>
          <a href="/about">Contact Me <ArrowUpRight size={17} /></a>
        </footer>

        <a href="/about" className="experience-button">
          Let’s Talk →
        </a>
      </main>

      {selectedProject && (
        <div className="case-study-overlay" role="presentation" onClick={() => setSelectedProject(null)}>
          <article className="case-study" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" aria-label="Close case study" onClick={() => setSelectedProject(null)}><X size={21} /></button>
            <header className={`case-study-hero ${selectedProject.accent}`}>
              <div className="case-study-hero-content">
                <span className="modal-kind">{selectedProject.kind} · Case study</span>
                <h2 id="modal-title">{selectedProject.title}</h2>
                <p>{selectedProject.summary}</p>
                <div className="modal-stack">{selectedProject.stack.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
              {selectedProject.claimFlow ? (
                <div className="architecture-visual claim-architecture-visual" aria-label={`${selectedProject.title} architecture flow`}>
                  <span className="visual-label">System flow</span>
                  <div className="claim-flow">
                    {selectedProject.claimFlow.slice(0, 7).map((step, index) => <React.Fragment key={step}><div className="claim-flow-node"><span>{String(index + 1).padStart(2, "0")}</span>{step}</div><i /></React.Fragment>)}
                    <div className="claim-branches">{selectedProject.decisionBranches.map((branch) => <div key={branch}>{branch}</div>)}</div>
                    <i />
                    {selectedProject.claimFlow.slice(7).map((step, index) => <React.Fragment key={step}><div className="claim-flow-node"><span>{String(index + 8).padStart(2, "0")}</span>{step}</div>{index < selectedProject.claimFlow.slice(7).length - 1 && <i />}</React.Fragment>)}
                  </div>
                </div>
              ) : selectedProject.microserviceArchitecture ? (
                <div className="architecture-visual microservice-architecture" aria-label={`${selectedProject.title} architecture overview`}>
                  <span className="visual-label">Architecture overview</span>
                  <div className="micro-flow">
                    <div className="micro-node blue-node">Client<br /><small>Web / Mobile / B2B</small></div><i />
                    <div className="micro-node blue-node">Load Balancer</div><i />
                    <div className="micro-node blue-node">API Gateway<br /><small>Auth · Rate Limit · API</small></div><i />
                    <div className="cluster-node"><b>Kubernetes Cluster</b><span>Production · Service Discovery · Self Healing</span><div className="service-grid">{["Order", "Payment", "Inventory", "Notification", "Catalog", "User"].map((service) => <div key={service}>{service}<small>Docker Pod</small></div>)}</div></div><i />
                    <div className="event-node">Kafka<br /><small>Order Created · Payment Completed · Stock Updated</small></div><i />
                    <div className="database-row"><span>PostgreSQL</span><span>PostgreSQL</span><span>MongoDB</span></div>
                    <div className="monitoring-row">Kubernetes · Docker · Prometheus · Grafana · Redis · CI/CD</div>
                  </div>
                </div>
              ) : (
                <div className="architecture-visual" aria-label={`${selectedProject.title} architecture flow`}>
                  <span className="visual-label">System flow</span>
                  <div className="visual-nodes">
                    {selectedProject.flow.map((step, index) => <React.Fragment key={step}><div className="visual-node"><span>{String(index + 1).padStart(2, "0")}</span>{step}</div>{index < selectedProject.flow.length - 1 && <i />}</React.Fragment>)}
                  </div>
                </div>
              )}
            </header>
            <div className="case-study-content">
              <section className="case-study-overview">
                <div><p className="case-label">The challenge</p><h3 style={{ color: "white" }}>{selectedProject.challenge}</h3></div>
                <div><p className="case-label">The approach</p><p>{selectedProject.solution}</p></div>
              </section>
              <section className="case-study-details">
                <div className="detail-illustration"><span>01</span><Layers3 size={40} /><b>Architecture<br />with intent</b></div>
                <div>
                  <p className="case-label">What makes it work</p>
                  <ul>{selectedProject.highlights.map((highlight) => <li key={highlight}><CheckCircle2 size={18} />{highlight}</li>)}</ul>
                  <div className="modal-result"><CheckCircle2 size={19} /> {selectedProject.result}</div>
                </div>
              </section>
              {selectedProject.architecture && (
                <section className="architecture-explanation">
                  <p className="case-label">Architecture with intent</p>
                  <p>{selectedProject.architecture}</p>
                </section>
              )}
              {selectedProject.businessImpact && (
                <section className="business-impact">
                  <div><p className="case-label">Business impact</p><h3 style={{ color: "white" }}>Automation built for<br />enterprise scale.</h3></div>
                  <ul>{selectedProject.businessImpact.map((impact) => <li key={impact}><CheckCircle2 size={18} />{impact}</li>)}</ul>
                </section>
              )}
              {selectedProject.lambdaFunctions && (
                <section className="lambda-table">Automation built for
enterprise scale. make this section white color
                  <p className="case-label">Example AWS Lambda responsibilities</p>
                  <table>
                    <thead>
                      <tr><th>AWS Lambda Function</th><th>Purpose</th></tr>
                    </thead>
                    <tbody>
                      {selectedProject.lambdaFunctions.map((fn) => (
                        <tr key={fn.name}><td>{fn.name}</td><td>{fn.purpose}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </section>
              )}
            </div>
          </article>
        </div>
      )}
    </>
  );
};

export default Portfolio;
