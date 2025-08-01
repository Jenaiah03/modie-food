import React from 'react'
import HeroSection from '../../Components/WelcomeComp/HeroSection/HeroSection'
import Serve from '../../Components/WelcomeComp/Serve/Serve'
import Amazing from '../../Components/WelcomeComp/Amazing/Amazing'

function Welcome() {
  return (
    
      <div className='welcome-container'>
        <div className='hero-control'>
        <HeroSection/>
        </div>


        <div className='serve-control'>
            <Serve/>
        </div>

        <div className='amazing-control'>
            <Amazing/>
        </div>
      </div>

  )
}

export default Welcome
