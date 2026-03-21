import { motion } from 'framer-motion';
import { personalInfo } from '../data/personalInfo';

const Hobbies = () => {
  return (
    <section className="py-24 bg-[#0a192f] text-white relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-400 blur-3xl opacity-20 rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-300 to-blue-500 text-transparent bg-clip-text"
        >
          Life Beyond Code
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {personalInfo.hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="group p-[1px] rounded-2xl bg-gradient-to-r from-blue-400/30 to-blue-600/30"
            >

              <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-blue-500/20">

                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition">
                  {hobby.title}
                </h3>

                <p className="text-blue-200 group-hover:text-blue-300 transition">
                  {hobby.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Hobbies;