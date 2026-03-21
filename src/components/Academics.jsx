import { motion } from "framer-motion"

const academics = [
  {
    year: "2023 - Present",
    title: "B.Tech in Computer Science Engineering",
    place: "Lovely Professional University",
    cgpa: "8.6",
    desc: "Currently pursuing CSE with domain of Data Science."
  },
  {
    year: "2022",
    title: "Senior Secondary (12th)",
    place: "Carmel School ",
    percentage: "91.5%",
    desc: "Completed with strong foundation in Mathematics and Science."
  },
  {
    year: "2020",
    title: "Secondary (10th)",
    place: "Carmel School ",
    percentage: "92.4%",
    desc: "Built strong academic base and interest in technology."
  }
]

export default function Academics() {
  return (
    <section id="academics" className="min-h-screen flex items-center justify-center px-4">

      <div className="max-w-4xl w-full">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
        >
          Academics
        </motion.h2>

        {/* TIMELINE */}
        <div className="relative border-l border-white/20">

          {academics.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="mb-10 ml-6"
            >

              {/* DOT */}
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full ring-4 ring-black"></span>

              {/* CARD */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-lg">

                <time className="text-sm text-gray-400">
                  {item.year}
                </time>

                <h3 className="text-lg font-semibold mt-1">
                  {item.title}
                </h3>

                <p className="text-blue-400 text-sm">
                  {item.place}
                </p>
              {/* CGPA or Percentage */}
{item.cgpa && (
  <p className="text-green-400 text-sm mt-1">
    🎓 {item.cgpa}
  </p>
)}

{item.percentage && (
  <p className="text-green-400 text-sm mt-1">
    📊 {item.percentage}
  </p>
)}
                <p className="text-gray-300 mt-2 text-sm">
                  {item.desc}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}