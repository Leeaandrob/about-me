import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200" role="main">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Certifications />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;
