import { IArticle } from "@/types/article";

export const projects: IArticle[] = [
  {
    title: "Genesys Design System",
    cat: ["design-system", "featured"],
    shortTitle: "Design System",
    role: "I led the creation of the design system, collaborating closely with frontend developers and my design team colleagues to ensure a cohesive and efficient design language across the platform.",
    description:
      "Created the Devo design system from the ground up, radically enhancing consistency, scalability, and the overall speed of design and development.",
    image: "/projects/design-system/img/design-system-thumb.png",
    imageAlt: "Genesys Design System Banner",
    imageWidth: 800,
    imageHeight: 450,
    slug: "genesys-design-system",
    storybookLink: "https://genesys-ui.github.io/design-system",
    githubLink: "https://github.com/genesys-ui/design-system",
    figmaLink:
      "https://www.figma.com/design/wKTuF8eVSqEJWjsQarKydC/GDS---UI-Kit----v2.0.0",
    tags: ["UX/UI Architecture", "Figma", "Documentation", "Storybook"],
  },
  {
    title: "Genesys UI React components library",
    shortTitle: "UI Components Library",
    cat: ["design-system"],
    role: "I led the creation of the design system, collaborating closely with frontend developers and my design team colleagues to ensure a cohesive and efficient design language across the platform.",
    description:
      "React component library that provides accessible, consistent UI elements for enterprise apps, with interactive Storybook documentation for easy use.",
    image: "/projects/genesys-ui/img/thumb-genesys-ui-landscape.png",
    imageAlt: "Genesys UI Banner",
    imageWidth: 800,
    imageHeight: 529,
    slug: "genesys-ui",
    storybookLink: "https://devoinc.github.io/genesys-ui",
    githubLink: "https://github.com/genesys-ui/react",
  },
  {
    title: "Genesys Icons library",
    cat: ["design-system"],
    shortTitle: "Icons library",
    role: "I led the creation of the design system, collaborating closely with frontend developers and my design team colleagues to ensure a cohesive and efficient design language across the platform.",
    description:
      "React component library that provides accessible, consistent UI elements for enterprise apps, with interactive Storybook documentation for easy use.",
    image: "/projects/genesys-ui/img/thumb-genesys-ui.png",
    imageAlt: "Genesys UI Banner",
    slug: "genesys-ui",
    storybookLink: "https://devoinc.github.io/genesys-ui",
    githubLink: "https://github.com/genesys-ui/react",
  },
];
