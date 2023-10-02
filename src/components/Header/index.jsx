import React from 'react'
import './header.scss'
import logo from '../../assets/kayana-logo.png'

function index() {
  return (
    <header className='header-container'>
        <nav>
            <a href="#" style={{textDecoration:"none", color:"black"}}>
                {/* <img src={logo} alt="kayana_logo" width="180px"/> */}
                <h1 style={{fontSize:"40px"}}>GuruAI</h1>
            </a>
        </nav>
    </header>
  )
}

export default index