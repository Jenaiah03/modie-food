import Phone from '../../../assets/PhoneRecipe.jpg'
import './recipeDownload.css'
import apple from '../../../assets/apple.png'
import playStore from '../../../assets/playstore.png'


const RecipeDownload = () => {

    return (
      <section className='download-sector'>
        <div className='first-sector'>
          <h1>Download Our App On Play Store</h1>
          <p>Very happy to say that we are available In app store and google play. We always try to touch out you very fast and order your best foods</p>

          <div className='download-btn'>
            <button className='btn-item'>
              <img src={apple} alt="" />

              <div className='btn-text'>
                <p>Download on the</p>
                <h3> <span className='text-span'>App Store</span></h3>
              </div>
            </button>
            <button className='btn-item2'>
              <img src={playStore} alt="" />
              <div className='btn-text2'>
                <p>Get it on </p>
                <h3><span className='text-span'>Google Store</span></h3>
              </div>
            </button>
          </div>
        </div>

        <div className='second-sector'>
            <img src={Phone} alt="phone image" className='phone-img' />
        </div>
      </section>
    )
  }


export default RecipeDownload