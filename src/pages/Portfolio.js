import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  ArrowUpRight,
  Bot,
  Boxes,
  CheckCircle2,
  CloudCog,
  Code2,
  Database,
  Filter,
  Layers3,
  Radio,
  Sparkles,
  X,
} from "lucide-react";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/background.JPG";
import "../assets/css/portfolio.css";

const projects = [
  {
    title: "Healthcare AI Claim Intelligence",
    kind: "AI Document Automation",
    category: "ai",
    icon: Bot,
    number: "01",
    accent: "violet",
    summary:
      "An AI-powered platform that automates healthcare claim processing with minimal manual intervention.",
    description:
      "The platform combines OCR, AI Agents, Retrieval-Augmented Generation (RAG), and Large Language Models (LLMs) to extract, validate, and structure medical documents for downstream claim processing.",
    stack: ["Go", "NestJS", "AI Agents", "RAG", "LLM", "OCR", "MongoDB", "n8n", "AWS"],
    result: "Structured, traceable claim data ready for downstream processing",
    challenge: "Healthcare claims arrive in various formats, including invoices, receipts, medical reports, referral letters, and claim forms. Manual review is time-consuming, error-prone, and difficult to scale, especially when information must be verified across multiple documents and business rules.",
    solution: "Designed an AI-powered document intelligence platform that combines OCR, Retrieval-Augmented Generation (RAG), AI Agents, and Large Language Models (LLMs) to understand healthcare documents, validate extracted information, and generate structured claim data for downstream processing. The solution integrates with existing enterprise claim workflows while maintaining traceability and confidence-based validation.",
    highlights: ["AI Agent orchestration for multi-step reasoning", "Retrieval-Augmented Generation (RAG) for source-grounded responses", "Intelligent OCR with document classification", "Context-aware validation using business rules", "Structured JSON output for backend services", "Human-in-the-loop review for low-confidence predictions"],
    architecture: "Rather than relying solely on OCR, the platform combines AI Agents with Retrieval-Augmented Generation (RAG) to reason over healthcare documents, verify extracted information against trusted knowledge sources, and produce structured, auditable outputs. This architecture reduces manual effort while improving consistency, scalability, and confidence in enterprise claim processing.",
    businessImpact: ["Processes 5,000+ B2B healthcare claim transactions daily.", "Reduces repetitive manual document verification through AI-assisted automation.", "Improves data consistency by combining OCR, AI Agents, and source-grounded retrieval.", "Integrates seamlessly with enterprise healthcare claim and payment workflows.", "Designed with a scalable microservice architecture for cloud-native deployment."],
    claimFlow: ["Healthcare Claim Documents", "OCR & Document Preprocessing", "AI Prompt Construction", "Dynamic LLM Model Selection (Gemini / GPT / Claude / Others)", "AI Document Understanding & Extraction", "Knowledge Retrieval (RAG / Policy KB)", "AI Agent Reasoning & Decision Engine", "Claim Approval Recommendation (Approve / Reject / Review)", "Confidence Score & Explanation", "Structured JSON + Claim Workflow", "Healthcare Claim Management"],
    decisionBranches: ["Benefit Validation", "Fraud Detection", "Medical Reasoning"],
    flow: ["Claim Documents", "OCR & AI Extraction", "RAG + AI Agent Validation", "Structured Claim Data"],
  },
  {
    title: "Audio Streaming Delivery Platform",
    kind: "Media Microservices",
    category: "microservices",
    icon: Radio,
    number: "02",
    accent: "gold",
    summary:
      "A scalable microservice platform built with Go to deliver secure audio streaming, asynchronous media processing, and high-performance content discovery for digital media applications.",
    description:
      "Media ingestion, processing, search, and streaming are split into independently deployable services, so uploads, transcoding, and playback each scale on their own without competing for the same resources.",
    stack: ["Go", "gRPC", "RabbitMQ", "AWS S3", "Elasticsearch", "PostgreSQL", "Docker", "Kubernetes"],
    result: "Secure, low-latency streaming with independently scalable services",
    challenge: "A digital media platform required a scalable backend capable of processing uploaded audio, securely delivering streaming content, and supporting fast content discovery without affecting the user experience during peak traffic.",
    solution: "Designed a Go-based microservice architecture that separates media ingestion, processing, search, and streaming into independent services. Audio processing tasks are executed asynchronously through RabbitMQ, media assets are securely stored in Amazon S3 using pre-signed URLs, and Elasticsearch provides fast search capabilities across the content catalog.",
    highlights: ["Go-based microservice architecture", "Asynchronous media processing with RabbitMQ", "Secure audio delivery using Amazon S3 pre-signed URLs", "High-performance search powered by Elasticsearch", "gRPC communication between internal services", "Independent deployment with Docker & Kubernetes"],
    architecture: "The platform decouples media upload, processing, storage, search, and streaming into independently deployable services. Event-driven communication enables scalable background processing while secure object storage and indexed metadata provide reliable media delivery with low latency.",
    businessImpact: ["Streams audio content reliably during peak traffic without blocking uploads.", "Decouples ingestion, processing, search, and delivery for independent scaling.", "Secures media delivery through S3 pre-signed URLs instead of public access.", "Speeds up content discovery with Elasticsearch-backed search.", "Deploys and scales each service independently via Docker and Kubernetes."],
    microserviceArchitecture: true,
    flow: ["Upload Audio", "RabbitMQ Processing", "AWS S3 Storage", "Streaming API"],
  },
  {
    title: "AI Document Intelligence",
    kind: "AI Workflow",
    category: "ai",
    icon: Sparkles,
    number: "03",
    accent: "cyan",
    summary:
      "An AI-powered document processing platform built with Go, Google Gemini, and OCR to turn business documents into reliable, machine-readable data.",
    description:
      "The service extracts, validates, classifies, and structures business documents using OCR and LLM-based reasoning—without relying on brittle template-only extraction.",
    stack: ["Go", "Google Gemini", "OCR", "REST API", "Docker"],
    result: "Reliable structured JSON outputs for downstream systems",
    challenge: "Business documents such as invoices, receipts, forms, and reports often arrive in inconsistent layouts, making traditional OCR pipelines difficult to maintain. Manual validation slows processing, increases operational effort, and introduces inconsistent data quality.",
    solution: "Built an AI-powered document processing workflow in Go that combines OCR with Google Gemini to understand document context, validate extracted information, and generate structured outputs for downstream systems. Rather than relying solely on template-based extraction, the workflow uses LLM reasoning to improve accuracy across diverse document formats.",
    highlights: ["AI-assisted document understanding with Google Gemini", "OCR extraction with semantic validation", "Handles multiple document layouts without template dependency", "Confidence-based validation for higher extraction accuracy", "Structured JSON output for backend integration", "Containerized deployment with Docker and REST APIs"],
    architecture: "Designed as a modular pipeline where OCR handles text extraction, Gemini performs semantic understanding and validation, and backend services transform validated data into standardized JSON for seamless integration with enterprise applications.",
    businessImpact: ["Reduced manual document verification through AI-assisted automation.", "Improved extraction accuracy across diverse document formats.", "Produced structured JSON outputs for seamless backend integration.", "Designed as a scalable Go-based service deployable in containerized environments."],
    flow: ["Upload Document", "OCR Extraction", "Gemini Validation", "Structured Output"],
  },
  {
    title: "Healthcare Service Delivery Platform",
    kind: "Platform Engineering",
    category: "platform",
    icon: CloudCog,
    number: "04",
    accent: "coral",
    summary:
      "A cloud-native platform that standardizes how healthcare services are built, deployed, and operated across distributed microservices.",
    description:
      "Reusable service patterns, automated delivery workflows, and cloud deployment practices give teams a consistent path from code changes to production workloads, with infrastructure and operational standards embedded into the delivery process rather than handled manually.",
    stack: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "AWS", "AWS Lambda", "RabbitMQ", "New Relic"],
    result: "Consistent deployments and reliable claim processing at scale",
    challenge: "Healthcare applications required multiple backend services to process claims, payments, integrations, and document workflows. Without consistent deployment patterns, each service required custom configuration, manual release steps, and duplicated operational practices.",
    solution: "Created reusable service patterns, automated delivery workflows, and cloud deployment practices to provide teams with a consistent path from code changes to production workloads. Infrastructure and operational standards were embedded into the delivery process rather than handled manually.",
    highlights: ["Standardized backend services using Node.js, Go, Docker, and Kubernetes to simplify deployment and service ownership.", "Implemented and maintained CI/CD pipelines using Jenkins and GitHub Actions to automate application builds, validation, container packaging, and deployment processes.", "Developed AWS Lambda functions to automate healthcare integration workflows, including claim synchronization, scheduled approval processes, and event-driven backend operations.", "Designed asynchronous workflows using RabbitMQ to handle healthcare claim processing and high-volume transaction flows reliably.", "Integrated monitoring, structured logging, and operational diagnostics to improve troubleshooting and system reliability."],
    architecture: "Reusable microservice delivery patterns standardize how backend services move from commit to production. Kubernetes hosts long-running application services, while AWS Lambda executes event-driven and scheduled healthcare workflows, reducing operational overhead for background processing. RabbitMQ decouples claim processing from request handling, and monitoring provides continuous production visibility.",
    businessImpact: ["Processes 5,000+ daily healthcare transactions.", "Standardizes multiple microservices under common deployment patterns.", "Automates claim synchronization and scheduled approval workflows using AWS Lambda, reducing manual operational effort."],
    lambdaFunctions: [
      { name: "Create Claims (B2B → MHC)", purpose: "Triggered by API/Event to transform and submit claims from B2B system into MHC." },
      { name: "Auto Approve Claims", purpose: "Scheduled with Amazon EventBridge (CloudWatch Events) to automatically approve eligible claims based on business rules." },
      { name: "Create Claims (MHC → B2B)", purpose: "Synchronizes approved claims back to the B2B platform asynchronously." },
    ],
    flow: ["Commit", "Build", "Deploy", "Observe"],
  },
  {
    title: "Kubernetes Microservice Platform",
    kind: "Microservices Architecture",
    category: "microservices",
    icon: Boxes,
    number: "05",
    accent: "blue",
    summary:
      "A cloud-native commerce architecture built for independent scaling, fault isolation, and event-driven reliability.",
    description:
      "A Kubernetes-based architecture where each bounded context owns its data, communicates through events, and deploys independently without shared-database coupling.",
    stack: ["Kubernetes", "Docker", "RabbitMQ / Kafka", "Redis", "PostgreSQL", "MongoDB", "Prometheus", "Grafana", "Jenkins"],
    result: "Independent deployment, fault isolation, and horizontal scalability",
    challenge: "A rapidly growing commerce platform required independent scaling across ordering, inventory, payments, and notifications without creating tightly coupled services or shared database dependencies.",
    solution: "Designed a Kubernetes-based microservice architecture where each bounded context owns its own database, communicates asynchronously through RabbitMQ, and exposes well-defined APIs through an API Gateway. This approach enables independent deployment, fault isolation, and horizontal scalability while maintaining data consistency through event-driven workflows.",
    highlights: ["Database per service ownership", "Event-driven communication with RabbitMQ", "API Gateway for centralized routing", "Independent deployment and scaling", "Fault isolation between services", "Container orchestration with Kubernetes"],
    architecture: "Client traffic passes through a Load Balancer and API Gateway before reaching independently deployed services in a Kubernetes cluster. RabbitMQ or Kafka distributes business events, while each service retains ownership of its storage. Monitoring, automated delivery, caching, and service discovery complete the production-ready foundation.",
    businessImpact: ["Enables teams to deploy and scale services independently.", "Prevents a failing service from bringing down the wider commerce workflow.", "Maintains clear data ownership across the platform.", "Supports operational visibility with production monitoring and automated delivery."],
    microserviceArchitecture: true,
    flow: ["Client", "API Gateway", "Services", "Event Bus"],
  },
  {
    title: "Enterprise Finance Platform",
    kind: "Enterprise Systems & ERP",
    category: "enterprise",
    icon: Database,
    number: "06",
    accent: "blue",
    summary:
      "SAP R/3 ABAP and Java-based financial systems automating tax numbering, credit memo, payment, and data migration workflows for enterprise finance operations.",
    description:
      "Java applications integrate with SAP R/3 through RFC to trigger Function Modules and background jobs that keep enterprise Financial Accounting (FI) processes running reliably at scale.",
    stack: ["Java", "SAP R/3 ABAP", "RFC", "Oracle", "Jenkins"],
    result: "Automated financial workflows with fewer manual errors and consistent releases",
    challenge: "Enterprise finance operations relied on manual tax numbering, credit memo, and payment processes across legacy SAP R/3 systems, alongside recurring data migration and batch work that was error-prone and slow to release.",
    solution: "Built Java-to-SAP RFC integrations to exchange data securely with SAP R/3, developed SAP Function Modules for core FI processes, and scheduled background jobs to handle batch processing and data migration, with deployment automation to keep releases consistent.",
    highlights: ["Developed SAP Function Modules for Financial Accounting (FI) to automate tax numbering, credit memo generation, payment processing, and enterprise financial workflows.", "Built Java-to-SAP RFC integrations enabling secure data exchange between enterprise applications and SAP R/3.", "Designed scheduled SAP background jobs for batch processing, financial reconciliation, and large-scale data migration.", "Developed Java-based reporting tools to improve operational visibility into finance processes.", "Automated deployment workflows using Jenkins to improve release consistency and reduce operational effort."],
    architecture: "A Java application communicates with SAP R/3 ABAP over RFC, triggering Function Modules that drive Financial Accounting processes such as tax numbering, credit memos, and payments, while scheduled background jobs handle batch processing and data migration in parallel.",
    businessImpact: ["Reduces manual errors in tax numbering and payment processing through automation.", "Keeps legacy SAP R/3 finance systems stable while modernizing surrounding tooling.", "Speeds up releases with automated, consistent deployment workflows.", "Improves operational visibility through Java-based finance reporting."],
    claimFlow: ["Java Application", "RFC", "SAP R/3 ABAP", "FI Modules & Background Jobs"],
    decisionBranches: ["Tax Number & Credit Memo", "Payment Processing", "Data Migration & Batch Processing"],
  },
];

const filters = [
  { label: "All work", value: "all" },
  { label: "AI & Automation", value: "ai" },
  { label: "Microservices", value: "microservices" },
  { label: "Cloud & Platform", value: "platform" },
  { label: "Enterprise Systems", value: "enterprise" },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const visibleProjects = projects.filter(
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
          <p className="portfolio-kicker">BUILDING SYSTEMS THAT MOVE BUSINESS FORWARD</p>
          <h1>Complex systems,<br /><em>made useful.</em></h1>
          <p className="portfolio-intro">
            A selection of AI, distributed systems, and platform work designed
            around one idea: technology should make the next decision easier.
          </p>
          <div className="portfolio-stats" aria-label="Portfolio focus areas">
            <span><strong>AI</strong> automation</span>
            <span><strong>01 → N</strong> scalable systems</span>
            <span><strong>API-first</strong> by design</span>
          </div>
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
            {visibleProjects.map((project) => {
              const Icon = project.icon;
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
          <a href="/contact">Let’s talk <ArrowUpRight size={17} /></a>
        </footer>
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
                    <div className="event-node">RabbitMQ / Kafka<br /><small>Order Created · Payment Completed · Stock Updated</small></div><i />
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
                  <div><p className="case-label">Business impact</p><h3>Automation built for<br />enterprise scale.</h3></div>
                  <ul>{selectedProject.businessImpact.map((impact) => <li key={impact}><CheckCircle2 size={18} />{impact}</li>)}</ul>
                </section>
              )}
              {selectedProject.lambdaFunctions && (
                <section className="lambda-table">
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
