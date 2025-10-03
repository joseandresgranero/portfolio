import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import HeroSection from "../../components/HeroSection";
import { ProjectsSection } from "../../components/ProjectsSection";

export default function About() {
  return (
    <>
      <main className="min-h-screen bg-white text-gray-900 px-20 py-10 max-w-4xl">
        <h1 className="text-4xl font-heading font-bold mb-16">About</h1>
        <section className="mb-12">
          <h2 className="text-2xl font-heading font-bold mb-6">
            Professional profile
          </h2>
          <p className="text-lg text-gray-600 mb-5">
            UX/UI Architect with 15+ years of experience in complex digital
            products, specializing in scalable design systems, accessibility,
            and reusable component development.
          </p>
          <p className="text-lg text-gray-600">
            Expert in prototyping with Figma, design systems, HTML5, CSS3/SASS,
            design tokens, and responsive design. I lead projects end-to-end,
            from UX research to front-end development, with a strong focus on
            visual consistency, performance, and user experience. Experienced
            leading teams and setting design standards in Agile environments.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-heading font-bold mb-6">
            Work experience
          </h2>
          <div className="mb-8">
            <div className="flex flex-row space-x-4 mb-2">
              <h3 className="text-xl font-bold">UX/UI Architect</h3>
              <div className="text-lg text-gray-600">—</div>
              <div className="text-lg text-gray-600">Devo</div>
            </div>
            <p className="text-md text-gray-400 mb-4">
              From July 2018 to September 2025 / Madrid - remote
            </p>
            <ul className="text-lg list-outside pl-4 flex flex-col gap-2 list-disc text-gray-600">
              <li>
                Design and development of the main interface for Devo’s data
                analytics platform.
              </li>
              <li>
                Co-creator of the Design System: React components library,
                system documentation using Storybook, style library based on
                SASS, custom icon library and design tokens system.
              </li>
              <li>
                Participation in UX processes: wireframing, prototyping, user
                validation... etc.
              </li>
              <li>
                Focus on accessibility, responsive design, and scalability.
              </li>
              <li>
                Tools: Figma, GitLab CI/CD, GitHub, Storybook, Jira and
                Confluence.
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <div className="flex flex-row space-x-4 mb-2">
              <h3 className="text-xl font-bold">Design Lead</h3>
              <div className="text-lg text-gray-600">—</div>
              <div className="text-lg text-gray-600">Saga Soluciones</div>
            </div>
            <p className="text-md text-gray-400 mb-4">
              From October 2012 to July 2018 / Seville
            </p>
            <ul className="text-lg list-outside pl-4 flex flex-col gap-2 list-disc text-gray-600">
              <li>
                Designed and developed 40+ portals with OpenCms, HTML/CSS,
                Bootstrap, JS.
              </li>
              <li>
                Delivered training and led accessibility (AA compliance)
                migrations.
              </li>
              <li>
                Clients: Acerinox, Aldi, universities, municipalities,
                provincial councils...
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <div className="flex flex-row space-x-4 mb-2">
              <h3 className="text-xl font-bold">
                Creative Director & Co-Founder
              </h3>
              <div className="text-lg text-gray-600">—</div>
              <div className="text-lg text-gray-600">
                Teléfono rojo publicidad
              </div>
            </div>
            <p className="text-md text-gray-400 mb-4">
              From November 2005 to October 2012 / Seville
            </p>
            <ul className="text-lg list-outside pl-4 flex flex-col gap-2 list-disc text-gray-600">
              <li>
                Directed campaigns, branding, and corporate websites for NGOs
                and institutions.
              </li>
              <li>
                Clients included Agencia Progreso y Salud, Solidaridad
                Internacional, ENRICH, Zemos98... etc.
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

// Nueva página dinámica para proyectos
// Crea un archivo en /pages/projects/[slug].js con este contenido:

/*
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Proyecto Uno",
    description: "Descripción breve del proyecto uno.",
    image: "/projects/proyecto1.jpg",
    slug: "proyecto-uno",
    content: "Este es un detalle más extenso sobre el proyecto uno, explicando tecnologías, retos y resultados obtenidos."
  },
  {
    title: "Proyecto Dos",
    description: "Descripción breve del proyecto dos.",
    image: "/projects/proyecto2.jpg",
    slug: "proyecto-dos",
    content: "Detalles completos del proyecto dos, incluyendo funcionalidades clave y el impacto del trabajo realizado."
  },
];

export default function ProjectPage() {
  const router = useRouter();
  const { slug } = router.query;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <p className="p-6 text-center">Proyecto no encontrado</p>;
  }

  return (
    <main className="min-h-screen bg-white text-gray-900 p-6 max-w-4xl mx-auto">
      <Link href="/" className="text-blue-600 hover:underline">← Volver al inicio</Link>
      <h1 className="text-4xl font-bold mt-4 mb-6">{project.title}</h1>
      <Image
        src={project.image}
        alt={project.title}
        width={800}
        height={500}
        className="object-cover w-full rounded-2xl mb-6"
      />
      <p className="text-gray-700 leading-relaxed mb-6">{project.content}</p>
    </main>
  );
}
*/
