
import { Navbar } from './components/Layout/Navbar';
import { Hero } from './components/Sections/Hero';
import { About } from './components/Sections/About';
import { Experience } from './components/Sections/Experience';
import { Skills } from './components/Sections/Skills';
import { Languages } from './components/Sections/Languages';
import { Projects } from './components/Sections/Projects';
import { Contact } from './components/Sections/Contact';
import { Footer } from './components/Sections/Footer';

function App() {


  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Languages />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
