import React, { useEffect, useState } from 'react'
import './input.css'
// const style={
//     padding:"0.5rem 2.5rem",
//     fontSize:"1.1rem",
//     margin:"0.2rem"
// }

const Input = ({ value }) => {
    // const [state, setState] = useState(0);
    //   return (
    //     <div style={{marginTop:"100px" , textAlign:"center"}}>
    //         <h2>Input componenet</h2>
    //         <input type="text" placeholder='Enter text ' value={state}  onChange={ (e) =>{setState(e.target.value)}}/>
    //         <h2>text Data : {state}</h2>
    //     </div>
    //   )

    // const Dec=() =>{
    //     if (state>0) {
    //         setState(state-1)
    //     }else{
    //         alert("data should be greter than 0")
    //     }
    // }

    // return (
    //     <div style={{marginTop:"100px", textAlign:"center"}}>
    //         <h1 style={{color:"red"}}>Increment_Decrement & Reset Counter App</h1>
    //         <h2 style={{padding:"1rem 1rem"}}>{state}</h2>
    //         <button style={style} onClick={ () =>{setState(state+1)}}>Increment</button>
    //         <button style={style} onClick={Dec} >Decrement</button>
    //         <button style={style} onClick={()=>{setState(0)}}>Reset</button>
    //     </div>
    // )

    // return (
    //     <div style={{marginTop:"100px" ,textAlign:"center"}}>
    //       <h2>  data : <span style={{color:"red"}}>{value.type}</span></h2>
    //     </div>
    // )

    const [data, setData] = useState([])
    const [input, setInput] = useState("")
    // console.log(data);
    
    const Delete= (index) =>{
        const deletOneData = [...data];
        console.log(deletOneData);
        deletOneData.splice(index, 1);
          
        setData(deletOneData);
    }

    return (
        <div className='main'>
            <h1 className='h1'>To-Do-List App</h1>
            <div className='InpBtn'>
                <input type="text" placeholder='Enter text' onChange={(e) => { setInput(e.target.value) }} />
                <button className='btn' onClick={() => {
                    setData([...data, input])
                }}>Add</button>
            </div>

            <div className='list'>

                {
                    data.map((ele, index) => {
                        return (
                            <div key={index} className='result'>
                                <ul >
                                    <li>{ele}</li>
                                </ul>
                                <button className='Edit'>Edit</button>
                                <button className='delete' onClick={ () =>{Delete(index)}}>Delete</button>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/users`)
    //         .then((res) => res.json())
    //         .then((datas) => {
    //             setData(datas)
    //             console.log(datas);
    //         })

    // }, [])

    // return (
    //     <div style={{ marginTop: "50px", textAlign: "center" }} className="fake">
    //         {
    //             data.map((ele) => {
    //                 console.log(ele);
    //                 return (
    //                         <div key={ele.id} className="div">
    //                             <h2>Name: {ele.name}</h2>
    //                             <h3>City: {ele.address.city}</h3>
    //                         <p>{ele.email}</p>

    //                         </div>
    //                 )
    //             })
    //         }
    //     </div>
    // )
}


export default Input