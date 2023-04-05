// import React, { useContext, useState } from 'react'
// import myData from './Context';

// const D = (props) => {
//     const {setState}=useContext(myData);
//     const [data,setData]=useState();
    
//   return (
//     <div>
//         <h1>Component D</h1>
//         <input type="text" placeholder=' enter text'  onChange={(e) =>{ setData(e.target.value)}}/>
//         <button onClick={ () =>{ setState(data)}}>click me</button>
//         <hr />
//     </div>
//   ) 
// }

// export default D;


import React, { useContext, useState } from 'react'
import myData from './Context';


const D = () => {
 const[state,setState]=useState();
  const {setData}=useContext(myData);
  return (
    <div>
        <h1>Component D</h1>
        <input type="text" name="" id=""  onChange={ (e) =>{setState(e.target.value)}}/>
        <button onClick={ () =>{setData(state)}} >click me</button>
    </div>
  )
}

export default D