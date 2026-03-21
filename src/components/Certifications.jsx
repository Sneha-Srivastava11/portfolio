import { motion } from "framer-motion"

const certifications = [
  {
    title: "Introduction to Hardware",
    platform: "Coursera",
    image: "/certificates/hardware.jpg",
    link: "https://drive.google.com/file/d/19wvb58bHQi5ZMWFv06PZlkloA5-Yabxp/view?usp=drive_link",
    description: "Learned computer hardware basics and system components"
  },
  {
    title: "Fundamentals of Network Communication",
    platform: "Coursera",
    image: "/certificates/network.jpg",
    link: "https://drive.google.com/file/d/1TWICZpuWsXtVm3HK2ZhCcekrbl37QoM5/view?usp=drive_link",
    description: "Covered networking concepts, TCP/IP, and communication models"
  },
  {
    title: "Bits and Bytes of Computer Networking",
    platform: "Coursera",
    image: "/certificates/bitsbytes.jpg",
    link: "https://drive.google.com/file/d/10hdbwcvkaPFzw44MbaWLRvaGrpTCsmf5/view?usp=drive_link",
    description: "Understood networking layers, protocols, and troubleshooting"
  },
  {
    title: "Peer-to-Peer Protocols and Local Area Networks",
    platform: "Coursera",
    image: "/certificates/lan.jpg",
    link: "https://drive.google.com/file/d/1MH13u49EHxRfMY4-PwcEoCgh_DlpV0--/view?usp=drive_link",
    description: "Explored LAN architecture and peer-to-peer communication"
  },
  {
    title: "Python for Data Science",
    platform: "Coursera",
    image: "/certificates/python-ds.jpg",
    link: "https://drive.google.com/file/d/16RiiyxTkn4r0i4z36c6Ah28x33I42UcP/view?usp=drive_link",
    description: "Learned data analysis, visualization, and ML basics"
  },
  {
    title:"Cloud Computing",
    platform:"NPTEL",
    image: "/certificates/cloud.jpg",
    link: "https://drive.google.com/file/d/1n9s8mXo2l7a3v5b6c8d9e0f1g2h3i4j/view?usp=drive_link",
    description: "Covered cloud concepts, services, and deployment models"
  }
]

export default function Certifications() {
  return (
    <section id="certifications" className="min-h-screen flex items-center justify-center px-4">

      <div className="max-w-6xl w-full">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">

          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-xl group"
            >

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-56 object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">

                <h3 className="text-xl font-semibold mb-2">
                  {cert.title}
                </h3>

                <p className="text-gray-400 text-sm mb-2">
                  {cert.platform}
                </p>

                <p className="text-gray-300 text-sm mb-4">
                  {cert.description}
                </p>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 px-5 py-2 rounded-lg hover:bg-blue-600 transition"
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