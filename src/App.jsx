import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Hobbies from './components/Hobbies';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import GithubStats from './components/GithubStats';
import LeetcodeStats from './components/LeetcodeStats';
import Academics from './components/Academics';
import Contact from './components/Contact';
import Training from './components/Training';

function App() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">

      <Navbar />

      <Hero />
      <About />
      <Hobbies />
      <Skills />
      <Projects />
      <Achievements />
      <Certifications />
      <Experience />
      <GithubStats />
      <LeetcodeStats />
      <Academics />
      <Contact />

    </div>
  );
}

export default App;