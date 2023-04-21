import React from 'react'
import { useSelector } from 'react-redux';

const Text = () => {
    
    const datas = useSelector((data) => {
        return data;
    })
    return (
        <div style={{textAlign:"center"}}>
            <h2>Display Data</h2>
            <p>{datas.name}</p>
        </div>
    );
}

export default Text