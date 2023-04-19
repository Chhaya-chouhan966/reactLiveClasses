import React, { useState } from 'react'
import myData from '../ReduxStore/Store'

const Input = () => {
    const [state, setState]=useState("")

    const isDispatch= () =>{
        myData.dispatch({
            type:"name",
            username:state
        })
    }

  return (
    <div style={{marginTop:"100px", textAlign:"center"}}>
        <h2>Input Componenet</h2>

        <input type="text" name="" id="" onChange={ (e) =>{setState(e.target.value)}} />
        <button onClick={isDispatch}>Click me</button>
    </div>
  )
}

export default Input