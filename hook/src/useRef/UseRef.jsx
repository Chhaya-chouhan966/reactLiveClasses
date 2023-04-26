import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {

  const [timer, setTimer] = useState(0)
  let timerId = useRef() //timerId={current:undefined}
  const href = useRef() //href={curret:undefiend} styling
  const startBtn = useRef() //startBtn={curret:undefiend}
  const stopBtn = useRef() //stopBtn={curret:undefiend}


  useEffect(() => {
    if (timer === 0) {
      href.current.innerText = `Timer value is ${timer}`

    } else {
      href.current.innerText = `Timer started value is ${timer}`
      href.current.style.color = "green"

    }

  })


  const startTimer = () => {

    startBtn.current.disabled = true
    stopBtn.current.disabled = false


    timerId.current = setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000)

  }

  const stopTimer = () => {
   
    href.current.innerText = `Timer stoped value is ${timer}`
    href.current.style.color = "red"
    startBtn.current.disabled = false
    stopBtn.current.disabled = true

    clearInterval(timerId.current)
  }

  return (
    <div style={{ margin: "100px", textAlign: "center" }}>
      <h2 ref={href}>{timer}</h2>
      <br />
      <button ref={startBtn} onClick={startTimer} style={{ padding: "0.5rem 2rem" }}>Start</button>&nbsp;&nbsp;&nbsp;
      <button ref={stopBtn} onClick={stopTimer} style={{ padding: "0.5rem 2rem" }}>Stop</button>
    </div>
  )
}

export default UseRef