import React from 'react'
import LifestyleHero from '../../Components/LifestyleComp/LifestyleHero/LifestyleHero'
import Footer from '../../Components/WelcomeComp/Footer/Footer'

const Lifestyle = () => {
  return (
    <div className='lifestyle-container'>
      <div className='hero-lifestyle'>
        <LifestyleHero/>
      </div>

      <div className='hero-lifestyle'>
        <Footer/>
      </div>
    </div>
  )
}

export default Lifestyle
