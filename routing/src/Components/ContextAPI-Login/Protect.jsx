import { useContext } from 'react'
import { myContext } from './contex'
import { Navigate } from 'react-router-dom'

const Protect = ( {children}) => {
    const data =useContext(myContext)
  if (data) {
    return {children}
  }else{
    <Navigate to="/ "/>
  }
}

export default Protect