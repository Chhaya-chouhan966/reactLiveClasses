import React, { useReducer } from 'react'

const Counter = () => {
    
    const reducerFunc=(state, action) =>{

        if (action.type==="incCount") {
            return{
                ...state,
                count:state.count+ action.countValue
            }
        }else if (action.type==="decCount") {
            return{
                ...state,
                count:state.count-action.countValue
            }
        }else if (action.type==="Reset") {
            return{
                ...state,
                count:action.countValue
            }
        }
        return state;

    }

    const[state, dispatch]=useReducer(reducerFunc, {count:0})
    return (
        <div style={{marginTop:"100px", textAlign:"center"}}>
            <h1>Count value is {state.count}</h1>
            <button onClick={ () =>{
                dispatch({
                    type:"incCount",
                    countValue:5
                })
            }}>increseCount</button>&nbsp;
            <button onClick={ () =>{
                dispatch({
                    type:"decCount",
                    countValue:2
                })
            }}>decresCount</button>&nbsp;
            <button onClick={ () =>{
                dispatch({
                    type:"Reset",
                    countValue:0
                })
            }}>Reset</button>
        </div>
    )
}

export default Counter