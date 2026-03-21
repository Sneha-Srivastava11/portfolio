import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import fintrackImg from "../assets/fintrack.png"

export default function FinTrack(){

return(

<section className="min-h-screen px-6 py-20 max-w-5xl mx-auto">

<Link to="/" className="flex items-center gap-2 text-sky-400 mb-6">
<ArrowLeft size={20}/>
Back
</Link>

<h1 className="text-4xl font-bold mb-6">
FinTrack Expense Tracker
</h1>

<img
src={fintrackImg}
className="rounded-lg shadow-lg mb-8"
/>

<p className="text-gray-300 mb-8">
FinTrack is a smart expense tracking system that helps users manage
their daily spending. It allows users to categorize expenses and
visualize financial trends through dashboards.
</p>

</section>

)

}