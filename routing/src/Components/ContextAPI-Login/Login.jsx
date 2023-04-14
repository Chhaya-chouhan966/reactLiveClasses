import React, { useContext, useState } from 'react'
import { myContext } from './contex'
const log = {
    height:"300px",
    width: "300px",
    boxShadow: "0 0 10px black",
    margin: "150px auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",

    fontSize: "1.2rem"
}
const Login = () => {
    const [user, setUser] = useState({
        name: "",
        password: ""
    })

    const { setData } = useContext(myContext)

    function HandelLogin() {
        if ((user.name === "tani" && user.password === "1234") ||
            (user.name === "admin" && user.password === "admin@123")) {
            setData(true)
        } else {
            alert("enter proper credencial")
        }
    }

    return (
        <div style={log}>

            <h2 style={{ marginTop: "1rem" }}>Login Form</h2> <br />
            <br />
            <div>
                <input type="text" name=""  placeholder='Username' onChange={(e) => { setUser({ ...user, name: e.target.value }) }} /><br />
            </div>
            <br />
            <div>
                <input type="password" name="" placeholder='Password' onChange={
                    (e) => {
                        setUser(
                            {
                                ...user,
                                password: e.target.value
                            }
                        )
                    }
                } /><br />
            </div>
            <br />
            <div>

            <button onClick={HandelLogin}>Login</button>
            </div>

        </div>
    )
}

export default Login