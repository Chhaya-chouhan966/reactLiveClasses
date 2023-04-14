import React from 'react'
import '../tech.css'

const Html = () => {
  return (
    <div className='techChildComponentAll'>
        <div>
            <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png" alt=""  width="300px" height="350px"/>
        </div>
        <div className="languageDescription">
            <dl>
                <dt><b>Luaguage Html</b></dt>
                
                <dd>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum modi distinctio incidunt reiciendis laborum 
                    perferendis commodi, 
                <br /> doloribus doloremque cupiditate tempore.</dd><br />
                <br />
                <dd>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque velit totam repellat inventore quisquam odio?</dd>
            </dl>
        </div>
    </div>
  )
}

export default Html