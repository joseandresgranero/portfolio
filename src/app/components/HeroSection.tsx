"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="flex flex-col justify-center bg-[var(--hero-bg-color)] h-[var(--hero-height)] px-20 p-8">
      <motion.h1
        className="text-[1.8em] leading-[1.4] mb-4 text-[var(--hero-text-color)] max-w-[870px]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Hi there! I'm a<strong> Product designer </strong>
        with 15+ years of experience, specializing in scalable design systems,
        accessibility, and reusable component development.
      </motion.h1>
    </section>
  );
}
