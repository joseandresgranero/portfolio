"use client";

import { ProjectsCard } from "./ProjectsCard";
import { projects } from "../data/projects";
import Link from "next/link";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="scroll-mt-10 md:scroll-mt-25">
      <div className="bg-[var(--projects-bg-color)] px-[var(--padding-x-base)] md:px-[var(--padding-x-base-md)] py-10  md:py-25">
        <div className="mb-16 max-w-[var(--max-width-text-md)]">
          <div className="text-5xl font-extrabold mb-10 font-heading">
            Genesys
          </div>
          <div className="text-[28px] text-gray-700">
            At{" "}
            <Link
              href="https://devo.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Devo corporative web (new tab)"
              className="text-[var(--primary-color-weaker)] font-bold hover:underline hiver:underline-offset-4"
            >
              Devo
            </Link>{" "}
            I co-created the entire design system and its core foundations —
            including the component library, styles, icon set, and design
            tokens. It's a large-scale project that began more than five years
            ago and continues to evolve.
          </div>
        </div>
        <div>
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
                  description={project.shortDescription || project.description}
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
          <div>
            <div className="relative flex flex-row items-center mb-12">
              <div className="text-lg uppercase tracking-widest font-heading">
                Related Projects
              </div>
              <mark className="w-[calc(100%-220px)] h-[1px] bg-black/15 absolute top-[50%] translate-[0,-50%] ml-[220px]" />
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
                    description={
                      project.shortDescription || project.description
                    }
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
        </div>
      </div>
      <div className="bg-white px-[var(--padding-x-base)] md:px-[var(--padding-x-base-md)] py-10  md:py-25">
        <div className="mb-16 max-w-[var(--max-width-text-md)]">
          <div className="text-5xl font-extrabold mb-10 font-heading">
            UI Refactor
          </div>
          <div className="text-[28px] text-gray-700">
            Also at{" "}
            <Link
              href="https://devo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--primary-color-weaker)] font-bold underline underline-offset-4"
            >
              Devo
            </Link>{" "}
            I was part of one of the company's largest UI initiatives: a full
            app redesign and refactor grounded in the new design system and
            design patterns.
          </div>
        </div>
        <div>
          <div className="mb-10">
            {projects
              .filter(
                (project) =>
                  project.cat.includes("ui-refactor") &&
                  project.cat.includes("featured")
              )
              .map((project, idx) => (
                <ProjectsCard
                  featured
                  key={`${project.slug}-${idx}`}
                  slug={project.slug}
                  title={project.shortTitle || project.title}
                  description={project.shortDescription || project.description}
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
          <div>
            <div className="relative flex flex-row items-center mb-12">
              <div className="text-lg uppercase tracking-widest font-heading">
                Related Projects
              </div>
              <mark className="w-[calc(100%-220px)] h-[1px] bg-black/15 absolute top-[50%] translate-[0,-50%] ml-[220px]" />
            </div>
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 grid-cols-1 grid-container gap-8 md:gap-16">
              {projects
                .filter(
                  (project) =>
                    project.cat.includes("ui-refactor") &&
                    !project.cat.includes("featured")
                )
                .map((project, idx) => (
                  <ProjectsCard
                    key={`${project.slug}-${idx}`}
                    slug={project.slug}
                    title={project.shortTitle || project.title}
                    description={
                      project.shortDescription || project.description
                    }
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
        </div>
      </div>
    </section>
  );
};
