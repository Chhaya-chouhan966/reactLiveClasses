import React, { useState } from 'react'
import '../Style/style.css'


const List = ({ todoData, Delet, toggle }) => {
  const [checkBox, setCheckBox] = useState({
    mark: "",
    color: "",
    status: false, 
    idx:""
  })

  const CheckBox = (index) => {
    return todoData.filter((ele, i) => {
      if (index === i) {
        if (checkBox.status === false) {
          setCheckBox(() => {
            return {
              mark: "line-through",
              
              color: "red",
              status: true,
            }
          })
        }
      }
      else {
        setCheckBox(() => {
          return {
            mark: " ",
            color: "",
            status: false
          }
        })
      }





    })

  }
  return (
    <div>
      {
        todoData.map((ele, index) => {

          return <div className='itemList' key={index}>
            <div className="chekBoxHead3">
              <input onClick={() => {
                CheckBox(index)
              }} type="checkbox" className='cheakBox' checked={checkBox.status} />
              <h3 style={{ textDecoration: checkBox.mark, textDecorationColor: checkBox.color }} className='head3'>{ele.title}</h3>
            </div>

            <div className="toggleBtn">

              <div>{ele.status ? <h4 style={{ color: "green" }}>Completed</h4> : <h4 style={{ color: "red" }}>Not completed</h4>}</div>

              <button onClick={() => {
                toggle(index)
              }} className='toggle'>Toggle</button>

              <button className='edit'>Edit</button>

              <button onClick={() => {
                Delet(index)
              }}
                className='del' >Delete</button>
            </div>

          </div>
        })
      }
    </div>
  )
}

export default List
