import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Coursework from "./components/Coursework";
import Strengths from "./components/Strengths";
import CareerInterests from "./components/CareerInterests";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";
import Chatbot from "./components/Chatbot";
import "./App.css";

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="portfolio-app">
      {/* Sticky Top Navbar */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Coursework />
        <Strengths />
        <CareerInterests />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* AI Portfolio Chatbot */}
      <Chatbot />
    </div>
  );
}
