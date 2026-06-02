import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Alert from './components/Alert'
import './App.css'

function App() {


  return (
    <>
      <div style={{ padding: '20px' }}>
        <Alert type="warning" text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." />

      </div>
    </>
  )
}

export default App
