import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import "../assets/css/notfound.css";

const suggestions = [
  { to: "/offers", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/experience", label: "Experience" },
  { to: "/about#contact", label: "Contact" },
];

const NotFound = () => {
  const { t } = useLang();
  return (
  <>
    <Helmet>
      <title>{t("Page not found | Erlando Dominico")}</title>
      <meta name="robots" content="noindex, follow" />
    </Helmet>
    <main className="notfound-page">
      <p className="notfound-code">404</p>
      <h1>{t("This page doesn’t exist.")}</h1>
      <p className="notfound-text">{t("The link may be broken or the page may have moved. Try one of these instead:")}</p>
      <ul className="notfound-links">
        {suggestions.map((item) => (
          <li key={item.to}><Link to={item.to}>{t(item.label)}</Link></li>
        ))}
      </ul>
      <Link to="/" className="notfound-home"><ArrowLeft size={18} /> {t("Back to home")}</Link>
    </main>
  </>
  );
};

export default NotFound;
