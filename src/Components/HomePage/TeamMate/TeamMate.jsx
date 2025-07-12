import React from "react";
import { User } from "lucide-react";
import bannerImage from "../../../assets/banner/meet the team.png"
const teamMembers = [
  {
    name: "Vedant Khambadkar",
    role: "MERN Stack Developer",
    description:
      "Expert in MongoDB, Express, React, Node.js. Handles backend, frontend, and deployment with a focus on clean architecture and performance.",
  },
  {
    name: "Pratiksha",
    role: "Frontend Developer",
    description:
      "Specializes in responsive design and React-based development. Focuses on pixel-perfect implementation and fast-loading user interfaces.",
  },
  {
    name: "Shreyash Wadhai",
    role: "Backend & API Integration",
    description:
      "Expert in Node.js and database management. Ensures your app runs securely, efficiently, and can scale as your business grows.",
  },
  {
    name: "Harshal Raghatate",
    role: "Backend & API Integration",
    description:
      "Expert in Node.js and database management. Ensures your app runs securely, efficiently, and can scale as your business grows.",
  },
];

const TeamSection = () => {
  return (
    <div className="bg-[#262626] text-white mt-20 border border-[#333]">
      {/* Banner Section */}
     <section className="bg-gradient-to-b from-[#0f0f0f] via-[#121212] to-[#0f0f0f] py-24 px-4 text-center relative overflow-hidden">
      
      {/* 🔹 Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
        style={{ backgroundImage: `url(${bannerImage})` }}
      />

      {/* 🔹 Radial Pattern Overlay */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:20px_20px] opacity-10 z-10" />

      {/* 🔹 Foreground Content */}
      <div className="max-w-4xl mx-auto relative z-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Meet the Team</h2>
        <p className="text-gray-300 leading-relaxed">
          At SquareUp, we take pride in delivering exceptional digital products and services
          that drive success for our clients. Here’s what some of our satisfied clients have to
          say about their experience working with us
        </p>
      </div>
    </section>

      {/* Cards Section */}
      <section className=" mx-auto grid md:grid-cols-2 ">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-[#1a1a1a] p-24 border border-[#333]">
            <div className="flex items-start space-x-4">
              <div className="bg-[#b4ff9f1a] p-2 rounded">
                <User className="text-[#b4ff9f] w-10 h-10" />
              </div>
              <div>
                <h3 className="text-[#b4ff9f] font-semibold text-lg">
                  {member.name} — {member.role}
                </h3>
                <p className="text-gray-400 mt-2 text-sm">{member.description}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TeamSection;
