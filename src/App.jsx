import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import ServicesSection from "./components/Services";
import AboutSection from "./components/About";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div>
      <Nav />
      <div id="home">
        <Home />
      </div>

      {/* Gap between Home and About */}
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
  );
}

export default App;
