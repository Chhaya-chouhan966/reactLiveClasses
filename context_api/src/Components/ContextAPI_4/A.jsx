// import React, { useState } from 'react'
// import B from './B'
// import myData from './Context'


// const A = (props) => {
//     const [state,setState]=useState(" ");
//     return (
//         <div>
//             <h1>Component A</h1>
//             <p>D compoenent data : <span style={{color:"orange"}}>{state}</span> </p>
//             <hr />
//             <myData.Provider value={{setState}} >
//                 <B />
//             </myData.Provider>


//         </div>
//     )
// }

// export default A;


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