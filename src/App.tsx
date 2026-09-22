import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <div id="top">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <p className="container">Sections are added next.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
