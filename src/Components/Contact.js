import React from 'react'
import Front from './Navbar'
import Hero from './Hero'
import './css/ContactForm.css'
const Contact = () => {
  return (
    <div>
     <Front/>
      <Hero
        cName="hero-mid"
        heroImg={require('../assests/5.jpg')}
        title="Contact Us"
        btnClass="hide"
        />
        <div className='form-container'>
        <h1>Get in Touch</h1>
        <h1> Reach us</h1>
    <div className="container">
      <div className="contactInfo">
        <div className="box">
          <div className="icon"><i class="fa-solid fa-address-book"></i></div>
          <div className="text">
            <h3>Address</h3>
            <p>Chyasal,Lalitpur</p>
          </div>
        </div>
        <div className="box">
          <div className="icon"><i class="fa-solid fa-phone"></i></div>
          <div className="text">
            <h3>Phone</h3>
            <p>9812345675</p>
          </div>
        </div>
        <div className="box">
          <div className="icon"><i class="fa-regular fa-envelope"></i></div>
          <div className="text">
            <h3>Email</h3>
            <p>Travelpartner@gmail.com</p>
          </div>
        </div>

      </div>
    </div>
    </div>
    </div>
  )
}

export default Contact
