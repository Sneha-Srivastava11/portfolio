import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 md:px-16 bg-[#0a192f] text-white relative overflow-hidden"
    >

      <div className="grid md:grid-cols-2 items-center">

        {/* LEFT */}
        <div>
          <p className="text-blue-300 tracking-widest mb-4">
            HELLO I'M
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-blue-500 text-transparent bg-clip-text">
            SNEHA SRIVASTAVA
          </h1>

          <h2 className="text-2xl md:text-3xl font-medium mb-2">
            Aspiring Data Scientist & AI/ML Enthusiast
          </h2>

          <p className="text-blue-200 text-xl mb-8">
            I am a Computer Science student passionate about Data Science
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mb-12 flex-wrap">
            
            {/* RESUME */}
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full text-white font-medium hover:scale-105 transition duration-300 shadow-lg"
            >
              Download Resume
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/sneha-srivastava11"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-blue-400 rounded-full text-blue-300 hover:bg-blue-500 hover:text-white transition duration-300"
            >
              LinkedIn
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/Sneha-Srivastava11"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-blue-400 rounded-full text-blue-300 hover:bg-blue-500 hover:text-white transition duration-300"
            >
              GitHub
            </a>

          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center items-center">

          {/* ANIMATED GLOW */}
          <motion.div
            animate={{
              rotate: [25, 30, 25],
              boxShadow: [
                "0 0 10px #3b82f6",
                "0 0 40px #3b82f6",
                "0 0 10px #3b82f6"
              ]
            }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute w-[420px] h-[420px] rounded-xl pointer-events-none"
          />

          {/* SOFT BACK GLOW */}
          <div className="absolute w-[420px] h-[420px] bg-blue-500 blur-3xl opacity-20 rounded-xl pointer-events-none" />

          {/* IMAGE */}
          <img
            src="/profile.jpg"
            alt="Sneha"
            className="relative w-[420px] md:w-[520px] object-contain z-10"
          />
        </div>
      </div>

      {/* STATS */}
      <div className="mt-20 flex justify-center">
        <div className="w-full max-w-5xl border-t border-b border-blue-500/20 py-10">

          <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-6">

            {["Projects", "CGPA", "Certifications", "Internship"].map((item, i) => {
              const values = ["10+", "8.6", "6+", "1"]
              return (
                <div key={i} className="group">
                  <h2 className="text-3xl md:text-4xl font-bold group-hover:text-blue-400 transition">
                    {values[i]}
                  </h2>
                  <p className="text-blue-200 text-sm mt-2 group-hover:text-blue-300">
                    {item}
                  </p>
                </div>
              )
            })}

          </div>
        </div>
      </div>

    </section>
  )
}
