import React, { useContext } from 'react'
import './nav.css'
import { myContext } from './contex'
import { Link, useNavigate } from 'react-router-dom';


const Nav = () => {
    const { setData } = useContext(myContext);
    const navigate=useNavigate()
    
    return (
        <div className='nav'>
            <div className='navLeft'>
                <h2>React Project</h2>
            </div>
            <div className='navRight'>
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/product">Product</Link>
                <Link to="/contactus">ContactUs</Link>
                <Link to="/technology">Technology</Link>
                <button onClick={() =>{
                    setData(false)
                    navigate("/")
                } 
                    }>Logout</button>
            </div>
        </div>
    )
}

export default Nav