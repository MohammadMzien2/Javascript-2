import { useState } from "react"

const Salary = () => {
    const [salary, setSaraly] = useState(10)

    const [showSaraly, setShowSalary] = useState(false)

    const handleChangeSalary = (amount: number) => {
        if (salary + amount < 5) {
            return setSaraly(5)
        }

        setSaraly(salary + amount)
    }

    return (
        <div>
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
        </div>

    )
}

export default Salary