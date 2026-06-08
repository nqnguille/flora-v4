"use client";

import { motion } from "framer-motion";
import { C, waUrl } from "@/lib/constants";

const FONT_HANKEN = "var(--font-hanken), sans-serif";
const FONT_GARAMOND = "var(--font-garamond), Georgia, serif";

const afirmaciones = [
  "Ley 27.350 vigente",
  "Asociados con REPROCANN válido",
  "Sin compraventa — acceso como socio",
  "Decreto 883/2022",
];

export default function Legalidad() {
  return (
    <section
      id="legalidad"
      style={{ background: C.cream, padding: "120px 24px" }}
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
            fontSize: "clamp(28px, 3.5vw, 40px)",
            color: C.dark,
            marginBottom: "64px",
            maxWidth: "520px",
          }}
        >
          Operamos dentro del marco legal.
        </motion.h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: "0", marginBottom: "64px" }}
        >
          {afirmaciones.map((af, i) => (
            <motion.div
              key={af}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
                borderTop: `1px solid ${C.dark10}`,
                padding: "24px 0",
                paddingRight: i % 2 === 0 ? "48px" : "0",
              }}
            >
              <span
                style={{
                  fontFamily: FONT_HANKEN,
                  fontSize: "18px",
                  fontWeight: 700,
                  color: C.green,
                  lineHeight: 1.3,
                  flexShrink: 0,
                  marginTop: "1px",
                }}
              >
                ✓
              </span>
              <span
                style={{
                  fontFamily: FONT_HANKEN,
                  fontSize: "16px",
                  fontWeight: 500,
                  color: C.dark,
                  lineHeight: 1.4,
                }}
              >
                {af}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{
            fontFamily: FONT_HANKEN,
            fontSize: "15px",
            color: C.dark70,
            borderTop: `1px solid ${C.dark10}`,
            paddingTop: "32px",
          }}
        >
          ¿Tenés dudas sobre tu situación legal?{" "}
          <a
            href={waUrl("legal")}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: C.dark,
              fontWeight: 600,
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}
          >
            Escribinos por WhatsApp.
          </a>
        </motion.p>
      </div>
    </section>
  );
}
