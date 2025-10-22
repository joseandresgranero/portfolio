"use client";

import { ProjectsCard } from "./ProjectsCard";
import { projects } from "../data/projects";
import Link from "next/link";

export const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="bg-[var(--projects-bg-color)] px-[var(--padding-x-base)] md:px-[var(--padding-x-base-md)] py-10  md:py-25">
        <div className="mb-16 max-w-[var(--max-width-text-md)]">
          <div className="text-5xl font-extrabold mb-10 font-heading">
            Genesys
          </div>
          <div className="text-[28px] text-gray-700">
            Working for{" "}
            <Link
              href="https://devo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--primary-color-weaker)] font-bold underline underline-offset-4"
            >
              Devo
            </Link>{" "}
            I've co-created the whole design system along with its key
            foundations: components library, styles, icon library, and design
            tokens. It's a huge project that started more than five years ago.
          </div>
        </div>
        <div className="mb-10">
          {projects
            .filter(
              (project) =>
                project.cat.includes("design-system") &&
                project.cat.includes("featured")
            )
            .map((project, idx) => (
              <ProjectsCard
                featured
                key={`${project.slug}-${idx}`}
                slug={project.slug}
                title={project.shortTitle || project.title}
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
        <div className="text-2xl font-bold mb-10 font-heading">
          Related projects
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 grid-cols-1 grid-container gap-8 md:gap-16">
          {projects
            .filter(
              (project) =>
                project.cat.includes("design-system") &&
                !project.cat.includes("featured")
            )
            .map((project, idx) => (
              <ProjectsCard
                key={`${project.slug}-${idx}`}
                slug={project.slug}
                title={project.shortTitle || project.title}
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
      </div>
      <div className="bg-white px-[var(--padding-x-base)] md:px-[var(--padding-x-base-md)] py-10  md:py-25">
        <div className="mb-16 max-w-[var(--max-width-text-md)]">
          <div className="text-5xl font-extrabold mb-10 font-heading">
            UI Refactor
          </div>
          <div className="text-[28px] text-gray-700">
            Working for{" "}
            <Link
              href="https://devo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--primary-color-weaker)] font-bold underline underline-offset-4"
            >
              Devo
            </Link>{" "}
            I co-created the whole design system along with its key foundations:
            documentation in SB and Figma, React components library, styles,
            icon library, and design tokens.
          </div>
        </div>
        <div className="mb-20">
          {projects
            .filter(
              (project) =>
                project.cat.includes("design-system") &&
                project.cat.includes("featured")
            )
            .map((project, idx) => (
              <ProjectsCard
                featured
                key={`${project.slug}-${idx}`}
                slug={project.slug}
                title={project.shortTitle || project.title}
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
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 grid-cols-1 grid-container gap-8 md:gap-16">
          {projects
            .filter(
              (project) =>
                project.cat.includes("design-system") &&
                !project.cat.includes("featured")
            )
            .map((project, idx) => (
              <ProjectsCard
                key={`${project.slug}-${idx}`}
                slug={project.slug}
                title={project.shortTitle || project.title}
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
      </div>
    </section>
  );
};
