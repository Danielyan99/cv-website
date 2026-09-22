import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Experience } from "./sections/Experience";
import { Hero } from "./sections/Hero";

function App() {
  return (
    <div id="top">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default App;
