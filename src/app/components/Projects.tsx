"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, Database, Server, Smartphone } from "lucide-react";
import { projects } from "@/constants/data";

const Projects = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const getProjectIcon = (category: string) => {
    switch (category) {
      case 'Full Stack': return <Code2 className="w-6 h-6" />;
      case 'Backend': return <Server className="w-6 h-6" />;
      case 'Frontend': return <Smartphone className="w-6 h-6" />;
      case 'Desktop': return <Database className="w-6 h-6" />;
      default: return <Code2 className="w-6 h-6" />;
    }
  };

  const getProjectColor = (category: string) => {
    switch (category) {
      case 'Full Stack': return 'from-violet-500 to-violet-400';
      case 'Backend': return 'from-green-500 to-emerald-400';
      case 'Frontend': return 'from-blue-500 to-cyan-400';
      case 'Desktop': return 'from-purple-500 to-pink-400';
      default: return 'from-gray-500 to-gray-400';
    }
  };

  return (
    <section id="projects" className="py-20 bg-background/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-violet-200 bg-clip-text text-transparent mb-4"
            variants={itemVariants}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-xl text-foreground/70 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            A showcase of my recent work, highlighting my skills in full-stack development, 
            system architecture, and modern technologies.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-black/40 p-6 rounded-xl border border-violet-800/30 hover:border-violet-600/50 transition-all duration-300 cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              {/* Project Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${getProjectColor(project.category)} bg-opacity-20`}>
                    {getProjectIcon(project.category)}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{project.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${getProjectColor(project.category)} text-white/80`}>
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-violet-600/20 text-violet-400 text-xs rounded-full border border-violet-600/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-violet-800/30">
                <div className="flex space-x-3">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-foreground/70 hover:text-violet-400 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">View Code</span>
                  </motion.a>
                  <motion.a
                    href="#"
                    className="flex items-center space-x-2 text-foreground/70 hover:text-violet-400 transition-colors opacity-50 cursor-not-allowed"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Live Demo</span>
                  </motion.a>
                </div>
                
                <div className="w-2 h-2 bg-violet-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="bg-black/40 p-6 rounded-xl border border-violet-800/30">
            <div className="text-3xl font-bold text-violet-400 mb-2">{projects.length}</div>
            <div className="text-foreground/70">Total Projects</div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-black/40 p-6 rounded-xl border border-violet-800/30">
            <div className="text-3xl font-bold text-violet-400 mb-2">
              {projects.filter(p => p.category === 'Full Stack').length}
            </div>
            <div className="text-foreground/70">Full Stack</div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-black/40 p-6 rounded-xl border border-violet-800/30">
            <div className="text-3xl font-bold text-violet-400 mb-2">
              {projects.filter(p => p.technologies.includes('React')).length}
            </div>
            <div className="text-foreground/70">React Projects</div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-black/40 p-6 rounded-xl border border-violet-800/30">
            <div className="text-3xl font-bold text-violet-400 mb-2">
              {projects.filter(p => p.technologies.includes('Go')).length}
            </div>
            <div className="text-foreground/70">Go Projects</div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <motion.button
            onClick={() => window.open('https://github.com/Kurt-De-Asis', '_blank')}
            className="px-8 py-4 border-2 border-violet-600 hover:border-violet-400 hover:bg-violet-600/20 text-violet-400 font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View More on GitHub
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;