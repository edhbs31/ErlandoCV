import React from "react";
import testimonials from "../data/testimonials";
import { useLang } from "../i18n/LanguageContext";
import "../assets/css/testimonials.css";

// Renders nothing until real entries are added in src/data/testimonials.js.
const Testimonials = () => {
  const { t } = useLang();
  if (!testimonials.length) return null;
  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <p className="section-label">{t("Kind words")}</p>
      <h2 id="testimonials-title">{t("What people say")}</h2>
      <div className="testimonials-grid">
        {testimonials.map((item) => (
          <figure className="testimonial-card" key={item.name}>
            <blockquote>“{t(item.quote)}”</blockquote>
            <figcaption>
              <b>{item.link ? <a href={item.link} target="_blank" rel="noopener noreferrer">{item.name}</a> : item.name}</b>
              <span>{t(item.role)}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
