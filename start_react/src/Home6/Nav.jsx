import React from 'react'
import './all.css'



const Nav = () => {
  return (
    <div className='nav'>
        <div className="left">
            <h1 style={{color:"gray"}}>Logo</h1>
        </div>
        <div className="mid">
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/about">Contact</a>

        </div>
        <div className="right">
        <i className="bi bi-facebook"></i>
        <i className="bi bi-twitter"></i>
        <i className="bi bi-instagram"></i>
        </div>
    </div>
  )
}

export default Nav