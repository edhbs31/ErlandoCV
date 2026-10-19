import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/background.JPG";
import hmiLogo from "../assets/hmi.png";
import gramediaLogo from "../assets/gramedia.png";
import mayoraLogo from "../assets/mayora.png";


import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { LINKS } from "../data/links";
import { trackEvent } from "../analytics";
import CountUp from "../components/CountUp";
import { useLang } from "../i18n/LanguageContext";
import "../assets/css/home.css";

const stats = [
  { value: "6+", label: "Years of experience" },
  { value: "4", label: "Companies & clients" },
  { value: "3", label: "Industries: healthcare, finance, e-commerce" },
  { value: "2", label: "Engineers led" },
];

const companies = [
  { name: "HMI Group", logo: hmiLogo },
  { name: "Gramedia Digital", logo: gramediaLogo },
  { name: "PT Mayora Indah Tbk", logo: mayoraLogo },
];

const Home = () => {
  const { t } = useLang();
  const navigate = useNavigate();
  const [transitioning, setTransitioning] = useState(false);

  const handleClick = () => {
    setTransitioning(true);

    setTimeout(() => {
      navigate("/why");
    }, 600);
  };

  return (
    <>
      <Helmet>
        <title>
          {t("Erlando Dominico | Backend Software Engineer & Digital Transformation")}
        </title>

        <meta
          name="description"
          content={t("Erlando Dominico is a Backend Software Engineer specializing in distributed systems, AI automation, microservices, Kubernetes, and digital transformation.")}
        />

        <meta
          name="keywords"
          content="Erlando Dominico, Backend Engineer, Software Engineer Indonesia, Golang Engineer, Kubernetes, Microservices, AI Automation, Digital Transformation"
        />

        <meta name="author" content="Erlando Dominico" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content={t("Erlando Dominico | Backend Software Engineer")}
        />

        <meta
          property="og:description"
          content={t("Backend Software Engineer focused on scalable systems, AI automation, distributed architecture, and digital transformation.")}
        />

        <meta property="og:type" content="website" />

        <meta property="og:image" content="https://erlandohbs.com/preview.png" />

        <meta property="og:url" content="https://erlandohbs.com/" />

        {/* Twitter */}
        <meta
          name="twitter:title"
          content={t("Erlando Dominico | Backend Software Engineer")}
        />

        <meta
          name="twitter:description"
          content={t("Building scalable backend systems, enterprise automation, and distributed architectures.")}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://erlandohbs.com/preview.png" />
      </Helmet>

      <main className={`home-page ${transitioning ? "slide-up" : ""}`}>

        <section
          className="home-background"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />

        <section className="home-content">
          <p className="home-greeting">{t("Hey there!")}</p>

          <h1 className="home-title">
            {t("I’m")} <span className="home-highlight">Erlando Dominico</span>
          </h1>

          <h2 className="home-tags">
            {t("Backend Software Engineer • AI Automation • Digital Transformation")}
          </h2>

          <p className="home-description">
            {t("Designing scalable backend systems, distributed architectures, and enterprise automation solutions using Go, Kubernetes, microservices, and cloud technologies.")}
          </p>

          <button onClick={handleClick} className="home-button">
            {t("Explore My Work →")}
          </button>
          <a href={LINKS.cv} className="home-button home-button-outline" download onClick={() => trackEvent("cv_download", { location: "home" })}>
            {t("Download CV ↓")}
          </a>

          <ul className="home-social" aria-label={t("Contact links")}>
            <li><a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" onClick={() => trackEvent("social_click", { network: "linkedin" })}><FaLinkedin /></a></li>
            <li><a href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" onClick={() => trackEvent("social_click", { network: "github" })}><FaGithub /></a></li>
            <li><a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" onClick={() => trackEvent("social_click", { network: "whatsapp" })}><FaWhatsapp /></a></li>
            <li><a href={LINKS.email} aria-label="Email" onClick={() => trackEvent("social_click", { network: "email" })}><FaEnvelope /></a></li>
          </ul>

          <ul className="home-stats" aria-label={t("Career highlights")}>
            {stats.map((stat) => (
              <li key={stat.label}>
                <strong><CountUp value={stat.value} /></strong>
                <span>{t(stat.label)}</span>
              </li>
            ))}
          </ul>

          <div className="home-trusted">
            <p>{t("Worked with")}</p>
            <ul>
              {companies.map((company) => (
                <li key={company.name}>
                  <img src={company.logo} alt={company.name} title={company.name} loading="lazy" />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;