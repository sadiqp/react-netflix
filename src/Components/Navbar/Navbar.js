import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
            <img src='images/logo.png' className='logo' alt='Logo'/>
            <div className='nav-button'>
               <button>Language</button> 
               <button>Sign In</button>
            </div>
    </div>
  )
}

export default Navbar
