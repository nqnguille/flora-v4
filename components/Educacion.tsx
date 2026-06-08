import { C } from "@/lib/constants";

const FONT_HANKEN = "var(--font-hanken), sans-serif";
const FONT_GARAMOND = "var(--font-garamond), Georgia, serif";

const articulos = [
  {
    titulo: "Los mitos sobre el cannabis medicinal que frenan tu tratamiento",
    meta: "Educación · 8 min lectura",
    imagen:
      "https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg?auto=compress&cs=tinysrgb&w=800",
    grande: true,
  },
  {
    titulo: "Guía completa para tramitar el REPROCANN",
    meta: "Legalidad · 5 min lectura",
    imagen: null,
    grande: false,
  },
  {
    titulo: "Índica vs Sativa: cómo elegir según tus objetivos",
    meta: "Variedades · 6 min lectura",
    imagen: null,
    grande: false,
  },
];

export default function Educacion() {
  return (
    <section
      id="educacion"
      style={{ background: C.white, padding: "120px 24px" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p
          className="reveal"
          style={{
            fontFamily: FONT_HANKEN,
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: C.dark50,
            marginBottom: "16px",
          }}
        >
          De nuestra guía
        </p>

        <h2
          className="reveal reveal-d1"
          style={{
            fontFamily: FONT_GARAMOND,
            fontWeight: 400,
            fontSize: "clamp(28px, 3.5vw, 40px)",
            color: C.dark,
            marginBottom: "64px",
            maxWidth: "560px",
          }}
        >
          Lo que querés saber antes de empezar.
        </h2>

        <div className="flex flex-col md:flex-row" style={{ gap: "32px" }}>
          {articulos
            .filter((a) => a.grande)
            .map((a) => (
              <article
                key={a.titulo}
                className="reveal reveal-d2"
                style={{ flex: "0 0 58%", cursor: "pointer" }}
              >
                <div
                  style={{
                    borderRadius: "8px",
                    overflow: "hidden",
                    aspectRatio: "16/9",
                    marginBottom: "20px",
                  }}
                >
                  <img
                    src={a.imagen!}
                    alt={a.titulo}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
                <p
                  style={{
                    fontFamily: FONT_HANKEN,
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: C.dark50,
                    marginBottom: "10px",
                  }}
                >
                  {a.meta}
                </p>
                <h3
                  style={{
                    fontFamily: FONT_GARAMOND,
                    fontWeight: 400,
                    fontSize: "22px",
                    lineHeight: 1.35,
                    color: C.dark,
                  }}
                >
                  {a.titulo}
                </h3>
              </article>
            ))}

          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "32px" }}>
            {articulos
              .filter((a) => !a.grande)
              .map((a, i) => (
                <article
                  key={a.titulo}
                  className={`reveal reveal-d${i + 3}`}
                  style={{
                    borderTop: `1px solid ${C.dark10}`,
                    paddingTop: "24px",
                    cursor: "pointer",
                  }}
                >
                  <p
                    style={{
                      fontFamily: FONT_HANKEN,
                      fontSize: "12px",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: C.dark50,
                      marginBottom: "10px",
                    }}
                  >
                    {a.meta}
                  </p>
                  <h3
                    style={{
                      fontFamily: FONT_GARAMOND,
                      fontWeight: 400,
                      fontSize: "20px",
                      lineHeight: 1.35,
                      color: C.dark,
                    }}
                  >
                    {a.titulo}
                  </h3>
                </article>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
