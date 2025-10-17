"use client";

import { motion } from "framer-motion";
import * as React from "react";

export default function HeroSection() {
  React.useEffect(() => {
    document.body.classList.add("home");
    return () => document.body.classList.remove("home");
  }, []);

  return (
    <section className="flex flex-col justify-center bg-[var(--hero-bg-color)] lg:h-[calc(var(--hero-height)+var(--header-height))] lg:pb-0 pt-[calc(var(--header-height)+60px)] lg:pt-[var(--header-height)] px-[var(--padding-x-base)] md:px-[var(--padding-x-base-md)] py-15 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-color-weakest)] animate-gradient">
      <motion.h1
        className="text-[1.9rem] sm:text-[2.2rem] leading-[1.4] mb-4 text-[var(--hero-text-color)] max-w-[var(--max-width-text-sm)]"
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
