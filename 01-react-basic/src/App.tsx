
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

  const [salary, setSaraly] = useState(10)

  const [showSaraly, setShowSalary] = useState(false)

  const handleAddLike = (post: Post) => {
    console.log("Want to add like to post:", post)

    // add likes to post
    post.likes++
    console.log("Post like are now:", post.likes)

    setPosts([...posts]) //pickare på genväg 0x39
    // const newPosts = [...posts]  //pickare på genväg 0x48

  }

  const handleButtonClick = () => {
    console.log("Clicks before first change:", clicks)

    setClicks(prevState => { return prevState + 1 }) // prevState = 0, return 1 

    console.log("Clicks after first change:", clicks)

    setClicks(prevState => prevState + 1) // prevState = 1, return 2

    console.log("Clicks after second change:", clicks)

  }


  const handleChangeSalary = (amount: number) => {
    if (salary + amount < 5) {
      return setSaraly(5)
    }

    setSaraly(salary + amount)
  }


  console.log("Rendering...")




  return (
    <div className="App">
      <h1>React basic</h1>

      <h2>{msg}</h2>

      <p>You have clicked the button {clicks} times.</p>

      <button onClick={handleButtonClick} className='btn btn-success btn-lg'>click me</button>

      <button onClick={() => { setMsg(msg === "Hi dad!" ? "Hi mom!" : "Hi dad!") }} className='btn btn-warning btn-lg'>Hi dad</button>

      <hr />

      {/*<button className='btn btn-primary' onClick={() => setShowSalary  (true)}>show Salary</button>
      <button className='btn btn-primary'onClick={() => setShowSalary(false)}>Hide Salary</button>*/}

      <button className='btn btn-primary' onClick={() => setShowSalary(!showSaraly)}>
        {showSaraly ? "Hide salary" : "Show salary"}
      </button>


      {showSaraly && (

        <>

          <p>Saraly per hour: {salary} &euro;</p>

          {salary < 10 &&
            <div className='alert alert-warning'>You might want to change job</div>
          }

          <div className='buttons'>
            <div className='mb-1'>
              <button className='btn btn-primary btn-lg' onClick={() => { handleChangeSalary(1) }}>
                Raise 1 &euro;</button>

              <button className='btn btn-warning btn-lg' onClick={() => { handleChangeSalary(-1) }}>
                Decrease 1 &euro;</button>
            </div>

            <div className='mb-1'>
              <button className='btn btn-success btn-lg'
                onClick={() => { handleChangeSalary(5) }}>
                Raise 5 &euro;
              </button>
              <button className='btn btn-danger btn-lg'
                onClick={() => { handleChangeSalary(-5) }}>
                Decrease 5 &euro;

              </button>

            </div>
          </div>
        </>
      )
      }

      <hr />

      <h2>Posts</h2>

      <ul>
        {
          posts.map((post, index) => (
            <li key={index}>
              {post.title} ({post.likes}likes)
              <button className='btn btn-success btn-sm ms-2' onClick={() => handleAddLike(post)}>hjärta</button>
            </li>
          ))
        }
      </ul>

    </div>
  )

}


export default App
