import React, { useState } from "react";
import { Menu, MoreHorizontal, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import "../assets/css/navbar.css";

const mainLinks = [
  { path: "/home", label: "Home" },
  { path: "/offers", label: "Services" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/experience", label: "Experience" },
  // { path: "/about", label: "About" },
];

const moreLinks = [
  { path: "/why", label: "Why Hire Me" },
  { path: "/skills", label: "Skills" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const { pathname } = useLocation();
  const closeMenus = () => { setIsOpen(false); setIsMoreOpen(false); };
  const isMoreActive = moreLinks.some((link) => link.path === pathname);

  return (
    <nav className="navbar" aria-label="Main navigation">
      <a href="/home" className="navbar-logo" onClick={closeMenus}>EDHBS<span>.</span></a>

      <button className="navbar-toggle" aria-label="Toggle navigation" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={22} /> : <Menu size={24} />}
      </button>

      <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
        <ul className="navbar-links">
          {mainLinks.map((link) => (
            <li key={link.path}><a href={link.path} className={pathname === link.path ? "active" : ""} onClick={closeMenus}>{link.label}</a></li>
          ))}
          <li className="navbar-more">
            <button className={isMoreActive ? "active" : ""} onClick={() => setIsMoreOpen(!isMoreOpen)} aria-expanded={isMoreOpen}>
              More <MoreHorizontal size={17} />
            </button>
            <ul className={`more-menu ${isMoreOpen ? "open" : ""}`}>
              {moreLinks.map((link) => <li key={link.path}><a href={link.path} className={pathname === link.path ? "active" : ""} onClick={closeMenus}>{link.label}</a></li>)}
            </ul>
          </li>
          <li className="mobile-only">{moreLinks.map((link) => <a key={link.path} href={link.path} className={pathname === link.path ? "active" : ""} onClick={closeMenus}>{link.label}</a>)}</li>
        </ul>
        <a href="/about#contact" className={`navbar-contact ${pathname === "/about" ? "active" : ""}`} onClick={closeMenus}>Let’s talk</a>
      </div>
    </nav>
  );
};

export default Navbar;
