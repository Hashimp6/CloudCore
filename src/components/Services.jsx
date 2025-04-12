import React from "react";
import { ChevronRight } from "lucide-react";

// Sample service data
const servicesData = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Custom website development tailored to your business needs with responsive design and modern technologies.",
    image: "./website.jpg",
  },
  {
    id: 2,
    title: "Mobile Applications",
    description:
      "Native and cross-platform mobile app development for iOS and Android with intuitive user interfaces.",
    image: "./app.jpg",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "User-centric design focusing on creating engaging and intuitive experiences that convert visitors into customers.",
    image: "./ui.jpg",
  },
  {
    id: 4,
    title: "Digital Marketing",
    description:
      "Strategic digital marketing services to increase your online presence and drive qualified traffic to your business.",
    image: "./digital.jpg",
  },
  {
    id: 5,
    title: "Branding",
    description:
      "Scalable cloud infrastructure setup and management to optimize your business operations and data security.",
    image: "./brand.jpg",
  },
  {
    id: 6,
    title: "IT Consulting",
    description:
      "Expert guidance on technology solutions that align with your business goals and drive digital transformation.",
    image: "./consulting.jpg",
  },
];

const ServiceCard = ({ service, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="mb-8">
      {/* Main card container with hover effects */}
      <div className="flex flex-col lg:flex-row relative bg-white hover:bg-blue-100 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
        {/* Image container - taking 1/3 of the space */}
        <div
          className={`w-full lg:w-1/3 relative ${
            isEven ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div className="w-full h-[300px] lg:h-[280px] overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-125 origin-center"
            />
          </div>
        </div>

        {/* Content section - taking 2/3 of the space */}
        <div
          className={`w-full lg:w-2/3 p-8 flex flex-col justify-center ${
            isEven ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <h3 className="text-2xl font-bold mb-4 text-blue-600 transition-transform duration-300 group-hover:translate-x-2">
            {service.title}
          </h3>

          <p className="mb-6 text-gray-700">{service.description}</p>

          <div className="mt-auto">
            <button className="flex items-center space-x-2 group/btn bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-all duration-300">
              <span>Learn More</span>
              <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className={`h-1 w-1/3 bg-blue-500 mt-1 ${isEven ? "ml-0" : "ml-auto"}`}
      ></div>
    </div>
  );
};

export default function ServicesSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="relative mb-16 text-center">
          <h2 className="text-4xl font-bold relative z-10 inline-block mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <div className="w-12 h-1 bg-blue-400 mx-auto mt-1"></div>
        </div>

        <div className="space-y-4">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
