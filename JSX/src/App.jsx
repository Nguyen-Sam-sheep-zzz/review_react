import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Danh sách công việc của tôi</h1>
    <ul>
      <li>Học bài react</li>
      <li>Hoàn thành bài tập lập trình </li>
      <li>Dọn dẹp bàn làm việc </li>
    </ul>
    <p>
      Chúc các bạn hoàn thành công việc tốt nhất hôm nay!
    </p>
    </>
  )
}

export default App
