import React, { useState } from 'react'
import '../Style/style.css'
import List from './List'


const Add = () => {

  const [input, setInput] = useState(" ")
  const [btn, setBtn] = useState([])

  var Add = () => {
    const newObj = {
      title: input,
      status: true
    }

    setBtn([...btn, newObj])
    setInput("")
  }

  var DeletButton = (index) => {
    const filterData = btn.filter((ele, i) => {
      return index !== i
    })
    setBtn(filterData)
  }

  var ToggelButton = (index) =>{
     const arr= btn.map( (ele, i) =>{
      console.log(ele, i, index);
       return index===i ? {...ele, status:!ele.status} :ele;
       
     })
     setBtn(arr)
  }

  return (
    <div className='Add'>
      <h1 id='head'>To-Do-List App</h1><br />
      <div className="inputBtn">
        <input id='input'
          type="text"
          placeholder='Enter text'
          value={input}
          onChange={(e) => setInput(e.target.value)} />
        <button id='btn' onClick={Add} >Add</button>
      </div>
      <br />
      <br />
      <div className="item">
        <List todoData={btn} Delet={DeletButton} toggle={ToggelButton}/>
      </div>

    </div>
  )
}

export default Add