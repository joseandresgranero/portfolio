"use client";

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
import { useParallaxBg } from "@/hooks/useParallaxBg";
import { ParallaxBanner } from "react-scroll-parallax";
import { ParallaxProvider } from "react-scroll-parallax";

const projects = [
  {
    title: "Proyecto Uno",
    description: "Descripción breve del proyecto uno.",
    image: "/projects/proyecto1.jpg",
    slug: "proyecto-uno",
    content:
      "Este es un detalle más extenso sobre el proyecto uno, explicando tecnologías, retos y resultados obtenidos.",
  },
  {
    title: "Proyecto Dos",
    description: "Descripción breve del proyecto dos.",
    image: "/projects/proyecto2.jpg",
    slug: "proyecto-dos",
    content:
      "Detalles completos del proyecto dos, incluyendo funcionalidades clave y el impacto del trabajo realizado.",
  },
];

export const ProjectsSection = () => {
  useParallaxBg(".parallax-bg", 0.1);
  return (
    <ParallaxProvider>
      <section id="projects" className="bg-gray-50">
        <section className="h-[60vh] relative overflow-hidden">
          <ParallaxBanner
            layers={[
              {
                image: `${publicRuntimeConfig.basePath}/projects/genesys-ui/images/linkedin-banner.jpg`,
                speed: -25,
              },
            ]}
            className="aspect-[2/1]"
          />
          <div className="absolute inset-0 z-10 flex flex-col justify-center h-full text-white px-20">
            <h2 className="text-5xl font-heading font-bold mb-4">Genesys UI</h2>
            <p className="text-lg">React components library based on TS</p>
          </div>
        </section>
      </section>
    </ParallaxProvider>
  );
};
