import React from 'react'
import './SingleRecipe.css'

export default function SingleRecipe(props) {
    const{title,thumbnail,setselectedItem,fullInfo} = props
    return (
        <div className='SingleRecipe'>
            <img alt={title} src={thumbnail} className='RecipeThumbnail'></img>
            <p className='RecipeTitle'>{title}</p>
            {
                setselectedItem && 
                <button onClick={()=>{setselectedItem(fullInfo)}} style={{margin:'5px 0px',backgroundColor:'gray',outline:'none',border:'2px solid white', fontSize:'15px',padding:'2px',borderRadius:'5px',color:'white'}}>Read Full</button>
            }
        </div>
    )
}
