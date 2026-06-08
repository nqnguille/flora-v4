import { C } from "@/lib/constants";

const FONT_HANKEN = "var(--font-hanken), sans-serif";
const FONT_GARAMOND = "var(--font-garamond), Georgia, serif";

const pasos = [
  {
    num: "01",
    titulo: "Tramitás tu REPROCANN",
    descripcion:
      "Si no tenés, te explicamos cómo obtenerlo. Si ya tenés, empezamos de inmediato.",
  },
  {
    num: "02",
    titulo: "Elegís tu membresía",
    descripcion:
      "Tres opciones de acceso mensual según tu necesidad. Sin contratos ni permanencia mínima.",
  },
  {
    num: "03",
    titulo: "Accedés a tu parte",
    descripcion:
      "Cannabis de variedad documentada y calidad verificada, como socio del club.",
  },
];

export default function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      style={{ background: C.cream, padding: "96px 24px" }}
      className="px-6 md:px-20"
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0" }}>
        <h2
          className="reveal"
          style={{
            fontFamily: FONT_GARAMOND,
            fontWeight: 400,
            fontSize: "clamp(32px, 4vw, 48px)",
            color: C.dark,
            marginBottom: "56px",
          }}
        >
          Tres pasos.
        </h2>

        <div className="flex flex-col md:flex-row" style={{ gap: "0" }}>
          {pasos.map((paso, i) => (
            <div
              key={paso.num}
              className={`reveal reveal-d${i + 1}`}
              style={{
                flex: 1,
                position: "relative",
                paddingRight: "40px",
                paddingBottom: "40px",
              }}
            >
              {i < pasos.length - 1 && (
                <div
                  className="hidden md:block"
                  style={{
                    position: "absolute",
                    top: "52px",
                    right: 0,
                    width: "40px",
                    height: "1px",
                    background: C.dark20,
                  }}
                />
              )}

              <span
                style={{
                  display: "block",
                  fontFamily: FONT_GARAMOND,
                  fontWeight: 400,
                  fontSize: "96px",
                  lineHeight: 1,
                  color: C.green30,
                  marginBottom: "8px",
                  userSelect: "none",
                }}
              >
                {paso.num}
              </span>

              <h3
                style={{
                  fontFamily: FONT_HANKEN,
                  fontWeight: 700,
                  fontSize: "18px",
                  color: C.dark,
                  marginBottom: "12px",
                  lineHeight: 1.3,
                }}
              >
                {paso.titulo}
              </h3>

              <p
                style={{
                  fontFamily: FONT_HANKEN,
                  fontSize: "15px",
                  lineHeight: 1.65,
                  color: C.dark70,
                  maxWidth: "300px",
                }}
              >
                {paso.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
