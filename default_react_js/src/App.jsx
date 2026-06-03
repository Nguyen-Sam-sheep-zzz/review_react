import { useState } from 'react'
import './App.css'
import Login from './assets/components/login'
import Home from './assets/components/home'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const loginSuccess = () => {
    setIsLoggedIn(true)
  }

  const logOut = () => {
    setIsLoggedIn(false)
  }

  return (
    <>
      {
        isLoggedIn ? <Home onLogOut={logOut}></Home> : <Login onLoginSuccess={loginSuccess}></Login>
      }
    </>
  )
}

export default App
