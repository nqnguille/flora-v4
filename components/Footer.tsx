"use client";

import { motion } from "framer-motion";
import { C, waUrl } from "@/lib/constants";

const FONT_HANKEN = "var(--font-hanken), sans-serif";
const FONT_GARAMOND = "var(--font-garamond), Georgia, serif";

const navLinks = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Membresías", href: "#membresias" },
  { label: "Legalidad", href: "#legalidad" },
  { label: "Educación", href: "#educacion" },
];

const legalLinks = [
  { label: "Ley 27.350", href: "#legalidad" },
  { label: "Decreto 883/2022", href: "#legalidad" },
  { label: "Términos de uso", href: "#" },
  { label: "Privacidad", href: "#" },
];

export default function Footer() {
  return (
    <footer style={{ background: C.dark }}>
      {/* Franja superior */}
      <div
        style={{
          borderBottom: `1px solid rgba(45,66,57,0.4)`,
          padding: "64px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          <p
            style={{
              fontFamily: FONT_GARAMOND,
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: "clamp(22px, 2.5vw, 28px)",
              color: C.cream,
            }}
          >
            Cultivamos conciencia.
          </p>

          <motion.a
            href={waUrl("general")}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.15 }}
            style={{
              fontFamily: FONT_HANKEN,
              fontWeight: 600,
              fontSize: "14px",
              color: C.dark,
              background: C.green,
              borderRadius: "4px",
              height: "44px",
              paddingLeft: "24px",
              paddingRight: "24px",
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            Asociarse
          </motion.a>
        </div>
      </div>

      {/* Grid 4 columnas */}
      <div style={{ padding: "64px 24px 40px" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-10"
        >
          {/* Brand */}
          <div>
            <p
              style={{
                fontFamily: FONT_HANKEN,
                fontWeight: 700,
                fontSize: "20px",
                color: C.cream,
                marginBottom: "16px",
                letterSpacing: "-0.02em",
              }}
            >
              Flora
            </p>
            <p
              style={{
                fontFamily: FONT_HANKEN,
                fontSize: "13px",
                lineHeight: 1.65,
                color: "rgba(247,246,235,0.55)",
              }}
            >
              Club de cultivo medicinal.
              <br />
              Neuquén, Patagonia.
              <br />
              Argentina.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <p
              style={{
                fontFamily: FONT_HANKEN,
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(247,246,235,0.40)",
                marginBottom: "20px",
              }}
            >
              Navegación
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    style={{
                      fontFamily: FONT_HANKEN,
                      fontSize: "14px",
                      color: "rgba(247,246,235,0.65)",
                      textDecoration: "none",
                      transition: "color 0.15s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = C.cream)}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(247,246,235,0.65)")
                    }
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <p
              style={{
                fontFamily: FONT_HANKEN,
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(247,246,235,0.40)",
                marginBottom: "20px",
              }}
            >
              Contacto
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              <li>
                <a
                  href={waUrl("general")}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: FONT_HANKEN,
                    fontSize: "14px",
                    color: "rgba(247,246,235,0.65)",
                    textDecoration: "none",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = C.cream)}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(247,246,235,0.65)")
                  }
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/flora.ong"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: FONT_HANKEN,
                    fontSize: "14px",
                    color: "rgba(247,246,235,0.65)",
                    textDecoration: "none",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = C.cream)}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(247,246,235,0.65)")
                  }
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:hola@floraong.org"
                  style={{
                    fontFamily: FONT_HANKEN,
                    fontSize: "14px",
                    color: "rgba(247,246,235,0.65)",
                    textDecoration: "none",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = C.cream)}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(247,246,235,0.65)")
                  }
                >
                  hola@floraong.org
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p
              style={{
                fontFamily: FONT_HANKEN,
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(247,246,235,0.40)",
                marginBottom: "20px",
              }}
            >
              Legal
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    style={{
                      fontFamily: FONT_HANKEN,
                      fontSize: "14px",
                      color: "rgba(247,246,235,0.65)",
                      textDecoration: "none",
                      transition: "color 0.15s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = C.cream)}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(247,246,235,0.65)")
                    }
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            marginTop: "48px",
            borderTop: `1px solid rgba(45,66,57,0.3)`,
            paddingTop: "24px",
          }}
        >
          <p
            style={{
              fontFamily: FONT_HANKEN,
              fontSize: "12px",
              color: "rgba(247,246,235,0.40)",
            }}
          >
            © 2026 Flora ONG — Neuquén, Patagonia
          </p>
        </div>
      </div>
    </footer>
  );
}
