import { C } from "@/lib/constants";

const F_H = "var(--font-hanken), sans-serif";
const F_G = "var(--font-garamond), Georgia, serif";

const cream20 = "rgba(247,246,235,0.20)";
const cream70 = "rgba(247,246,235,0.70)";
const cream40 = "rgba(247,246,235,0.40)";

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
      style={{ background: C.dark, padding: "96px 24px" }}
      className="px-6 md:px-20"
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Headline — grande, itálico, cream */}
        <h2
          className="reveal"
          style={{
            fontFamily: F_G,
            fontWeight: 400,
            fontSize: "clamp(40px, 5.5vw, 72px)",
            fontStyle: "italic",
            color: C.cream,
            marginBottom: "64px",
            lineHeight: 1.05,
            maxWidth: "700px",
          }}
        >
          Sabés lo que fumás.
        </h2>

        {/* Valores — grid 2 columnas, separadores horizontales */}
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "0" }}>
          {valores.map((v, i) => (
            <div
              key={v.titulo}
              className={`reveal reveal-d${Math.min(i + 1, 5)}`}
              style={{
                borderTop: `1px solid ${cream20}`,
                padding: "28px 0",
                paddingRight: i % 2 === 0 ? "48px" : "0",
              }}
            >
              <h3
                style={{
                  fontFamily: F_H,
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: C.green,
                  marginBottom: "10px",
                }}
              >
                {v.titulo}
              </h3>
              <p
                style={{
                  fontFamily: F_H,
                  fontSize: "14px",
                  lineHeight: 1.75,
                  color: cream70,
                }}
              >
                {v.descripcion}
              </p>
            </div>
          ))}
        </div>

        {/* CTA final de sección */}
        <div
          className="reveal reveal-d5"
          style={{
            borderTop: `1px solid ${cream20}`,
            paddingTop: "40px",
            marginTop: "8px",
          }}
        >
          <p
            style={{
              fontFamily: F_H,
              fontSize: "14px",
              color: cream40,
            }}
          >
            ¿Querés saber más sobre cómo funciona?{" "}
            <a
              href="#como-funciona"
              style={{
                color: C.green,
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              Ver los tres pasos
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
