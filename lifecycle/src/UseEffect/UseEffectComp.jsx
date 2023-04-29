import React, { useEffect, useState } from 'react'

const UseEffectComp = () => {
    const [s, setS] = useState("TANI")

    useEffect(() => {
        console.log("useEffect");
        setS("hekkkkok")
    },[])


    return (
        <div>
            <h2>UseEffectComp {s}</h2>
            <button onClick={() => setS("ritik")}>hi</button>
        </div>
    )
}

export default UseEffectComp