
import { useState } from 'react'
import './App.css'


function App() {
  const [msg, setMsg] = useState("Hi mom, I'm stateful")
  const [clicks, setClicks] = useState(0)

  const handleButtonClick = () => {
    setClicks(clicks + 1)
    console.log("clicks", clicks)

  }

  console.log("Rendering...")

  return (
    <div className="App">
      <h1>React basic</h1>

      <h2>{msg}</h2>

      <p>You have clicked the button {clicks} times.</p>

      <button onClick={handleButtonClick} className='btn btn-success btn-lg'>click me</button>
    </div>
  )

}


export default App
