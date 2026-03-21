import { motion } from "framer-motion"

export default function LeetcodeStats(){

return(

<section className="py-20 bg-gray-800">

<div className="max-w-6xl mx-auto px-4 text-center">

<motion.h2
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
className="text-4xl font-bold text-white mb-10"
>

LeetCode Stats

</motion.h2>

<motion.div
initial={{opacity:0,y:20}}
whileInView={{opacity:1,y:0}}
transition={{delay:0.2}}
className="flex justify-center"
>

<img
src="https://leetcard.jacoblin.cool/sneha_1120?theme=dark&font=Baloo"
alt="leetcode stats"
/>

</motion.div>

</div>

</section>

)

}