import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [number, setNumber] = useState(0)

  const increase = () => {
    setNumber(number + 1)
  }

  const decrease = () => {
    setNumber(number - 1)
  }

  return (
    <>
     <div>
      <button onClick={decrease}>-</button>
      <span>{number}</span>
      <button onClick={increase}>+</button>
     </div>
    </>
  )
}

export default App
