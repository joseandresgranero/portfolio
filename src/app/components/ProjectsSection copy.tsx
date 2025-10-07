"use client";

import Image from "next/image";
import { useParallaxBg } from "@/hooks/useParallaxBg";
//import { ParallaxBanner } from "react-scroll-parallax";
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

export const ProjectsSectionCopy = () => {
  useParallaxBg(".parallax-bg", 0.1);
  return (
    <ParallaxProvider>
      <section id="projects" className="bg-gray-50">
        <section className="relative overflow-hidden">
          {/*           <ParallaxBanner
            layers={[
              {
                image: "/projects/genesys-ui/images/linkedin-banner.jpg",
                speed: -25,
              },
            ]}
            className="aspect-[2/1]"
          /> */}
          <div className="grid grid-cols-3 grid-container px-20 py-30 gap-2">
            <div
              className="flex flex-col justify-center"
              style={{
                height: "480px",
                border: "1px solid #ddd",
              }}
            >
              <div className="overflow-hidden mb-4">
                <Image
                  width={756}
                  height={360}
                  src={"/projects/genesys-ui/images/thumb-genesys-ui.png"}
                  alt="Genesys UI Banner"
                  className="object-cover"
                />
              </div>
              <div className="px-8 py-6">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Genesys UI
                </h2>
                <p className="text-base text-gray-600">
                  React component library by Devo Inc. that provides accessible,
                  consistent UI elements for enterprise apps, with interactive
                  Storybook documentation for easy use.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </ParallaxProvider>
  );
};
