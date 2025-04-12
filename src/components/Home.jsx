import { useState, useEffect } from "react";

export default function HomeWelcome() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(1);
  }, []);

  return (
    <div className="relative w-full h-[85vh] flex items-center justify-start overflow-hidden px-6 md:px-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/CloudCore/5353146.jpg')",
          filter: "brightness(0.6)",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-0" />

      {/* Left Side Text Content */}
      <div
        className="relative z-10 text-left px-6 py-10 bg-black bg-opacity-40 rounded-xl shadow-2xl backdrop-blur-md max-w-xl animate-fade-in-up"
        style={{
          transition: "opacity 1.5s ease-in-out, transform 1.5s ease-in-out",
          opacity: opacity,
          transform: `translateY(${opacity ? "0" : "30px"})`,
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif drop-shadow-md">
          CloudCore IT Solutions
        </h1>

        <p className="text-lg md:text-xl text-blue-100 font-light mb-6">
        "All-in-One Tech Partner for Growing Enterprises."</p>

        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold text-md transition-all duration-300 transform hover:scale-105 shadow-lg">
          Get Started
        </button>
      </div>
    </div>
  );
}
