"use client";

import { motion } from "framer-motion";
import {
  IoColorPaletteOutline,
  IoBookOutline,
  IoCodeOutline,
  IoRocketOutline,
  IoBarChartOutline,
} from "react-icons/io5";

const steps = [
  {
    icon: (
      <IoColorPaletteOutline className="w-6 h-6 text-[var(--secondary-color)]" />
    ),
    title: "Design",
    description:
      "Defined foundations, tokens, base components, and usability patterns.",
  },
  {
    icon: <IoBookOutline className="w-6 h-6 text-[var(--secondary-color)]" />,
    title: "Documentation",
    description:
      "Created Storybook and Figma docs for shared use of design system.",
  },
  {
    icon: <IoCodeOutline className="w-6 h-6 text-[var(--secondary-color)]" />,
    title: "Development",
    description:
      "Built all the system libraries — components, design tokens, icons, and styles — using React, TypeScript, Sass and Style dictionary.",
  },
  {
    icon: <IoRocketOutline className="w-6 h-6 text-[var(--secondary-color)]" />,
    title: "Rollout",
    description: "Onboarded teams through demos, feedback loops, and training.",
  },
  {
    icon: (
      <IoBarChartOutline className="w-6 h-6 text-[var(--secondary-color)]" />
    ),
    title: "Impact",
    description:
      "40% faster implementation, 100+ unified screens and 100% of usage of frontend engineering teams.",
  },
];

export const ProcessTimeline = () => {
  return (
    <section className="bg-[var(--projects-bg-color)]">
      <h2 className="text-2xl font-heading text-center font-bold text-[var(--primary-color-weak)] mb-15">
        Process Snapshot
      </h2>
      <div className="relative flex flex-col md:flex-row justify-between gap-30 md:gap-0">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center md:w-1/5"
          >
            <div className="relative z-5 flex items-center justify-center w-12 h-12 rounded-full bg-[var(--primary-color-weaker)] mb-3">
              {step.icon}
            </div>
            <h3 className="text-lg font-medium mb-2">{step.title}</h3>
            <p className="text-sm text-gray-600 max-w-[24ch]">
              {step.description}
            </p>

            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-6 right-0 w-full h-[2px] bg-gray-200" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
