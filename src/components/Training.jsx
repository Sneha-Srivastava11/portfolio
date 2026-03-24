import { motion } from "framer-motion"

const trainings = [
  {
    title: "Data Science Summer Training - From Data to Insights",
    org: "Lovely Professional University",
    duration: "Summer 2024",
    description:
      "Completed an intensive Data Science training covering Power BI, Machine Learning, and data-driven insights. Gained hands-on experience in data visualization, analysis, and predictive modeling.",
    image: "/certificates/ds-training.jpg",
    link: "https://drive.google.com/file/d/1Ti6NsdEJL_2m6Yh1GT-xDbPwOGY4dToy/view?usp=drive_link"
  }
]

export default function Training() {
  return (
    <section
      id="training"
      className="min-h-screen flex items-center justify-center px-6 md:px-16 bg-[#0a192f]"
    >
      <div className="max-w-5xl w-full">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 text-blue-300"
        >
          Training
        </motion.h2>

        {/* CENTERED CARD */}
        <div className="flex justify-center">

          {trainings.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="w-full md:w-[650px] bg-white/5 backdrop-blur-md border border-blue-500/20 rounded-xl overflow-hidden shadow-xl"
            >

              {/* IMAGE */}
              <img
                src={t.image}
                alt={t.title}
                className="w-full h-60 object-cover"
              />

              {/* CONTENT */}
              <div className="p-6 text-center">

                <h3 className="text-xl font-semibold text-white mb-2">
                  {t.title}
                </h3>

                <p className="text-blue-400 text-sm">
                  {t.org} • {t.duration}
                </p>

                <p className="text-gray-300 mt-4 text-sm">
                  {t.description}
                </p>

                {/* TAGS */}
                <div className="flex justify-center gap-2 mt-4 flex-wrap">
                  <span className="text-xs bg-blue-500 px-3 py-1 rounded-full">
                    Power BI
                  </span>
                  <span className="text-xs bg-purple-500 px-3 py-1 rounded-full">
                    Machine Learning
                  </span>
                </div>

                {/* BUTTON */}
                <a
                  href={t.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 px-6 py-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg text-white font-medium hover:scale-105 transition duration-300 shadow-lg"
                >
                  View Certificate
                </a>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}