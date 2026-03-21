export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">

      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-xl font-bold">Sneha</h1>

        <div className="flex gap-6 text-sm">

          <a href="#home" className="hover:text-blue-400">Home</a>
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#certifications" className="hover:text-blue-400">Certifications</a>
          <a href="#experience" className="hover:text-blue-400">Experience</a>
          <a href="#academics" className="hover:text-blue-400">Academics</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>

        </div>

      </div>
    </nav>
  );
}