import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import HeroSection from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-white text-gray-900">
        {/* Hero Section */}
        <HeroSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 px-6 max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Contacto</h2>
          <p className="text-gray-700 mb-6">
            ¿Quieres colaborar o tienes una idea en mente? ¡Hablemos!
          </p>
          <a
            href="mailto:tuemail@correo.com"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
          >
            Escríbeme
          </a>
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
