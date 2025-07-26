import { useState, useEffect } from 'react';
import '../assets/css/skills.css';
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/background.JPG";

import {
  FaVuejs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaAws,
  FaDocker,
  FaLinux,
  FaJenkins,
  FaDatabase,
  FaNetworkWired,
  FaServer
} from 'react-icons/fa';

import {
  SiGo,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiOracle,
  SiMysql,
  SiKubernetes,
  SiRabbitmq,
  SiNewrelic,
  SiSap
} from 'react-icons/si';

const skillsData = [
  {
    category: 'Front End Engineer',
    skills: [
      { name: 'Vue.js', icon: <FaVuejs /> },
      { name: 'React.js', icon: <FaReact /> },
      { name: 'Bootstrap', icon: <FaReact /> },
      { name: 'Angular', icon: <FaReact /> },
    ]
  },
  {
    category: 'Back End Engineer',
    skills: [
      { name: 'Go', icon: <SiGo /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'SAP ABAP', icon: <SiSap /> },
    ]
  },
  {
    category: 'Database',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MSSQL', icon: <FaDatabase /> },
      { name: 'Oracle', icon: <SiOracle /> },
      { name: 'MySQL', icon: <SiMysql /> },
    ]
  },
  {
    category: 'ERP',
    skills: [
      { name: 'SAP & ABAPER', icon: <SiSap /> }
    ]
  },
  {
    category: 'DevOps',
    skills: [
      { name: 'Jenkins', icon: <FaJenkins /> },
      { name: 'AWS Serverless', icon: <FaAws /> },
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'Kubernetes', icon: <SiKubernetes /> },
    ]
  },
  {
    category: 'Distributed Systems & Observability',
    skills: [
      { name: 'gRPC & REST API', icon: <FaNetworkWired /> },
      { name: 'RabbitMQ & Kafka', icon: <SiRabbitmq /> },
      { name: 'ElasticSearch & New Relic', icon: <SiNewrelic /> },
      { name: 'Nginx (Load Balancer)', icon: <FaServer /> },
    ]
  },
  {
    category: 'Cloud Computing',
    skills: [
      { name: 'AWS S3', icon: <FaAws /> },
      { name: 'Azure', icon: <FaAws /> },
    ]
  },
  {
    category: 'Linux Environment',
    skills: [
      { name: 'Linux Command Line', icon: <FaLinux /> }
    ]
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [redirecting, setRedirecting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirecting(false);
    }, 500); // same as fade-in/out transition duration

    return () => clearTimeout(timer);
  }, []);

  const handleCardClick = (category) => {
    setActiveCategory(category === activeCategory ? null : category);
  };

  return (
    <div className={`-page ${redirecting ? "fade-out" : ""}`}>
      <div
        className="why-background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <Navbar />
      <div className="why-container"></div>

      <div className="skills-container">
        <h1 className="skills-title">Skills</h1>
        <div className="skills-grid">
          {skillsData.map((section, index) => (
            <div
              className="skills-category"
              key={index}
              onClick={() => handleCardClick(section.category)}
            >
              <h2>{section.category}</h2>
            </div>
          ))}
        </div>

        {activeCategory && (
          <div className="popup-overlay" onClick={() => setActiveCategory(null)}>
            <div className="popup-card" onClick={(e) => e.stopPropagation()}>
              <h3>{activeCategory}</h3>
              <div className="skills-list">
                {skillsData
                  .find((s) => s.category === activeCategory)
                  .skills.map((skill, i) => (
                    <div className="skill-card" key={i}>
                      <div className="icon">{skill.icon}</div>
                      <div className="text">
                        <p>{skill.name}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Experience Button */}
      <a href="/experience" className="experience-button">
        You Want To Know My Experience?
      </a>
    </div>
  );
};

export default Skills;
