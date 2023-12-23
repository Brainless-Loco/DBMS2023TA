import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
      <div className='onethird'>
        
      </div>
      <Link to={"/"} className='title onethird'>
          My Recipe
      </Link>
      <div className='onethird menuContainer'>
        <Link className='searchBtn' to={"/search"}> Search</Link>
      </div>
    </div>
  )
}
