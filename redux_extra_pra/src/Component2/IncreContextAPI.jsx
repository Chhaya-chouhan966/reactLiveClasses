import React, { useContext } from 'react'
import { myContext } from './DataProvider'


const IncreContextAPI = () => {
    const { state, setState} = useContext(myContext)

    const isDec= () =>{
        if (state<=0) {
           alert("this is wrong")
        } 
        setState(state-1)
    }

    return (
        <div style={{ marginTop: "100px", textAlign: "center" }}>
            <h2>State Componenet</h2>
            <h1>{state}</h1>
            <button onClick={() =>{setState(state+1)}}>Increment</button>
            <button onClick={isDec}>Decrement</button>
            <button onClick={() =>{setState(0)}}>Reset</button>

        </div>
    )
}

export default IncreContextAPI