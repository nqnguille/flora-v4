"use client";

import { motion } from "framer-motion";
import { C } from "@/lib/constants";

const FONT_HANKEN = "var(--font-hanken), sans-serif";
const FONT_GARAMOND = "var(--font-garamond), Georgia, serif";

const valores = [
  {
    titulo: "Documentado",
    descripcion:
      "Cada variedad tiene registro de origen, genética y método de cultivo. Sabés exactamente qué accedés.",
  },
  {
    titulo: "Legal",
    descripcion:
      "Operamos dentro del marco de la Ley 27.350 y el Decreto 883/2022. Tu acceso es como socio del club, no como comprador.",
  },
  {
    titulo: "Calidad verificada",
    descripcion:
      "El cultivo es controlado, las variedades son estables y los resultados son consistentes ciclo a ciclo.",
  },
  {
    titulo: "Acompañamiento",
    descripcion:
      "Desde el trámite del REPROCANN hasta la elección de variedad, estamos disponibles para guiarte sin juicios.",
  },
  {
    titulo: "Comunidad",
    descripcion:
      "Formás parte de una red de personas que tomaron la decisión de acceder a información y calidad real.",
  },
];

export default function PorQueFlora() {
  return (
    <section
      id="por-que-flora"
      style={{ background: C.white, padding: "120px 24px" }}
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
            fontStyle: "italic",
            color: C.dark,
            marginBottom: "64px",
            maxWidth: "600px",
          }}
        >
          Sabés lo que fumás.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "0" }}>
          {valores.map((v, i) => (
            <motion.div
              key={v.titulo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{
                borderTop: `1px solid ${C.dark10}`,
                padding: "28px 0",
                paddingRight: i % 2 === 0 ? "48px" : "0",
              }}
            >
              <h3
                style={{
                  fontFamily: FONT_HANKEN,
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: C.dark,
                  marginBottom: "10px",
                }}
              >
                {v.titulo}
              </h3>
              <p
                style={{
                  fontFamily: FONT_HANKEN,
                  fontSize: "14px",
                  lineHeight: 1.7,
                  color: C.dark70,
                }}
              >
                {v.descripcion}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
