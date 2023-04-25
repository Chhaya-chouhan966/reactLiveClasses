import React from 'react'
import '../Style/style.css'
import FooterInside from '../Footer/FooterInside'
import launched from '../Image/launched.png'
import Onboard from '../Image/Onboard.png'
import Trained from '../Image/Trained.png'




const Footar = () => {
  return (
    <div className='footer'>
        <FooterInside img={launched} num="2,500" text="enterprise organization sucessfully launched"/>
        <FooterInside img={Onboard} num="45,000" text="enterprise users onborded seamlessley"/>
        <FooterInside img={Trained} num="200,000+" text="professional trained on product and strategy"/>

    </div>
  )
}

export default Footar