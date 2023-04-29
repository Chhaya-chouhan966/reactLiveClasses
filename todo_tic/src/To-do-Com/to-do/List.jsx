import React from 'react'
import '../Style/style.css'


const List = ({ todoData, Delet, toggle }) => {
  return (
    <div>
      {
        todoData.map((ele, index) => {

          return <div className='itemList' key={index}>
            <h3 className='head3'>{ele.title}</h3>

            <div className="toggleBtn">
              <div>{ele.status ? <h4 style={{ color: "green" }}>Completed</h4> : <h4 style={{ color: "red" }}>Not completed</h4>}</div>
              
              <button onClick={() => {
                toggle(index)
              }} className='toggle'>Toggle</button>
              
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
