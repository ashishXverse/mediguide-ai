import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SymptomChecker from "./pages/SymptomChecker";

function App() {
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          Medi<span>Guide</span> AI
        </div>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Doctors</a>
          <a href="#">How it works</a>
          <button className="login-btn">Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <main>

        <section className="hero">

          <div className="hero-content">

            <div className="badge">
              🤖 AI-powered healthcare guidance
            </div>

            <h1>
              Understand your symptoms.
              <span> Find the right care.</span>
            </h1>

            <p>
              Describe your health problem and get guidance about
              possible health categories, appropriate medical
              specialties, and when to seek professional care.
            </p>

            <button className="primary-btn">
              Check Your Symptoms →
            </button>

            <p className="small-text">
              Your information is used only to provide healthcare guidance.
            </p>

          </div>

        </section>

        {/* Features */}
        <section className="features">

          <h2>How MediGuide AI helps</h2>

          <div className="feature-container">

            <div className="feature-card">
              <div className="icon">🩺</div>
              <h3>AI Health Guidance</h3>
              <p>
                Describe your symptoms and receive general
                health information to help you understand
                what type of medical care may be appropriate.
              </p>
            </div>

            <div className="feature-card">
              <div className="icon">👨‍⚕️</div>
              <h3>Find a Specialist</h3>
              <p>
                Get matched with relevant medical specialties
                based on the information you provide.
              </p>
            </div>

            <div className="feature-card">
              <div className="icon">🚨</div>
              <h3>Safety First</h3>
              <p>
                Identify warning signs that may require
                urgent professional medical attention.
              </p>
            </div>

          </div>

        </section>

        {/* Disclaimer */}
        <section className="disclaimer">
          <strong>Important:</strong> MediGuide AI provides
          general healthcare information and is not a substitute
          for professional medical diagnosis or treatment.
        </section>

      </main>

      {/* Footer */}
      <footer>
        <p>© 2026 MediGuide AI. Built for healthcare guidance.</p>
      </footer>

    </div>
  );
}

export default App;