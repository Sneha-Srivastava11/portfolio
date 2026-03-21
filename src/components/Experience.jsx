import { motion } from 'framer-motion';
import { personalInfo } from '../data/personalInfo';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-[#0a192f] text-white relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-400 opacity-20 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-300 to-blue-500 text-transparent bg-clip-text"
        >
          Experience
        </motion.h2>

        {/* TIMELINE */}
        <div className="relative max-w-4xl mx-auto">

          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-blue-500/30"></div>

          {personalInfo.experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`mb-12 flex flex-col md:flex-row items-start md:items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >

              {/* DOT */}
              <div className="w-4 h-4 bg-blue-400 rounded-full absolute left-1/2 transform -translate-x-1/2 shadow-[0_0_10px_#3b82f6]"></div>

              {/* CARD */}
              <div className="w-full md:w-1/2 mx-auto">
                <div className="group p-[1px] rounded-2xl bg-gradient-to-r from-blue-400/30 to-blue-600/30">

                  <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-blue-500/20 group-hover:border-blue-400/40 transition duration-300">

                    <h3 className="text-2xl font-semibold mb-1 text-white">
                      {item.role}
                    </h3>

                    <p className="text-blue-400 font-medium">
                      {item.organization}
                    </p>

                    <p className="text-blue-300 text-sm mb-1">
                      {item.partner}
                    </p>

                    <p className="text-blue-200 text-sm mb-4">
                      {item.duration}
                    </p>

                    <p className="text-blue-100 mb-4">
                      {item.description}
                    </p>

                    {/* CERTIFICATE BUTTON */}
                    {item.certificate && (
                      <a
                        href={item.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 text-sm rounded-full bg-gradient-to-r from-blue-400 to-blue-600 hover:scale-105 transition duration-300 shadow-md"
                      >
                        View Certificate
                      </a>
                    )}

                  </div>

                </div>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;