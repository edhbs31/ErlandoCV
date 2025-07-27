import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../assets/css/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = 120;
    canvas.height = 32;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 28px Arial";
    ctx.textBaseline = "top";
    ctx.fillText("EDHBS", 0, 0);
  }, []);

  const handleLogoClick = () => {
    setIsOpen(false);        // close menu if open (optional)
    navigate("/home");       // redirect to /home
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { path: "/home", label: "Home" },
    { path: "/why", label: "Why Me" },
    { path: "/skills", label: "Skills" },
    { path: "/experience", label: "Experience" },
    { path: "/about", label: "About" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <canvas
          ref={canvasRef}
          onClick={handleLogoClick}
          style={{ cursor: "pointer" }}
        ></canvas>
      </div>

      <div
        className={`navbar-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        {navLinks.map((link) => (
          <li key={link.path}>
            <a
              href={link.path}
              className={pathname === link.path ? "active" : ""}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
