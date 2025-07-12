import React from "react";
import { FaUsers, FaRegHandshake, FaBullseye, FaRocket } from "react-icons/fa";
import bannerImage from "../../../assets/banner/wht choose Agency texture.png"
// Card Component
const AboutCard = ({ title, description, icon }) => {
  return (
    <div className="bg-[#1a1a1a] p-6 md:p-8 border border-[#333] hover:shadow-lg transition duration-300">
      <div className="mb-7 mt-8">
        <div className="w-10 h-10 bg-lime-500/10 text-lime-400 flex items-center justify-center rounded">
          {icon}
        </div>
      </div>
      <h3 className="text-white text-lg font-semibold mb-5">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line mb-8">{description}</p>
    </div>
  );
};

// Main Section
const WhyChooseUs = () => {
  const cards = [
    {
      title: "Who We Are",
      description: `We are a passionate team of developers and designers dedicated to crafting beautiful, high-performance websites and web applications.
Founded by a MERN stack developer with a vision to simplify the digital journey for businesses, our agency is built on creativity, collaboration, and technical excellence.`,
      icon: <FaRocket className="text-lg" />,
    },
    {
      title: "Why We Started",
      description: `In today’s digital world, every business needs a powerful online presence.
We started this agency to help startups, small businesses, and growing brands build modern, fast, and user-friendly websites — without the stress of managing the technical side. Our goal is to make technology work for you.`,
      icon: <FaUsers className="text-lg" />,
    },
    {
      title: "Our Mission",
      description: `Innovation-First: We use the latest technologies to future-proof your website.
Clear Communication: We work closely with you at every step.
Client-Focused: Your goals guide everything we build.
Mobile-Ready: All our solutions are responsive by default.`,
      icon: <FaBullseye className="text-lg" />,
    },
    {
      title: "Collaborative Partnership",
      description: `We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.`,
      icon: <FaRegHandshake className="text-lg" />,
    },
  ];

  return (
    <section className="bg-[#1a1a1a] w-full text-white mt-25 border border-[#333]">
      {/* Banner */}
   <section className="relative w-full py-20 overflow-hidden">

      {/* 🔹 Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
        style={{ backgroundImage: `url(${bannerImage})` }}
      />

      {/* 🔹 Foreground Text */}
      <div className="relative z-10 max-w-5xl mx-auto text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Why Choose AGENCY?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.
        </p>
      </div>
      
    </section>

      {/* Card Grid */}
      <div className="grid md:grid-cols-2   mx-auto">
        {cards.map((card, index) => (
          <AboutCard
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
