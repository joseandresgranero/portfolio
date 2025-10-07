import { notFound } from "next/navigation";
import { Tag } from "@/app/components";
import { ArticleSection } from "@/app/components/Article";
import { ArticleHeader } from "@/app/components/Article";
import { projects } from "@/app/data";
import { IArticle } from "@/types/article";
import { Article } from "@/app/components/Article/Article";

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
        What was happening before (visual inconsistencies, duplicated
        components, lack of guidelines). Why this created friction for users,
        designers, and engineers. The business or product impact of not having a
        system. “Before Genesys UI, every team built UI components
        independently. This caused inconsistent experiences, slow releases, and
        higher maintenance costs.”
      </ArticleSection>
      <ArticleSection heading="Goals & Success Metrics">
        Define clear objectives. Establish a unified design language. Speed up
        design and development workflows. Improve consistency and accessibility.
        Strengthen collaboration between design and engineering. Define metrics
        to measure success (adoption rate, time saved, bug reduction, etc.).
      </ArticleSection>
      <ArticleSection heading="Research & Audit">
        Show your analytical process before building. UI audit: review of all
        existing components and styles. Designer and developer interviews to
        understand pain points. Benchmarking against other systems (Material,
        Polaris, Carbon). Identify core inconsistencies or inefficiencies. 📸
        Tip: Use screenshots or visual comparisons to show “before” states.
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
