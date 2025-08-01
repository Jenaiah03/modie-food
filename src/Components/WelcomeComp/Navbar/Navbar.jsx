import { Link } from 'react-router-dom'
import './navbar.css'
import fryingpan from '../../../assets/frying-pan.png'

const Navbar = () => {
  
    return (
      <nav className='navbar'>
        <div className='logo-area'>
        <img className="frypan"src={fryingpan} alt="fryingpan" />
        <h5><span className='modie-logo'>MODIE'S FOOD</span></h5>
        </div>
      {/* ul tags should always be in a div tag */}
      <div>
        <ul className='navbar-links'>

            <li>
              <Link to='/' className='link'>
              <a href="" className='nav-links'>Home</a>
              </Link>
            </li>

            <li>
              <Link to='/recipes' className='link'>
                <a href="" className='nav-links'>Recipes</a>
              </Link>
            </li>

            <li>
              <Link to='/lifestyle' className='link'>
                <a href="" className='nav-links'>Healthy Lifestyle</a>
              </Link>
            </li>

            <li>
              <Link to='/' className='link'>
                <a href="" className='nav-links'>About Us</a> 
              </Link>
            </li>

          </ul>
        </div>
          <div className='left-hand'>
            <div className="top-nav-icons">
              <i className="fas fa-search"></i>
              <i className="fas fa-shopping-bag"></i>
              <i className="fas fa-user"></i>
            </div>
            <div className='navbar-link'>
              <a href="" className='nav-link'>Login or Register</a>
            </div>
        </div>
      </nav>
    )
  }


export default Navbar
