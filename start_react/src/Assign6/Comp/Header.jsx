import React from 'react'
import '../Style/style.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="headarLeft">
                <div className="headarLeftLogo">
                    <h1><i className="bi bi-x-diamond-fill"></i> </h1>
                    <h1>Hootsuite</h1>
                </div>
                <div className="headarleftHome">
                    <a href="/plat">Platfrom</a>
                    <a href="/plat">Plans</a>
                    <a href="/plat">Enterprice</a>
                    <a href="/plat">Resorces</a>
                    <a href="/plat">Education</a>

                </div>
            </div>
            <div className="headerRight">
                <a href="/plat">Contact Us</a>
                <a href="/plat">Log In</a>
                <button className='signIn'>Sign In</button>
            </div>
        </div>
    )
}

export default Header