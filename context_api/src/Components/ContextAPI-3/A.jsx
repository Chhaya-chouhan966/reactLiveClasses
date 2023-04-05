import React, { useState } from 'react'
import B from './B';
import myContext from './Context';

const A = () => {
    const [data, setData] = useState(" ");
    const [state, setState] = useState(" ");

    return (
        <div>
            <h2>Componet A</h2>
            <input type="text" placeholder='enter text'
                onChange={
                    (e) => {
                        setData(e.target.value)
                    }} />
            <button onClick={()=>{setState(data)}}>click me</button>
            <hr />
            <myContext.Provider value={state}>
                <B />
            </myContext.Provider>
        </div>
    )
}

export default A;