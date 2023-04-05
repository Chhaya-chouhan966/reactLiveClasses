import React, { useContext } from 'react'
import D from './D';
// import myContext from './context';


const C = (props) => {
  //  let [Data,setC]=useContext(myContext);
  //  let myCon=useContext(myContext);

  return (
    <div>
        <h2>C componet</h2>
        {/* <button onClick={ () =>{myCon[1]("haidrabad")}}>send data A</button> */}
        <D/>
    </div>
  )
}

export default C;