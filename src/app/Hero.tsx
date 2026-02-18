"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl font-bold"
      >
        Hi, I'm <span className="text-violet-500">Kurt</span>
      </motion.h1>

      <p className="mt-6 text-gray-400 max-w-xl">
        Backend-Focused Full Stack Developer specializing in Go, secure APIs,
        and scalable web architectures.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="bg-violet-600 px-6 py-3 rounded-xl hover:bg-violet-700 transition"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="border border-violet-600 px-6 py-3 rounded-xl hover:bg-violet-600/20 transition"
        >
          Hire Me
        </a>
      </div>
    </section>
  );
}
