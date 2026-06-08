export const C = {
  cream: "#F7F6EB",
  green: "#71CE6A",
  dark: "#2D4239",
  dark70: "rgba(45,66,57,0.70)",
  dark60: "rgba(45,66,57,0.60)",
  dark50: "rgba(45,66,57,0.50)",
  dark20: "rgba(45,66,57,0.20)",
  dark10: "rgba(45,66,57,0.10)",
  green30: "rgba(113,206,106,0.30)",
  white: "#FFFFFF",
  creamText: "rgba(247,246,235,0.40)",
};

export const WA_BASE = "https://wa.me/5492996375723";

export const WA_MESSAGES = {
  general: encodeURIComponent("Hola Flora, quiero información para asociarme."),
  semilla: encodeURIComponent(
    "Hola Flora, me interesa la membresía Semilla (10g/mes). ¿Cómo me asocio?"
  ),
  raiz: encodeURIComponent(
    "Hola Flora, me interesa la membresía Raíz (20g/mes). ¿Cómo me asocio?"
  ),
  cosecha: encodeURIComponent(
    "Hola Flora, me interesa la membresía Cosecha (40g/mes). ¿Cómo me asocio?"
  ),
  legal: encodeURIComponent("Hola Flora, tengo una pregunta sobre el marco legal."),
};

export const waUrl = (key: keyof typeof WA_MESSAGES) =>
  `${WA_BASE}?text=${WA_MESSAGES[key]}`;
