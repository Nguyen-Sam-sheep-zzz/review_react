import { useState } from 'react'

function App() {

  const [firstNumber, setFirstNumber] = useState("")
  const [secondNumber, setSecondNumber] = useState("")
  const [result, setResult] = useState(0)

  const add = () => {
    setResult(Number(firstNumber) + Number(secondNumber))
  }

  const subtract = () => {
    setResult(Number(firstNumber) - Number(secondNumber))
  }

  const multiply = () => {
    setResult(Number(firstNumber) * Number(secondNumber))
  }

  const divide = () => {
    setResult(Number(firstNumber) / Number(secondNumber))
  }

  return (
    <div>

      <h1>Simple Calculator</h1>

      <input
        type="number"
        placeholder="First number"
        value={firstNumber}
        onChange={(e) => setFirstNumber(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Second number"
        value={secondNumber}
        onChange={(e) => setSecondNumber(e.target.value)}
      />

      <br /><br />

      <button onClick={add}>+</button>

      <button onClick={subtract}>-</button>

      <button onClick={multiply}>*</button>

      <button onClick={divide}>/</button>

      <h2>Result: {result}</h2>

    </div>
  )
}

export default App