import React from 'react'
import './MainDiv.css'
import Header from '../Header/Header'
import Container from '../ContainerDiv/Container'
import Footer from '../Footer/Footer'

export default function MainDiv() {
  return (
    <div className='mainDiv'>
        <Header/>
        <Container/>
    </div>
  )
}
