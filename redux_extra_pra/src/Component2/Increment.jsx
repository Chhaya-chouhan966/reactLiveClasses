import React, { useState } from 'react'

const Increment = () => {
    const [data, setData]=useState(0);
     const isDecrement= () =>{
        if (data<=0) {
            alert("decrement the value of gretar than 0")
        }else{
            setData(data-1)
        }
     }

    return (
        <div style={{marginTop:"100px", textAlign:"center"}}>
            <h2>State Increment</h2>
            <h1>{data}</h1>
            <button onClick={ () =>{setData(data+1)}}>Increment</button>
            <button  onClick={isDecrement}>Decrement</button>
            <button  onClick={ () =>{setData(0)}}>Reset</button>
        </div>
    )
}

export default Increment;