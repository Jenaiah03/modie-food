import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="footer-up-section">
            <div className="food">
                <div className="modie-info">
                    <i className="bi bi-cup-hot"></i>
                    <Link to='/'>
                        <a href="#" className="footer-title-link">
                            <span className="coffee2"> MODIE'S FOOD</span>
                        </a>
                    </Link>
                </div>
                <p className="footer-para">Quo totam asperiores, ipsam exercitationem eum soluta. Dolor a earum nemo autem repudiandae fugit sunt modi esse.</p>

                <div className="footer-icons">
                    <span className="span-icon"><i className="bi bi-cup-hot"></i></span>
                    <span className="span-icon"><i className="bi bi-cup-hot"></i></span>
                    <span className="span-icon"><i className="bi bi-cup-hot"></i></span>
                
                </div>

            </div>

            <div className="links">
                

                <div className="useful-control">
                    <h3 className="link-head">Useful Links</h3>
                    <ul className="useful-list">
                        <li className="center-item">
                            <Link to=''>
                                <a href="#" className="href-link">About Us</a>                        
                            </Link>
                        </li>
                        <li className="center-item">
                            <Link to=''>
                                <a href="" className="href-link">Our Chef</a>                        
                            </Link>
                        </li>
                        <li className="center-item">
                            <Link to=''>
                                <a href="" className="href-link">Privacy Policy</a>                        
                            </Link>
                        </li>
                        <li className="center-item">
                            <Link to=''>
                                <a href="" className="href-link">Our Sitemap</a>                        
                            </Link>
                        </li>       
                    </ul>
                </div>
            </div>

            

            <div className="links-2">
                <div className="useful-control">
                    <ul className="useful-list">
                        <li className="center-item">
                            <Link to=''>
                                <a href="#" className="href-link">Contact</a>                        
                            </Link>
                        </li>
                        <li className="center-item">
                            <Link to=''>
                                <a href="" className="href-link">Testimonies</a>                        
                            </Link>
                        </li>
                        
                    </ul>
                </div>

            </div>

            <div class="newsletter">
                <h3 class="news-head">Join Our Newsletter Now</h3>
                <p class="news-para">Get Email updates about latest shop and special offers</p>

                <form action="" class="form-control">
                    <input className='footer-input' type="email" placeholder='Enter your email'/>
                    <button class="subscribe-btn">Subscribe</button>
                </form>

            </div>
        </div>

        <hr className="footer-horizontal"/>

        <div className="copyright">
            <p className="copy-para">Copyright @2025 All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer