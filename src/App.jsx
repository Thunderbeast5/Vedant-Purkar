import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProjectChatbot from './components/Chatbot';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ProjectDetail from './components/ProjectDetail';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="relative">
            <Navbar />
            <ProjectChatbot />
            {/* <BackToTop /> */}
            {/* <Hero /> */}
            <Skills />
            <About />
            <Services />
            <Projects />
            <Contact />
            <Footer />
          </div>
        }
      />
      <Route path="/project/:id" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;
