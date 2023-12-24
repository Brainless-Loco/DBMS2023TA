import React from 'react'
import './Section.css'
import SingleRecipe from './SingleRecipe/SingleRecipe'

export default function Section(props) {
  // const {title, categoriyList} = props


  return (
    <div className='Section'>
        <p className='SectionTitle'>{props.title}</p>
        <div className='RecipiesContainer'>
          {
            props.categoriyList.map(item=>{  
              return <SingleRecipe key={item.idCategory} title={item.strCategory} thumbnail={item.strCategoryThumb}/>
            })
          }
        </div>
    </div>
  )
}
