import React from "react";
import Navbar from "../components/Navbar";
import "../assets/css/AboutMe.css";
import backgroundImage from "../assets/background.JPG";
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";


const AboutMe = () => {
  return (
    <div className="aboutme-page">
      <div
              className="experience-background"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>

      <Navbar />

      <div className="main-container">
        {/* Top Section with About Me and Education */}
        <div className="top-section">
          {/* Card 1: Profile + About Me */}
          <div className="card aboutme-card">
            <div
              className="profile-image"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>
            <div className="aboutme-content">
              <h1 className="name">Erlando Dominico</h1>
              <p>📍 Surakarta, Indonesia</p>
              <p>🎂 27 Years Old</p>
              <p>💻 Software Developer</p>
              <p>⏳ 5 Years Experience</p>
              <p>🛠️ Golang, Node, Java & Python</p>
              <p className="motto">
                <i>
                  "Never Stop Learning and Always Accept Challenges by Doing
                  the Best"
                </i>
              </p>
            </div>
          </div>

          {/* Card 2: Educational Background */}
          <div className="card education-card">
            <h2>Educational Background</h2>

            <div className="edu-entry">
              <div
                className="edu-icon"
                style={{ backgroundImage: `url(${backgroundImage})` }}
              ></div>
              <div className="edu-text">
                <h3>Bachelor of Computer Science (B.Sc.)</h3>
                <p>2016–2020</p>
                <p>Duta Wacana Christian University</p>
                <p>Focus: Programming and UI/UX</p>
                <p>Part-time Web Developer</p>
              </div>
            </div>

            <div className="edu-entry">
              <div
                className="edu-icon"
                style={{ backgroundImage: `url(${backgroundImage})` }}
              ></div>
              <div className="edu-text">
                <h3>Master of Management Technology (M.M.)</h3>
                <p>2023–2024</p>
                <p>Multimedia Nusantara University</p>
                <p>Focus: Digital Transformation & Lean Startup</p>
                <p>
                  Achievement: Green Energy Startup using living organisms
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Reach Me */}
        <div className="card reachme-card">
  <h2>Reach Me At</h2>
  <ul>
    <li>
      <a href="mailto:erlandohbs@gmail.com">
        <FaEnvelope /> erlandohbs@gmail.com
      </a>
    </li>
    <li>
      <a
        href="https://wa.me/6287830644398"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp /> +6287830644398
      </a>
    </li>
    <li>
      <a
        href="https://linkedin.com/in/erlando-dominico"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin /> linkedin.com/in/erlando-dominico
      </a>
    </li>
    <li>
      <a
        href="https://github.com/edhbs31"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub /> github.com/edhbs31
      </a>
    </li>
    <li>
      <a
        href="https://www.instagram.com/edhbs/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram /> instagram.com/edhbs
      </a>
    </li>
    <li>
      <a
        href="https://www.facebook.com/edhbs/?locale=en_GB"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook /> facebook.com/edhbs
      </a>
    </li>
  </ul>
</div>

      </div>
    </div>
  );
};

export default AboutMe;
