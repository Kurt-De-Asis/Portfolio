"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { personalInfo } from "@/constants/data";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100
      }
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden pt-20 md:pt-0">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-violet-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Picture */}
        <motion.div
          className="mb-8 flex justify-center"
          variants={itemVariants}
        >
          <div className="relative">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-violet-500/30 shadow-2xl">
            <img 
                src="/pfp.jpg" 
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-background"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Name and Title */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-r from-violet-400 via-violet-300 to-violet-200 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl text-foreground/80 mb-8 font-light"
          variants={itemVariants}
        >
          {personalInfo.title}
        </motion.h2>

        {/* Professional Summary */}
        <motion.p
          className="text-lg md:text-xl text-foreground/70 mb-12 max-w-3xl leading-relaxed"
          variants={itemVariants}
        >
          Hardworking and passionate software engineer with strong organizational skills and a commitment to excellence. 
          Experienced in developing and maintaining software applications with a focus on clean code, user experience, 
          and system optimization.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          variants={itemVariants}
        >
          <motion.button
            onClick={() => scrollToSection('projects')}
            className="group relative px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-violet-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>

          <motion.button
            onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
            className="group px-8 py-4 border-2 border-violet-600 hover:border-violet-400 hover:bg-violet-600/20 text-violet-400 font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center gap-2">
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </div>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="mt-16 animate-bounce"
          variants={itemVariants}
          onClick={() => scrollToSection('about')}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          <ArrowDown className="w-8 h-8 text-violet-400 mx-auto cursor-pointer" />
          <span className="text-sm text-foreground/60 mt-2 block">Scroll to explore</span>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute bottom-10 left-10 w-20 h-20 border-2 border-violet-500/30 rounded-full"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-20 right-10 w-16 h-16 border-2 border-violet-300/30 rounded-lg"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </section>
  );
};

export default Hero;
