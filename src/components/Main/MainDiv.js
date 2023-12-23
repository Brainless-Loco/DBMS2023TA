import React from 'react'
import './MainDiv.css'
import Header from '../Header/Header'
import Container from '../ContainerDiv/Container'
import Footer from '../Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Search from '../Search/Search'

export default function MainDiv() {
  return (
    <div className='mainDiv'>
        <Header/>
        
        <Routes>
          <Route path="/" element={<Container/>} />
          <Route path="/search" element={<Search/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}
