import { motion } from "framer-motion"

import {
  FaPython,
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaFileExcel
} from "react-icons/fa"

import { SiCplusplus, SiMongodb } from "react-icons/si"

const skills = [
  { name:"C++", icon:<SiCplusplus size={40}/> },
  { name:"Python", icon:<FaPython size={40}/> },
  { name:"Java", icon:<FaJava size={40}/> },
  { name:"React", icon:<FaReact size={40}/> },
  { name:"HTML", icon:<FaHtml5 size={40}/> },
  { name:"CSS", icon:<FaCss3Alt size={40}/> },
  { name:"JavaScript", icon:<FaJs size={40}/> },
  { name:"MongoDB", icon:<SiMongodb size={40}/> },
  {
    name:"Power BI",
    icon:(
      <svg width="40" height="40" viewBox="0 0 24 24" fill="#F2C811">
        <rect x="3" y="3" width="4" height="18"/>
        <rect x="10" y="8" width="4" height="13"/>
        <rect x="17" y="5" width="4" height="16"/>
      </svg>
    )
  },
  { name:"Excel", icon:<FaFileExcel size={40}/> },
  { name:"Machine Learning", icon:<FaPython size={40}/> }
]

export default function Skills(){

return(

<section id="skills" className="min-h-screen flex items-center justify-center px-4">

<div className="max-w-6xl w-full text-center">

<h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
Tech Stack
</h2>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8">

{skills.map((skill,index)=>(

<motion.div
key={index}
initial={{opacity:0,y:50}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.4,delay:index*0.05}}
whileHover={{scale:1.1}}
className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl flex flex-col items-center gap-4 shadow-xl group cursor-pointer"
>

{/* Icon */}
<div className="text-blue-400 group-hover:scale-110 transition">
{skill.icon}
</div>

{/* Name */}
<p className="font-medium text-gray-200">
{skill.name}
</p>

</motion.div>

))}

</div>

</div>

</section>

)

}