import React, { useState } from 'react'
import B from './B'
import myContext from './context';

const A = (props) => {

    const [Data, setData]=useState("red ");
    // const [Cdata, setC]=useState("hiiiii")


  return (
    <div>
        <h2>A componet</h2>
        {/* <p style={{color:"yellow"}}>component data C : {Cdata}</p> */}
        <button onClick={() =>{setData("tani")}}>send data to D</button>
        {/* <myContext.Provider value={[Data, setC]}> */}
        <myContext.Provider value={Data}>

             <B/>
        </myContext.Provider>

       
    </div>
  )
}

export default A;