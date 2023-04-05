import React, { useContext } from 'react'
import myContext from './context';

const D = (props) => {
    
  let contextData=useContext(myContext)
  
  return (
    <div>
        <h2>D componet</h2>
        <p style={{color:"red"}}>A parent component : {contextData}</p>
    </div>
  )
}

export default D;