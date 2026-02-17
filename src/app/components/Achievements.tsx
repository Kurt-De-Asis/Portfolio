"use client";

import { motion } from "framer-motion";
import { Award, Star, Medal, Trophy, Users, Calendar } from "lucide-react";
import { achievements } from "@/constants/data";

const Achievements = () => {
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

  const getAchievementIcon = (category: string) => {
    switch (category) {
      case 'Academic': return <Star className="w-6 h-6" />;
      case 'Leadership': return <Users className="w-6 h-6" />;
      case 'Recognition': return <Medal className="w-6 h-6" />;
      default: return <Award className="w-6 h-6" />;
    }
  };

  const getAchievementColor = (category: string) => {
    switch (category) {
      case 'Academic': return 'from-yellow-500 to-orange-400';
      case 'Leadership': return 'from-blue-500 to-cyan-400';
      case 'Recognition': return 'from-purple-500 to-pink-400';
      default: return 'from-gray-500 to-gray-400';
    }
  };

  const getAchievementBg = (category: string) => {
    switch (category) {
      case 'Academic': return 'bg-yellow-600/20 border-yellow-600/40';
      case 'Leadership': return 'bg-blue-600/20 border-blue-600/40';
      case 'Recognition': return 'bg-purple-600/20 border-purple-600/40';
      default: return 'bg-gray-600/20 border-gray-600/40';
    }
  };

  return (
    <section id="achievements" className="py-20 bg-background/30">
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
            Achievements & Awards
          </motion.h2>
          <motion.p
            className="text-xl text-foreground/70 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Recognition for academic excellence, leadership, and outstanding contributions to the tech community.
          </motion.p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              className={`group bg-black/40 p-6 rounded-xl border ${getAchievementBg(achievement.category)} hover:border-violet-600/50 transition-all duration-300`}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Achievement Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${getAchievementColor(achievement.category)} bg-opacity-20`}>
                    {getAchievementIcon(achievement.category)}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">{achievement.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${getAchievementColor(achievement.category)} text-white/80`}>
                      {achievement.category}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2 text-foreground/70">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{achievement.date}</span>
                  </div>
                </div>
              </div>

              {/* Achievement Description */}
              <p className="text-foreground/70 text-sm leading-relaxed">
                {achievement.description}
              </p>

              {/* Achievement Details */}
              <div className="mt-4 flex items-center justify-between pt-4 border-t border-violet-800/30">
                <div className="flex space-x-2">
                  <span className="px-3 py-1 bg-violet-600/20 text-violet-400 text-xs rounded-full border border-violet-600/30">
                    Excellence
                  </span>
                  <span className="px-3 py-1 bg-violet-600/20 text-violet-400 text-xs rounded-full border border-violet-600/30">
                    Leadership
                  </span>
                </div>
                
                <div className="w-2 h-2 bg-violet-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="bg-black/40 p-6 rounded-xl border border-violet-800/30">
            <div className="text-3xl font-bold text-violet-400 mb-2">{achievements.length}</div>
            <div className="text-foreground/70">Total Awards</div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-black/40 p-6 rounded-xl border border-violet-800/30">
            <div className="text-3xl font-bold text-violet-400 mb-2">
              {achievements.filter(a => a.category === 'Academic').length}
            </div>
            <div className="text-foreground/70">Academic Honors</div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-black/40 p-6 rounded-xl border border-violet-800/30">
            <div className="text-3xl font-bold text-violet-400 mb-2">
              {achievements.filter(a => a.category === 'Leadership').length}
            </div>
            <div className="text-foreground/70">Leadership Awards</div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-black/40 p-6 rounded-xl border border-violet-800/30">
            <div className="text-3xl font-bold text-violet-400 mb-2">
              {achievements.filter(a => a.category === 'Recognition').length}
            </div>
            <div className="text-foreground/70">Recognition Awards</div>
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
            View My Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;