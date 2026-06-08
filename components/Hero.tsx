"use client";

import { motion } from "framer-motion";
import { C, waUrl } from "@/lib/constants";

const F_H = "var(--font-hanken), sans-serif";
const F_G = "var(--font-garamond), Georgia, serif";

const STATS = [
  { num: "200+", label: "Asociados" },
  { num: "País", label: "Alcance" },
  { num: "3 años", label: "Activos" },
  { num: "100%", label: "Legal" },
];

// Unsplash — plantas verdes / jardín botánico, portrait
const IMG =
  "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=900&q=80";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        height: "100svh",
        minHeight: "640px",
        background: C.cream,
        overflow: "hidden",
      }}
    >
      {/* Panel derecho: imagen full-bleed, sin border-radius, edge to edge */}
      <div
        className="hidden md:block"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: "44%",
          backgroundImage: `url(${IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        {/* Máscara degradada: cream → transparente — la imagen nace del fondo */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(to right, ${C.cream} 0%, transparent 45%)`,
          }}
        />
      </div>

      {/* Contenido izquierdo */}
      <div
        style={{
          position: "relative",
          height: "100%",
          display: "flex",
          alignItems: "center",
          paddingTop: "64px",
        }}
      >
        <div
          className="px-6 md:px-20"
          style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}
        >
          <div style={{ maxWidth: "580px" }}>

            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                fontFamily: F_H,
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: C.green,
                marginBottom: "24px",
              }}
            >
              Club de cultivo medicinal · Argentina
            </motion.p>

            {/* Headline — la tipografía ES el diseño */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: F_G,
                fontWeight: 400,
                fontSize: "clamp(64px, 9vw, 120px)",
                lineHeight: 0.92,
                letterSpacing: "-0.01em",
                color: C.dark,
                marginBottom: "32px",
              }}
            >
              Cultivamos
              <br />
              conciencia.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{
                fontFamily: F_H,
                fontSize: "17px",
                lineHeight: 1.65,
                color: C.dark70,
                maxWidth: "460px",
                marginBottom: "40px",
              }}
            >
              Accedés a cannabis de calidad documentada, dentro del marco legal
              REPROCANN. Sin mercado negro. Sin culpa.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "52px" }}
            >
              <motion.a
                href={waUrl("general")}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.15 }}
                style={{
                  fontFamily: F_H,
                  fontWeight: 700,
                  fontSize: "14px",
                  color: C.dark,
                  background: C.green,
                  borderRadius: "4px",
                  height: "48px",
                  padding: "0 28px",
                  display: "inline-flex",
                  alignItems: "center",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                Quiero asociarme
              </motion.a>
              <motion.a
                href="#membresias"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.15 }}
                style={{
                  fontFamily: F_H,
                  fontWeight: 700,
                  fontSize: "14px",
                  color: C.dark,
                  background: "transparent",
                  border: `1.5px solid ${C.dark}`,
                  borderRadius: "4px",
                  height: "48px",
                  padding: "0 28px",
                  display: "inline-flex",
                  alignItems: "center",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                Ver membresías
              </motion.a>
            </motion.div>

            {/* Stats row — con divisores finos */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              style={{
                display: "flex",
                borderTop: `1px solid ${C.dark10}`,
                paddingTop: "24px",
                gap: "0",
              }}
            >
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  style={{
                    flex: 1,
                    paddingLeft: i > 0 ? "20px" : "0",
                    paddingRight: i < STATS.length - 1 ? "20px" : "0",
                    borderLeft: i > 0 ? `1px solid ${C.dark10}` : "none",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      fontFamily: F_G,
                      fontSize: "clamp(26px, 3vw, 38px)",
                      fontWeight: 400,
                      color: C.green,
                      lineHeight: 1,
                      marginBottom: "4px",
                    }}
                  >
                    {s.num}
                  </span>
                  <span
                    style={{
                      display: "block",
                      fontFamily: F_H,
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: C.dark60,
                    }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
