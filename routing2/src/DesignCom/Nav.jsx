import React, { useContext } from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
import { context } from './Contex'

const Nav = () => {
const {data}=useContext(context)

return (
    <div className='navBar'>

      <div className="navLeft">
        <h1>FrontEnd Skills</h1>
      </div>

      <div className="navRight">
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/addtocart">AddtoCart <sup style={{color:"yellow",textDecorationThickness:"3px"}}>{data}</sup></Link>

      </div>
    </div>
  )
}

export default Nav