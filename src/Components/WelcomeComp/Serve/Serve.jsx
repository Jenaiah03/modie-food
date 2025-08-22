import './serve.css'
import tomato from '../../../assets/tomatoes.jpg'
import strawberry from '../../../assets/strawberries.jpg'
import apple from '../../../assets/apples.jpg'

const Serve = () => { 
  
    return (
      <section className='serve-container'>
        <div className='right-side'>

          <div className='up-text'>
            <h2>We Serve and Deliver Delectable Food</h2>
            <p>What are The Restaurants Operating hours?</p>
            <p className='faint-text'> It is a long established fact that a reader will be distracted from the readable content of a a page when looking</p>
          </div>

          <hr />

          <h2>Don't Miss This Offer</h2>

          <div className='countdown-container'>

            <div className="time-box">
              <span className="number">19</span><br />
              <hr />
              <span className="label">DAYS</span><br />
            </div>

            <div className="time-box">
              <span className="number">12</span><br />
              <hr />
              <span className="label">HRS</span><br />
            </div>

            <div className="time-box">
              <span className="number">09</span><br />
              <hr />
              <span className="label">MINS</span><br />
            </div>

            <div className="time-box">
              <span className="number">52</span><br />
              <hr />
              <span className="label">SECS</span><br />
            </div>
          </div>
          <div className='order-button2'>
            <button className='order-btn'>Order Now</button>
          </div>
          
        </div>

        <div className='product-side'>
            <div className='product-fruit'>
              <img src={tomato} alt="tomato" className='product-img' />
              <div className='product-text'>
                <h4>⭐⭐⭐⭐⭐</h4>
                <div className='text-product'>
                  <h4>Organic Tomato Vegetable</h4>
                  <h5><span className='stock'>IN STOCK</span></h5>
                  <h6>(ko)</h6>
                    <div className='price'>
                      <h6>₦4000</h6>
                      <h6>₦2500</h6>
                    </div>
                </div>
              </div>
          </div>
        

          <div className='product-fruit'>
            <img src={strawberry} alt="strawberry" className='product-img' />
              <div className='product-text'>
                <h4>⭐⭐⭐⭐⭐</h4>
                  <div className='text-product'>
                    <h4>Fresh Forest Berries</h4>
                    <h5><span className='stock'>IN STOCK</span></h5>
                    <h6>(ko)</h6>
                    <div className='price'>
                      <h6>₦5000</h6>
                      <h6>₦6000</h6>
                    </div>
                  </div>
              </div>
          </div>

          <div className='product-fruit'>
            <img src={apple} alt="apple" className='product-img' />
              <div className='product-text'>
                <h4>⭐⭐⭐⭐⭐</h4>
                  <div className='text-product'>
                    <h4>Apple</h4>
                    <h5><span className='stock'>IN STOCK</span></h5>
                    <h6>(ko)</h6>
                    <div className='price'>
                      <h6>₦6000</h6>
                      <h6>₦5000</h6>
                    </div>
                  </div>
              </div>
          </div>

        </div>

      </section>
    )
  }


export default Serve
