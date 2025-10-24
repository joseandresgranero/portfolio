import { notFound } from "next/navigation";

import type { IArticle } from "@/types/article";
import { projects } from "@/app/data";

import {
  Article,
  ArticleFeaturedWrapper,
  ArticleFeaturedWrapperItem,
  ArticleGrid,
  ArticleHeading,
  ArticleImageBlock,
  ArticleParagraph,
  ArticleSection,
  Link,
} from "@/app/components";

export default function GenesysDesignSystem() {
  const project: IArticle | undefined = projects.find(
    (p: IArticle) => p.slug === "genesys-icons"
  );

  if (!project) {
    notFound();
  }

  return (
    <Article
      title={project.title}
      intro={project.description}
      tags={project.tags}
      role={project.role}
      figmaLink={project.figmaLink}
      githubLink={project.githubLink}
      storybookLink={project.storybookLink}
    >
      {/* OVERVIEW ----------------------------------------------------------------------------- */}
      <ArticleSection heading="Overview">
        <ArticleParagraph>
          The library was created to streamline and standardize iconography
          across product and engineering teams, providing a unified, reusable
          set of SVG icons and React components built in TypeScript.
        </ArticleParagraph>
        <ArticleParagraph>
          This initiative was part of a broader effort to strengthen the design
          system's foundations — ensuring that visual language, accessibility,
          and implementation were coherent across all platforms. The result was
          a versatile icon library that could easily evolve alongside the
          company's design language and development needs.
        </ArticleParagraph>
      </ArticleSection>
      {/* CHALLENGE ----------------------------------------------------------------------------- */}
      <ArticleSection heading="The Challenge">
        <ArticleParagraph>
          Before this project, icon usage was fragmented and inconsistent.
          Multiple teams used different icon sets, naming conventions, and file
          formats, leading to confusion, visual noise, and unnecessary
          duplication. This inconsistency also slowed down development, as
          engineers often had to import or recreate assets manually.
        </ArticleParagraph>
        <ArticleParagraph>
          The main challenge was to design a system that would centralize all
          icons while maintaining flexibility. We needed a solution that worked
          seamlessly across Figma and React, supported accessibility and
          scalability, and could be easily maintained and extended by both
          designers and developers.
        </ArticleParagraph>
      </ArticleSection>
      <ArticleSection
        unlimitedWidth
        className="bg-[var(--projects-bg-color)] grid md:grid-cols-2 grid-cols-1 grid-container items-stretch gap-8 md:gap-16"
      >
        <ArticleImageBlock
          src="/projects/genesys-ui/img/alerts-creation-old.jpg"
          height={411}
          alt="Before Genesys UI example of section"
          title="Before"
          description="Two examples of sections before the creation of Genesys UI,
          so there are different ways of define the same components — different 
          font sizes for the tabs and page title, different help block at the right 
          of the title, not the same filters above the table... etc."
        />
        <ArticleImageBlock
          src="/projects/genesys-ui/img/user-manage.png"
          width={1200}
          height={625}
          alt="Before Genesys UI example of section"
        />
        <ArticleImageBlock
          src="/projects/genesys-ui/img/retention-time-manager.png"
          height={411}
          alt="After Genesys UI example of section"
          title="After"
          description="Two examples of sections after the creation of Genesys UI,
          so we're usng the same components across the product — the consistency
          is radically improved."
        />
        <ArticleImageBlock
          src="/projects/genesys-ui/img/alerts-sending-policies.png"
          width={1200}
          height={625}
          alt="After Genesys UI example of section"
        />
      </ArticleSection>
      {/* PROCESS ----------------------------------------------------------------------------- */}
      <ArticleSection heading="Process & Collaboration">
        <ArticleParagraph>
          Designers can easily add new icons by uploading an SVG, while an
          automated script handled the conversion into React components.
        </ArticleParagraph>
        <ArticleParagraph>
          We built a living documentation site in Storybook, where every icon
          was neatly organized, previewed, and explained. There is a gallery
          with advanced search, based on the structure of the SVG code:
          attribute title and description.
        </ArticleParagraph>
        <ArticleParagraph>
          This process not only reduced handoff friction but also kept designers
          and developers perfectly aligned, ensuring everyone worked with the
          same, up-to-date assets across the product ecosystem.
        </ArticleParagraph>
      </ArticleSection>
      {/* DEVELOPMENT APPROACH ----------------------------------------------------------------------------- */}
      <ArticleSection heading="Development Approach">
        <ArticleParagraph>
          The library was built entirely in React and TypeScript to ensure type
          safety and scalability. Each icon component was lightweight, reusable,
          and optimized for performance, allowing developers to import only what
          they needed. This modular approach kept bundle sizes low while
          maintaining flexibility.
        </ArticleParagraph>
        <ArticleParagraph>
          This is the main structure of the project:
        </ArticleParagraph>
        <ArticleParagraph htmlTag="div">
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
            <code>
              {`
/ (root)
├─ .github/
│   └─ … (workflows, templates)
├─ .storybook/
│   └─ … (Storybook config)
├─ icons/ (the SVG icon set)
├─ scripts/ (to generate components from SVGs)
├─ src/ (React components, utils... etc.)
│   ├── /components
│   │   ├── /IconBase
│   │   │   ├── IconBase.test.tsx
│   │   │   ├── IconBase.tsx
│   │   │   └── index.ts
│   ├── /context
│   └── index.ts
├─ stories/
├─ test/
├─ vendor/
│   └─ original_project/
├─ .gitignore
├─ .prettierrc
├── package.json
├── tsconfig.json
├── README.md
└── … other configuration files (config, oxlintrc, …)
          `}
            </code>
          </pre>
        </ArticleParagraph>
        <ArticleParagraph>
          Anyway, this is just an excerpt of the project structure to give you
          an idea of how it's organized. This is the link to{" "}
          <Link
            href="https://github.com/genesys-ui/icons"
            title="Go to the Github repository (new tab)"
          >
            Github repository
          </Link>{" "}
          in case you want to check more details
        </ArticleParagraph>
        <ArticleParagraph>
          We also implemented automated testing and version control through
          GitHub Actions, which allowed safe deployment and updates through npm.
          This ensured that every release maintained visual and technical
          integrity, even as the system grew.
        </ArticleParagraph>
      </ArticleSection>
      {/* IMPACT & OUTCOMES ----------------------------------------------------------------------------- */}
      <ArticleFeaturedWrapper heading="Impact & Outcomes">
        <ArticleGrid columns={3}>
          <ArticleFeaturedWrapperItem heading="Consistency and collaboration">
            The new icon library immediately improved cross-team collaboration,
            and the centralized system also made onboarding new contributors
            faster and more intuitive.
          </ArticleFeaturedWrapperItem>
          <ArticleFeaturedWrapperItem heading="Reduced developing time">
            Quantitatively, development time for adding or updating icons
            dropped by more than 50%, and visual inconsistencies across products
            were nearly eliminated.
          </ArticleFeaturedWrapperItem>
          <ArticleFeaturedWrapperItem heading="Improved the design system">
            The design system became stronger and more reliable, contributing to
            a more cohesive user experience and brand perception.
          </ArticleFeaturedWrapperItem>
        </ArticleGrid>
        <ArticleGrid>
          <ArticleImageBlock
            inverted
            src="/projects/genesys-ui/img/button-component-page-1.png"
            height={432}
            alt="Storybook documentation for components"
            title="Storybook documentation for components"
            description="Two examples of the Storybook documentation for one of the system components (Button), 
          showing the different properties and states the component can have, as well as usage examples.
          The component page is usually structured in these sections: how to import, basic usage, variants
          and states, usage tips, internal and related components as well as its props table."
          />
          <ArticleImageBlock
            inverted
            src="/projects/genesys-ui/img/button-component-page-2.png"
            height={443}
            alt="Storybook documentation for components"
          />
          <ArticleImageBlock
            inverted
            src="/projects/genesys-ui/img/button-component-playground.png"
            width={800}
            height={526}
            alt="Playground for components in Storybook"
            title="Playground for components in Storybook"
            description="This is a detailed view of the props playground in Storybook — in this case, the Button component.
          It represents one of the core sections of every component in the library, where designers and developers
          can interactively test different properties and instantly see the results. They can also copy the
          corresponding code snippet for any selected configuration."
          />
          <ArticleImageBlock
            inverted
            src="/projects/genesys-ui/img/datetime-component.png"
            width={800}
            height={526}
            alt="Playground for components in Storybook"
          />
        </ArticleGrid>
      </ArticleFeaturedWrapper>
      {/* LEARNINGS & NEXT STEPS  ----------------------------------------------------------------------------- */}
      <ArticleSection heading="Learnings & Next Steps">
        <ArticleParagraph>
          This project highlighted the importance of creating shared tools that
          empower both designers and developers. Automating the most repetitive
          tasks — such as component generation and documentation — freed up time
          for creative problem-solving and higher-level system thinking.
        </ArticleParagraph>
        <ArticleParagraph>
          Looking forward, the next steps include expanding the library with new
          icon sets, improving accessibility through semantic naming, and
          integrating the icons even more tightly with design tokens. These
          improvements will help the system remain flexible, scalable, and ready
          for future design evolutions.
        </ArticleParagraph>
      </ArticleSection>
    </Article>
  );
}
