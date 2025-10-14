import { IArticle } from "@/types/article";
//import { DesignSystemContent } from "../components/ProjectContent/DesignSystem";

export const projects: IArticle[] = [
  {
    title: "Genesys Design System",
    role: "I led the creation of the design system, collaborating closely with frontend developers and my design team colleagues to ensure a cohesive and efficient design language across the platform.",
    description:
      "Created the Devo design system from the ground up, radically enhancing consistency, scalability, and the overall speed of design and development.",
    image: "/projects/genesys-ui/images/thumb-design-system.png",
    imageAlt: "Genesys Design System Banner",
    imageWidth: 800,
    imageHeight: 450,
    slug: "genesys-design-system",
    storybookLink: "https://genesys-ui.github.io/design-system",
    githubLink: "https://github.com/genesys-ui/design-system",
    tags: ["Design System", "UX Architecture", "Figma", "Documentation"],
    //content: () => DesignSystemContent,
  },
  {
    title: "Genesys UI",
    role: "I led the creation of the design system, collaborating closely with frontend developers and my design team colleagues to ensure a cohesive and efficient design language across the platform.",
    description:
      "React component library that provides accessible, consistent UI elements for enterprise apps, with interactive Storybook documentation for easy use.",
    image: "/projects/genesys-ui/images/thumb-genesys-ui.png",
    imageAlt: "Genesys UI Banner",
    slug: "genesys-ui",
    storybookLink: "https://devoinc.github.io/genesys-ui",
    githubLink: "https://github.com/genesys-ui/react",
  },
  {
    title: "Genesys UI",
    role: "I led the creation of the design system, collaborating closely with frontend developers and my design team colleagues to ensure a cohesive and efficient design language across the platform.",
    description:
      "React component library that provides accessible, consistent UI elements for enterprise apps, with interactive Storybook documentation for easy use.",
    image: "/projects/genesys-ui/images/thumb-genesys-ui.png",
    imageAlt: "Genesys UI Banner",
    slug: "genesys-ui",
    storybookLink: "https://devoinc.github.io/genesys-ui",
    githubLink: "https://github.com/genesys-ui/react",
  },
];
