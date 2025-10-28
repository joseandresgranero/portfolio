"use client";
import * as React from "react";
import { motion } from "framer-motion";

export const ProcessTimeline = ({
  steps,
}: {
  steps: {
    icon: React.ReactElement<HTMLElement>;
    title: string;
    description: string;
  }[];
}) => {
  return (
    <section className="bg-[var(--projects-bg-color)]">
      <h2 className="text-2xl font-heading text-center font-bold text-[var(--primary-color-weak)] mb-15">
        Process Snapshot
      </h2>
      <div className="relative flex flex-col md:flex-row justify-between gap-30 md:gap-0">
        {steps.map((step, i) => {
          const prevIcon = step.icon;
          const evalIcon = React.cloneElement(prevIcon, {
            className: `${prevIcon.props.className ?? ""} w-6 h-6`,
          });
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center md:w-1/5"
            >
              <div className="relative z-5 flex items-center justify-center w-12 h-12 rounded-full bg-[var(--primary-color-weaker)] mb-3 text-[var(--secondary-color)]">
                {evalIcon}
              </div>
              <h3 className="text-base font-medium mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 max-w-[24ch]">
                {step.description}
              </p>

              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 right-0 w-full h-[2px] bg-gray-200" />
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
