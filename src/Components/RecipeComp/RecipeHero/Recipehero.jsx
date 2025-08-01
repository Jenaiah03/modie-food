import React, { Component } from 'react'

import './recipehero.css'
import recipe1 from '../../../assets/Recipe1.jpg'
import recipe2 from '../../../assets/Recipe2.jpg'
import recipe3 from '../../../assets/Recipe3.jpg'
import recipe4 from '../../../assets/Recipe4.jpg'
import recipe5 from '../../../assets/Recipe5.jpg'
import recipe6 from '../../../assets/Recipe6.jpg'
import recipe7 from '../../../assets/Recipe7.jpg'
import recipe8 from '../../../assets/Recipe8.jpg'
import cookpot from "../../../assets/cook-Pot 2.png"
import cookPot from "../../../assets/cookpot.jpg"



const RecipeHero = () => {
 
    return (
    <section>
      <div className='menu-container'>
        <div className='menu-bar'>
          <img  className="menu-image" src={cookpot} alt="" />
          <h5>FOODS MENU</h5>
          <img  className="menu-image"src={cookpot} alt="" />
        </div>
        <h2>Choose Your Best Menus</h2>

        <div className='menu-buttons'>
            <button><img  className='hotpot'src={cookpot} alt="" />Recommend</button>
            <button><img  className='hotpot'src={cookPot} alt="" />Breakfast</button>
            <button><img  className='hotpot'src={cookPot} alt="" />Lunch</button>
            <button><img className='hotpot'src={cookPot} alt="" />Dinner</button>
        </div>
      </div>

      <div className='menu-grid'>

        <div className='menu-item'>
          <img src={recipe1}alt="food" className='grid-img'/>
          <div className='menu-text'>
            <h4>⭐⭐⭐⭐⭐</h4>
            <h5>Organic Tomato Salad</h5>
            <h5>₦8,000</h5>
          </div>
        </div>

        <div className='menu-item'>
          <img src={recipe3}alt="food" className='grid-img'/>
          <div className='menu-text'>
            <h4>⭐⭐⭐⭐⭐</h4>
            <h5>Sushi</h5>
            <h5>₦30,000</h5>
          </div>
        </div>

        <div className='menu-item'>
          <img src={recipe7}alt="food" className='grid-img'/>
          <div className='menu-text'>
            <h4>⭐⭐⭐⭐⭐</h4>
            <h5>Spagetti & Cheese</h5>
            <h5>₦15,000</h5>
          </div>
        </div>
       
        <div className='menu-item'>
          <img src={recipe5}alt="food" className='grid-img'/>
          <div className='menu-text'>
            <h4>⭐⭐⭐⭐⭐</h4>
            <h5>Bolognese</h5>
            <h5>₦20,000</h5>
          </div>
        </div>
    
         <div className='menu-item'>
            <img src={recipe4}alt="food" className='grid-img'/>
            <div className='menu-text'>
              <h4>⭐⭐⭐⭐⭐</h4>
              <h5>Prawn & Sauce</h5>
              <h5>₦40,000</h5>
            </div>
        </div>

        <div className='menu-item'>
          <img src={recipe6}alt="food" className='grid-img'/>
          <div className='menu-text'>
            <h4>⭐⭐⭐⭐⭐</h4>
            <h5>Salmon Steak</h5>
            <h5>₦40,000</h5>
          </div>
        </div>

        <div className='menu-item'>
          <img src={recipe2}alt="food" className='grid-img'/>
          <div className='menu-text'>
            <h4>⭐⭐⭐⭐⭐</h4>
            <h5>Ramen & Egg</h5>
            <h5>₦12,000</h5>
          </div>
        </div>

        <div className='menu-item'>
          <img src={recipe8}alt="food" className='grid-img'/>
          <div className='menu-text'>
            <h4>⭐⭐⭐⭐⭐</h4>
            <h5>Pasta</h5>
            <h5>₦11,000</h5>
          </div>
        </div>
      </div>
    </section>
      
    )
  }


export default RecipeHero
