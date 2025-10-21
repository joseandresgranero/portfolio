import { notFound } from "next/navigation";
import { Tag } from "@/app/components";
import {
  ArticleBackLink,
  ArticleCaption,
  ArticleHeading,
  ArticleList,
  ArticleParagraph,
  ArticleSection,
} from "@/app/components/Article";
import { ArticleHeader } from "@/app/components/Article";
import { projects } from "@/app/data";
import { IArticle } from "@/types/article";
import { Article } from "@/app/components/Article/Article";
import Image from "next/image";
import ProcessTimeline from "@/app/components/ProcessTimeLine";

export default function GernesysDesignSystem() {
  const project: IArticle | undefined = projects.find(
    (p: IArticle) => p.slug === "genesys-design-system"
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
      {/* PROBLEM ----------------------------------------------------------------------------- */}
      <ArticleSection heading="The Problem">
        <ArticleParagraph>
          Before the design system existed, the product ecosystem faced{" "}
          <strong>major inconsistencies</strong> — not only visual, but also in
          how users interacted with the platform. The same actions could be
          performed in multiple ways, using different components depending on
          where the user was in the product.
        </ArticleParagraph>
        <ArticleParagraph>
          Meanwhile, developers were building their own components and layouts
          for every new feature or enhancement, which significantly increased
          both development time and <strong>maintenance costs</strong>.
        </ArticleParagraph>
        <ArticleParagraph>
          To make things even more complex, the Professional Services team was
          continuously creating new, tailor-made vertical applications for
          specific clients.
        </ArticleParagraph>
        <ArticleParagraph>
          As a result, maintaining visual consistency, accessibility standards,
          and scalability across products had become almost impossible.
        </ArticleParagraph>
        <ArticleParagraph>
          That's when we decided to create a unified design system — not just as
          a visual framework, but as a <strong>strategic foundation</strong> to
          transform how Devo designed and built its products.
        </ArticleParagraph>
      </ArticleSection>
      <ArticleSection unlimitedWidth className="bg-[var(--projects-bg-color)]">
        <div className="grid md:grid-cols-2 grid-cols-1 grid-container gap-8 md:gap-16">
          <div>
            <Image
              src="/projects/design-system/img/alerts-creation-old.jpg"
              width={800}
              height={411}
              alt="Before design system UI example"
              className="border border-gray-200"
            />
            <ArticleCaption title="Before">
              This is the Alert Creation page before the design system...
            </ArticleCaption>
          </div>
          <div>
            <Image
              src="/projects/design-system/img/alert-rules.png"
              width={1200}
              height={625}
              alt="After design system UI example"
              className="border border-gray-200"
            />
            <ArticleCaption title="After">
              ...and this is the same section after the design system.
            </ArticleCaption>
          </div>
        </div>
      </ArticleSection>
      {/* GOAL AND METRICS ----------------------------------------------------------------------------- */}
      <ArticleSection heading="Goals & Success Metrics">
        <ArticleList noBullets>
          <li>
            <strong>Radically improve consistency</strong>
            <p>
              Establish a unified visual and interaction language to ensure
              coherence across all Devo products and touchpoints.
            </p>
          </li>
          <li>
            <strong>Accelerate design and development workflows</strong>
            <p>
              Reduce repetitive work by providing reusable, ready-to-implement
              components and design tokens.
            </p>
          </li>
          <li>
            <strong>Enable scalability</strong>
            <p>
              Build a flexible foundation that supports product growth and new
              feature development without visual or technical fragmentation.
            </p>
          </li>
          <li>
            <strong>
              Enhance collaboration between design and engineering
            </strong>
            <p>
              Create a shared source of truth where both teams can align quickly
              on decisions and implementation.
            </p>
          </li>
          <li>
            <strong>Ensure accessibility and usability standards</strong>
            <p>
              Integrate WCAG AA accessibility principles directly into
              components and documentation.
            </p>
          </li>
          <li>
            <strong>Strengthen Devo's brand identity</strong>
            <p>
              Translate the brand's visual language and values into a
              consistent, systematized digital experience.
            </p>
          </li>
        </ArticleList>
        <ArticleParagraph>
          We defined some metrics, but due to the limited size of our design
          team, we weren't able to conduct extensive testing or research to
          audit them. These were our success metrics:
        </ArticleParagraph>
        <ArticleList>
          <li>
            40% reduction in design & implementation <strong>time</strong>.
          </li>
          <li>
            90% of <strong>engineering teams</strong> actively using the design
            system.
          </li>
          <li>
            80% reduction in one-off or <strong>inconsistent</strong> UI
            components (excluding vertical applications).
          </li>
          <li>
            100% compliance with <strong>WCAG AA</strong> (excluding vertical
            applications).
          </li>
          <li>
            Designer-developer alignment <strong>satisfaction</strong>: {">"}
            8/10 (survey).
          </li>
          <li>
            90% component <strong>documentation</strong> completeness.
          </li>
        </ArticleList>
      </ArticleSection>
      {/* RESEARCH ----------------------------------------------------------------------------- */}
      <ArticleSection heading="Research & Audit">
        <ArticleParagraph>
          Once we started the creation process, we reviewed what other companies
          and established design systems were doing—Carbon, Material, Spectrum,
          etc.
        </ArticleParagraph>
        <ArticleParagraph>
          This <strong>benchmarking</strong> helped us refine the structure of
          our Storybook documentation and Figma system, prioritize components,
          organize them efficiently, and set best practices for accessibility
          and scalability.
        </ArticleParagraph>
        <ArticleParagraph>
          We also kept <strong>close communication with developers</strong> to
          understand their needs and technical constraints, and within the
          design team to align on workflows and daily challenges. This ensured
          the system truly served both teams, with a special focus on developers
          as the primary users.
        </ArticleParagraph>
        <ArticleParagraph>
          Finally,{" "}
          <strong>I conducted a thorough audit of the existing UI</strong> to
          identify visual and interaction inconsistencies. We inventoried
          existing components, removed duplicates, and spotted gaps, which
          helped us prioritize and establish a clear baseline for the design
          system.
        </ArticleParagraph>
      </ArticleSection>
      <ArticleSection
        unlimitedWidth
        className="bg-[var(--projects-bg-color)] flex flex-col gap-16"
      >
        <div className="grid md:grid-cols-2 grid-cols-1 grid-container gap-8 md:gap-16">
          <div>
            <Image
              src="/projects/design-system/img/secondary-tabs-old.png"
              width={800}
              height={621}
              alt="Before design system vertical tabs UI example"
              className="border border-gray-200"
            />
            <ArticleCaption title="Before">
              We inventoried the secondary vertical tabs, but found that their
              layout took up too much space, so we maintained the component but
              changing its structure.
            </ArticleCaption>
          </div>
          <div>
            <Image
              src="/projects/design-system/img/secondary-tabs.png"
              width={800}
              height={522}
              alt="After design system UI horizontal tabs example"
              className="border border-gray-200"
            />
            <ArticleCaption title="After">
              We didn't just inventory the components — we also adapted and
              refined them, removing those that were no longer needed. In this
              case, changing to an horizontal layout helped us to save space and
              improve usability.
            </ArticleCaption>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 grid-container gap-8 md:gap-16">
          <div>
            <Image
              src="/projects/design-system/img/design-system-home.png"
              width={800}
              height={522}
              alt="Design system Storybook docs home"
              className="border border-gray-200"
            />
            <ArticleCaption title="Documentation">
              The design system documentation was built in Storybook, following
              a structure inspired by other established systems — including
              principles, foundations, components, and patterns.
            </ArticleCaption>
          </div>
          <div>
            <Image
              src="/projects/design-system/img/marketplace-home.png"
              width={800}
              height={522}
              alt="Marketplace home"
              className="border border-gray-200"
            />
            <ArticleCaption title="Company oriented components">
              Our design system needed to be flexible enough to meet the needs
              of our teams, but not as open-ended as others — like Material or
              Carbon, for instance.
            </ArticleCaption>
          </div>
        </div>
      </ArticleSection>
      {/* FOUNDATIONS ----------------------------------------------------------------------------- */}
      <ArticleSection heading="Foundations">
        <ArticleParagraph>
          Every design system starts with a solid foundation.{" "}
          <strong>At its core are the design tokens</strong> — colors,
          typography, spacing, grids, shadows, and borders. These tokens act as
          a single source of truth, giving every component a consistent look and
          feel. By defining them first, we make sure the system is visually
          cohesive and easy to scale across products.
        </ArticleParagraph>
        <ArticleParagraph>
          Equally important are the principles and rules that guide how the
          system is used. We focus on accessibility, scalability, and
          maintaining the brand's visual identity. We established clear
          guidelines about:
        </ArticleParagraph>
        <ArticleList>
          <li>Color.</li>
          <li>Typography.</li>
          <li>Layout.</li>
          <li>Spatial system.</li>
          <li>Iconography.</li>
          <li>Elevation hierarchy.</li>
          <li>Shape and Radius.</li>
          <li>Content, voice, and tone.</li>
        </ArticleList>
      </ArticleSection>
      <ArticleSection
        unlimitedWidth
        className="bg-[var(--projects-bg-color)] grid md:grid-cols-2 grid-cols-1 grid-container items-stretch gap-8 md:gap-16"
      >
        <div>
          <Image
            src="/projects/design-system/img/design-tokens.png"
            width={800}
            height={441}
            alt="Example of design tokens"
            className="border border-gray-200"
          />
          <ArticleCaption title="Design tokens">
            Integrated directly into Figma through variables, allowing designers
            to apply them seamlessly within the design environment.
            Additionally, the tokens are exported in multiple formats —
            including CSS, SASS, JavaScript, and JSON — making them easily
            accessible for developers.
          </ArticleCaption>
        </div>
        <div>
          <Image
            src="/projects/design-system/img/palette-detail.png"
            width={800}
            height={441}
            alt="Example of color palette"
            className="border border-gray-200"
          />
          <ArticleCaption title="Color palettes">
            I built a comprehensive color palette that balances brand identity
            with accessibility. Each color was tested to ensure WCAG AA
            compliance, providing sufficient contrast for readability and
            usability. Additionally, the darkest colors in the palette meet AA
            standards when used on the lighter half of the palette, and vice
            versa.
          </ArticleCaption>
        </div>
        <div>
          <Image
            src="/projects/design-system/img/use-of-color.png"
            width={800}
            height={441}
            alt="Color usage by context table"
            className="border border-gray-200"
          />
          <ArticleCaption title="Color usage by context">
            I defined a table to guide the selection of color palettes based on
            context. Thoughtful color choices help users quickly recognize
            statuses, actions, and interactions
          </ArticleCaption>
        </div>
        <div>
          <Image
            src="/projects/design-system/img/typography-intro.png"
            width={800}
            height={453}
            alt="Design system Storybook docs home"
            className="border border-gray-200"
          />
          <ArticleCaption title="Typography">
            It helps us to correctly establish the visual hierarchy of a page,
            in addition to organizing information and serving as a guide for
            users while browsing the platform. Its correct use also generates a
            more powerful brand presence.
          </ArticleCaption>
        </div>
        <div>
          <Image
            src="/projects/design-system/img/variant-example.png"
            width={800}
            height={453}
            alt="Marketplace home"
            className="border border-gray-200"
          />
          <ArticleCaption title="Typographic variants">
            We use typo design tokens and themes to manage our typography. We
            have specific groups of typo tokens (font-size, font-weight,
            line-height, letter-spacing... etc.) to define our different
            typographic styles: headings, heros, caps, body... etc.
          </ArticleCaption>
        </div>
        <div>
          <Image
            src="/projects/design-system/img/layout.png"
            width={800}
            height={542}
            alt="Layout example"
            className="border border-gray-200"
          />
          <ArticleCaption title="Layout">
            The layout is composed of distinct regions that define our
            information architecture. Each region serves a specific purpose and
            contains key interactions — such as navigation, quick access to
            settings, datasets, or content.
          </ArticleCaption>
        </div>
        <div>
          <Image
            src="/projects/design-system/img/layout-variants.png"
            width={800}
            height={542}
            alt="Layout variants"
            className="border border-gray-200"
          />
          <ArticleCaption title="Main region layouts">
            The main region hosts each section's primary content. Built with the
            “Fluid” component and a twelve-column grid, it's the most dynamic
            area of the layout, while other regions remain consistent throughout
            the user journey.
          </ArticleCaption>
        </div>
        <div>
          <Image
            src="/projects/design-system/img/spatial-scales.png"
            width={800}
            height={633}
            alt="Spatial system scales"
            className="border border-gray-200"
          />
          <ArticleCaption title="Spatial system scales">
            I created a unified spatial system keeps our designs consistent and
            our communication clear. It simplifies decision-making and creates a
            predictable visual rhythm that feels balanced and intentional.
          </ArticleCaption>
        </div>
        <div>
          <Image
            src="/projects/design-system/img/sizing-typo.png"
            width={800}
            height={633}
            alt="Typography sizing scale"
            className="border border-gray-200"
          />
          <ArticleCaption title="Typography sizing scale">
            I defined a based on a 4pt baseline grid, line heights scale in 4pt
            increments. This system aligns component and layout scales with
            typography, creating a cohesive vertical rhythm.
          </ArticleCaption>
        </div>
        <div>
          <Image
            src="/projects/design-system/img/sizing-components.png"
            width={800}
            height={633}
            alt="Component sizing scale"
            className="border border-gray-200"
          />
          <ArticleCaption title="Component sizing scale">
            The main region hosts each section's primary content. Built with the
            “Fluid” component and a twelve-column grid, it's the most dynamic
            area of the layout, while other regions remain consistent throughout
            the user journey.
          </ArticleCaption>
        </div>
        <div>
          <Image
            src="/projects/design-system/img/icons-example.png"
            width={800}
            height={600}
            alt="Icons example"
            className="border border-gray-200"
          />
          <ArticleCaption title="Iconography">
            We built our icon set on top of Ionicons. Whenever we couldn't find
            a suitable icon, we designed a new one derived from the library to
            keep proportions and visual harmony consistent.
          </ArticleCaption>
        </div>
        <div>
          <Image
            src="/projects/design-system/img/elevation-hierarchy.png"
            width={800}
            height={500}
            alt="Elevation hierarchy"
            className="border border-gray-200"
          />
          <ArticleCaption title="Elevation hierarchy">
            Elevation marks the distance of elements from the background and
            arranges them along the z-axis. To do this, each elevation level is
            defined by a specific shadow that simulates the way in which natural
            light is projected on objects depending on the distance to them.
          </ArticleCaption>
        </div>
        <div>
          <Image
            src="/projects/design-system/img/elevation-levels.png"
            width={800}
            height={600}
            alt="Icons example"
            className="border border-gray-200"
          />
          <ArticleCaption title="Elevation levels">
            The different elevation levels available correspond to the different
            levels of importance with which we want to organize the components
            throughout the UI.
          </ArticleCaption>
        </div>
        <div>
          <Image
            src="/projects/design-system/img/radius.png"
            width={800}
            height={500}
            alt="Shape and radius"
            className="border border-gray-200"
          />
          <ArticleCaption title="Shape and radius">
            Rounded corners are used throughout the platform to differentiate
            the different families of UI components based on their anatomy,
            level of interaction... etc.
          </ArticleCaption>
        </div>
        <div>
          <Image
            src="/projects/design-system/img/voice-and-tone.png"
            width={800}
            height={500}
            alt="Voice and tone"
            className="border border-gray-200"
          />
          <ArticleCaption title="Voice and tone">
            Our voice defines how we communicate with users. While our voice
            stays consistent across all content, its tone adapts to each context
            and audience. Our voice is clear, informative, and relaxed. We use
            an informal style to write content that is both simple and
            instructive.
          </ArticleCaption>
        </div>
      </ArticleSection>
      {/* COMPONENTS ----------------------------------------------------------------------------- */}
      <ArticleSection heading="Components">
        <ArticleParagraph>
          We started by identifying the most common patterns in our product —
          the building blocks users interact with every day. I had to{" "}
          <strong>
            inventarize every way of doing things, every component
          </strong>{" "}
          created in the app. I also deleted or transformed not consistent or
          ineffective components and patterns. We defined a consistent set of
          components that could be reused and scaled across the platform.
        </ArticleParagraph>
        <ArticleParagraph>
          Each component went through <strong>several design iterations</strong>{" "}
          and feedback rounds with designers and developers. We refined
          behaviors, variants, and states to make them more intuitive and
          accessible. This process helped us simplify the system and make it
          feel cohesive at every level.
        </ArticleParagraph>
        <ArticleParagraph>
          To ensure consistency, we aligned Figma components with their coded
          counterparts.{" "}
          <strong>
            I took charge of bringing our Figma components to life in React
          </strong>{" "}
          for our components library, ensuring consistency between design and
          code across the library. Shared naming conventions and structure
          allowed both teams to work in sync, reducing friction and guaranteeing
          that what we designed matched exactly what users experienced.
        </ArticleParagraph>
      </ArticleSection>
      <ArticleSection
        unlimitedWidth
        className="bg-[var(--projects-bg-color)] flex flex-col gap-16"
      >
        <div className="grid md:grid-cols-2 grid-cols-1 grid-container gap-8 md:gap-16">
          <div>
            <Image
              src="/projects/design-system/img/components-overview.png"
              width={800}
              height={500}
              alt="UI components overview"
              className="border border-gray-200"
            />
            <ArticleCaption title="Figma and Storybook library">
              Overview of the component library showing buttons, badges,
              banners, progress bars... etc. Each component is implemented in
              React and TypeScript, with detailed documentation available in
              Storybook and Figma for designers and developers.
            </ArticleCaption>
          </div>
          <div>
            <Image
              src="/projects/design-system/img/anatomy.png"
              width={800}
              height={500}
              alt="Component anatomy example"
              className="border border-gray-200"
            />
            <ArticleCaption title="Component anatomy">
              Breakdown of a single component, highlighting its structure,
              spacing, and interactive elements. This ensures clarity and
              consistency when components are implemented across the system.
            </ArticleCaption>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 grid-container gap-8 md:gap-16">
          <div>
            <Image
              src="/projects/design-system/img/states-and-variants.png"
              width={800}
              height={500}
              alt="States and variants example"
              className="border border-gray-200"
            />
            <ArticleCaption title="States and variants">
              Illustration of the different states and variants of a component,
              showing how it should behave in different contexts. This helps
              maintain visual consistency and predictable user interactions.
            </ArticleCaption>
          </div>
          <div>
            <Image
              src="/projects/design-system/img/code-alignment.png"
              width={800}
              height={500}
              alt="Code alignment example"
              className="border border-gray-200"
            />
            <ArticleCaption title="Figma - Code Alignment">
              Highlights the connection between design and development. I
              translated Figma components into code, making sure the final
              product reflects the designers' intent and delivers a seamless
              experience to users.
            </ArticleCaption>
          </div>
          <div>
            <Image
              src="/projects/design-system/img/design-tokens-component.png"
              width={800}
              height={500}
              alt="Component design tokens example"
              className="border border-gray-200"
            />
            <ArticleCaption title="Design tokens in action">
              Example of how design tokens are applied to a button component,
              with different types — color background, color text, shape,
              spacing, sizing... etc.
            </ArticleCaption>
          </div>
        </div>
      </ArticleSection>
      {/* IMPLEMENTATION ----------------------------------------------------------------------------- */}
      <ArticleSection heading="Implementation & Collaboration">
        <ArticleParagraph>
          We focused on bringing design and code together seamlessly, ensuring
          that the components created in Figma were faithfully implemented in
          the product. Our stack included React and TypeScript for component
          development, while{" "}
          <strong>Storybook served as the central documentation hub</strong>. By
          integrating Storybook into our workflow, both designers and developers
          could visualize components, explore interaction states, and understand
          usage guidelines in a single, shared environment.
        </ArticleParagraph>
        <ArticleParagraph>
          To maintain consistency and alignment between design and development,
          we relied on{" "}
          <strong>
            design tokens, standardized naming conventions, and a structured
            review workflow
          </strong>
          . Every component went through pull requests, code reviews, and
          cross-checks with Figma designs, which helped catch inconsistencies
          early.
        </ArticleParagraph>
        <ArticleParagraph>
          Collaboration was central to the success of our design system.
          Designers and developers worked closely throughout the process,
          sharing feedback at every stage. I facilitated collaboration between
          design and development, making sure both teams understood each other's
          requirements. With the support of a frontend developer,{" "}
          <strong>I implemented the components</strong>, producing a library
          perfectly aligned with the design system.
        </ArticleParagraph>
      </ArticleSection>
      <ArticleSection
        unlimitedWidth
        className="bg-[var(--projects-bg-color)] flex flex-col gap-16"
      >
        <div className="grid md:grid-cols-2 grid-cols-1 grid-container gap-8 md:gap-16">
          <div>
            <video
              autoPlay
              loop
              muted
              playsInline
              width="100%"
              className="border border-gray-200"
            >
              <source
                src="/projects/design-system/video/sb-ds-button-detail.webm"
                type="video/webm"
              />
              Tu navegador no soporta video HTML5 or webm.
            </video>
            <ArticleCaption title="Design system component Overview">
              A Storybook example of Button component page, showing some general
              use information, different states and variants. This documentation
              helps designers and developers quickly understand how the
              component behaves, and how each variant fits within the design
              system.
            </ArticleCaption>
          </div>
          <div>
            <Image
              src="/projects/design-system/img/button-props-table.png"
              width={800}
              height={500}
              alt="Component Props Table"
              className="border border-gray-200"
            />
            <ArticleCaption title="Props Table">
              A clear and structured list of the component's properties, such as
              size, variant, or onClick. Each prop is documented with its type,
              default value, and description, allowing developers to implement
              the component correctly without guesswork.
            </ArticleCaption>
          </div>
          <div>
            <Image
              src="/projects/design-system/img/button-hierarchy.png"
              width={800}
              height={605}
              alt="Button usage guidelines"
              className="border border-gray-200"
            />
            <ArticleCaption title="Usage Guidelines">
              Notes describing when and how to use the component within the
              interface. These guidelines cover spacing, alignment,
              accessibility, and tone of interaction, ensuring a consistent user
              experience across the product.
            </ArticleCaption>
          </div>
          <div>
            <Image
              src="/projects/design-system/img/anatomy-2.png"
              width={800}
              height={500}
              alt="Figma docs example"
              className="border border-gray-200"
            />
            <ArticleCaption title="Figma - Code Alignment">
              A visual reference from Figma that complements the coded
              documentation. It shows the component's anatomy, tokens applied,
              and interaction patterns, helping bridge the gap between design
              intent and technical implementation.
            </ArticleCaption>
          </div>
          <div className="flex-[0_1_800px]">
            <Image
              src="/projects/design-system/img/button-tokens-table.png"
              width={800}
              height={500}
              alt="Component design tokens documentation example"
              className="border border-gray-200"
            />
            <ArticleCaption title="Design tokens in docs">
              Every component documents the design tokens applied to it, making
              it easy for both designers and developers to understand how the
              visual style is constructed and how to maintain consistency when
              using or modifying the component.
            </ArticleCaption>
          </div>
        </div>
      </ArticleSection>
      <ArticleSection heading="Adoption & Rollout">
        <ArticleParagraph>
          I led the rollout of the design system across teams through{" "}
          <strong>
            internal demos, documentation updates, and onboarding sessions
          </strong>
          . I collaborated closely with product and engineering leads to ensure
          a smooth integration into existing workflows.
        </ArticleParagraph>
        <ArticleParagraph>
          Continuous <strong>feedback from designers and developers</strong>{" "}
          guided each iteration, helping us refine the system based on real
          product needs. It was not easy, but one year after the design system
          was launched, we successfully onboarded all the main frontend teams on
          the company.
        </ArticleParagraph>
      </ArticleSection>
      <ArticleSection heading="Impact">
        <ArticleParagraph>
          The design system delivered measurable improvements across design and
          development workflows. By standardizing components, tokens, and
          interaction patterns, we significantly{" "}
          <strong>reduced inconsistencies</strong> and visual bugs across
          products. Designers and developers spent less time aligning details
          during handoffs, which streamlined collaboration and{" "}
          <strong>accelerated delivery</strong>. Implementation time per
          component decreased by nearly 40%, allowing teams to focus on solving
          real product challenges instead of re-creating UI elements.
        </ArticleParagraph>
      </ArticleSection>
      <ArticleSection unlimitedWidth className="bg-[var(--projects-bg-color)]">
        <ProcessTimeline />
      </ArticleSection>
      <ArticleSection>
        <ArticleParagraph>
          Beyond efficiency, the system brought coherence and clarity to the
          product experience. Over <strong>100 screens were unified</strong>{" "}
          under a single design language, and team satisfaction increased as the
          process became more predictable and scalable. Continuous feedback
          confirmed that the system not only improved quality but also
          strengthened collaboration between design and engineering — becoming a
          core asset for the company's long-term growth.
        </ArticleParagraph>
      </ArticleSection>
      <ArticleSection
        unlimitedWidth
        className="bg-[var(--projects-bg-color)] flex flex-col gap-16"
      >
        <div className="grid md:grid-cols-2 grid-cols-1 grid-container gap-8 md:gap-16">
          <div>
            <Image
              src="/projects/design-system/img/alerts-delivery-methods-old.png"
              width={800}
              height={426}
              alt="Delivery methods before design system"
              className="border border-gray-200"
            />
            <ArticleCaption title="Before">
              Before the design system, the Delivery Methods page suffered from
              visual inconsistency — excessive icons, uneven spacing,
              unstructured data layout, and colors that didn't align with the
              brand. Accessibility issues and weak hierarchy made the interface
              hard to read and navigate.
            </ArticleCaption>
          </div>
          <div>
            <Image
              src="/projects/design-system/img/alerts-delivery-methods.png"
              width={800}
              height={506}
              alt="Delivery methods after design system"
              className="border border-gray-200"
            />
            <ArticleCaption title="After">
              This is the same section after the implementation of the design
              system. The layout was restructured for clarity, with consistent
              spacing, a unified icon set, and a color palette that reflects the
              brand. Accessibility improvements and a clear hierarchy enhance
              readability and user navigation.
            </ArticleCaption>
          </div>
          <div>
            <Image
              src="/projects/design-system/img/home-old.png"
              width={800}
              height={460}
              alt="Home before design system"
              className="border border-gray-200"
            />
            <ArticleCaption title="Before">
              This is the Home page before the design system was applied.
            </ArticleCaption>
          </div>
          <div>
            <Image
              src="/projects/design-system/img/home.png"
              width={800}
              height={459}
              alt="Home after design system"
              className="border border-gray-200"
            />
            <ArticleCaption title="After">
              This is the Home page after the design system was applied: better
              space rithym, better color contrast, usage of brand, more
              comfortable palettes... etc.
            </ArticleCaption>
          </div>
          <div>
            <Image
              src="/projects/design-system/img/loxcope-old.png"
              width={800}
              height={519}
              alt="Data search before the design system"
              className="border border-gray-200"
            />
            <ArticleCaption title="Before">
              This is the 'Data search' page before the design system was
              applied.
            </ArticleCaption>
          </div>
          <div>
            <Image
              src="/projects/design-system/img/loxcope.png"
              width={800}
              height={569}
              alt="Data search after the design system"
              className="border border-gray-200"
            />
            <ArticleCaption title="After">
              This is the 'Data search' page after the design system was
              applied: better use of typography, cleaner renderization of the
              table data, improved hierarchy... etc.
            </ArticleCaption>
          </div>
          <div>
            <Image
              src="/projects/design-system/img/dark-theme-loxcope.png"
              width={800}
              height={569}
              alt="Dark theme after the design system"
              className="border border-gray-200"
            />
            <ArticleCaption title="Dark theme">
              One of the most impactful changes enabled by the design system and
              design tokens was the introduction of a dark theme. It enhances
              usability in low-light environments and reduces eye strain for
              users who prefer darker interfaces.
            </ArticleCaption>
          </div>
          <div>
            <Image
              src="/projects/design-system/img/dark-theme-delivery.png"
              width={800}
              height={569}
              alt="Dark theme after the design system"
              className="border border-gray-200"
            />
          </div>
        </div>
      </ArticleSection>
      <ArticleSection heading="Learnings and Next Steps">
        <ArticleParagraph>
          Building the Genesys Design System was a transformative experience
          that reinforced the importance of collaboration between design and
          development. One key learning was the value of{" "}
          <strong>early and continuous feedback</strong> from both teams, which
          helped us refine components and ensure they met real-world needs.
        </ArticleParagraph>
        <ArticleParagraph>
          This is an <strong>ongoing journey</strong>. The next steps involve
          covering more components documentation, edge cases, and patterns — the
          Storybook{" "}
          <strong>documentation needs to be more complete and detailed</strong>,
          because I estimate we only covers the 40% of the components at this
          point. We also need a more attactive home and overview pages, to make
          it easier for users to navigate and find the information they need.
        </ArticleParagraph>
      </ArticleSection>
    </Article>
  );
}
