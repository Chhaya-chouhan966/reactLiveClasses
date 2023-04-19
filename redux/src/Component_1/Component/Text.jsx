import React from 'react'
import { useSelector } from 'react-redux'

const Text = () => {
  const data=useSelector((ele) =>{
    return ele
  })
  return (
    <div style={{textAlign:"center"}}>
      <h2>Display comp</h2>
      <p>{data.name}</p>
    </div>
  )
}

export default Text