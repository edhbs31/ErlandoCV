import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "../assets/css/skills.css";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/background.JPG";

import {
  FaVuejs, FaReact, FaNodeJs, FaJava, FaAws, FaDocker,
  FaLinux, FaJenkins, FaNetworkWired, FaPython, FaGithub, FaDatabase
} from "react-icons/fa";

import {
  SiGo, SiTypescript, SiPostgresql, SiApachekafka, SiMongodb,
  SiOracle, SiMysql, SiKubernetes, SiRabbitmq, SiNewrelic,
  SiSap, SiFlask, SiElasticsearch, SiNginx, SiBootstrap,
  SiAngular, SiRedis,
  SiN8N
} from "react-icons/si";

import { RiTokenSwapLine } from "react-icons/ri";
import { SiSelenium, SiJest, SiCucumber } from "react-icons/si";
import { TbBrandKotlin } from "react-icons/tb";
import { Layers3, Database, CheckCircle2 } from "lucide-react";

const skillsData = [
  {
    category: "Backend & Core Engineering",
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "Go", icon: <SiGo /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Python", icon: <FaPython /> },
      { name: "SAP ABAP", icon: <SiSap /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "REST API", icon: <FaNetworkWired /> },
      { name: "gRPC", icon: <RiTokenSwapLine /> },
    ],
  },
  {
    category: "Product & Web Interfaces",
    skills: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Vue.js", icon: <FaVuejs /> },
      { name: "Angular", icon: <SiAngular /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
    ],
  },
  {
    category: "Data, Messaging & Storage",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Oracle", icon: <SiOracle /> },
      { name: "SQL Server", icon: <FaDatabase /> },
      { name: "DynamoDB", icon: <FaAws /> },
      { name: "Redis", icon: <SiRedis /> },
      { name: "Elasticsearch", icon: <SiElasticsearch /> },
      { name: "RabbitMQ", icon: <SiRabbitmq /> },
      { name: "Kafka", icon: <SiApachekafka /> },
    ],
  },
  {
    category: "Cloud, DevOps & Observability",
    skills: [
      { name: "AWS", icon: <FaAws /> },
      { name: "AWS Lambda", icon: <FaAws /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "Linux", icon: <FaLinux /> },
      { name: "Nginx", icon: <SiNginx /> },
      { name: "Jenkins", icon: <FaJenkins /> },
      { name: "New Relic", icon: <SiNewrelic /> },
      { name: "GitHub", icon: <FaGithub /> },
    ],
  },
  {
    category: "Quality & AI Automation",
    skills: [
      { name: "Selenium", icon: <SiSelenium /> },
      { name: "Jest", icon: <SiJest /> },
      { name: "Cucumber", icon: <SiCucumber /> },
      { name: "Katalon", icon: <TbBrandKotlin /> },
      { name: "n8n", icon: <SiN8N /> },
    ],
  },
];
const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 300);
  }, []);

  return (
    <>
      <Helmet>
        <title>Skills | Erlando Dominico - Tech Stack & Expertise</title>
        <meta name="description" content="Skills and tech stack Erlando Dominico: Java, Go, TypeScript, Python, AWS, Docker, Kubernetes, dan banyak lagi untuk solusi software engineering modern." />
      </Helmet>
      <div className={`skills-page ${loaded ? "fade-in" : ""}`}>
        <div
          className="skills-background"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />

        <Navbar />

        <div className="skills-container">
          <h1 className="skills-title">Tech Stack</h1>
          <p className="skills-subtitle">The tools I use to build reliable systems, automation, and cloud-native products.</p>

          <div className="skills-grid">
            {skillsData.map((section, index) => (
              <div
                key={index}
                className={`skills-category ${
                  activeCategory === section.category ? "active" : ""
                }`}
                onClick={() =>
                  setActiveCategory(
                    activeCategory === section.category ? null : section.category
                  )
                }
              >
                <h2>{section.category}</h2>

                {/* Preview icons */}
                <div className="preview-icons">
                  {section.skills.slice(0, 4).map((skill, i) => (
                    <span key={i}>{skill.icon}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* POPUP */}
          {activeCategory && (
            <div
              className="skills-popup-overlay"
              onClick={() => setActiveCategory(null)}
            >
              <div
                className="skills-popup-card"
                onClick={(e) => e.stopPropagation()}
              >
                <h3>{activeCategory}</h3>

                <div className="skills-list">
                  {skillsData
                    .find((s) => s.category === activeCategory)
                    .skills.map((skill, i) => (
                      <div
                        key={i}
                        className="skill-card"
                        style={{ animationDelay: `${i * 0.05}s` }}
                      >
                        <div className="icon">{skill.icon}</div>
                        <p>{skill.name}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <section className="skills-principles">
          <div className="principles-copy">
            <p className="section-label">How I build skills</p>
            <h2>Depth over<br />buzzwords.</h2>
            <p>Every tool above earns its place through real use — not a checklist. I go deep enough to know when it fits, and when it doesn't.</p>
          </div>
          <div className="principles-list">
            <div><Layers3 size={21} /><span><b>Learned by shipping</b><small>Skills sharpened on production systems, not tutorials.</small></span></div>
            <div><Database size={21} /><span><b>Right tool, right job</b><small>Chosen for the problem's constraints, not what's trendy.</small></span></div>
            <div><CheckCircle2 size={21} /><span><b>Kept current</b><small>Continuously updated as tools, patterns, and demands evolve.</small></span></div>
          </div>
        </section>

        <a href="/experience" className="experience-button">
          View Experience →
        </a>
      </div>
    </>
  );
};

export default Skills;
