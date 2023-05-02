import React from 'react'
import '../Style/menu.css'
import pizzaLogo from '../Image/pizzaLogo.png'
import { useSelector } from 'react-redux'


const Menu = () => {

    const { dessert } = useSelector((storedata) => {
        return storedata
    })
    console.log(dessert);
  return (
    <div className='menu'>
      <div className="top">
        <h1>Top</h1>
        <h1>logo</h1>
      </div>
      <div className="headar">
        <div className="headeLeft">
          <img src={pizzaLogo} alt="" height="100" width="150"/>
          <a href="/#">Menu</a>
          <a href="/#">Pages</a>
          <a href="/#">Event</a>
          <a href="/#">Order</a>
          <a href="/#">Contact</a>
        </div>
        <div className="headerRight">
          <p>
            <i className="bi bi-cart-check-fill"></i>
            <sup style={{color:"red"}}>0</sup>Cart</p>

            <p><i className="bi bi-search"></i>Search</p>
            <button style={{border:"none", backgroundColor:"#d3401e", color:"white", padding:"0.8rem 1rem"}}>Order Online</button>
        </div>
      </div>
      <div className="mainContainer">
        <p>Choose Your Faverite</p>
        <h2>MENU LIGHT</h2>
      </div>
      <hr />
      <div className="footer">
            {
              dessert.map((ele) =>{
                  return <div key={ele.id} className='FooterMenu'>
                    <img src={ele.linkImagen} 
                    width="100px" height="100px" alt="" />
                     <h3>{ele.descripcion}</h3>
                     <p style={{color:"red"}}>${ele.precio}</p>
                  </div>
              })
            }
      </div>
    </div>
  )
}

export default Menu