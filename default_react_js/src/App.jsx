import { useState } from 'react'
import './App.css'

function App() {

  const [task, setTask] = useState('')

  const [todos, setTodos] = useState([])

  const handleAdd = () => {

    if (task.trim() === '') {
      alert('Please enter a task')
      return
    }
    setTodos([...todos, task])
    setTask('')
  }


  return (
    <>
      <h1 className='text-center'>Welcome to the todo app</h1>
      <input type="text" placeholder='your todo' className='form-control w-25 mx-auto mb-3' value={task} onChange={(e) => setTask(e.target.value)} />
      <button className='btn btn-primary d-block mx-auto' onClick={(handleAdd)}>
        Add todo
      </button>

      <ul className='list-group w-25 mx-auto mt-3'>
        {todos.map((todo, index) => (
          <li key={index} className='list-group-item'>{todo}</li>
        ))}
      </ul>
    </>
  )
}

export default App
