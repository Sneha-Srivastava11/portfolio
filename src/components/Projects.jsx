import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { personalInfo } from "../data/personalInfo"

const Projects = () => {

return (

<section id="projects" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a192f]">

  {/* BACKGROUND */}
  <div className="absolute inset-0 -z-10">
    <div className="w-full h-full bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#020c1b]" />

    {/* SOFT GLOW BLOBS */}
    <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-blue-500 opacity-20 blur-3xl rounded-full" />
    <div className="absolute bottom-20 right-10 w-[300px] h-[300px] bg-blue-400 opacity-20 blur-3xl rounded-full" />
  </div>

<div className="max-w-6xl mx-auto px-4">

<h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-300 to-blue-500 text-transparent bg-clip-text">
Projects
</h2>

<div className="grid md:grid-cols-2 gap-10">

{personalInfo.projects.map((project, index) => (

<motion.div
key={index}
initial={{ opacity: 0, y: 60 }}
whileInView={{ opacity: 1, y: 0 }}
animate={{ y: [0, -10, 0] }}   // 🔥 floating effect
transition={{ duration: 4, repeat: Infinity, delay: index * 0.2 }}
whileHover={{ scale: 1.05 }}
className="relative group"
>

{/* GLOW BORDER */}
<div className="absolute inset-0 rounded-2xl bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-300"></div>

{/* GLASS CARD */}
<div className="bg-white/5 backdrop-blur-xl border border-blue-500/20 rounded-2xl overflow-hidden shadow-xl transition duration-300">

{/* Project Image */}
<div className="overflow-hidden">
<img
src={project.image}
alt={project.title}
className="w-full h-52 object-cover transition duration-500 group-hover:scale-110"
/>
</div>

{/* Content */}
<div className="p-6">

<h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-400 transition">
{project.title}
</h3>

<p className="text-blue-200 mb-4 text-sm leading-relaxed">
{project.desc}
</p>

{/* Tech Stack */}
<div className="flex flex-wrap gap-2 mb-5">
{project.tech?.map((tech, i) => (
<span
key={i}
className="text-xs px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-400/20 rounded-full"
>
{tech}
</span>
))}
</div>

{/* Buttons */}
<div className="flex gap-4 opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 transition duration-300">

{/* GitHub */}
<a
href={project.github}
target="_blank"
rel="noopener noreferrer"
className="flex items-center gap-2 px-4 py-2 border border-blue-400 rounded-full hover:bg-blue-500 hover:text-white transition"
>
<Github size={18} />
GitHub
</a>

{/* Live Demo */}
{project.demo && (
<a
href={project.demo}
target="_blank"
rel="noopener noreferrer"
className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full hover:scale-105 transition"
>
<ExternalLink size={18} />
Live Demo
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

)

}

export default Projects