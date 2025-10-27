import { notFound } from "next/navigation";

import type { IArticle } from "@/types/article";
import { projects } from "@/app/data";

import {
  Article,
  ArticleFeaturedWrapper,
  ArticleFeaturedWrapperItem,
  ArticleGrid,
  ArticleImageBlock,
  ArticleList,
  ArticleParagraph,
  ArticleSection,
  Link,
} from "@/app/components";

export default function GenesysDesignSystem() {
  const project: IArticle | undefined = projects.find(
    (p: IArticle) => p.slug === "genesys-design-tokens"
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
          Once the design system was launched, one thing became immediately
          clear: our designs looked great in Figma, but translating them into
          code was messy. Colors, typography, and spacing were implemented
          differently across platforms, which slowed down development and caused
          constant mismatches.
        </ArticleParagraph>
        <ArticleParagraph>
          I decided to tackle this by{" "}
          <strong>building a design token library</strong> with the huge help of
          a highly enthusiastic frontend developer. Using a structured JSON as
          the foundation, the idea was simple: define all the visual styles once
          and let automation handle the rest. With Style Dictionary, we
          generated CSS, SASS, JS, and even Figma variables directly from a
          single source, making sure our brand looked consistent everywhere.
        </ArticleParagraph>
      </ArticleSection>
      {/* CHALLENGE ----------------------------------------------------------------------------- */}
      <ArticleSection heading="The Challenge">
        <ArticleParagraph>
          Before the tokens library, every design outside the UI components
          library (already integrated with design tokens) forced developers to
          pick directly the values and manually translate it into code — often
          introducing small discrepancies along the way. It was{" "}
          <strong>time-consuming, error-prone, and frustrating</strong> for
          everyone involved.
        </ArticleParagraph>
        <ArticleParagraph>
          I realized we needed a <strong>single source of truth</strong>. Not
          just a document, but a system where any change would ripple across
          every platform automatically. The challenge was balancing flexibility
          for designers with reliability for developers — a system that worked
          seamlessly across app, code, and design tools.
        </ArticleParagraph>
      </ArticleSection>
      <ArticleSection unlimitedWidth className="bg-[var(--projects-bg-color)]">
        <ArticleGrid>
          <ArticleImageBlock
            src="/projects/genesys-design-tokens/img/loxcope.png"
            height={500}
            alt="A whole app based on design tokens"
            title="A whole app based on design tokens"
            description="In the 'Data Search' section, every color, font, and spacing detail is driven by the design token system — no manual styling involved."
          />
        </ArticleGrid>
      </ArticleSection>
      {/* PROCESS ----------------------------------------------------------------------------- */}
      <ArticleSection heading="Process & Collaboration">
        <ArticleParagraph>
          We built a living <strong>documentation site in Storybook</strong>,
          where every design token was neatly organized, previewed, and
          explained. There is a table with advanced search, where developers can
          filter by format, tier, category, scheme... etc. and every result in
          the table has a preview whenever it's possible.
        </ArticleParagraph>
      </ArticleSection>
      {/* DEVELOPMENT APPROACH ----------------------------------------------------------------------------- */}
      <ArticleSection heading="Development Approach">
        <ArticleParagraph>
          The first step was{" "}
          <strong>defining the structure of our tokens</strong> in JSON. I
          grouped them into categories like colors, typography, spacing,
          elevation... thinking about global-alias values and component-level
          details. The goal was clarity: anyone on the team should be able to
          understand and use the tokens without confusion.
        </ArticleParagraph>
        <ArticleParagraph>
          The semantics and naming are decissive if we want the library to be
          easy to use. We defined three levels of tokens — global, alias and
          component:
        </ArticleParagraph>
        <ArticleList>
          <li>
            <strong>Global</strong>: the basic value without any semantic:{" "}
            <code className="text-lg">global-color-palette-ui-error-03</code>.
          </li>
          <li>
            <strong>Alias</strong>: the global values reused and renamed with
            semantic, but not connecting with the component:{" "}
            <code className="text-lg">
              alias-color-background-feedback-error-strong
            </code>
            .
          </li>
          <li>
            <strong>Component</strong>: the alias values reused and renamed with
            semantic, and connecting with the component:{" "}
            <code className="text-lg">
              cmp-button-color-background-error-disabled
            </code>
            .
          </li>
        </ArticleList>
        <ArticleParagraph>
          Next came <strong>automation. Using Style Dictionary</strong>, we
          could take that single JSON file and generate multiple outputs: CSS
          custom properties, SASS variables, JS constants, and Figma variables.
          Suddenly, updates became effortless. Changing a single color or font
          size would automatically propagate everywhere — a huge relief for both
          designers and developers.
        </ArticleParagraph>
        <ArticleParagraph>
          The project is based in two different libraries:
        </ArticleParagraph>
        <ArticleList>
          <li>
            <Link
              href="https://github.com/genesys-ui/theme-generator"
              title="Go to the Github repository (new tab)"
            >
              theme-generator
            </Link>
            : The base in JSON with the scripts to crate a cli which is used in
            the other library with the generated theme.
          </li>
          <li>
            <Link
              href="https://github.com/genesys-ui/theme-devo"
              title="Go to the Github repository (new tab)"
            >
              theme-devo
            </Link>
            : the generated theme used for Devo.
          </li>
        </ArticleList>
      </ArticleSection>
      <ArticleSection
        unlimitedWidth
        className="bg-[var(--projects-bg-color)] !mb-0"
      >
        <ArticleGrid columns={1}>
          <ArticleImageBlock
            src="/projects/genesys-design-tokens/img/tokens-namespace.png"
            width={1400}
            height={240}
            alt="Main naming conventions for tokens"
            title="Main naming conventions"
            description="There is a clear and logical naming for defining tokens:
            always the same structure and order of each piece of the whole name: namespace - object - base - modifier."
          />
          <ArticleImageBlock
            src="/projects/genesys-design-tokens/img/tokens-category-properties.png"
            width={1400}
            height={339}
            alt="Main naming conventions for tokens"
            title="Category values"
            description="This is an scheme with the available properties defined for each category:
            color - background, text, border, fill... etc. as instance."
          />
          <ArticleImageBlock
            src="/projects/genesys-design-tokens/img/tokens-name-examples.png"
            width={1400}
            height={339}
            alt="Main naming conventions for tokens"
            title="Different types naming"
            description="These are clear examples fo how the name of the tokens 
            are structured: namespace (alias and cmp type) - object (group, component and element)
             - base (category, concept and property) - modifier (variant and scale)."
          />
        </ArticleGrid>
        <ArticleGrid>
          <ArticleImageBlock
            src="/projects/genesys-design-tokens/img/tokens-naming-order.png"
            width={1024}
            height={746}
            alt="Naming order for tokens"
            title="Naming order"
            description="The order of these blocks is always the same. What changes is which blocks are 
            used together within each token. Some naming blocks are mutually exclusive. For instance, 
            if a token includes a group or component block (with or without an element), it can't include 
            a concept block at the same time. This rule keeps naming consistent, avoids conflicts,
            and makes tokens easier to maintain as the system grows."
          />
        </ArticleGrid>
        <ArticleGrid>
          <ArticleImageBlock
            src="/projects/genesys-design-tokens/img/tokens-format-1.png"
            width={1024}
            height={746}
            alt="Naming depending on format for tokens"
            title="Naming by format"
            description="The tokens are defined in JSON using camelCase for multi-word names. 
            They are then exported to SASS (lowercase, prefixed with '$', and separated by hyphens), CSS (same format but prefixed with '--'), and JS (as object values accessed with dot notation)."
          />
          <ArticleImageBlock
            src="/projects/genesys-design-tokens/img/tokens-format-2.png"
            width={1024}
            height={746}
            alt="Naming depending on format for tokens"
          />
        </ArticleGrid>
      </ArticleSection>
      {/* IMPACT & OUTCOMES ----------------------------------------------------------------------------- */}
      <ArticleFeaturedWrapper heading="Impact & Outcomes">
        <ArticleGrid columns={3}>
          <ArticleFeaturedWrapperItem heading="Single source of truth">
            The impact was immediate. Design and development finally spoke the
            same language. A single change in the token file would update{" "}
            <strong>
              web styles, React components, and Figma variables all at once
            </strong>
            .
          </ArticleFeaturedWrapperItem>
          <ArticleFeaturedWrapperItem heading="Cohesion">
            Beyond efficiency, the library created a stronger sense of cohesion
            across our products. <strong>Our interface feels unified</strong>.
          </ArticleFeaturedWrapperItem>
          <ArticleFeaturedWrapperItem heading="Scalability">
            It is easier than ever to <strong>scale the design system</strong>{" "}
            as new features and platforms were added.
          </ArticleFeaturedWrapperItem>
        </ArticleGrid>
        <ArticleGrid>
          <ArticleImageBlock
            inverted
            src="/projects/genesys-design-tokens/img/tokens-sb-doc-search.png"
            height={432}
            alt="Storybook documentation for tokens"
            title="Storybook documentation for tokens"
            description="The Storybook documentation is built around a searchable table that allows
            designers and developers to filter tokens by tier, schema, format, and more.
            Whenever possible, it also provides live previews, making it easy for teams to quickly 
            find and understand the tokens they need."
          />
          <ArticleImageBlock
            inverted
            src="/projects/genesys-design-tokens/img/token-outputs.png"
            height={432}
            alt="Tokens output example"
            title="Different outputs for tokens"
            description="These are four different output format examples: CSS, JS, JSON and SASS. 
            The original source is in JSON, but Style Dictionay also generates a JSON output with a info set of every token."
          />
        </ArticleGrid>
      </ArticleFeaturedWrapper>
      {/* LEARNINGS & NEXT STEPS  ----------------------------------------------------------------------------- */}
      <ArticleSection heading="Learnings & Next Steps">
        <ArticleParagraph>
          Working on this project taught me how powerful it is to think of
          design as data. By structuring our styles as tokens, we could{" "}
          <strong>
            bridge the gap between creative decisions and technical
            implementation
          </strong>
          , saving time and reducing errors. I also learned that clear naming
          and documentation are critical — a system is only as good as how easy
          it is for others to understand and use.
        </ArticleParagraph>
        <ArticleParagraph>
          Next, we're working on an interface where designers can simply input a
          few values — like brand colors, typography, spacing scales, and fonts
          — and the <strong>system automatically generates a new theme</strong>,
          making style updates fast, consistent, and scalable. Specially
          interesting for client customizations.
        </ArticleParagraph>
      </ArticleSection>
    </Article>
  );
}
