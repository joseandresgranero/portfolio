import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import HeroSection from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-white text-gray-900">
        {/* Hero Section */}
        <HeroSection />

        {/* Projects Section */}
        <ProjectsSection />
      </main>
    </>
  );
}
