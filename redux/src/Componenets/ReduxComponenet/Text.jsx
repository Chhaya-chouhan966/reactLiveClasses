import React from 'react'
import { useSelector } from 'react-redux';

const Text = () => {
    const datas = useSelector((storedata) => {
        return storedata;
    })
   
    return (
        <div>
            <h2>Text Component</h2>
            <p>{datas.name}</p>
        </div>
    );
}

export default Text