import React, { useState } from "react";
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
    }, 600); // Adjust to match animation duration
  };

  return (
    <div className={`home-page ${transitioning ? "slide-up" : ""}`}>
      <Navbar />

      <div
        className="home-background"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>

      <div className="home-content">
        <h1 className="home-title">
          Hey there!<br />
          <br />
          I’m <span className="home-highlight">Erlando Dominico</span>
        </h1>

        <h2 className="home-subtitle">
          An Independent IT Consultant
        </h2>

        <p className="home-description">
          I create scalable backend services and digital transformation systems.
        </p>

        <button onClick={handleClick} className="home-button">
          Why Must Me ?
        </button>
      </div>
    </div>
  );
};

export default Home;
