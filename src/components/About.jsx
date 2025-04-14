import React from "react";

const AboutSection = () => {
  return (
    <div
      className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 px-6"
      id="about"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          About <span className="text-blue-400">CloudCore</span>
        </h2>
        <p className="text-lg mb-8 leading-relaxed">
          <span className="text-blue-300 font-semibold">CloudCore</span> is a
          passionate, dynamic IT solutions company dedicated to empowering
          businesses in the digital world. We believe that technology isn’t just
          about tools — it’s about creating meaningful experiences, impactful
          brands, and innovative solutions that drive real growth.
        </p>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-slate-700 p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-300 mb-2">
              Our Vision
            </h3>
            <p>
              To be a trusted digital partner for businesses, delivering smart,
              future-ready solutions that blend creativity, technology, and
              strategy — making a difference in people’s lives through
              innovation.
            </p>
          </div>
          <div className="bg-slate-700 p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-300 mb-2">
              Why Choose Us?
            </h3>
            <ul className="list-disc ml-5 space-y-2">
              <li>Client-first approach with a deep focus on quality</li>
              <li>Innovative and tailor-made solutions</li>
              <li>
                A passionate team of designers, developers, and strategists
              </li>
              <li>Transparent communication and reliable support</li>
            </ul>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-md text-gray-400 italic">
            “At CloudCore, we don’t just build projects — we build
            partnerships.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
