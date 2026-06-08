"use client";

import { useEffect } from "react";

// Elementos visibles en el viewport inicial → visibles de inmediato
// Elementos bajo el fold → ocultos y se revelan al hacer scroll
export default function RevealObserver() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!els.length) return;

    const vw = window.innerHeight;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" }
    );

    els.forEach((el) => {
      const { top } = el.getBoundingClientRect();
      if (top > vw * 0.9) {
        // Bajo el fold: marcar para animar
        el.classList.add("animate-ready");
        observer.observe(el);
      }
      // Ya visible: no tocar (queda visible por defecto via CSS)
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
