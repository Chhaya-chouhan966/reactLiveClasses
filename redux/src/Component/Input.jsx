import React, { useState } from 'react'
import myStore from '../ReduxStore/Store'

const InputBtn = () => {
    const [state, setState] = useState(" ");

    function isDispatch() {
        myStore.dispatch({
            type: "name",
            userName: state
        })
    }
    return (
        <div style={{ margin: "100px", textAlign: "center" }}>
            <h2>InputBtn Component</h2>
            <input type="text" placeholder='Enter Input' onChange={ (e) => {setState(e.target.value)}} />
            <button onClick={isDispatch}>Click me</button>
        </div>
    )
}

export default InputBtn