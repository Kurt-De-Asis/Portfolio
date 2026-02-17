"use client";

import { motion } from "framer-motion";
import { 
  Code, 
  Database, 
  Server, 
  GitBranch, 
  Smartphone, 
  Monitor, 
  Cpu, 
  Shield, 
  Globe, 
  Settings 
} from "lucide-react";
import { skills } from "@/constants/data";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  const getSkillIcon = (skillName: string) => {
    const name = skillName.toLowerCase();
    if (name.includes('html') || name.includes('css') || name.includes('javascript') || name.includes('typescript') || name.includes('react') || name.includes('next') || name.includes('vue') || name.includes('responsive')) {
      return <Code className="w-5 h-5" />;
    }
    if (name.includes('go') || name.includes('python') || name.includes('java') || name.includes('php') || name.includes('django') || name.includes('system') || name.includes('optimization')) {
      return <Server className="w-5 h-5" />;
    }
    if (name.includes('mysql') || name.includes('firebase') || name.includes('database') || name.includes('administration')) {
      return <Database className="w-5 h-5" />;
    }
    if (name.includes('git')) {
      return <GitBranch className="w-5 h-5" />;
    }
    return <Cpu className="w-5 h-5" />;
  };

  const getSkillColor = (category: string) => {
    switch (category) {
      case 'Frontend': return 'from-blue-500 to-cyan-400';
      case 'Backend': return 'from-green-500 to-emerald-400';
      case 'Database': return 'from-purple-500 to-pink-400';
      case 'Tools': return 'from-orange-500 to-red-400';
      case 'Languages': return 'from-yellow-500 to-orange-400';
      default: return 'from-gray-500 to-gray-400';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-gray-600/30 border-gray-600/50';
      case 'Intermediate': return 'bg-yellow-600/30 border-yellow-600/50';
      case 'Advanced': return 'bg-blue-600/30 border-blue-600/50';
      case 'Expert': return 'bg-green-600/30 border-green-600/50';
      default: return 'bg-gray-600/30 border-gray-600/50';
    }
  };

  const categories = ['Frontend', 'Backend', 'Database', 'Tools', 'Languages'];

  return (
    <section id="skills" className="py-20">
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
            Technical Skills
          </motion.h2>
          <motion.p
            className="text-xl text-foreground/70 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Here's a comprehensive overview of my technical expertise across various domains and technologies.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {categories.map((category) => {
            const categorySkills = skills.filter(skill => skill.category === category);
            
            return (
              <motion.div
                key={category}
                className="bg-black/40 p-6 rounded-xl border border-violet-800/30 hover:border-violet-600/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-foreground capitalize flex items-center gap-3">
                    {getSkillIcon(category)}
                    {category}
                  </h3>
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${getSkillColor(category)}`} />
                </div>

                <div className="space-y-3">
                  {categorySkills.map((skill) => (
                    <motion.div
                      key={skill.id}
                      className={`p-3 rounded-lg border-2 ${getLevelColor(skill.level)} transition-all duration-300 hover:scale-105`}
                      variants={itemVariants}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          skill.level === 'Expert' ? 'bg-green-500/20 text-green-400' :
                          skill.level === 'Advanced' ? 'bg-blue-500/20 text-blue-400' :
                          skill.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-gray-500/20 text-gray-400'
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="bg-black/40 p-6 rounded-xl border border-violet-800/30">
            <div className="text-3xl font-bold text-violet-400 mb-2">{skills.length}</div>
            <div className="text-foreground/70">Total Skills</div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-black/40 p-6 rounded-xl border border-violet-800/30">
            <div className="text-3xl font-bold text-violet-400 mb-2">
              {skills.filter(s => s.level === "Expert").length}
            </div>
            <div className="text-foreground/70">Expert Level</div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-black/40 p-6 rounded-xl border border-violet-800/30">
            <div className="text-3xl font-bold text-violet-400 mb-2">
              {skills.filter(s => s.level === 'Advanced').length}
            </div>
            <div className="text-foreground/70">Advanced Level</div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-black/40 p-6 rounded-xl border border-violet-800/30">
            <div className="text-3xl font-bold text-violet-400 mb-2">
              {skills.filter(s => s.category === 'Frontend').length}
            </div>
            <div className="text-foreground/70">Frontend Skills</div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <motion.button
            onClick={() => window.location.href = '#projects'}
            className="px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-violet-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See How I Apply These Skills
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;