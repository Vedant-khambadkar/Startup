import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import HeroSection from '../../Components/HomePage/HeroSection/Herosection'
import OurServices from '../../Components/HomePage/OurService/OurServiceBanner'
import WhyChooseUs from '../../Components/HomePage/WhyChooseAgency/WhyChooseAgency'
import TeamSection from '../../Components/HomePage/TeamMate/TeamMate'
import ContactSection from '../../Components/HomePage/ContactSection/ContactSection'

function HomePage() {
  return (
    <>
    <div className= "bg-[#1a1a1a] w-full" >
      {/* Navbar stays full width */}
  
      {/* All content centered and 80% wide */}
     
        <HeroSection />
        <OurServices />
        <WhyChooseUs />
        <TeamSection />
        <ContactSection />
    
      </div>
    </>
  )
}

export default HomePage
