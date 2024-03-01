import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import './css/AboutUs.css'
const About = () => {
  return (
    <div>
      <Navbar/>
      <Hero
        cName="hero-mid"
        heroImg={require('../assests/5.jpg')}
        title="About"
        btnClass="hide"
        />
        <div className="about-container">
        <p>Welcome to Travel Partner, where the world is your playground and every journey is an opportunity for discovery. Our story is one fueled by a love for exploration and a desire to redefine the way you experience travel. Conceived by a group of passionate travelers, Travel Partner emerged from the vision of creating more than just a travel planning platform; we aimed to build a community that shares the excitement of discovering new horizons.</p>
      <p>At Travel Partner, we understand that every traveler is unique, with their own set of dreams and preferences. Our mission is to empower you to embark on journeys that resonate with your individuality. Whether you're seeking cultural immersion, thrilling adventures, or serene getaways, we're here to curate personalized travel experiences tailored to your desires.</p>
    </div>
    </div>
  )
}

export default About;
