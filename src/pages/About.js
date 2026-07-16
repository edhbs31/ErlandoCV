import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import "../assets/css/AboutMe.css";

import bg from "../assets/background.JPG";
import pp from "../assets/pp.jpg";

import {
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

import ukdw from "../assets/ukdw.png";
import umn from "../assets/umn.png";

const AboutMe = () => {
  const SocialLink = ({ href, icon: Icon, label }) => (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
      >
        <Icon /> {label}
      </a>
    </li>
  );

  return (
    <>
      <Helmet>
        <title>About | Erlando Dominico - Software Engineer & IT Consultant</title>
        <meta name="description" content="About Me Erlando Dominico, Software Engineer, IT Consultant, dan Digital Transformation Expert." />
      </Helmet>
      <div className="aboutme-page">
        {/* Background */}
        <div
          className="experience-background"
          style={{ backgroundImage: `url(${bg})` }}
          aria-hidden="true"
        />

        <Navbar />

        <main className="main-container">
          {/* HERO */}
          <section className="hero-section">
            <div
              className="profile-image"
              style={{ backgroundImage: `url(${pp})` }}
              role="img"
              aria-label="Erlando Dominico Profile Picture"
            />

            <div className="hero-text">
              <header>
                <p className="about-eyebrow">Software engineer · Indonesia</p>
                <h1>Erlando Dominico</h1>

                <p className="headline">
                  Software Engineer • Digital Transformation • Lean Startup Practitioner
                </p>

                <p className="sub-headline">
                  Building scalable systems and technology-driven business solutions
                </p>
              </header>

              <div className="meta">
                <div className="meta-row">
                  <span>📍Indonesia</span>
                </div>
              </div>

              <p className="summary about-lead">
                Senior Software Engineer with 5+ years of experience building enterprise platforms across healthcare, financial services, and digital commerce.
              </p>
              <p className="summary">
                I design distributed systems, modernize legacy applications, and build cloud-native automation. My work includes healthcare claims platforms, H2H banking integrations, and AI-powered document processing with RAG, AI Agents, LLMs, and OCR.
              </p>

              <div className="impact-grid" aria-label="Career highlights">
                <div><b>5+ years</b><span>enterprise engineering</span></div>
                <div><b>Digital Transformation</b><span>scalable microservices</span></div>
                <div><b>AI + Cloud</b><span>automation systems</span></div>
              </div>

              <div className="tech-stack">
                {[
                  "Go",
                  "TypeScript",
                  "Python",
                  "Java",
                  "Docker",
                  "Kubernetes",
                  "AWS",
                  "PostgreSQL",
                  "MongoDB",
                ].map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="about-actions">
                <a href="/portfolio">View portfolio →</a>
                {/* <a href="mailto:erlandohbs@gmail.com">Contact me</a> */}
              </div>
            </div>
          </section>

          {/* CONTENT */}
          <section className="top-section">
            {/* EDUCATION */}
            <article className="card education-card">
              <h2>Education</h2>

              <div className="edu-entry">
                <img
                  src={ukdw}
                  alt="UKDW Logo"
                  className="edu-icon"
                />

                <div className="edu-text">
                  <h3>Bachelor of Computer Science</h3>
                  <p className="date">2016 – 2020</p>
                  <p className="institution">
                    Duta Wacana Christian University
                  </p>
                </div>
              </div>

              <div className="edu-entry">
                <img
                  src={umn}
                  alt="UMN Logo"
                  className="edu-icon"
                />

                <div className="edu-text">
                  <h3>Master of Management Technology</h3>
                  <p className="date">2023 – 2024</p>
                  <p className="institution">
                    Multimedia Nusantara University
                  </p>
                </div>
              </div>
            </article>

            {/* CONTACT */}
            <aside className="card reachme-card" id="contact">
              <h2>Contact</h2>

              <ul>
                <li>
                  <a href="mailto:erlandohbs@gmail.com">
                    <FaEnvelope /> Email
                  </a>
                </li>

                <SocialLink
                  href="https://wa.me/6287830644398"
                  icon={FaWhatsapp}
                  label="WhatsApp"
                />

                <SocialLink
                  href="https://linkedin.com/in/erlando-dominico"
                  icon={FaLinkedin}
                  label="LinkedIn"
                />

                <SocialLink
                  href="https://github.com/edhbs31"
                  icon={FaGithub}
                  label="GitHub"
                />

                <SocialLink
                  href="https://instagram.com/edhbs"
                  icon={FaInstagram}
                  label="Instagram"
                />

                <SocialLink
                  href="https://facebook.com/edhbs"
                  icon={FaFacebook}
                  label="Facebook"
                />
              </ul>
            </aside>
          </section>
        </main>
      </div>
    </>
  );
};

export default AboutMe;
