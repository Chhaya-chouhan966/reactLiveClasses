import React from 'react'
import { useSelector } from 'react-redux'

const Display = () => {
    const data=useSelector((ele) =>{
        return ele;
    })
  return (
    <div style={{textAlign:"center"}}>
        <h2>Display Componenet</h2>
        <p>{data.name}</p>
    </div>
  )
}

export default Display