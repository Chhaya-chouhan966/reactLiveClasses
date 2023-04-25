import React from 'react'

const Users = ({userData}) => {
    return (
        <div style={{ marginTop: "50px", textAlign: "center" }}>
            <table style={{ boxShadow: "0 0 10px black", width: "100%", height: "300px" }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gamil</th>
                        <th>Username</th>

                    </tr>
                </thead>
                <tbody>

                    {
                        userData.map((ele) => {
                            return (
                                <tr key={ele.id}>
                                    <td>{ele.name}</td>
                                    <td>{ele.email}</td>
                                    <td>{ele.username}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Users