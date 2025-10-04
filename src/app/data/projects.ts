import { ProjectsCardProps } from "../components/ProjectsCard";

export const projects: ProjectsCardProps[] = [
  {
    title: "Genesys Design System",
    description:
      "Genesys is a design system for products and digital ecosystems and home to the foundations, human interface guidelines, design tools, UI components and interaction patterns that we use to build great experiences.",
    image: "/projects/genesys-ui/images/thumb-design-system.png",
    imageAlt: "Genesys Design System Banner",
    slug: "genesys-design-system",
    storybookLink: "https://genesys-ui.github.io/design-system",
    githubLink: "https://github.com/genesys-ui/design-system",
    detailLink: "genesys-design-system",
  },
  {
    title: "Genesys UI",
    description:
      "React component library by Devo Inc. that provides accessible, consistent UI elements for enterprise apps, with interactive Storybook documentation for easy use.",
    image: "/projects/genesys-ui/images/thumb-genesys-ui.png",
    imageAlt: "Genesys UI Banner",
    slug: "genesys-ui",
    storybookLink: "https://devoinc.github.io/genesys-ui",
    githubLink: "https://github.com/genesys-ui/react",
    detailLink: "genesys-ui",
  },
];
