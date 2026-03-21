import { motion } from "framer-motion"

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 md:px-16 bg-[#0a192f] text-white relative overflow-hidden"
    >

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto w-full">

        {/* LEFT IMAGE */}
        <div className="relative flex justify-center items-center">

          {/* MAIN BORDER SHAPE */}
          <motion.div
            animate={{
              rotate: [0, 10, 0],
              boxShadow: [
                "0 0 20px rgba(59,130,246,0.6)",
                "0 0 60px rgba(59,130,246,0.8)",
                "0 0 20px rgba(59,130,246,0.6)"
              ]
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut"
            }}
            className="absolute w-[320px] h-[320px] border-2 border-blue-400 rounded-xl pointer-events-none"
          />

          {/* GLOW BACKGROUND */}
          <div className="absolute w-[320px] h-[320px] bg-blue-500 opacity-30 blur-3xl rounded-xl pointer-events-none" />

          {/* IMAGE */}
          <img
            src="/profile.jpg"
            alt="Sneha"
            className="relative w-[280px] md:w-[320px] z-10 object-contain"
          />

        </div>

        {/* RIGHT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-blue-500 text-transparent bg-clip-text">
            Why Hire Me?
          </h2>

          <p className="text-blue-200 mb-6 leading-relaxed">
            I am a Computer Science student passionate about Data Science,
            Machine Learning, and Full Stack Development. I enjoy solving real-world
            problems through technology.
          </p>

          <p className="text-blue-300 mb-8 leading-relaxed">
            I continuously work on improving my skills, building impactful projects,
            and learning modern tools to become an industry-ready developer.
          </p>

          <div>
            <h3 className="font-semibold text-white">
              Sneha Srivastava
            </h3>
            <p className="text-blue-300 text-sm">
              Aspiring Software Engineer
            </p>
          </div>

        </motion.div>

      </div>

    </section>
  )
}