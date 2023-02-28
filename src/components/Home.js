import React from 'react'
import './styling/Home.css'
import logo from './styling/logo.svg'

function Home() {
  return (
    <div className='home'>
        <img className="logo" src={logo} />
    </div>
  )
}

export default Home