import React from 'react'
import './styling/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>

        <div className='navbar_logo'>
            <span className='hack_for'>hack for </span>
            <span className='carrot'>{'<'}</span>
            <span className='good'>good</span>
            <span>{'>'} </span>
            <span className='_2023'>2023</span>
        </div>

        <div className='navbar_links'>

            <div className='navbar_link'>
                <h3>Link 1</h3>
            </div>

            <div className='navbar_link'>
                <h3>Link 2</h3>
            </div>

            <Link to='/login'>
                <div className='navbar_link'>
                    <h3>Sign In</h3>
                </div>
            </Link>

        </div>

    </div>
  )
}

export default Navbar