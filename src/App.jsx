import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Services from './components/Services';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Services />
    </div>
  )
}

export default App
