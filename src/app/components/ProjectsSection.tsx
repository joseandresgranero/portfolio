"use client";

import { ProjectsCard } from "./ProjectsCard";
import { projects } from "../data/projects";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-gray-50">
      <div className="grid grid-cols-3 grid-container px-20 py-20 gap-16">
        {projects.map((project, idx) => (
          <ProjectsCard
            key={idx}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            storybookLink={project.storybookLink}
            image={project.image}
            imageAlt={project.imageAlt}
            imageHeight={project.imageHeight}
            imageWidth={project.imageWidth}
            detailLink={project.detailLink}
          />
        ))}
      </div>
    </section>
  );
};
