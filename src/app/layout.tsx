import type { Metadata } from "next";
import {
  Roboto,
  PT_Serif,
  Rubik,
  Lato,
  Poppins,
  Raleway,
  Plus_Jakarta_Sans,
  Fraunces,
} from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

// Fuente roboto para cuerpo de texto
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-base",
  weight: ["300", "400", "600", "700", "900"],
});

// Fuente para headings
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700", "900"],
});

// Fuente para headings
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700", "800"],
});

// Fuente PT serif para títulos
const ptSerif = PT_Serif({
  subsets: ["latin"],
  variable: "--font-headin-alt",
  weight: ["400", "700"],
});

// Fuente PT serif para logo
const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-featured",
  weight: ["400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title:
    "Jose Andrés Granero - Product Designer — Specialized in UX/UI Architecture & Design Systems",
  description:
    "The portfolio of Jose Andrés Granero, Product Designer, with a focus on UX Architecture and Design Systems. Explore my projects, case studies, and professional journey in creating user-centered digital experiences.",
  icons: {
    icon: [
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", rel: "shortcut icon" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  appleWebApp: {
    title: "Jose Andres Granero - Portfolio",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ptSerif.variable} ${roboto.variable} ${rubik.variable} ${jakarta.variable} antialiased font-base`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
