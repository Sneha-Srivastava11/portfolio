import { motion } from 'framer-motion';
import GitHubCalendar from 'react-github-calendar';
import { personalInfo } from '../data/personalInfo';

const GitHubSection = () => {
  return (
    <section id="github" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          GitHub Contributions
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <GitHubCalendar username={personalInfo.github.split('/').pop()} />
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubSection;