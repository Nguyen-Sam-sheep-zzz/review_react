import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Home from './components/Home'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleLogOut = () => {
    setIsLoggedIn(false)
  }

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        {isLoggedIn ? (
          <Home onLogOut={handleLogOut} />
        ) : (
          <div>
            <h1>Welcome to the Login Page</h1>
            <button onClick={handleLogin}>Login</button>
          </div>

        )}
      </div>
    </>
  )
}

export default App
