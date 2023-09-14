
import { useState } from 'react'
import './App.css'

type Post = {
  title: string,
  likes: number

}


function App() {
  const [msg, setMsg] = useState("Hi mom, I'm stateful")
  const [clicks, setClicks] = useState(0)
  const [posts, setPosts] = useState<Post[]>([
    { title: "React Rocks", likes: 1337 },
    { title: "Jsx Rocks Even More", likes: 42 },
    { title: "Got state?", likes: 3 },
  ])

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

      <button onClick={() => { setMsg("Hi dad!") }} className='btn btn-warning btn-lg'>Hi dad</button>

      <hr />

      <h2>Posts</h2>

      <ul>
        {
          posts.map( (post, index) => (
             <li key={index}>
              {post.title} ({post.likes}likes)
              </li>
          ))
        }
      </ul>

    </div>
  )

}


export default App
