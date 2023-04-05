import React, { useContext } from 'react'
import myContext from './Context';

const D = () => {
    const myData = useContext(myContext);
    return (
        <div>
            <h2>Componet D</h2>
            <p>D child component data : <span style={{ color: "red" }}>{myData}</span></p>

            <hr />
        </div>
    )
}

export default D;