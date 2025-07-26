// src/components/Navbar.js
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

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
      <div className="navbar-logo">Erlando</div>

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
            <Link
              to={link.path}
              className={pathname === link.path ? "active" : ""}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
