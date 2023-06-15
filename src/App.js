import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Project from './components/Project';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <NavBar />
      <About />
      <Project />
      <Skills />
      <Testimonial />
      <Contact />
    </main>
  );
}

export default App;
