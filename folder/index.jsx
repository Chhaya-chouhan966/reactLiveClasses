import React from 'react'

const index = () => {
    return (
        <ul>
            <li onClick={
                () => {
                    localStorage.setItem("activmenu", "home")
                    window.location.reload(true);
                }
            }
            >
                Home
            </li>
        </ul>
    )
}

export default index