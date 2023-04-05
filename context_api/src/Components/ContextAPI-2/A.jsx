import React, { useState } from 'react'
import B from './B';
import myContext from './Context';

const A = (props) => {
    const [data, setData] = useState("red ");
    return (
        <div>
            <h2>A comoponent</h2>
            <button onClick={ ()=>{setData("pink")}}>data send to component D</button>
            <hr />
            <myContext.Provider value={data}>
                <B />
            </myContext.Provider>

        </div>
    );
}

export default A;