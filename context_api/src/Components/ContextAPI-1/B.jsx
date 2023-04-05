import React, { useContext } from 'react'

import C from './C';
import myContext from './context';


const B = (props) => {
    let mydata=useContext(myContext)
  return (
    <div>
        <h2>B componet : <span style={{color:"green"}}>{mydata}</span> </h2>
        <C/>
    </div>
  )
}

export default B;