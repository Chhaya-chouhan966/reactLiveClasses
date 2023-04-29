import React, { useState } from 'react'
import './Styles.css'

const Add = () => {
    const [input, setInput] = useState("")
    const [btn, setBtn] = useState([])
    return (
        <div className='all'>
            <h1 className='head'>To-Do-App</h1>
            <br />
            <br />
            <div className="main">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Enter your choose' />
                <button onClick={() => {
                    setBtn([...btn, input])
                }}>Add</button>
            </div>
            <br />
            <div className='result'>
                <ol>
                    {
                        btn.map((ele) => {
                            return <div className='contain'>
                                <li>{ele}</li>
                                <button>Delete</button>
                            </div>
                        })
                    }
                </ol>
            </div>

        </div>
    )
}

export default Add