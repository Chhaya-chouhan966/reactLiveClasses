import React, { useState } from "react"
import './state.css'

const State = () => {
    // const [State, setState] = useState(0); 

    // function Changebtn() {
    //     setState(State+1)
    // }

    // const [State, setState] = useState("red"); 

    // function Changebtn() {
    //     setState("yellow")
    // }

    // const [State, setState] = useState({
    //               Mobile:"Sumsung",
    //               modelNo:"Galaxy A50s",
    //               Ram:"8GB",
    //               Battry:"5000mh"
    // }); 


    // function Changebtn() {
    //     setState(State+1)
    // }
    // setInterval(Changebtn,1000)

    // setInterval( () =>{
    //     setState(State+1)

    // },1000)

    let Time = new Date()
    let CTime = Time.toLocaleTimeString()
    const [set, setState] = useState(CTime);

    setInterval(() => {
         CTime = Time.toLocaleTimeString()
        setState(CTime)
    }, 1000)

    return (
        <div>
            <h2>{set}</h2>
            {/* <button onClick={Changebtn}>click me</button> */}
        </div>
    )
}

export default State;