"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/constants/data";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed w-full backdrop-blur-md border-b transition-all duration-300 z-50 ${
          isScrolled 
            ? "bg-[#0B0B0F]/95 dark:bg-[#0B0B0F]/95 bg-white/95 border-violet-500/30 dark:border-violet-500/30 shadow-xl shadow-violet-500/5" 
            : "bg-[#0B0B0F]/60 dark:bg-[#0B0B0F]/60 bg-white/60 border-violet-500/20 dark:border-violet-500/20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <motion.a
              href="#"
              className="text-2xl font-bold bg-gradient-to-r from-violet-400 via-violet-500 to-violet-300 dark:from-violet-400 dark:via-violet-500 dark:to-violet-300 from-violet-700 via-violet-600 to-violet-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Kurt.dev
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  className="dark:text-white/80 text-gray-800 dark:hover:text-violet-400 hover:text-violet-600 transition-colors duration-300 font-medium relative group"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-500 transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-3">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg border border-violet-500/50 hover:bg-violet-500/20 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                ) : (
                  <Menu className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden border-t border-violet-500/20"
          >
            <div className="py-4 space-y-4">
              {navigation.map((item) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="block py-2 text-lg dark:text-white/80 text-gray-800 dark:hover:text-violet-400 hover:text-violet-600 transition-colors"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
