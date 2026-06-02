import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddComponent from './components/AddComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="App">
      <AddComponent firstNumber={10} secondNumber={10} />
     </div>
    </>
  )
}

export default App
