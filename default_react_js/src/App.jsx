import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import StudentInfo from './components/StudentInfo'
import './App.css'

function App() {
 
  const users = [
    {
      id: 1,
      name: "Sam",
      age: 22,
      address: "Ha Noi"
    },

    {
      id: 2,
      name: "Khanh",
      age: 25,
      address: "Da Nang"
    },

    {
      id: 3,
      name: "ChiAnh",
      age: 20,
      address: "Ho Chi Minh"
    }
  ]

  return (
    <>
      <h1>Student Information</h1>
      <StudentInfo data={users} />
    </>
  )
}

export default App
