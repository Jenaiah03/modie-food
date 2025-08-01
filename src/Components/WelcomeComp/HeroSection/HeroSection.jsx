import profile1 from "../../../assets/profile1.jpg"
import profile2 from "../../../assets/profile2.jpg"
import profile3 from "../../../assets/profile3.jpg"
import Veggie2 from "../../../assets/veggie2.jpg"
import Veggie1 from "../../../assets/veggie1.jpg"
import Navbar from '../Navbar/Navbar'
import './heroSection.css'

const HeroSection = () =>  {
    return (

      <section className='Hero-Container'>
        <div className='hero-image'>
            <img src={Veggie2} alt="" className='hero-img' />
        </div>
        <div className='nav-control'>
            <Navbar/>
        </div>

        <div className='overall-hero-div'>
            <div className='left-text'>
                <h3 className="fresh-page"><span className="fresh-color">FRESH FOOD</span> WITH <br />GREAT TASTE</h3>
                <p>Delight in the goodness of fresh food rafted to perfection where every ingredient is handpicked for quality
                and flavour.With vibrant colors,crisp textures, and natural aromas ,each bite burst with the essence of farm-fresh produce
                </p>

                <div className='button'>
                    <button className="shop-btn">Shop Now</button>
                    <button className="order-button">Order</button>
                </div>

                <div className='profile-images'>
                    <img src={profile1} alt="profile1" className='profile-img' />
                    <img src={profile2} alt="profile2" className='profile-img' />
                    <img src={profile3} alt="profile3"  className='profile-img'/>
                </div>

                <div className='happy'>
                    <p className='happy-para'>45+ Happy Customers</p>
                    <p className='ratings'>4.5⭐⭐⭐⭐⭐</p>
                </div>
            </div>

            <div className="right-image">
                <img src={Veggie1} alt="vegetable" className="right-img" />
            </div>

        </div>
      </section>
    )
  }


export default HeroSection
