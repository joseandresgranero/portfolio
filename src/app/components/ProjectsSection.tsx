"use client";

import { ProjectsCard } from "./ProjectsCard";
import { projects } from "../data/projects";
import Link from "next/link";

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="bg-[var(--projects-bg-color)] px-[var(--padding-x-base)] md:px-[var(--padding-x-base-md)] py-10  md:py-25"
    >
      <div className="mb-16 max-w-[var(--max-width-text)]">
        <div className="text-3xl font-extrabold mb-4 font-heading">
          Genesys Design System
        </div>
        <div className="text-2xl text-gray-600">
          Working for{" "}
          <Link
            href="https://devo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary-color-weaker)] font-bold underline underline-offset-4"
          >
            Devo
          </Link>{" "}
          I co-created the design system along with its key foundations:
          component library, documentation, styles, icon library, and design
          tokens.
        </div>
      </div>
      <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-container gap-8 md:gap-16">
        {projects.map((project, idx) => (
          <ProjectsCard
            key={`${project.slug}-${idx}`}
            slug={project.slug}
            title={project.title}
            description={project.description}
            figmaLink={project.figmaLink}
            githubLink={project.githubLink}
            storybookLink={project.storybookLink}
            image={project.image}
            imageAlt={project.imageAlt}
            imageHeight={project.imageHeight}
            imageWidth={project.imageWidth}
          />
        ))}
      </div>
    </section>
  );
};
