import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ScrollProgressBar } from "./components/ScrollProgressBar";
import { Contact } from "./sections/Contact";
import { Experience } from "./sections/Experience";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { WorkWithMe } from "./sections/WorkWithMe";

function App() {
  return (
    <div id="top">
      <ScrollProgressBar />
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <WorkWithMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
