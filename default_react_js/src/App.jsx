import { useState } from 'react'
import Data from './components/Data'
import './App.css'

function App() {

  const [show, setShow] = useState(false)
  
  return (
    <>
      <h1 style={{ backgroundColor: 'pink', color: 'white' }}>Conditional rendering </h1>
      <button onClick={() => setShow(!show)}>
        click to view data
      </button>
      {show && <Data />}
    </>
  )
}

export default App
