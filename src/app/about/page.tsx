import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import HeroSection from "../components/HeroSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { Article } from "../components/Article/Article";
import {
  ArticleHeader,
  ArticleParagraph,
  ArticleSection,
} from "../components/Article";

export default function About() {
  return (
    <>
      <div className="flex items-center gap-30 h-[calc(100vh-var(--header-height))] max-h-[520px]">
        <div className="px-20 py-25 flex-1">
          <ArticleSection
            heading="About me"
            headingTag="h1"
            headingSpacing="mb-12"
          >
            <ArticleParagraph>
              I'm a <strong>Product designer</strong> from Salamanca (Spain).
              I've been working on design for over 15 years — beginning with
              editorial and branding work, later transitioning to web projects,
              and the last seven years focusing on product design.
            </ArticleParagraph>
            <ArticleParagraph>
              Beyond design, I enjoy so many things — sports, music, books,
              comics, movies, TV shows, video games, traveling, painting
              watercolors... and spending time with my family (and my monkey,
              obviously &#x1F600;).
            </ArticleParagraph>
          </ArticleSection>
        </div>
        <div className="h-full relative">
          <div className="h-full relative overflow-hidden flex-1 after:content-[''] after:absolute after:inset-0 after:bg-[#273469] after:mix-blend-exclusion">
            <img
              src="/assets/img/about.jpg"
              alt="Profile about image"
              className="object-cover object-center max-w-[none] h-full w-full"
              style={{
                filter: "grayscale(80%) brightness(1.1) contrast(1.3)",
              }}
            />
          </div>
          <div className="text-sm mt-3">I’m the one underneath</div>
        </div>
      </div>
      <Article hideBackLink>
        <ArticleSection heading="Professional profile">
          <ArticleParagraph>
            Product designer experienced in complex digital products,
            specializing in scalable design systems, accessibility, and reusable
            component development.
          </ArticleParagraph>
          <ArticleParagraph>
            Expert in prototyping with Figma, design systems, HTML5, CSS3/SASS,
            design tokens, and responsive design. I lead projects end-to-end,
            from UX research to front-end development, with a strong focus on
            visual consistency, performance, and user experience. Experienced
            leading teams and setting design standards in Agile environments.
          </ArticleParagraph>
        </ArticleSection>
        <ArticleSection heading="Work experience">
          <ArticleSection
            heading="Product Designer · UX/UI Architect"
            headingTag="h3"
            headingSize="h4"
            append="Devo"
            lead="From July 2018 to September 2025 / Madrid - remote"
          >
            <ul className="text-lg list-outside pl-4 flex flex-col gap-2 list-disc text-gray-600">
              <li>
                Design and development of the main interface for Devo’s data
                analytics platform.
              </li>
              <li>
                Co-creator of the Design System: React components library,
                system documentation using Storybook, style library based on
                SASS, custom icon library and design tokens system.
              </li>
              <li>
                Participation in UX processes: wireframing, prototyping, user
                validation... etc.
              </li>
              <li>
                Focus on accessibility, responsive design, and scalability.
              </li>
              <li>
                Tools: Figma, GitLab CI/CD, GitHub, Storybook, Jira and
                Confluence.
              </li>
            </ul>
          </ArticleSection>
          <ArticleParagraph>
            Expert in prototyping with Figma, design systems, HTML5, CSS3/SASS,
            design tokens, and responsive design. I lead projects end-to-end,
            from UX research to front-end development, with a strong focus on
            visual consistency, performance, and user experience. Experienced
            leading teams and setting design standards in Agile environments.
          </ArticleParagraph>
        </ArticleSection>
      </Article>
      <main className="min-h-screen text-gray-700 bg-white px-20 py-10 max-w-4xl">
        <section className="mb-12">
          <h2 className="text-3xl font-heading font-bold mb-6">
            Work experience
          </h2>
          <div className="mb-8">
            <div className="flex flex-row space-x-4 mb-2">
              <h3 className="text-xl font-bold">UX/UI Architect</h3>
              <div className="text-lg text-gray-600">—</div>
              <div className="text-lg text-gray-600">Devo</div>
            </div>
            <p className="text-md text-gray-400 mb-4">
              From July 2018 to September 2025 / Madrid - remote
            </p>
            <ul className="text-lg list-outside pl-4 flex flex-col gap-2 list-disc text-gray-600">
              <li>
                Design and development of the main interface for Devo’s data
                analytics platform.
              </li>
              <li>
                Co-creator of the Design System: React components library,
                system documentation using Storybook, style library based on
                SASS, custom icon library and design tokens system.
              </li>
              <li>
                Participation in UX processes: wireframing, prototyping, user
                validation... etc.
              </li>
              <li>
                Focus on accessibility, responsive design, and scalability.
              </li>
              <li>
                Tools: Figma, GitLab CI/CD, GitHub, Storybook, Jira and
                Confluence.
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <div className="flex flex-row space-x-4 mb-2">
              <h3 className="text-xl font-bold">Design Lead</h3>
              <div className="text-lg text-gray-600">—</div>
              <div className="text-lg text-gray-600">Saga Soluciones</div>
            </div>
            <p className="text-md text-gray-400 mb-4">
              From October 2012 to July 2018 / Seville
            </p>
            <ul className="text-lg list-outside pl-4 flex flex-col gap-2 list-disc text-gray-600">
              <li>
                Designed and developed 40+ portals with OpenCms, HTML/CSS,
                Bootstrap, JS.
              </li>
              <li>
                Delivered training and led accessibility (AA compliance)
                migrations.
              </li>
              <li>
                Clients: Acerinox, Aldi, universities, municipalities,
                provincial councils...
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <div className="flex flex-row space-x-4 mb-2">
              <h3 className="text-xl font-bold">
                Creative Director & Co-Founder
              </h3>
              <div className="text-lg text-gray-600">—</div>
              <div className="text-lg text-gray-600">
                Teléfono rojo publicidad
              </div>
            </div>
            <p className="text-md text-gray-400 mb-4">
              From November 2005 to October 2012 / Seville
            </p>
            <ul className="text-lg list-outside pl-4 flex flex-col gap-2 list-disc text-gray-600">
              <li>
                Directed campaigns, branding, and corporate websites for NGOs
                and institutions.
              </li>
              <li>
                Clients included Agencia Progreso y Salud, Solidaridad
                Internacional, ENRICH, Zemos98... etc.
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
