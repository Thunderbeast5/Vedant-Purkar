import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
// import SpeakersSection from './components/SpeakersSection';
import About from './components/About';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Skills />
      <About />
      {/* <SpeakersSection /> */}
    </div>
  )
}

export default App
