import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
const Front = () => {
  return (
    <div>
        <Navbar/>
      <Hero
        cName="hero"
        heroImg={require('../assests/6.jpg')}
        title="Explore Together, Journey Forever - Your Perfect Travel Partner!"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
        />
    </div>
  )
}

export default Front
