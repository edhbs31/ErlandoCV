import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SELECTOR = [
  ".vendor-card", ".why-card", ".skill-card", ".roadmap-step", ".project-card",
  ".offer-card", ".card", ".timeline > *", ".section-label", ".portfolio-section-head",
  ".about-eyebrow", ".about-lead", ".about-actions",
].join(",");

// Adds a scroll-triggered fade/slide-in to cards and headings on every page.
const useReveal = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("reveal-in");
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    const scan = () => {
      document.querySelectorAll(SELECTOR).forEach((el) => {
        if (el.dataset.reveal || el.closest("[role='dialog'], .dialog-panel")) return;
        const siblings = el.parentElement ? Array.from(el.parentElement.children) : [];
        el.style.setProperty("--reveal-delay", `${Math.min(siblings.indexOf(el), 6) * 70}ms`);
        el.dataset.reveal = "1";
        el.classList.add("reveal");
        io.observe(el);
      });
    };

    const t = setTimeout(scan, 400); // after the page-transition finishes
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => { clearTimeout(t); mo.disconnect(); io.disconnect(); };
  }, [pathname]);
};

export default useReveal;
