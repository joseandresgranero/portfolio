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
    (p: IArticle) => p.slug === "genesys-ui"
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
          The component library was conceived as a bridge between design and
          development at Devo. Built with React, TypeScript, and Styled
          Components, it became the foundation of our design system, enabling
          consistency and scalability across products. My role combined{" "}
          <strong>design leadership with front-end implementation</strong>,
          ensuring visual fidelity and usability were preserved from Figma to
          code.
        </ArticleParagraph>
        <ArticleParagraph>
          The initiative wasn't just about components — it was about{" "}
          <strong>building a shared language between teams</strong>. By aligning
          design tokens, interaction patterns, and documentation, we created a
          unified toolkit that accelerated delivery and simplified
          collaboration.
        </ArticleParagraph>
      </ArticleSection>
      {/* CHALLENGE ----------------------------------------------------------------------------- */}
      <ArticleSection heading="The Challenge">
        <ArticleParagraph>
          Before the library existed,{" "}
          <strong>each team developed its own UI elements</strong>, leading to
          fragmented user experiences and inconsistent visual quality. Design
          handoffs were time-consuming, and developers often had to rebuild
          components from scratch without a clear source of truth. Maintaining
          cohesion across multiple products became increasingly difficult.
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
          <strong>I worked directly on the codebase</strong> with the
          collaboration of frontend engineers, creating components, writing
          documentation, and setting up Storybook as the central hub for our
          design system. This hands-on approach allowed me to bridge gaps,
          address challenges in real-time, and ensure that the library met both
          design and technical standards.
        </ArticleParagraph>
        <ArticleParagraph>
          In addition, there have been{" "}
          <strong>close collaboration between designers and engineers</strong>.
          We defined shared goals, mapped existing inconsistencies, and
          translated the visual language into reusable patterns. Regular
          design-dev syncs, version reviews, and feedback loops ensured that
          every decision was validated from both perspectives.
        </ArticleParagraph>
      </ArticleSection>
      {/* DESIGN ALIGNMENT ----------------------------------------------------------------------------- */}
      <ArticleSection heading="Design & Code Alignment">
        <ArticleParagraph>
          The library was deeply connected to the design system's foundations.
          Colors, typography, spacing, sizing, transitions, shape and elevation
          were{" "}
          <strong>
            defined as tokens to ensure consistency and flexibility
          </strong>
          . These tokens were integrated both in Figma and in code, enabling
          designers and developers to work with the same visual language.
        </ArticleParagraph>
        <ArticleParagraph>
          We also integrated the design tokens library output with our Figma
          library using its variable system. This way, the{" "}
          <strong>
            theme is the same in the React components library as in Figma
          </strong>
          , ensuring 100% design-to-code consistency.
        </ArticleParagraph>
      </ArticleSection>
      <ArticleSection
        unlimitedWidth
        className="bg-[var(--projects-bg-color)] grid md:grid-cols-2 grid-cols-1 grid-container items-stretch gap-8 md:gap-16"
      >
        <ArticleImageBlock
          src="/projects/genesys-ui/img/design-tokens-docs.png"
          width={800}
          height={419}
          alt="Design tokens documentation in Storybook"
          title="Design tokens documentation"
          description={
            <>
              <Link
                href="https://genesys-ui.github.io/theme-devo"
                title="Sotorybook documentation for Genesys design tokens (new tab)"
              >
                Design tokens documentation
              </Link>{" "}
              created in Storybook, so both designers and developers can check
              the available tokens for colors, typography, spacing, sizing, etc.
              We have an advanced search system to find tokens easily — for
              example, filtering by text, regex, schema (dark/light), format
              (JS, JSON, CSS...) and by the naming category."
            </>
          }
        />
        <ArticleImageBlock
          src="/projects/genesys-ui/img/figma-aligned-tokens.png"
          height={419}
          alt="Design tokens in Figma"
          title="Single source of truth for Design tokens"
          description="This a detail of the Figma library showing the design tokens
          integrated as Figma variables. This way, designers can use the same tokens
          defined in code, ensuring 100% consistency between design and development."
        />
      </ArticleSection>
      {/* DEVELOPMENT APPROACH ----------------------------------------------------------------------------- */}
      <ArticleSection heading="Development Approach">
        <ArticleParagraph>
          The library was coded in <strong>React with TypeScript</strong>, using
          Styled Components for modular and themeable styling. Each component
          lived in its own folder — with logic, styles, and stories unified —
          making the codebase predictable and easy to maintain.
        </ArticleParagraph>
        <ArticleParagraph>
          Working on the Genesys UI library,{" "}
          <strong>I helped shape a monorepo architecture</strong> designed for
          scalability and collaboration. Each package had a clear purpose — from
          the core component library to specialized modules like color
          utilities, tables, or uploaders — all connected under a single design
          language.
        </ArticleParagraph>
        <ArticleParagraph>
          This is the main structure of the project:
        </ArticleParagraph>
        <ArticleParagraph>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
            <code>
              {`
  / (root)
  ├─ .github/
  │   └─ … (workflows, templates)
  ├─ .storybook/
  │   └─ … (Storybook config)
  ├─ packages/
  │   ├─ core/
  │   ├─ color/
  │   ├─ upload/
  │   ├─ datetime/
  │   ├─ code/
  │   └─ table/
  ├─ stories/
  │   └─ getting-started/
  ├─ test/
  │   └─ … (several tests)
  ├─ CHANGELOG.md
  ├─ README.md
  ├─ package.json
  ├─ tsconfig.json
  └─ … other configuration files (prettierrc, npmrc,…)
          `}
            </code>
          </pre>
        </ArticleParagraph>
        <ArticleParagraph>
          And this is the main structure of the core package:
        </ArticleParagraph>
        <ArticleParagraph>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
            <code>
              {`
/packages/core
├── /src
│   ├── /components
│   │   ├── /Button
│   │   │   ├── /components
│   │   │   │   ├── /ButtonAddon
│   │   │   │       ├── ButtonAddon.tsx
│   │   │   │       ├── StyledButtonAddon.ts
│   │   │   │       ├── declarations.ts
│   │   │   │       └── index.ts
│   │   │   │   ├── /ButtonAddon
│   │   │   │   ├── /ButtonBadge
│   │   │   │   ├── /ButtonContainer
│   │   │   │   ├── /ButtonDropdownIcon
│   │   │   │   ├── /ButtonIcon
│   │   │   │   ├── /ButtonLabel
│   │   │   │   ├── /ButtonLoader
│   │   │   │   ├── /ButtonSelection
│   │   │   │   └── index.ts
│   │   │   ├── Button.mdx
│   │   │   ├── Button.stories.tsx
│   │   │   ├── Button.test.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── constants.ts
│   │   │   ├── declarations.ts
│   │   │   ├── helpers.tsx
│   │   │   └── index.ts
│   │   ├── /Input
│   │   ├── /Modal
│   │   ├── ...
│   │   └── index.ts
│   ├── /constants
│   ├── /declarations
│   ├── /helpers
│   ├── /hooks
│   ├── /styled
│   ├── /typeFunctions
│   └── /utils
│   ├── /stories
│   │   ├── /components
│   │   │   ├── /StoryWrapper
│   │   │   └── /styled
│   │   ├── /partials
│   │   └── /utils
├── package.json
├── tsconfig.json
├── README.md
└── … other configuration files (prettierrc, npmrc,…)
          `}
            </code>
          </pre>
        </ArticleParagraph>
        <ArticleParagraph>
          Anyway, this is just an excerpt of the project structure to give you
          an idea of how it's organized. This is the link to{" "}
          <Link
            href="https://github.com/genesys-ui/react"
            title="Go to the Github repository (new tab)"
          >
            Github repository
          </Link>{" "}
          in case you want to check more details
        </ArticleParagraph>
        <ArticleParagraph>
          Storybook served as both a{" "}
          <strong>documentation hub and a testing environment</strong>, allowing
          teams to preview props, states, and variants interactively. Components
          were versioned and published via npm, ensuring smooth updates and
          CI/CD integration across multiple applications.
        </ArticleParagraph>
      </ArticleSection>
      {/* IMPACT & OUTCOMES ----------------------------------------------------------------------------- */}
      <ArticleFeaturedWrapper heading="Impact & Outcomes">
        <ArticleGrid columns={3}>
          <ArticleFeaturedWrapperItem heading="Consistency and accessibility">
            The new system had a measurable impact. It reduced
            design-development handoff time and{" "}
            <strong>unified more than 100 screens</strong> under a single visual
            language base on the same UI components. In addition, we get{" "}
            <strong>AA level in accessibility</strong> for all the components in
            the library.
          </ArticleFeaturedWrapperItem>
          <ArticleFeaturedWrapperItem heading="Ready-to-use">
            Beyond metrics, the system strengthened collaboration. Engineers
            appreciated the{" "}
            <strong>reliability and flexibility of ready-to-use</strong>{" "}
            components, while designers gained confidence that their work would
            be implemented faithfully. Specially, because I was implementing and
            creating the documentation of the library. It also improved
            onboarding for new team members, who could now build with clarity
            and consistency from day one.
          </ArticleFeaturedWrapperItem>
          <ArticleFeaturedWrapperItem heading="Consistency and accessibility">
            The new system had a measurable impact. It reduced
            design-development handoff time and{" "}
            <strong>unified more than 100 screens</strong> under a single visual
            language base on the same UI components. In addition, we get{" "}
            <strong>AA level in accessibility</strong> for all the components in
            the library.
          </ArticleFeaturedWrapperItem>
        </ArticleGrid>
        <ArticleGrid>
          <ArticleImageBlock
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
            src="/projects/genesys-ui/img/button-component-page-2.png"
            height={443}
            alt="Storybook documentation for components"
          />
          <ArticleImageBlock
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
          Building a component library taught me that the real challenge lies
          not only in the code, but in maintaining alignment and communication
          across teams. The key to long-term success was{" "}
          <strong>documenting everything</strong> — from use cases to naming
          conventions — and keeping an open feedback.
        </ArticleParagraph>
        <ArticleParagraph>
          Looking ahead, the next steps focus on improving consistency across
          components — including prop naming, interfaces, hook usage, and
          internal structure. Another key goal is to{" "}
          <strong>phase out Styled Components</strong>
          in favor of a class-based styling approach powered by a custom PostCSS
          library.
        </ArticleParagraph>
      </ArticleSection>
    </Article>
  );
}
