"use client";

import { motion } from "framer-motion";
import { Code, Database, Cpu, Shield } from "lucide-react";
import { professionalSummary } from "@/constants/data";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const skills = [
    {
      icon: Code,
      title: "Backend Development",
      description: "Expert in Go, Python, and Java with experience in building scalable APIs and microservices."
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Proficient in MySQL and Firebase with strong database design and optimization skills."
    },
    {
      icon: Cpu,
      title: "System Optimization",
      description: "Skilled in performance tuning and system architecture for efficient, high-performance applications."
    },
    {
      icon: Shield,
      title: "Security Focus",
      description: "Committed to secure coding practices and implementing robust authentication systems."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Column - Professional Story */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4">
              <motion.h2
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-violet-200 bg-clip-text text-transparent"
                variants={itemVariants}
              >
                About Me
              </motion.h2>
              <motion.div
                className="w-24 h-1 bg-violet-500 rounded-full"
                variants={itemVariants}
              />
            </div>

            <motion.p
              className="text-lg text-foreground/80 leading-relaxed"
              variants={itemVariants}
            >
              {professionalSummary}
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-4 mt-8"
              variants={containerVariants}
            >
              <motion.div
                className="bg-black/40 p-6 rounded-xl border border-violet-800/30"
                variants={itemVariants}
              >
                <h3 className="font-semibold text-violet-400 mb-2">Experience</h3>
                <p className="text-foreground/70 text-sm">4+ years of software development experience</p>
              </motion.div>
              <motion.div
                className="bg-black/40 p-6 rounded-xl border border-violet-800/30"
                variants={itemVariants}
              >
                <h3 className="font-semibold text-violet-400 mb-2">Education</h3>
                <p className="text-foreground/70 text-sm">BS in Information Technology</p>
              </motion.div>
              <motion.div
                className="bg-black/40 p-6 rounded-xl border border-violet-800/30"
                variants={itemVariants}
              >
                <h3 className="font-semibold text-violet-400 mb-2">Location</h3>
                <p className="text-foreground/70 text-sm">Santa Rosa, Laguna, Philippines</p>
              </motion.div>
              <motion.div
                className="bg-black/40 p-6 rounded-xl border border-violet-800/30"
                variants={itemVariants}
              >
                <h3 className="font-semibold text-violet-400 mb-2">Availability</h3>
                <p className="text-foreground/70 text-sm">Open to new opportunities</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Skills Overview */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-violet-400">Core Competencies</h3>
              <p className="text-foreground/70">
                Here are some of the key areas I specialize in:
              </p>
            </div>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="group bg-black/40 p-6 rounded-xl border border-violet-800/30 hover:border-violet-600/50 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-violet-600/20 rounded-lg group-hover:bg-violet-600/40 transition-colors">
                      <skill.icon className="w-8 h-8 text-violet-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {skill.title}
                      </h4>
                      <p className="text-foreground/70 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.button
                onClick={() => window.location.href = '#projects'}
                className="flex-1 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
              <motion.button
                onClick={() => window.location.href = '#contact'}
                className="flex-1 px-6 py-3 border-2 border-violet-600 hover:border-violet-400 hover:bg-violet-600/20 text-violet-400 font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;