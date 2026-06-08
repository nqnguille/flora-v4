"use client";

import { motion } from "framer-motion";
import { C, waUrl } from "@/lib/constants";

const FONT_HANKEN = "var(--font-hanken), sans-serif";
const FONT_GARAMOND = "var(--font-garamond), Georgia, serif";

const planes = [
  {
    nombre: "Semilla",
    gramos: "10g/mes",
    descripcion: "Empezás, probás, conocés",
    features: [
      "Una variedad por mes",
      "Acceso al club",
      "Consultas básicas",
    ],
    waKey: "semilla" as const,
    destacado: false,
  },
  {
    nombre: "Raíz",
    gramos: "20g/mes",
    descripcion: "Uso regular, variedad asegurada",
    features: [
      "Dos variedades disponibles",
      "Acceso completo al club",
      "Acompañamiento personalizado",
    ],
    waKey: "raiz" as const,
    destacado: true,
    badge: "El más elegido",
  },
  {
    nombre: "Cosecha",
    gramos: "40g/mes",
    descripcion: "Uso intensivo, máxima flexibilidad",
    features: [
      "Todas las variedades disponibles",
      "Acceso prioritario",
      "Atención directa",
    ],
    waKey: "cosecha" as const,
    destacado: false,
  },
];

export default function Membresias() {
  return (
    <section
      id="membresias"
      style={{ background: C.dark, padding: "120px 24px" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: FONT_GARAMOND,
            fontWeight: 400,
            fontSize: "clamp(32px, 4vw, 48px)",
            color: C.cream,
            marginBottom: "64px",
          }}
        >
          Elegí cómo acceder.
        </motion.h2>

        <div
          className="flex flex-col md:flex-row items-end"
          style={{ gap: "16px" }}
        >
          {planes.map((plan, i) => (
            <motion.div
              key={plan.nombre}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              style={{
                flex: 1,
                background: C.cream,
                borderRadius: "8px",
                padding: "40px 32px",
                position: "relative",
                transform: plan.destacado ? "translateY(-8px)" : "none",
              }}
            >
              {/* Badge */}
              {plan.badge && (
                <span
                  style={{
                    position: "absolute",
                    top: "-14px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontFamily: FONT_HANKEN,
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: C.dark,
                    background: C.green,
                    borderRadius: "20px",
                    paddingLeft: "14px",
                    paddingRight: "14px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {plan.badge}
                </span>
              )}

              {/* Nombre */}
              <h3
                style={{
                  fontFamily: FONT_GARAMOND,
                  fontWeight: 400,
                  fontSize: "32px",
                  color: C.dark,
                  marginBottom: "4px",
                }}
              >
                {plan.nombre}
              </h3>

              {/* Gramos */}
              <p
                style={{
                  fontFamily: FONT_HANKEN,
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: C.green,
                  marginBottom: "12px",
                }}
              >
                {plan.gramos}
              </p>

              {/* Descripción */}
              <p
                style={{
                  fontFamily: FONT_HANKEN,
                  fontSize: "14px",
                  color: C.dark70,
                  marginBottom: "28px",
                  lineHeight: 1.5,
                }}
              >
                {plan.descripcion}
              </p>

              {/* Features */}
              <div
                style={{
                  borderTop: `1px solid ${C.dark10}`,
                  paddingTop: "24px",
                  marginBottom: "32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {plan.features.map((f) => (
                  <div
                    key={f}
                    style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
                  >
                    <span
                      style={{
                        fontFamily: FONT_HANKEN,
                        fontSize: "16px",
                        fontWeight: 700,
                        color: C.green,
                        lineHeight: 1.3,
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </span>
                    <span
                      style={{
                        fontFamily: FONT_HANKEN,
                        fontSize: "14px",
                        color: C.dark70,
                        lineHeight: 1.4,
                      }}
                    >
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <motion.a
                href={waUrl(plan.waKey)}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.15 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "48px",
                  background: plan.destacado ? C.green : "transparent",
                  border: plan.destacado ? "none" : `1.5px solid ${C.dark}`,
                  borderRadius: "4px",
                  fontFamily: FONT_HANKEN,
                  fontWeight: 600,
                  fontSize: "14px",
                  color: plan.destacado ? C.dark : C.dark,
                  textDecoration: "none",
                }}
              >
                Consultar por WhatsApp
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
