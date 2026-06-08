import type { Metadata } from "next";
import { Hanken_Grotesk, EB_Garamond } from "next/font/google";
import "./globals.css";
import RevealObserver from "@/components/RevealObserver";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  display: "swap",
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Flora ONG — Cannabis medicinal legal en Argentina",
  description:
    "Club de cultivo medicinal. Accedé a cannabis de calidad documentada con REPROCANN, dentro del marco legal. Sin mercado negro.",
  keywords: [
    "cannabis medicinal",
    "REPROCANN",
    "club de cultivo",
    "Flora ONG",
    "Neuquén",
    "Argentina",
    "Ley 27350",
  ],
  openGraph: {
    title: "Flora ONG — Cannabis medicinal legal en Argentina",
    description:
      "Club de cultivo medicinal. Accedé a cannabis de calidad documentada con REPROCANN, dentro del marco legal.",
    url: "https://floraong.org",
    siteName: "Flora ONG",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flora ONG — Cannabis medicinal legal en Argentina",
    description:
      "Club de cultivo medicinal. Accedé a cannabis de calidad documentada con REPROCANN, dentro del marco legal.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${hanken.variable} ${garamond.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Flora ONG",
              url: "https://floraong.org",
              description:
                "Club de cultivo medicinal de cannabis en Argentina. Marco legal REPROCANN.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Neuquén",
                addressRegion: "Neuquén",
                addressCountry: "AR",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "hola@floraong.org",
              },
            }),
          }}
        />
      </head>
      <body>
        <RevealObserver />
        {children}
      </body>
    </html>
  );
}
