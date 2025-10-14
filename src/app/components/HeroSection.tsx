"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="flex flex-col justify-center bg-[var(--hero-bg-color)] lg:h-[var(--hero-height)] px-[var(--padding-x-base)] md:px-[var(--padding-x-base-md)] py-10 bg-gradient-to-b from-[var(--primary-color)] to-[var(--primary-color-weak)]">
      <motion.h1
        className="text-[2.2rem] leading-[1.4] mb-4 text-[var(--hero-text-color)] max-w-[var(--max-width-text)]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        I'm a<strong> Product designer </strong>
        with 15+ years of experience crafting scalable design systems,
        accessible interfaces, and reusable UI components.
      </motion.h1>
    </section>
  );
}
