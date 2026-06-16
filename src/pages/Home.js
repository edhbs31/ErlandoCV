import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import backgroundImage from "../assets/background.JPG";

import "../assets/css/home.css";

const Home = () => {
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
          Erlando Dominico | Backend Software Engineer & Digital Transformation
        </title>

        <meta
          name="description"
          content="Erlando Dominico is a Backend Software Engineer specializing in distributed systems, AI automation, microservices, Kubernetes, and digital transformation."
        />

        <meta
          name="keywords"
          content="Erlando Dominico, Backend Engineer, Software Engineer Indonesia, Golang Engineer, Kubernetes, Microservices, AI Automation, Digital Transformation"
        />

        <meta name="author" content="Erlando Dominico" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Erlando Dominico | Backend Software Engineer"
        />

        <meta
          property="og:description"
          content="Backend Software Engineer focused on scalable systems, AI automation, distributed architecture, and digital transformation."
        />

        <meta property="og:type" content="website" />

        <meta property="og:image" content="/preview.png" />

        <meta property="og:url" content="https://erlandohbs.com/" />

        {/* Twitter */}
        <meta
          name="twitter:title"
          content="Erlando Dominico | Backend Software Engineer"
        />

        <meta
          name="twitter:description"
          content="Building scalable backend systems, enterprise automation, and distributed architectures."
        />

        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main className={`home-page ${transitioning ? "slide-up" : ""}`}>
        <Navbar />

        <section
          className="home-background"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />

        <section className="home-content">
          <p className="home-greeting">Hey there!</p>

          <h1 className="home-title">
            I’m <span className="home-highlight">Erlando Dominico</span>
          </h1>

          <h2 className="home-tags">
            Backend Software Engineer • AI Automation • Digital Transformation
          </h2>

          <p className="home-description">
            Designing scalable backend systems, distributed architectures,
            and enterprise automation solutions using Go, Kubernetes,
            microservices, and cloud technologies.
          </p>

          <button onClick={handleClick} className="home-button">
            Explore My Work →
          </button>
        </section>
      </main>
    </>
  );
};

export default Home;