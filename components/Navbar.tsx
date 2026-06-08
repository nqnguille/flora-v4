"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { C, waUrl } from "@/lib/constants";

const FONT_HANKEN = "var(--font-hanken), sans-serif";

const links = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Membresías", href: "#membresias" },
  { label: "Legalidad", href: "#legalidad" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: C.cream,
          borderBottom: scrolled ? `1px solid ${C.dark10}` : "1px solid transparent",
          transition: "border-color 0.25s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "64px",
            paddingLeft: "24px",
            paddingRight: "24px",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{
              fontFamily: FONT_HANKEN,
              fontWeight: 700,
              fontSize: "20px",
              color: C.dark,
              textDecoration: "none",
              letterSpacing: "-0.02em",
            }}
          >
            Flora
          </a>

          {/* Links desktop */}
          <nav
            className="hidden md:flex"
            style={{ gap: "32px" }}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: FONT_HANKEN,
                  fontSize: "15px",
                  fontWeight: 500,
                  color: C.dark70,
                  textDecoration: "none",
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = C.dark)}
                onMouseLeave={(e) => (e.currentTarget.style.color = C.dark70)}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA desktop */}
          <motion.a
            href={waUrl("general")}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.15 }}
            className="hidden md:flex"
            style={{
              fontFamily: FONT_HANKEN,
              fontWeight: 600,
              fontSize: "14px",
              color: C.dark,
              background: C.green,
              borderRadius: "4px",
              height: "44px",
              paddingLeft: "20px",
              paddingRight: "20px",
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            Asociarse
          </motion.a>

          {/* Hamburger mobile */}
          <button
            className="flex md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <span
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: C.dark,
                transition: "transform 0.2s",
                transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: C.dark,
                opacity: menuOpen ? 0 : 1,
                transition: "opacity 0.2s",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: C.dark,
                transition: "transform 0.2s",
                transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none",
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              inset: 0,
              background: C.dark,
              zIndex: 99,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "40px",
            }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: FONT_HANKEN,
                  fontSize: "28px",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  textDecoration: "none",
                }}
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href={waUrl("general")}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: FONT_HANKEN,
                fontWeight: 700,
                fontSize: "16px",
                color: C.dark,
                background: C.green,
                borderRadius: "4px",
                height: "52px",
                paddingLeft: "32px",
                paddingRight: "32px",
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              Asociarse
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
