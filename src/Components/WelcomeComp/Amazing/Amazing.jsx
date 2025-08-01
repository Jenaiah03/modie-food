import './amazing.css'
import chef from '../../../assets/chef.jpg'
import cooKpot from '../../../assets/cookpot.jpg'


const Amazing = () => {
    return (
      <div className='amazing-container'>
        <div className='right-amazing'>
          <img src={chef} alt="chef" className='amazing-img' />
        </div>

        <div className='left-amazing'>
          <p><span className='food'>Learn About King'sfood</span></p>
          <h3 className='text'>Amazing & Quality Food For Your Good Health</h3>
          <p className='paragraph'>As a self-proclaimed foodie and fitness enthusiast, I have passion for cooking and a huge desire to show that living a healthy lifestyle can actually be easy and fun! Feel free to use the meal guide above to find your new favorite meal ideas or the dietary guides to narrow things down even more!</p>

            <div className='btn'>
              <button className='explore-btn'>Explore Us</button>
              <button className='popular-btn'>Popular Menu</button>
            </div>

            <div className='segment'>
              <div className='first-segment'>
                <img  className="pot-style"src={cooKpot} alt="pot" />
                <h4>Best Quality Food</h4>
                <p>Our talented chefs craft each dish precision sourcing</p>
              </div>

              <div className='second-segment'>
                <img  className="pot-style" src={cooKpot} alt="pot" />
                <h4>Experience Chefs</h4>
                <p>Our talented chefs craft each dish precision sourcing</p>
              </div>

              
            </div>
        </div>
      </div>
    )
  }


export default Amazing
