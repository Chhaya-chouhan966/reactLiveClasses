import React from 'react'
import  './nav.css'
import {Link, useParams} from "react-router-dom"
import { useSelector } from 'react-redux'


const Nav = () => {
  const {id}=useParams()
  const {value} =useSelector( (countData) =>{
    return countData;
  })

  return (
    <div className='nav'>
        <div className="navLeft">
            <h2>ReduxRouterDesign</h2>
        </div>
        <div className="navRight">
            <Link to='/'>Home</Link>
            <Link to="/product">Product</Link>
            <Link to={`/cart/${id}`}>Cart<sup style={{color:"red"}}>{value}</sup></Link>
            <Link to="/redux">Input</Link>
        </div>
    </div>
  )
}

export default Nav