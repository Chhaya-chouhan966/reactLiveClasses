import React, { useContext } from 'react'
import myContext from './Context';

const D = (props) => {
    let myData = useContext(myContext);
    return (
        <div>
            <h2>D comoponent</h2>
            <p>Hear, I'm data component A :<span style={{ color: "red" }}>{myData}</span></p>
        </div>
    )
}

export default D;