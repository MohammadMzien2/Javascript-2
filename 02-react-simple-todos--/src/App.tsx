import { useState } from 'react'
import './assets/scss/App.scss'
import { Todo, TodoList } from './types'

function App() {
  const [todos, setTodos] = useState<TodoList>([
    { title: "Make Coffee", completed: true },
    { title: "Drink Coffee", completed: false },
    { title: "Drink More Coffee", completed: false },
    { title: "Drink all the Coffee", completed: false },
  ])


  return (
    <div className='container'>
      <h1>React simple todos</h1>

      <ul className="todolist">

        {todos.map((todo, index) => (

          <li className={todo.completed ? "done" : "" } key={index}>

            <span className="todo-title">{todo.title}</span>

            <span className="todo-delete" role='button'>🗑️</span>

            <span className="todo-toggle" role='button'>✅</span>

          </li>

        ))}
      </ul>

    </div>
  )
}

export default App
