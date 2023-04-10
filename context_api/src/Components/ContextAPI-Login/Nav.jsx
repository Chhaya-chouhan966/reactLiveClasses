import React, { useContext } from 'react'
import './nav.css'
import { myContext } from './contex'


const Nav = () => {
    const { setData } = useContext(myContext);

    function UserFunc() {
        
    }
    return (
        <div className='nav'>
            <div className='navLeft'>
                <h2>React Project</h2>
            </div>
            <div className='navRight'>
                <h3>Home</h3>
                <h3>Profile</h3>
                <h3>Product</h3>
                <h3>Support</h3>
                <button onClick={() => { setData(false) }}>Logout</button>
                <span className='span'>{UserFunc}</span>
            </div>
        </div>
    )
}

export default Nav