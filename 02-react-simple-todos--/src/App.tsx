import { useEffect, useState } from 'react'
import './assets/scss/App.scss'
import { Todo, TodoList } from './types'

function App() {
  const [todos, setTodos] = useState<TodoList>([
    { title: "Make Coffee", completed: true },
    { title: "Drink Coffee", completed: false },
    { title: "Drink More Coffee", completed: false },
    { title: "Drink all the Coffee", completed: false },
  ])

  const [newTodoTitle, setNewTodoTitle] = useState<string>("")

  const handlesubmit = (e: React.FormEvent) => {
    // Stop form from submitting
    e.preventDefault()

    // create a new todo and set a new todo
    const newTodo: Todo = {
      title: newTodoTitle,
      completed: false,
    }

    setTodos([...todos, newTodo])
    console.log("Updating page title...")
    document.title = todos.length + "todos"

    // Clear newTodoTitle state
    setNewTodoTitle("")

  }

  const deleteTodo = (todoToDelete: Todo) => {
    //set a new list of todos where the clicked todo is excluded
    setTodos(todos.filter(todo => todo !== todoToDelete))
  }

  const toggleTodo = (todo: Todo) => {
    todo.completed = !todo.completed // man kan göra så istället för skriva if sats 
    setTodos([...todos])

    //if(todo.completed){
    // todo.completed = false
    //}else {
    // todo.completed = true
    //}
  }

  const unfinishedTodos = todos.filter(todo => !todo.completed)
  const finishedTodos = todos.filter(todo => todo.completed)

  //This will only be executed when the component is mounted
  // and only AFTER the componenet has been rendered
  useEffect(() => {
    console.log("Look mom, I'm a newly mounted component?")
  }, [])
  

  // This will only be executed if `finishedTodos.length` or `todos.lenght`
  //have changeed since last render, and only After the componenet has been rendered
  useEffect( () => {
    console.log("Updating page title...")
    document.title = `${finishedTodos.length} of ${todos.length} completed`
  }, [finishedTodos.length, todos.length])

  useEffect(() => {
    console.log("")
  })

  console.log("Rendering...")

  return (
    <div className='container'>
      <h1 className='mb-3'>React simple todos</h1>

      <form onSubmit={handlesubmit} className='mb-3'>

        <div className="input-group">

          <input type="text"
            className='form-control'
            placeholder='Todo title'
            onChange={e => setNewTodoTitle(e.target.value)}
            value={newTodoTitle} />

          <button type='submit' className='btn btn-success'>
            Create
          </button>
        </div>
      </form>

      {todos.length > 0 && (
        <>

          <ul className="todolist">

            {unfinishedTodos.map((todo, index) => (

              <li className={todo.completed ? "done" : ""} key={index}>

                <span className="todo-title">{todo.title}</span>

                <div className='ms-1'>

                  <span className="todo-delete" onClick={() => deleteTodo(todo)} role='button'>🗑️</span>

                  <span className="todo-toggle" onClick={() => toggleTodo(todo)} role='button'>{todo.completed ? '❎' : '✅'}</span>
                </div>
              </li>

            ))}
          </ul>

          <ul className="todolist">

            {finishedTodos.length > 0 && finishedTodos.map((todo, index) => (

              <li className={todo.completed ? "done" : ""} key={index}>

                <span className="todo-title">{todo.title}</span>

                <div className='ms-1'>

                  <span className="todo-delete" onClick={() => deleteTodo(todo)} role='button'>🗑️</span>

                  <span className="todo-toggle" onClick={() => toggleTodo(todo)} role='button'>{todo.completed ? '❎' : '✅'}</span>
                </div>
              </li>

            ))}
          </ul>

               //show completed vs total number of todos
          <p className="status">{finishedTodos.length} of {todos.length} todos completed</p>
        </>
      )}

      {todos.length === 0 && (
        <p>YYAYY, you have 0 todos to do</p>
      )}

    </div>
  )
}

export default App
