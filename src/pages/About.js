import { Link } from "react-router-dom";
import React from "react";
import { Helmet } from "react-helmet";
import { useLang } from "../i18n/LanguageContext";
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
  const { t } = useLang();
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
        <title>{t("About | Erlando Dominico - Software Engineer & IT Consultant")}</title>
        <meta name="description" content={t("About Me Erlando Dominico, Software Engineer, IT Consultant, dan Digital Transformation Expert.")} />
      </Helmet>
      <div className="aboutme-page">
        {/* Background */}
        <div
          className="experience-background"
          style={{ backgroundImage: `url(${bg})` }}
          aria-hidden="true"
        />

        <main className="main-container">
          {/* HERO */}
          <section className="hero-section">
            <div
              className="profile-image"
              style={{ backgroundImage: `url(${pp})` }}
              role="img"
              aria-label={t("Erlando Dominico Profile Picture")}
            />

            <div className="hero-text">
              <header>
                <p className="about-eyebrow">{t("Software engineer · Indonesia")}</p>
                <h1>Erlando Dominico</h1>

                <p className="headline">
                  {t("Software Engineer • Digital Transformation • Lean Startup Practitioner")}
                </p>

                <p className="sub-headline">
                  {t("Building scalable systems and technology-driven business solutions")}
                </p>
              </header>

              <div className="meta">
                <div className="meta-row">
                  <span>📍{t("Indonesia")}</span>
                </div>
              </div>

              <p className="summary about-lead">
                {t("Senior Software Engineer with 5+ years of experience building enterprise platforms across healthcare, financial services, and digital commerce.")}
              </p>
              <p className="summary">
                {t("I design distributed systems, modernize legacy applications, and build cloud-native automation. My work includes healthcare claims platforms, H2H banking integrations, and AI-powered document processing with RAG, AI Agents, LLMs, and OCR.")}
              </p>

              <div className="impact-grid" aria-label={t("Career highlights")}>
                <div><b>{t("5+ years")}</b><span>{t("enterprise engineering")}</span></div>
                <div><b>{t("Digital Transformation")}</b><span>{t("scalable microservices")}</span></div>
                <div><b>{t("AI + Cloud")}</b><span>{t("automation systems")}</span></div>
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
                <Link to="/portfolio">{t("View portfolio →")}</Link>
                {/* <a href="mailto:erlandohbs@gmail.com">Contact me</a> */}
              </div>
            </div>
          </section>

          {/* CONTENT */}
          <section className="top-section">
            {/* EDUCATION */}
            <article className="card education-card">
              <h2>{t("Education")}</h2>

              <div className="edu-entry">
                <img
                  src={ukdw}
                  alt={t("UKDW Logo")}
                  className="edu-icon"
                />

                <div className="edu-text">
                  <h3>{t("Bachelor of Computer Science")}</h3>
                  <p className="date">2016 – 2020</p>
                  <p className="institution">
                    {t("Duta Wacana Christian University")}
                  </p>
                </div>
              </div>

              <div className="edu-entry">
                <img
                  src={umn}
                  alt={t("UMN Logo")}
                  className="edu-icon"
                />

                <div className="edu-text">
                  <h3>{t("Master of Management Technology")}</h3>
                  <p className="date">2023 – 2024</p>
                  <p className="institution">
                    {t("Multimedia Nusantara University")}
                  </p>
                </div>
              </div>
            </article>

            {/* CONTACT */}
            <aside className="card reachme-card" id="contact">
              <h2>{t("Contact")}</h2>

              <ul>
                <li>
                  <a href="mailto:erlandohbs@gmail.com">
                    <FaEnvelope /> {t("Email")}
                  </a>
                </li>

                <SocialLink
                  href="https://wa.me/6287830644398"
                  icon={FaWhatsapp}
                  label="WhatsApp"
                />

                <SocialLink
                  href="https://www.linkedin.com/in/erlando-dominico/"
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
