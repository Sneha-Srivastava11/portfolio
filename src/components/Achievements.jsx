import { motion } from 'framer-motion';
import { personalInfo } from '../data/personalInfo';
import { FileText, Code, Award } from 'lucide-react';

const iconMap = {
  patent: FileText,
  code: Code,
  award: Award
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          Achievements
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {personalInfo.achievements.map((achievement, index) => {
            const IconComponent = iconMap[achievement.icon] || Award;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
                className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow border border-gray-700 hover:border-blue-400"
              >
                <div className="flex items-center mb-4">
                  {achievement.image ? (
                    <img src={achievement.image} alt={achievement.title} className="w-12 h-12 rounded-lg mr-4 shadow-md" />
                  ) : (
                    <IconComponent size={48} className="text-blue-400 mr-4" />
                  )}
                  <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                </div>
                <p className="text-gray-300">{achievement.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;