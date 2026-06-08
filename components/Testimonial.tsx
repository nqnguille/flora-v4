import { C } from "@/lib/constants";

const FONT_HANKEN = "var(--font-hanken), sans-serif";
const FONT_GARAMOND = "var(--font-garamond), Georgia, serif";

export default function Testimonial() {
  return (
    <section
      id="comunidad"
      style={{ background: C.cream, padding: "120px 24px" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="flex flex-col md:flex-row" style={{ gap: "64px" }}>
          <div
            className="reveal w-full"
            style={{
              borderRadius: "8px",
              overflow: "hidden",
              aspectRatio: "4/3",
              flexShrink: 0,
              maxWidth: "560px",
            }}
          >
            <img
              src="https://images.pexels.com/photos/5472264/pexels-photo-5472264.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Cultivo de cannabis medicinal en invernadero"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>

          <div
            className="reveal reveal-d2"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              flex: 1,
            }}
          >
            <blockquote
              style={{
                fontFamily: FONT_GARAMOND,
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: "clamp(22px, 2.5vw, 28px)",
                lineHeight: 1.45,
                color: C.dark,
                marginBottom: "32px",
              }}
            >
              "Ya no accedo sin saber qué es. Eso cambia todo."
            </blockquote>

            <cite
              style={{
                fontFamily: FONT_HANKEN,
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: C.dark60,
                fontStyle: "normal",
              }}
            >
              María, asociada desde 2024, Neuquén
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}
