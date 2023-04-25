import React, { useState } from 'react'
import Users from './Users'

const Api = () => {
    const [user, setUser] = useState([])

    const GetUser = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => {
                setUser(data)
            })
    }
    console.log(user)

    return (
        <div style={{ padding: "10px 30px" }}>
            <h1 style={{ padding: "20px 0" }}>Users Information</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eveniet quos provident ducimus, laudantium eaque odio totam praesentium obcaecati dignissimos reprehenderit maxime sint perspiciatis est facilis. Suscipit placeat odit veniam, blanditiis dolore alias eius porro saepe iure optio reiciendis! Nisi distinctio modi autem ab minus earum assumenda tenetur minima! Necessitatibus. Sequi possimus officiis tenetur dolorem quisquam. Sit ad dignissimos, incidunt autem saepe ullam voluptate sequi magni! Eveniet cupiditate, velit natus optio ut sit porro. Odit error quod architecto numquam alias optio soluta aspernatur quasi vitae perferendis. Assumenda culpa natus, fugiat perspiciatis nemo ducimus cumque vel aperiam quidem nihil illum voluptas ex aliquam rerum? Autem nesciunt praesentium eligendi fugiat assumenda facere, amet minima fuga eveniet? Possimus consectetur quis eligendi eveniet, quo labore temporibus maiores corporis placeat vel, in commodi, nisi dolorum iure perspiciatis deleniti? Esse aperiam nesciunt cumque nobis maiores illo possimus nemo.</p>
            <button onClick={GetUser} style={{ marginTop: "20px", padding: "0.5rem 1rem" }}>Get Data</button>&nbsp;&nbsp;&nbsp;
            <button onClick={() => setUser([])} style={{ marginTop: "20px", padding: "0.5rem 1rem" }}>Remove Card</button>
            <hr style={{ marginTop: "15px" }} />

            {
                user.length > 0 && <Users  userData={user}/>
            }
        </div>
    )
}

export default Api