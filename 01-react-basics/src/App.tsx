import { useState } from 'react'
import './App.css'

const App = () => {
  const [msg, setMsg] = useState("Hi, I'm stateful")
  const [clicks, setClicks] = useState(0)

  const handelButtonClick = () => {
    setClicks(clicks +1)
    console.log("Clicks:", clicks)
  }


  return (
    < div className='App' >
      <h1>React Basics</h1>

      <h2>{msg}</h2>

      <p>You have clicked the button {clicks} times.</p>

      <button onClick={handelButtonClick} className='btn btn-success btn-lg'>click me!</button>

    </div >
  )
}

export default App
