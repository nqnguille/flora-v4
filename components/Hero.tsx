"use client";

import { motion } from "framer-motion";
import { C, waUrl } from "@/lib/constants";

const FONT_HANKEN = "var(--font-hanken), sans-serif";
const FONT_GARAMOND = "var(--font-garamond), Georgia, serif";

const stats = [
  { num: "200+", label: "Asociados" },
  { num: "Todo el país", label: "Alcance" },
  { num: "3 años", label: "Activos" },
  { num: "100%", label: "Legal" },
];

const staggerItems = [
  "eyebrow",
  "headline",
  "subheadline",
  "ctas",
  "stats",
] as const;

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        background: C.cream,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "64px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          padding: "80px 24px",
        }}
      >
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-0">
          {/* Left — 60% */}
          <div
            style={{ flex: "0 0 60%" }}
            className="w-full"
          >
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 0.5 }}
              style={{
                fontFamily: FONT_HANKEN,
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: C.green,
                marginBottom: "24px",
              }}
            >
              Club de cultivo medicinal · Argentina
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              style={{
                fontFamily: FONT_GARAMOND,
                fontWeight: 400,
                fontSize: "clamp(48px, 7vw, 80px)",
                lineHeight: 0.95,
                color: C.dark,
                marginBottom: "32px",
                maxWidth: "600px",
              }}
            >
              Cultivamos
              <br />
              conciencia.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{
                fontFamily: FONT_HANKEN,
                fontSize: "18px",
                lineHeight: 1.6,
                color: C.dark70,
                maxWidth: "520px",
                marginBottom: "40px",
              }}
            >
              Accedés a cannabis de calidad documentada, dentro del marco legal
              REPROCANN. Sin mercado negro. Sin culpa.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "56px" }}
            >
              <motion.a
                href={waUrl("general")}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.15 }}
                style={{
                  fontFamily: FONT_HANKEN,
                  fontWeight: 600,
                  fontSize: "15px",
                  color: C.dark,
                  background: C.green,
                  borderRadius: "4px",
                  height: "48px",
                  paddingLeft: "24px",
                  paddingRight: "24px",
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                }}
              >
                Quiero asociarme
              </motion.a>
              <motion.a
                href="#membresias"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.15 }}
                style={{
                  fontFamily: FONT_HANKEN,
                  fontWeight: 600,
                  fontSize: "15px",
                  color: C.dark,
                  background: "transparent",
                  border: `1.5px solid ${C.dark}`,
                  borderRadius: "4px",
                  height: "48px",
                  paddingLeft: "24px",
                  paddingRight: "24px",
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                }}
              >
                Ver membresías
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}
            >
              {stats.map((s) => (
                <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span
                    style={{
                      fontFamily: FONT_GARAMOND,
                      fontSize: "36px",
                      fontWeight: 400,
                      color: C.green,
                      lineHeight: 1,
                    }}
                  >
                    {s.num}
                  </span>
                  <span
                    style={{
                      fontFamily: FONT_HANKEN,
                      fontSize: "12px",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
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

          {/* Right — 40% video en forma contenida */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="hidden md:block"
            style={{
              flex: "0 0 40%",
              paddingLeft: "48px",
            }}
          >
            <div
              style={{
                borderRadius: "24px",
                overflow: "hidden",
                width: "100%",
                aspectRatio: "4/5",
                position: "relative",
              }}
            >
              <video
                src="https://videos.pexels.com/video-files/3972704/3972704-uhd_2560_1440_25fps.mp4"
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
