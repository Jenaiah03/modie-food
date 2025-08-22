import React from 'react'
import RecipeHero from '../../Components/RecipeComp/RecipeHero/Recipehero'
import RecipeDownload from '../../Components/RecipeComp/RecipeDownload/RecipeDownload'
import Footer from '../../Components/WelcomeComp/Footer/Footer'





function Recipe() {
  return (
    <div className='recipe-container'>
      <div className='hero-Section'>
        <RecipeHero/>
      </div>

      <div className='download-Section'>
        <RecipeDownload/>
      </div>
      
      <div className='download-Section'>
        <Footer/>
      </div>
    </div>
  )
}

export default Recipe
