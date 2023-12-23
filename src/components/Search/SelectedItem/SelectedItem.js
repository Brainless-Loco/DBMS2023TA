import React from 'react'
import './SelectedItem.css'

export default function SelectedItem(props) {

  const {info}=props

  return (
    <div className='SelectedItemDiv'>
      <h3 style={{margin:'0px',color:'rgb(29, 15, 15)'}}>How to Make {info.strMeal} </h3>
      <img alt={info.strInstructions} src={info.strMealThumb} width={'100%'} height={'100%'} style={{height:'100%',width:'100%',borderRadius:'5px'}}></img>
      <p style={{textAlign:'left'}}>
        Area: {info.strArea}
        <br/>
        Category: {info.strCategory}<br/>
        Tags: {info.strTags}<br/>
      </p>
      <p>
        <h4 style={{margin:'0px'}}>Instructions</h4>
        <p style={{textAlign:'left',margin:'0px'}}>
          {info.strInstructions}
        </p>
      </p>
    </div>
  )
}
