import React from 'react'
import './Section.css'
import SingleRecipe from './SingleRecipe/SingleRecipe'

export default function Section(props) {
  const {title, categoriyList} = props

  /* 
  idCategory :  "14"
strCategory :  "Goat"
strCategoryDescription :  "The domestic goat or simply goat (Capra aegagrus hircus) is a subspecies of C. aegagrus domesticated from the wild goat of Southwest Asia and Eastern Europe. The goat is a member of the animal family Bovidae and the subfamily Caprinae, meaning it is closely related to the sheep. There are over 300 distinct breeds of goat. Goats are one of the oldest domesticated species of animal, and have been used for milk, meat, fur and skins across much of the world. Milk from goats is often turned into goat cheese."
strCategoryThumb :  "https://www.themealdb.com/images/category/goat.png"
  */
  return (
    <div className='Section'>
        <p className='SectionTitle'>{title}</p>
        <div className='RecipiesContainer'>
          {
            categoriyList.map(item=>{  
              return <SingleRecipe key={item.idCategory} title={item.strCategory} thumbnail={item.strCategoryThumb}/>
            })
          }
        </div>
    </div>
  )
}
