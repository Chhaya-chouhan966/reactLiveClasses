import React from 'react'
import '../Style/orderDone.css'
import right from '../Image/right.png'
import pizaaBoy from '../Image/pizaaBoy.png'


const OrderDone = () => {
  return (
    <div className='orderDone'>
        <img src={pizaaBoy} 
        width="400px" height="400px" alt="" />
        <h1>Congratulation Your Order Done</h1>
         <img src={right} alt="" width="100px"  height="100px"/>

    </div>
  )
}

export default OrderDone