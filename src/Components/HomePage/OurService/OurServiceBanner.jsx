import React from "react";
import {
  FaPencilRuler,
  FaPuzzlePiece,
  FaRocket,
  FaShoppingCart,
  FaTools,
} from "react-icons/fa";
import Banner from "../../../assets/banner/servicess.png"

const services = [
  {
    title: "Website Design",
    description:
      "We create visually stunning and user-centric website designs that capture your brand’s essence. Our design philosophy focuses on clean layouts, intuitive navigation, and responsive visuals to ensure your users have an engaging experience across all devices.",
    icon: <FaPencilRuler size={22} />,
  },
  {
    title: "Website Development",
    description:
      "Whether it’s a static site or a dynamic web app, we bring your ideas to life using modern frameworks and clean code. Our development ensures fast-loading pages, mobile compatibility, and smooth user interactions using the MERN stack and other robust technologies.",
    icon: <FaPuzzlePiece size={22} />,
  },
  {
    title: "Landing Pages",
    description:
      "High-converting landing pages built for campaigns, promotions, or product launches. We combine strategic content placement, compelling CTAs, and fast loading times to boost lead generation and sales.",
    icon: <FaRocket size={22} />,
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Ready to sell online? We develop secure, user-friendly e-commerce stores with custom features like product filters, cart management, and payment gateways. From single-product sites to complex marketplaces – we build scalable platforms that convert.",
    icon: <FaShoppingCart size={22} />,
  },
  {
    title: "Custom Web Applications",
    description:
      "Need a tailored solution beyond a regular website? We build custom web apps — from admin dashboards to SaaS platforms — designed specifically for your workflows and business needs.",
    icon: <FaTools size={22} />,
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-[#1a1a1a] text-white mt-25 border border-[#333]">
      {/* Banner */}
      <div className="relative py-24 overflow-hidden">
        {/* Optional background overlay */}
        <div   className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-20 z-0"
  style={{ backgroundImage: `url(${Banner})` }}/>
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transform your brand with our innovative digital solutions that
            captivate and engage your audience.
          </p>
        </div>
      </div>

      {/* Service Grid */}
      <div className=" mx-auto pb-20  ">
        {/* Top row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3  mb-6">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
        {/* Bottom row - 2 cards */}
     
      </div>
    </section>
  );
};

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-[#1a1a1a] w-auto p-6 md:p-8  border border-[#333] hover:shadow-xl transition duration-300 flex flex-col justify-between h-auto">
      <div>
        {/* Icon Container */}
        <div className="mb-9">
          <div className="w-10 h-10 bg-lime-500/10 text-lime-400 flex items-center justify-center rounded">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-white text-2xl font-semibold mb-6">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-6 ">
          {description}
        </p>
      </div>

      {/* Button */}
      <button className="mt-6 w-full py-2 text-sm font-medium rounded bg-[#2a2a2a] text-white hover:bg-[#3a3a3a] transition">
        Learn More
      </button>
    </div>
  );
};

export default ServicesSection;
