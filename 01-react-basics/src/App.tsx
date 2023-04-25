import { useState } from 'react'
import './App.css'

type Post = {
  title: string
  likes: number
}



const App = () => {
  const [msg, setMsg] = useState("Hi, I'm stateful")
  const [clicks, setClicks] = useState(0)
  const [posts, setPosts] = useState<Post[]>([
    { title: "React rocks!", likes: 1337 },
    { title: "Jsx Rocks Even Moar!", likes: 42 },
    { title: "Got state?", likes: 3 }

  ])

  const handelButtonClick = () => {
    setClicks(clicks + 1)
  }

  console.log("Rednering...")



  return (
    < div className='App' >
      <h1>React Basics</h1>

      <h2>{msg}</h2>

      <p>You have clicked the button {clicks} times.</p>

      <button onClick={handelButtonClick} className='btn btn-success btn-lg'>click me!</button>

      <button onClick={() => { setMsg('Hi') }} className='btn btn-warning btn-lg'>Hi!</button>

      <hr />

      <h2>Posts</h2>

      <ul>
      {
					posts.map( (post, index) => (
						<li key={index}>
							{post.title} ({post.likes} likes)
						</li>
					))
				}
      </ul>
    </div >
  )
}

export default App
