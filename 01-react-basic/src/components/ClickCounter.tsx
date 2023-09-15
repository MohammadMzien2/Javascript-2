import { useState } from "react"

const ClickCounter = () => {
    const [clicks, setClicks] = useState(0)

    const handleButtonClick = () => {
        console.log("Clicks before first change:", clicks)

        setClicks(prevState => { return prevState + 1 }) // prevState = 0, return 1 

        console.log("Clicks after first change:", clicks)

        setClicks(prevState => prevState + 1) // prevState = 1, return 2

        console.log("Clicks after second change:", clicks)

    }


    return (
        <div>
            <h2>Click Counter</h2>
            <p>You have clicked the button {clicks} times.</p>

            <button onClick={handleButtonClick} className='btn btn-success btn-lg'>click me</button>
        </div>
    )
}

export default ClickCounter