import { useState } from 'react'
import './App.css'

function App() {

  const [car, setCar] = useState("Mercedes")
  const [color, setColor] = useState("red")

  return (
    <>
      <h1>Select ur car</h1>
      <label htmlFor="car">Car: </label>

      <select value={car} onChange={(e) => setCar(e.target.value)}>
        <option value={"Mercedes"}>
          Mercedes
        </option>
        <option value={"BMW"}>
          BMW
        </option>
        <option value={"Audi"}>
          Audi
        </option>
      </select>

      <br />
      <br />

      <label htmlFor="color">Color: </label>

      <select
        value={color}
        onChange={(e) => setColor(e.target.value)}
      >
        <option value="Black">Black</option>
        <option value="White">White</option>
        <option value="Red">Red</option>
      </select>

      <h3>
        You selected a {color} - {car}
      </h3>
    </>
  )
}

export default App
