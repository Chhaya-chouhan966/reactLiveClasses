
import React, { useState } from 'react'
import B from './B'
import myData from './Context';


const A = () => {
    const [data, setData] = useState();
    return (
        <div>
            <h1>Component A</h1>
            <p>D component : <span style={{ color: "red" }}>{data}</span></p>
            <hr />
           <myData.Provider value={{setData}}>
            <B />
            </myData.Provider>
            
        </div>
    )
}

export default A