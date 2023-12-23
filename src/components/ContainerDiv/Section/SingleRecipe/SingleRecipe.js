import React from 'react'
import './SingleRecipe.css'

export default function SingleRecipe(props) {
    const{title,thumbnail} = props
    return (
        <div className='SingleRecipe'>
            <img src={thumbnail} className='RecipeThumbnail'></img>
            <p className='RecipeTitle'>{title}</p>
        </div>
    )
}
