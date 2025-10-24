import { IArticle } from "@/types/article";

export const projects: IArticle[] = [
  {
    title: "Genesys Design System",
    cat: ["design-system", "featured"],
    shortTitle: "Design System",
    role: "I led the creation of the design system, collaborating closely with frontend developers and my design team colleagues to ensure a cohesive and efficient design language across the platform.",
    description:
      "Created the Devo design system from the ground up, radically enhancing consistency, scalability, and the overall speed of design and development.",
    shortDescription:
      "The design system definition: design principles, foundations, components and patterns, as well as a detailed documentation in Storybook and Figma.",
    image: "/projects/design-system/img/design-system-thumb-landscape.png",
    imageAlt: "Genesys Design System Banner",
    imageWidth: 400,
    imageHeight: 259,
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
    cat: ["design-system", "components"],
    role: "I co-created a React-based component library built with TypeScript and Styled Components to unify Devo's design system across products. My goal was to ensure design-code consistency and improve the developer experience.",
    description:
      "React component library that provides accessible, consistent UI elements for enterprise apps, with interactive Storybook documentation for easy use.",
    image: "/projects/genesys-ui/img/genesys-ui-thumb-2.png",
    imageAlt: "Genesys UI Banner",
    imageWidth: 800,
    imageHeight: 568,
    slug: "genesys-ui",
    storybookLink: "https://devoinc.github.io/genesys-ui",
    githubLink: "https://github.com/genesys-ui/react",
    tags: ["React", "Styled components", "TypeScript", "Storybook"],
  },
  {
    title: "Genesys Icons library",
    cat: ["design-system", "icons"],
    shortTitle: "Icons library",
    role: "I co-created a React and TypeScript-based icon library that streamlined how teams use and manage icons consistently. Focused on defining the icon set, the architecture, integrating it into the design system, designing and coding the documentation in SB, and establishing the workflow for designers and developers alike.",
    description:
      "A React, font-based and SVG icon library built on top of Ionicons, providing an easy and consistent way to use iconography throughout the product.",
    image: "/projects/genesys-icons/img/icons-thumb.png",
    imageAlt: "Genesys Icons Banner",
    imageWidth: 800,
    imageHeight: 568,
    slug: "genesys-icons",
    storybookLink: "https://genesys-ui.github.io/icons/",
    githubLink: "https://github.com/genesys-ui/icons",
    tags: ["React", "Ionicons", "SVG", "Gallery"],
  },
];
