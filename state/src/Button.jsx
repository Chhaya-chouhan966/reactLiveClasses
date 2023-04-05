import React from 'react'

const Button = () => {
  return (
    <div>
        <button onClick={(start)=>{
               start()
        }}>click me</button>
    </div>
  )
}

export default Button