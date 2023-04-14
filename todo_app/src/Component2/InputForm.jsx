import React from 'react'
import './input.css'
// import Add from './Add';
// import { context } from './DataProvider';


const InputForm = () => {
    // const [data, setData]=useState()
    // const {state, setState}=useContext(context);
    return (
    
            <div className="mainDiv">
                <div className="headDiv">
                    <h1>To-Do App</h1>
                </div>
                <div className="divinput">
                    <input type="text" placeholder='Enter text' />
                    <button>Add</button>   

                </div>

            </div>

        
    );
}

export default InputForm;