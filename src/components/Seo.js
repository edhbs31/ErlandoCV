import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import seo from "../seoRoutes.json";

const normalize = (p) => (p.length > 1 ? p.replace(/\/+$/, "") : p).toLowerCase();

export const findRoute = (pathname) => {
  const p = normalize(pathname);
  return seo.routes.find((r) => r.path === p || r.aliases.includes(p));
};

// Canonical URL, social tags and robots per route. Aliases (/home, /services, /contact)
// canonicalize to the main URL; unknown paths are marked noindex.
const Seo = () => {
  const { pathname } = useLocation();
  const route = findRoute(pathname);
  if (!route) {
    return <Helmet><meta name="robots" content="noindex, follow" /></Helmet>;
  }
  const url = seo.siteUrl + (route.path === "/" ? "/" : route.path);
  return (
    <Helmet>
      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={route.title} />
      <meta property="og:description" content={route.description} />
      <meta name="twitter:title" content={route.title} />
      <meta name="twitter:description" content={route.description} />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export default Seo;
