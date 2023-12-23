import React, { useEffect, useState } from 'react'
import './Container.css'
import Section from './Section/Section'

export default function Container() {

  const [allCategories, setallCategories] = useState([])
  const api = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list'


  const fetchByCategory = (api)=>{
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(res=>res.json()
    .then(data=>{
      setallCategories(data.categories)
    })
    )


  }

  useEffect(() => {
    fetchByCategory(api)
  }, [])
  



  return (
    <div className='ContainerDiv'>
      {
        allCategories.length>0 && 
        <Section title="Category" categoriyList={allCategories}/>
      }
    </div>
  )
}
