import React from 'react'
import '../Style/style.css'


const FooterInside = (props) => {
  return (
    <div>
        <img className='imgFooter' src={props.img} alt="" width="100px" height="100px"/>
        <h3>{props.num}</h3>
        <br />
        <p>{props.text}</p>
    </div>
  )
}

export default FooterInside