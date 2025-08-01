import React from 'react'
import RecipeHero from '../../Components/RecipeComp/RecipeHero/Recipehero'
import RecipeDownload from '../../Components/RecipeComp/RecipeDownload/RecipeDownload'





function Recipe() {
  return (
    <div className='recipe-container'>
      <div className='hero-Section'>
        <RecipeHero/>
      </div>

      <div className='download-Section'>
        <RecipeDownload/>
      </div>
      

    </div>
  )
}

export default Recipe
