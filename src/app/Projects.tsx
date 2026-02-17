"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Go Banking System",
    description: "Secure backend banking system with authentication and loan processing.",
  },
  {
    title: "ECCD Assessment App",
    description: "Full-stack web system for kindergarten student evaluation.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-violet-500">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="p-6 rounded-2xl border border-violet-800/30 bg-black/40 backdrop-blur-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">
              {project.title}
            </h3>
            <p className="text-gray-400">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
