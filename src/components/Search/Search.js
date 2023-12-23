import React, { useEffect, useState } from 'react'
import './Search.css'
import SingleRecipe from '../ContainerDiv/Section/SingleRecipe/SingleRecipe'
import SelectedItem from './SelectedItem/SelectedItem'

export default function Search() {
    const [searchText, setsearchText] = useState('')
    const [searchItems, setsearchItems] =useState([])
    const [selectedItem, setselectedItem] = useState({})
    const api = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

    const fetchBasedOnSearchText = ()=>{
        if(searchText.length===0){
            setsearchItems([])
            return
        }
        fetch(api + searchText)
        .then(res => res.json())
        .then(data =>{
            setsearchItems(data.meals)
            console.log(data.meals)
        })
    }

    useEffect(() => {
        fetchBasedOnSearchText()
    }, [searchText])

    return (
        <div className='SearchDiv'>
            <div className='SearchbarDiv'>
                <input className='searchbar' type='text' value={searchText} onChange={(e)=>setsearchText(e.target.value)} placeholder='Search for a recipe...'/>
                {
                    Object.keys(selectedItem).length>0 &&
                    <SelectedItem info={selectedItem} />
                }
            </div>
            <div className='searchItemsContainer'>
                {
                    searchText.length>0 && searchItems.length>0 &&
                    searchItems.map(item=>{
                        return <SingleRecipe setselectedItem={setselectedItem} fullInfo={item} onclick={()=>{console.log('haha')}} key={item.idMeal} youtubeLink={item.strYoutube} thumbnail={item.strMealThumb} title={item.strMeal}/>
                    })
                }
            </div>
        </div>
    )
}
