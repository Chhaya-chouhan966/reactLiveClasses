import React from 'react'
import './all.css'
import Dot from './Image/Dot.png'

const Main = () => {
  return (
    <div className='main'>
        <div className="mainLeft">
             <h1>Header</h1>
             <h1>Footer</h1>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, eum obcaecati iure doloremque quam quia excepturi? Iusto dolore in quibusdam vel ab quod sed tempora. Perferendis eum dicta pariatur ut nulla architecto, nostrum corrupti asperiores, unde accusantium iure ex aliquid itaque a labore enim ipsa necessitatibus alias et fugit culpa? Quis, id! Nulla soluta et quas voluptas nihil? Soluta, vero.</p>
            <img src={Dot} alt=""  width="200px" height="100px"/>
        </div>
        <div className="mainRight">
          <img src="https://www.shutterstock.com/image-photo/photo-cheerful-happy-little-girl-260nw-1848709000.jpg"
          width="90%" height="90%" alt="" />
        </div>
    </div>
  )
}

export default Main