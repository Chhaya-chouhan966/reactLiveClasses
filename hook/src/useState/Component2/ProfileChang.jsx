import React, { useEffect, useState } from 'react'

const ProfileChang = () => {

    const [state, setState] = useState([])

    const home = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        setState(data)
    }
    useEffect(() => {
        home()
    }, [])

    console.log(state);
    return (
        <div>

            {
                state.map((ele) => {
                    return (
                        <div key={ele.id}>
                            <h2>{ele.name}</h2>
                            <h1>{ele.address.city}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProfileChang