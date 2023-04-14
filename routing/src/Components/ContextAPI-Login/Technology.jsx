import React from 'react'
import './tech.css'
import { Link, Outlet } from 'react-router-dom'


const Technology = () => {
  return (
    <div className='techContainer'>
        <div className="techContainerLeft">
                <Link to="html">HTML</Link>
                <Link to="css">CSS</Link>
                <Link to="javascript">JavaScript</Link>
                <Link to="react">AReact</Link>
        </div>
        <div className="techContainerRight">
            <Outlet/>
        </div>
    </div>
  )
}

export default Technology