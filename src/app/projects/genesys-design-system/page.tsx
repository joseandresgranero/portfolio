import { notFound } from "next/navigation";
import { Tag } from "@/app/components";
import {
  ArticleBackLink,
  ArticleCaption,
  ArticleList,
  ArticleParagraph,
  ArticleSection,
} from "@/app/components/Article";
import { ArticleHeader } from "@/app/components/Article";
import { projects } from "@/app/data";
import { IArticle } from "@/types/article";
import { Article } from "@/app/components/Article/Article";
import Image from "next/image";

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
    >
      <ArticleSection heading="The Problem">
        <ArticleParagraph>
          Before the design system existed, the product ecosystem faced major
          inconsistencies — not only visual, but also in how users interacted
          with the platform. The same actions could be performed in multiple
          ways, using different components depending on where the user was in
          the product.
        </ArticleParagraph>
        <ArticleParagraph>
          Meanwhile, developers were building their own components and layouts
          for every new feature or enhancement, which significantly increased
          both development time and maintenance costs.
        </ArticleParagraph>
        <ArticleParagraph>
          To make things even more complex, the Professional Services team was
          continuously creating new, tailor-made vertical applications for
          specific clients.
        </ArticleParagraph>
        <ArticleParagraph>
          As a result, maintaining visual consistency, accessibility standards,
          and scalability across products had become almost impossible.
        </ArticleParagraph>{" "}
        <ArticleParagraph>
          That’s when we decided to create a unified design system — not just as
          a visual framework, but as a strategic foundation to transform how
          Devo designed and built its products.
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
              src="/projects/design-system/img/alerts-creation.png"
              width={800}
              height={411}
              alt="After design system UI example"
              className="border border-gray-200"
            />
            <ArticleCaption title="After">
              ...and this is the same section after the design system.
            </ArticleCaption>
          </div>
        </div>
      </ArticleSection>
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
              Translate the brand’s visual language and values into a
              consistent, systematized digital experience.
            </p>
          </li>
        </ArticleList>
        <ArticleParagraph>
          We defined some metrics, but due to the limited size of our design
          team, we weren’t able to conduct extensive testing or research to
          audit them. These were our success metrics:
        </ArticleParagraph>
        <ArticleList>
          <li>40% reduction in design & implementation time.</li>
          <li>90% of engineering teams actively using the design system.</li>
          <li>
            80% reduction in one-off or inconsistent UI components (excluding
            vertical applications).
          </li>
          <li>
            100% compliance with WCAG AA (excluding vertical applications).
          </li>
          <li>
            Designer–developer alignment satisfaction: {">"}8/10 (survey).
          </li>
          <li>90% component documentation completeness.</li>
        </ArticleList>
      </ArticleSection>
      <ArticleSection heading="Research & Audit">
        <ArticleParagraph>
          Once we started the creation process, we reviewed what other companies
          and established design systems were doing—Carbon, Material, Spectrum,
          etc.
        </ArticleParagraph>
        <ArticleParagraph>
          This benchmarking helped us refine the structure of our Storybook
          documentation and Figma system, prioritize components, organize them
          efficiently, and set best practices for accessibility and scalability.
        </ArticleParagraph>
        <ArticleParagraph>
          We also kept close communication with developers to understand their
          needs and technical constraints, and within the design team to align
          on workflows and daily challenges. This ensured the system truly
          served both teams, with a special focus on developers as the primary
          users.
        </ArticleParagraph>
        <ArticleParagraph>
          Finally, we conducted a thorough audit of the existing UI to identify
          visual and interaction inconsistencies. We inventoried existing
          components, removed duplicates, and spotted gaps, which helped us
          prioritize and establish a clear baseline for the design system.
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
              width={1200}
              height={617}
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
      <ArticleSection heading="Foundations">
        <ArticleParagraph>
          Every design system starts with a solid foundation. At its core are
          the design tokens — colors, typography, spacing, grids, shadows, and
          borders. These tokens act as a single source of truth, giving every
          component a consistent look and feel. By defining them first, we make
          sure the system is visually cohesive and easy to scale across
          products.
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
          <li>Surface shape.</li>
          <li>Content, voide, and tone.</li>
        </ArticleList>
      </ArticleSection>
      <ArticleSection
        unlimitedWidth
        className="bg-[var(--projects-bg-color)] flex flex-col gap-16"
      >
        <div className="grid md:grid-cols-2 grid-cols-1 grid-container gap-8 md:gap-16">
          <div>
            <Image
              src="/projects/design-system/img/palette-detail.png"
              width={800}
              height={441}
              alt="Example of color palette"
              className="border border-gray-200"
            />
            <ArticleCaption title="Color palettes">
              A comprehensive color palette that balances brand identity with
              accessibility. Each color was tested to ensure WCAG AA compliance,
              providing sufficient contrast for readability and usability.
              Additionally, the darkest colors in the palette meet AA standards
              when used on the lighter half of the palette, and vice versa.
            </ArticleCaption>
          </div>
          <div>
            <Image
              src="/projects/design-system/img/use-of-color.png"
              width={800}
              height={522}
              alt="Color usage by context table"
              className="border border-gray-200"
            />
            <ArticleCaption title="Color usage by context">
              A table which helps to decide which color palettes to use in the
              app, depending on the context of the element. Well-chosen colors
              help users to identify statuses, actions, and interactions.
            </ArticleCaption>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 grid-container gap-8 md:gap-16">
          <div>
            <Image
              src="/projects/design-system/img/typography-intro.png"
              width={800}
              height={522}
              alt="Design system Storybook docs home"
              className="border border-gray-200"
            />
            <ArticleCaption title="Typography">
              The design system documentation was built in Storybook, following
              a structure inspired by other established systems — including
              principles, foundations, components, and patterns.
            </ArticleCaption>
          </div>
          <div>
            <Image
              src="/projects/design-system/img/variant-example.png"
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
      <ArticleSection heading="Components">
        Describe how you designed and standardized the key components. How you
        identified reusable patterns. Design iterations and feedback cycles.
        Handling states, variants, and responsive behavior. Ensuring alignment
        between Figma and code. 📸 Add visuals of components (buttons, inputs,
        modals) with annotations.
      </ArticleSection>
      <ArticleSection heading="Implementation & Collaboration">
        Highlight how design and code came together. Stack: React + TypeScript +
        Storybook. Design–dev sync process: tokens, naming, pull requests,
        review workflow. Version control, npm publishing, or CI/CD setup.
        Example: components/ ├─ Button/ ├─ Input/ ├─ Modal/ └─ Theme/ Show a
        Storybook screenshot or documentation snippet — recruiters love this.
      </ArticleSection>{" "}
      <ArticleSection heading="Adoption & Rollout">
        Explain how the system was introduced across teams. Internal
        communication and demos. Migration of existing products. Training
        sessions or documentation updates. Feedback loops and improvement
        cycles. “We onboarded 4 teams in the first quarter, with continuous
        feedback from designers and engineers.”
      </ArticleSection>
      <ArticleSection heading="Impact">
        Demonstrate real value and outcomes. Time saved in design/dev handoffs.
        Reduction in inconsistencies or visual bugs. Increased team satisfaction
        or adoption metrics. Business impact if measurable. 📈 Example:
        “Implementation time per component decreased by 40%. Over 120 screens
        unified under a single design language.”
      </ArticleSection>{" "}
      <ArticleSection heading="Learnings and Next Steps">
        Demonstrate real value and outcomes. Time saved in design/dev handoffs.
        Reduction in inconsistencies or visual bugs. Increased team satisfaction
        or adoption metrics. Business impact if measurable. 📈 Example:
        “Implementation time per component decreased by 40%. Over 120 screens
        unified under a single design language.”
      </ArticleSection>
      <ArticleSection heading="Presentation tips">
        Use large visuals and minimal text. Include before/after comparisons.
        Show process + outcome, not just final screens. Clarify your specific
        contribution if it was a team effort. End with a clean “Impact” summary
        — recruiters love measurable results.
      </ArticleSection>
    </Article>
  );
}
