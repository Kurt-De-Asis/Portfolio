"use client";

import { motion } from "framer-motion";
import ThemeToggle from "./components/ThemeToggle";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      className="fixed w-full backdrop-blur-lg bg-black/40 border-b border-violet-800/20 z-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl text-violet-500">
          Kurt.dev
        </h1>
        <ThemeToggle />
      </div>
    </motion.nav>
  );
}
