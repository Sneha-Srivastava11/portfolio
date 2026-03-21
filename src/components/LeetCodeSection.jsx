import { motion } from 'framer-motion';
import { personalInfo } from '../data/personalInfo';

const LeetCodeSection = () => {
  return (
    <section id="leetcode" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          LeetCode Stats
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-md">
            <h3 className="text-2xl font-bold mb-4 text-white">LeetCode Profile</h3>
            <p className="text-gray-300">Problems Solved: 150</p>
            <p className="text-gray-300">Easy: 80</p>
            <p className="text-gray-300">Medium: 50</p>
            <p className="text-gray-300">Hard: 20</p>
           <a
href="https://leetcode.com/sneha_1120"
target="_blank"
rel="noopener noreferrer"
className="inline-block mt-6 bg-yellow-500 text-black px-6 py-3 rounded-lg hover:scale-105 transition"
>
View Profile
</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeetCodeSection;