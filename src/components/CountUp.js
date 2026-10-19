import React, { useEffect, useState } from "react";

const easeOut = (t) => 1 - Math.pow(1 - t, 3);

// Counts from 0 to `value` (e.g. "6+") once mounted.
const CountUp = ({ value, duration = 1600, delay = 500 }) => {
  const target = parseInt(value, 10);
  const suffix = String(value).replace(/^\d+/, "");
  const [n, setN] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(target);
      return undefined;
    }
    let interval;
    const timer = setTimeout(() => {
      const start = Date.now();
      interval = setInterval(() => {
        const p = Math.min((Date.now() - start) / duration, 1);
        setN(Math.round(easeOut(p) * target));
        if (p >= 1) clearInterval(interval);
      }, 16);
    }, delay);
    return () => { clearTimeout(timer); clearInterval(interval); };
  }, [target, duration, delay]);

  return <>{n}{suffix}</>;
};

export default CountUp;
