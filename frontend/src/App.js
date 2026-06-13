import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PWAInstallPrompt from "./components/PWAInstallPrompt";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Teachings from "./pages/Teachings";
import LineageComplete from "./pages/LineageComplete";
import Literature from "./pages/Literature";
import Gallery from "./pages/Gallery";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import Disclaimer from "./pages/Disclaimer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <PWAInstallPrompt />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/teachings" element={<Teachings />} />
          <Route path="/lineage" element={<LineageComplete />} />
          <Route path="/literature" element={<Literature />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
