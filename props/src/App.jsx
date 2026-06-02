import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import Welcome from './components/Welcome';

import AddComponent from './components/AddComponent';

import Hello from './components/HelloWorld';

function App() {
  const [number, setNumber] = useState(0)

  const increaseNumber = () => { setNumber(number + 1) }

  const decreaseNumber = () => { setNumber(number - 1) }

  const [color, setColor] = useState('red')

  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setColor(color === 'red' ? 'blue' : 'red')
    }, 3000)

    return () => clearTimeout(timer)
  }, []);

  return (
    <>
      <div className="App">
        <Welcome name="Nhan Sam" />

        <AddComponent firstNumber={5} secondNumber={10} />

        <div>
          <p>Number: {number}</p>
          <button onClick={increaseNumber}>Increase</button>
          <button onClick={decreaseNumber}>Decrease</button>
        </div>


        <div
          style={{
            backgroundColor: color,
            paddingTop: 20,
            width: 400,
            height: 80,
            margin: "auto"
          }}
        />

        <div>
          {show && <Hello />}
          <button onClick={() => setShow(false)}>Delete the component</button>
        </div>

      </div>
    </>
  )
}

export default App
