import './assets/scss/App.scss'
import { useState, useEffect } from 'react'

function App() {
  const [time, setTime] = useState(() => {
    console.log("I'm initing...")
    return new Date().toLocaleTimeString()
  })

  useEffect(() => {
    console.log('Starting clock...')
    
    setInterval(() => {
      setTime(new Date().toLocaleTimeString())
      console.log("tick")
    }, 1000)
  }, [])

  return (
    <div className='container'>
      <div className='display-1 text-center'>
        {time}
      </div>
    </div>
  )

}

export default App
