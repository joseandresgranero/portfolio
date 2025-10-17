import { notFound } from "next/navigation";
import { Tag } from "@/app/components";
import {
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
        <div className="grid sm:grid-cols-2 grid-cols-1 grid-container gap-8 md:gap-16">
          <div>
            <Image
              src="/projects/design-system/img/alerts-creation-old.jpg"
              width={1200}
              height={617}
              alt="Before design system UI example"
              className="border border-gray-200"
            />
            <div className="text-sm mt-2">
              <strong>BEFORE:</strong> this is the Alert Creation page before
              the design system.
            </div>
          </div>
          <div>
            <Image
              src="/projects/design-system/img/alerts-creation.png"
              width={1200}
              height={617}
              alt="After design system UI example"
              className="border border-gray-200"
            />
            <div className="text-sm mt-2">
              <strong>AFTER:</strong> and this is the same section after the
              design system.
            </div>
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
          Show your analytical process before building. UI audit: review of all
          existing components and styles. Designer and developer interviews to
          understand pain points. Benchmarking against other systems (Material,
          Polaris, Carbon). Identify core inconsistencies or inefficiencies. 📸
          Tip: Use screenshots or visual comparisons to show “before” states.
        </ArticleParagraph>
        <ArticleParagraph>
          Una vez iniciado el proceso de creación, decidimos revisar lo que
          hacían otras compañías y grandes sistemas de diseño ya instaurados:
          Carbon, Material, Spectrum... etc.
        </ArticleParagraph>
        <ArticleParagraph>
          En base a todo ese benchmarking pudimos afinar mejor la estrutura de
          nuestra documentación en Storybook y nuestro sistema en Figma, elegir
          qué components debíamos priorizar y cómo organizarlos, y definir
          mejores prácticas para accesibilidad y escalabilidad.
        </ArticleParagraph>
        <ArticleParagraph>
          Por otro lado, mantuvimos estrecha conversación con los
          desarrolladores para entender sus necesidades y limitaciones técnicas,
          y entre nosotros mismos en el equipo de diseño para conocer los flujos
          de trabajo y retos diarios. Esto nos permitió crear un sistema que
          realmente respondiera a las necesidades de ambos equipos. Sobre todo,
          nos enfocamos en als necesidades de los desarrolladores, ya que eran
          los principales usuarios del sistema.
        </ArticleParagraph>
        <ArticleParagraph>
          Del mismo modo, realizamos una auditoría exhaustiva de la UI existente
          para identificar inconsistencias visuales y de interacción.
          Básicamente, se hizo un inventario de los componentes que ya se usaban
          en la aplicación, desechando duplicidades y detectando qué carencias
          existína. Esto nos ayudó a priorizar qué componentes debíamos abordar
          primero y a establecer una línea base clara para el diseño del
          sistema.
        </ArticleParagraph>
      </ArticleSection>
      <ArticleSection heading="Foundations">
        Lay the groundwork of your system. Design tokens: color, typography,
        spacing, grid, shadows, borders. Principles: accessibility, scalability,
        visual identity. Naming conventions and variant structures.
        Documentation: Figma styles, usage guidelines, component anatomy.
        Include visual examples — e.g., your color palette, typography scale, or
        spacing system.
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
