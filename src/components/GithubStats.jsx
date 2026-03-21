import { motion } from "framer-motion"

export default function GithubStats() {

return(

<section className="py-20 bg-gray-900">

<div className="max-w-6xl mx-auto px-4 text-center">

<motion.h2
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
className="text-4xl font-bold text-white mb-12"
>

GitHub Stats

</motion.h2>

<div className="flex flex-col items-center gap-8">

<img
src="https://github-readme-stats.vercel.app/api?username=Sneha-Srivastava11&show_icons=true&theme=tokyonight"
alt="GitHub Stats"
/>

<img
src="https://github-readme-streak-stats.herokuapp.com/?user=Sneha-Srivastava11&theme=tokyonight"
alt="GitHub Streak"
/>

<img
src="https://github-readme-stats.vercel.app/api/top-langs/?username=Sneha-Srivastava11&layout=compact&theme=tokyonight"
alt="Top Languages"
/>

</div>

</div>

</section>

)

}