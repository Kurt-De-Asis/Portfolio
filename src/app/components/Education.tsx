"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, Users, BookOpen } from "lucide-react";
import { education } from "@/constants/data";

const Education = () => {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section id="education" className="py-20">
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
            Education
          </motion.h2>
          <motion.p
            className="text-xl text-foreground/70 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            My academic journey and the foundation that shaped my technical expertise and professional growth.
          </motion.p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-violet-800/30" />

          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className={`relative mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              variants={itemVariants}
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 w-4 h-4 bg-violet-500 rounded-full border-4 border-background z-10" />

              {/* Content Card */}
              <div className={`md:w-5/6 ${index % 2 === 0 ? 'md:ml-16' : 'md:mr-16'}`}>
                <div className="bg-black/40 p-6 rounded-xl border border-violet-800/30 hover:border-violet-600/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-violet-600/20 rounded-lg">
                        <GraduationCap className="w-6 h-6 text-violet-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                        <p className="text-foreground/70">{edu.institution}</p>
                        <p className="text-foreground/60 text-sm">{edu.location}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2 text-foreground/70">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{edu.startDate} - {edu.endDate}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Achievements */}
                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-violet-400 mb-3">Key Achievements</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {edu.achievements.map((achievement, achievementIndex) => (
                          <div
                            key={achievementIndex}
                            className="flex items-center space-x-3 p-3 bg-violet-600/10 rounded-lg border border-violet-600/20"
                          >
                            <Award className="w-4 h-4 text-violet-400 flex-shrink-0" />
                            <span className="text-sm text-foreground/80">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="bg-black/40 p-6 rounded-xl border border-violet-800/30">
            <div className="text-3xl font-bold text-violet-400 mb-2">1</div>
            <div className="text-foreground/70">Degree Completed</div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-black/40 p-6 rounded-xl border border-violet-800/30">
            <div className="text-3xl font-bold text-violet-400 mb-2">4+ Years</div>
            <div className="text-foreground/70">Academic Journey</div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-black/40 p-6 rounded-xl border border-violet-800/30">
            <div className="text-3xl font-bold text-violet-400 mb-2">1.50</div>
            <div className="text-foreground/70">Minimum Average</div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-black/40 p-6 rounded-xl border border-violet-800/30">
            <div className="text-3xl font-bold text-violet-400 mb-2">Multiple</div>
            <div className="text-foreground/70">Honors & Awards</div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <motion.button
            onClick={() => window.location.href = '#skills'}
            className="px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-violet-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See My Technical Skills
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;