import React, { useState } from 'react'
import myStore from '../Library/ReduxStore'

const Inputs = () => {
 
    const [data,setData]=useState(" ");

    function isDispatch(){
         myStore.dispatch({
            type:"name",
            userName:data
         }) 
    }
  
  return (
    <div style={{textAlign:"center", marginTop:"100px"}}>
        <h2>Inputs Component</h2>
        <input type="text" onChange={ (e) =>{setData(e.target.value)}}  />
        <button onClick={isDispatch}>Submit</button>
    </div>
  )
}

export default Inputs