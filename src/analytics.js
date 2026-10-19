// Google Analytics 4, enabled only when REACT_APP_GA_ID (e.g. G-XXXXXXXXXX) is set at build time.
const GA_ID = process.env.REACT_APP_GA_ID;

export const initAnalytics = () => {
  if (!GA_ID || window.gtag) return;
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { send_page_view: false });
};

export const trackPage = (path) => {
  if (GA_ID && window.gtag) window.gtag("event", "page_view", { page_path: path });
};

export const trackEvent = (name, params = {}) => {
  if (GA_ID && window.gtag) window.gtag("event", name, params);
};
