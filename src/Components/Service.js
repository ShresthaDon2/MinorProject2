import React from 'react'
import Front from './Navbar'
import Hero from './Hero'
import './css/ServiceForm.css'
const Service = () => {
  return (
    <div>
      <Front/>
      <Hero
        cName="hero-mid"
        heroImg={require('../assests/4.jpg')}
        title="Services"
        btnClass="hide"
        />
        <div className='service-container1'>
      <h1>Our Services</h1>
      <p>Welcome to our travel partner app! We offer a variety of services to help you plan and book your next trip.</p>
      <div className="container1">
      <div className="contactInfo1">
        <div className="box1">
          <div className="icon1"><i class="fa-solid fa-magnifying-glass"></i></div>
          <div className="text1">
            <h3>Search Destination</h3>
            <p> It allows users to input specific criteria, such as location names, and receive relevant destination suggestions.</p>
          </div>
        </div>
        <div className="box1">
          <div className="icon1"><i class="fa-solid fa-users"></i></div>
          <div className="text1">
            <h3>Finding Users</h3>
            <p> It's feature enables users to locate and connect with other users within a web application</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    
  )
}

export default Service
