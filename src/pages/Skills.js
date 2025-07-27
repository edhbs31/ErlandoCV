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
  FaNetworkWired,
  FaPython,
  FaGithub,
  FaDatabase
} from 'react-icons/fa';

import {
  SiGo,
  SiTypescript,
  SiPostgresql,
  SiApachekafka,
  SiMongodb,
  SiOracle,
  SiMysql,
  SiKubernetes,
  SiRabbitmq,
  SiNewrelic,
  SiSap,
  SiFlask,
  SiElasticsearch,
  SiNginx,
  SiBootstrap,
  SiWasmcloud,
  SiAngular,
  SiRedis
} from 'react-icons/si';

import {RiTokenSwapLine} from  'react-icons/ri';

import { SiSelenium, SiJest, SiCucumber } from "react-icons/si";
import { TbBrandKotlin } from "react-icons/tb"; 
const skillsData = [
  {
    category: 'Front End Engineer',
    skills: [
      { name: 'Vue.js', icon: <FaVuejs /> },
      { name: 'React.js', icon: <FaReact /> },
      { name: 'Bootstrap', icon: <SiBootstrap /> },
      { name: 'Angular', icon: <SiAngular /> },
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
    { name: 'Python', icon: <FaPython /> },
    { name: 'Flask', icon: <SiFlask /> }
  ]
},
  {
    category: 'Database',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'Microsoft SQL Server', icon: <FaDatabase /> },
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
    category: 'Cloud Computing',
    skills: [
      { name: 'AWS S3', icon: <FaAws /> },
      { name: 'Azure', icon: <SiWasmcloud /> },
    ]
  },
  {
    category: 'Linux Environment',
    skills: [
      { name: 'Linux Command Line', icon: <FaLinux /> }
    ]
  },
  {
  category: 'Automation Test',
  skills: [
    { name: 'Selenium', icon: <SiSelenium /> },
    { name: 'Jest', icon: <SiJest /> },
    { name: 'Cucumber', icon: <SiCucumber /> },
    { name: 'Katalon', icon: <TbBrandKotlin /> }, // Replace if there's an exact icon later
  ]
  },
  {
    category: 'Other Stacks',
    skills: [
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'RESTfull API', icon: <FaNetworkWired /> },
      { name: 'gRPC', icon: <RiTokenSwapLine /> },
      { name: 'Redis', icon: <SiRedis /> },
      { name: 'RabbitMQ', icon: <SiRabbitmq /> },
      { name: 'Kafka', icon: <SiApachekafka /> },
      { name: 'Elasticsearch', icon: <SiElasticsearch /> },
      { name: 'New Relic', icon: <SiNewrelic /> },
      { name: 'Nginx (Load Balancer)', icon: <SiNginx /> },
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
  
      <div className="skills-container">
        <h1 className="skills-title">Skills and Stack</h1>
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
