import React from 'react'
import '../Style/nav.css'
import pizzaLogo from '../Image/pizzaLogo.png'
import { Link } from 'react-router-dom'

const Nav = () => {
 
  return (
    <div className='nav'>
        <img src={pizzaLogo} alt="pizzalogo" width="180px" height="120px" />
        <div className="navMiddels">
           <Link to="/">Home</Link>
           <Link to="/menu">Menu</Link>
           <Link to="/event">Event</Link>
           <Link to="order sucecced">OrderSuccess</Link>
        </div>
        <div className="navFooter">
            <div className="navFooterIcon">
            
            <a href="/#"><i className="bi bi-twitter"></i></a>
            <a href="/#"><i className="bi bi-facebook"></i></a>
            <a href="/#"><i className="bi bi-instagram"></i></a>
            <a href="/#"><i className="bi bi-linkedin"></i></a>

            </div>
            <div className="navFooterButton">
                <button>Before <br />Online</button>
            </div>
        </div>

    </div>
  )
}

export default Nav