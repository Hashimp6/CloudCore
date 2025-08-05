import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import ServicesSection from "./components/Services";
import AboutSection from "./components/About";
import ContactUs from "./components/ContactUs";
import Portfolio from "./components/HashimCv";

function App() {
  return (
    <>
    
      <Routes>
        <Route
          path="/"
          element={
            <div>
                <Nav />
              <div id="home">
                <Home />
              </div>

              <div className="my-16" id="about">
                <AboutSection />
              </div>

              <div className="my-16" id="services">
                <ServicesSection />
              </div>

              <div className="my-16" id="contactUs">
                <ContactUs />
              </div>
            </div>
          }
        />
        <Route path="/Hashim" element={<Portfolio />} />
      </Routes>
    </>
  );
}

export default App;
