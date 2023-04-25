import React, { useState } from 'react'
import './add.css'

const Adds = () => {
    const [input, setInput]=useState("")
    const [btn, setBtn]=useState([])

    // const [state, setState]=useState([])
    console.log(btn , "button");
    return (
        <div className='adds'>
            <h1 className='h1'>To-Do-List : Add</h1>
            <div className='InpBtn'>
                <input type="text" placeholder='Enter name' value={input}  onChange={(e) =>setInput(e.target.value)}/>
                <button onClick={() =>{
                    setBtn( (prev) => [...prev, input])
                    // setBtn([...btn, input])
                    // setBtn( (btn) => [...btn, input])

                    setInput("")
                }}>Add</button>
            </div>
           <div className='todo'>
              <ol>
                {
                    btn.map( (ele, index) =>{
                        console.log(index);
                        return(
                            <li key={index}>{ele}</li>
                        )
                    })
                }
              </ol>
           </div>

        </div>
    )
}

export default Adds