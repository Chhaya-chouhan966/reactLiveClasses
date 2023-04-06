import React, { useContext, useState } from 'react'
import myData from './Context';


const D = () => {
 const[state,setState]=useState();
  const {setData}=useContext(myData);
  return (
    <div>
        <h1>Component D</h1>
        <input type="text" name="" id=""  onChange={ (e) =>{setState(e.target.value)}}/>
        <button onClick={ () =>{setData(state)}} >click me</button>
    </div>
  )
}

export default D