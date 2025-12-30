import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Services />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
