import React from 'react'
import  './nav.css'
import {Link} from "react-router-dom"

const Nav = () => {
  return (
    <div className='nav'>
        <div className="navLeft">
            <h2>ReduxRouterDesign</h2>
        </div>
        <div className="navRight">
            <Link to='/'>Home</Link>
            <Link to="/product">Product</Link>
            <Link to="/technology">Technology</Link>
            <Link to="/redux">Input</Link>
        </div>
    </div>
  )
}

export default Nav