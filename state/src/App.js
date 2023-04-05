import { useState } from 'react';
import './App.css';
import Button from './Button';
import Display from './Display';
// import State from './State';

function App() {
  const [time, setTime] = useState({ h: 0, m: 0, s: 0, ms: 0 })
  
  var updatedHo

  const Start = () => {

  }

  return (
    <div className="App">
      {/* <State/> */}
      <Display time={time} />
      <Button  start={Start}/>
    </div>
  );
}

export default App;
