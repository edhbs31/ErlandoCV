import React, { useState } from "react";
import { Menu, MoreHorizontal, Moon, Sun, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLang } from "../i18n/LanguageContext";
import { useTheme } from "../theme";
import { LINKS } from "../data/links";
import { trackEvent } from "../analytics";
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
  const { lang, setLang, t } = useLang();
  const { theme, toggle } = useTheme();
  const closeMenus = () => { setIsOpen(false); setIsMoreOpen(false); };
  const isMoreActive = moreLinks.some((link) => link.path === pathname);

  return (
    <nav className="navbar" aria-label={t("Main navigation")}>
      <Link to="/home" className="navbar-logo" onClick={closeMenus}>EDHBS<span>.</span></Link>

      <button className="navbar-toggle" aria-label={t("Toggle navigation")} aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={22} /> : <Menu size={24} />}
      </button>

      <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
        <ul className="navbar-links">
          {mainLinks.map((link) => (
            <li key={link.path}><Link to={link.path} className={pathname === link.path ? "active" : ""} onClick={closeMenus}>{t(link.label)}</Link></li>
          ))}
          <li className="navbar-more">
            <button className={isMoreActive ? "active" : ""} onClick={() => setIsMoreOpen(!isMoreOpen)} aria-expanded={isMoreOpen}>
              {t("More")} <MoreHorizontal size={17} />
            </button>
            <ul className={`more-menu ${isMoreOpen ? "open" : ""}`}>
              {moreLinks.map((link) => <li key={link.path}><Link to={link.path} className={pathname === link.path ? "active" : ""} onClick={closeMenus}>{t(link.label)}</Link></li>)}
            </ul>
          </li>
          <li className="mobile-only">{moreLinks.map((link) => <Link key={link.path} to={link.path} className={pathname === link.path ? "active" : ""} onClick={closeMenus}>{t(link.label)}</Link>)}</li>
        </ul>
        <div className="navbar-tools">
          <button type="button" className="navbar-tool" onClick={() => setLang(lang === "id" ? "en" : "id")} aria-label={lang === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}>
            <span className={lang === "en" ? "on" : ""}>EN</span><i>/</i><span className={lang === "id" ? "on" : ""}>ID</span>
          </button>
          <button type="button" className="navbar-tool navbar-theme" onClick={toggle} aria-label={theme === "light" ? t("Switch to dark mode") : t("Switch to light mode")}>
            {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
          </button>
        </div>
        <a href={LINKS.cv} className="navbar-cv" download onClick={() => { closeMenus(); trackEvent("cv_download", { location: "navbar" }); }}>{t("CV")} ↓</a>
        <Link to="/about#contact" className={`navbar-contact ${pathname === "/about" ? "active" : ""}`} onClick={closeMenus}>{t("Let’s talk")}</Link>
      </div>
    </nav>
  );
};

export default Navbar;
