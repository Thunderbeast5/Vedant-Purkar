import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import SpeakersSection from './components/SpeakersSection';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Skills />
      <SpeakersSection />
    </div>
  )
}

export default App
