import React, { useState } from 'react'

const State = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState();
    const [email, setEmail] = useState("");
    const [data, setData] = useState({
        Sname: "",
        Sage: 0,
        Semail: ""
    });
    return (
        <div>
            <input type="text" placeholder='name' value={name}   onChange={(e) => { setName (e.target.value) }} />
            <input type="text" placeholder='age' value={age}     onChange={(e) => { setAge  (e.target.value) }} />
            <input type="text" placeholder='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
            <button onClick={() => {
                setData({
                    Sname: name,
                    Sage: age,
                    Semail: email
                })
            }}>Add</button>

            <h1>This is my name : {data.Sname}</h1>
            <h1>This is my age : {data.Sage}</h1>
            <h1>This is my age : {data.Semail}</h1>


        </div>
    )
}

export default State