import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
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
      </main>
      <Footer />
    </div>
  );
}

export default App;
