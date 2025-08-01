import React, { Component } from 'react'
import './lifestyleHero.css'
import lifestyle1 from '../../../assets/Lifestyle1.jpg'
import lifestyle2 from '../../../assets/Lifestyle2.jpg'
import lifestyle3 from '../../../assets/Lifestyle3.jpg'

const LifestyleHero = () => {
    return (
    <div className='Healthy-Container'>
        <h3>Healthy Lifestyle</h3>
        <p className='intro-text'>A healthy food lifestyle is not a short-term diet but a lifelong commitment to better choices for physical,mental, and emotional well-being</p>

        <div className='lifestyle-section'>
        <div className='health-grid'>
            <img src={lifestyle1} alt="health1" className='health-img' />
                <div className='under-health'>
                    <h4><span>HEALTHY HABIT</span></h4>
                    <h5>20 Foods Roto-Rooster Wishes You'd Stop Putting Down Your Sink</h5>
                        <div className='health-text'>
                            <p>April 22,2025</p>
                            <p>0 comments</p>
                        </div>
                </div>
        </div>

        <div className='health-grid'>
            <img src={lifestyle2} alt="health1" className='health-img' />
                <div className='under-health'>
                    <h4><span>HEALTHY COOKING</span></h4>
                    <h5>The Suprising Reason Onions Make You Cry Plus Tips to Reduce Tears</h5>
                        <div className='health-text'>
                            <p>April 22,2025</p>
                            <p>5 comments</p>
                        </div>
                </div>
        </div>

    <div className='health-grid'>
            <img src={lifestyle3} alt="health1" className='health-img' />
                <div className='under-health'>
                    <h4><span>DIABETES</span></h4>
                    <h5>The best time to eat dinner for insulin resistance according to experts</h5>
                        <div className='health-text'>
                            <p>April 22,2025</p>
                            <p>12 comments</p>
                        </div>
                </div>
        </div>
    </div>
    
    <div className="features">
        <div className="feature-box">
            <i className="feature-icon fas fa-truck-fast"></i>
            <h4 className='feature-head'>Free Shipping</h4>
            <p className='feature-text'>Free shipping on all Nigeria order and order above ₦100,000</p>
        </div>
        <div className="feature-box">
            <i className="feature-icon fas fa-headset"></i>
            <h4 className='feature-head'>24×7 Support</h4>
            <p className='feature-text'>Contact us 24 hours daily, 7 days a week</p>
        </div>
        <div className="feature-box">
            <i className="feature-icon fas fa-rotate-left"></i>
            <h4 className='feature-head'>30 Days Return</h4>
            <p className='feature-text'>Simply return it within 30 days for an exchange</p>
        </div>
        <div className="feature-box">
            <i className="feature-icon fas fa-shield-alt"></i>
            <h4 className='feature-head'>Payment Secure</h4>
            <p className='feature-text'>Your payment is 100% safe</p>
        </div>
    </div>
    </div>
    )
}


export default LifestyleHero  
